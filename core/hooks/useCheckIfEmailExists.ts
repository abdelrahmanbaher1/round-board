"use client";

import { REACT_QUERY_KEYS } from "@/core/lib/constants";
import { getApiInstance } from "@/core/server/api";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

const useCheckIfEmailExists = (email: string) => {
  const [isEmailExists, setIsEmailExists] = useState<boolean>(false);

  const { mutate, isPending } = useMutation({
    mutationKey: [REACT_QUERY_KEYS.GET_USER_BY_EMAIL, email],
    mutationFn: () => getApiInstance().user.fetchUserByEmail(email),
    onSuccess: (data) => {
      if (data.userExists) setIsEmailExists(true);
      else setIsEmailExists(false);
    },
  });

  return { isEmailExists, isPending, mutate };
};

export default useCheckIfEmailExists;
