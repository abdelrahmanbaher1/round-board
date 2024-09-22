import { REACT_QUERY_KEYS } from "@/core/lib/constants";
import { getApiInstance } from "@/core/server/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import React, { useRef, useState, useEffect } from "react";
import DashBoardSkelton from "../Loaders/DashBoardSkelton";
import { TTicket } from "@/core/server/definations";
import ObjectivesList from "../ObjectivesList";
import useIsInViewport from "@/core/hooks/useInViewPort";
import SpinnerLoader from "../Loaders/SpinnerLoader";

export type TCheckMark = {
  title: string;
  isChecked: boolean;
};

export type TObjective = TTicket & {
  projectId: string;
  userId: string;
  fullName: string;
  checkMarks: TCheckMark[];
};

const Objectives = () => {
  const pathname = usePathname();
  const [tmp, organizationId, projectId] = pathname.split("/");
  const userId = document.cookie.split(";")[1].split("=")[1];
  const ref = useRef<HTMLDivElement>(null);
  const { isInView, reset } = useIsInViewport({ ref });
  const [currPage, setCurrPage] = useState(1);
  const [objectives, setObjectives] = useState<TObjective[]>([]);

  useEffect(() => {
    if (isInView) {
      setCurrPage((prev) => prev + 1);
      reset();
    }
  }, [isInView]);

  const { data, isLoading, isFetched } = useInfiniteQuery({
    queryKey: [REACT_QUERY_KEYS.GET_TICKETS, currPage],
    queryFn: () =>
      getApiInstance().ticket.getTicketsForProject(projectId, userId, currPage),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  useEffect(() => {
    if (isFetched && data) {
      const newObjectives = data.pages.flatMap((page) => page as TObjective[]);
      setObjectives((prev) => [...prev, ...newObjectives]);
    }
  }, [data, isFetched]);

  if (objectives.length === 0) return null;

  return (
    <div>
      <ObjectivesList ref={ref} objectives={objectives} currPage={currPage} />
      <div className="flex justify-center mt-3 mb-3">
        <SpinnerLoader isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Objectives;
