import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Objectives from "./Objectives";
import { useInfiniteQuery } from "@tanstack/react-query";

jest.mock("@tanstack/react-query", () => ({
  useInfiniteQuery: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(() => "/tmp/organizationId/projectId"),
}));

describe("Objectives Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders ObjectivesList when objectives are fetched successfully", async () => {
    (useInfiniteQuery as jest.Mock).mockReturnValue({
      data: {
        pages: [
          [
            {
              id: "1",
              fullName: "Objective 1",
              checkMarks: [],
              title: "Test Objective 1",
            },
            {
              id: "2",
              fullName: "Objective 2",
              checkMarks: [],
              title: "Test Objective 2",
            },
          ],
        ],
      },
      isLoading: false,
      isFetched: true,
    });

    render(<Objectives />);

    expect(screen.getByText("ObjectivesList")).toBeInTheDocument();
    expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
  });

  it("shows loading spinner when data is being fetched", () => {
    (useInfiniteQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
      isFetched: false,
    });

    render(<Objectives />);

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders no content when there are no objectives", () => {
    (useInfiniteQuery as jest.Mock).mockReturnValue({
      data: {
        pages: [[]],
      },
      isLoading: false,
      isFetched: true,
    });

    const { container } = render(<Objectives />);

    expect(container.firstChild).toBeNull();
  });

  it("loads more objectives when in view", async () => {
    const mockReset = jest.fn();

    jest.mock("@/core/hooks/useInViewPort", () => ({
      __esModule: true,
      default: jest.fn(() => ({
        isInView: true,
        reset: mockReset,
      })),
    }));

    (useInfiniteQuery as jest.Mock).mockReturnValue({
      data: {
        pages: [
          [
            {
              id: "1",
              fullName: "Objective 1",
              checkMarks: [],
              title: "Test Objective 1",
            },
            {
              id: "1",
              fullName: "Objective 1",
              checkMarks: [],
              title: "Test Objective 1",
            },
          ],
        ],
      },
      isLoading: false,
      isFetched: true,
    });

    render(<Objectives />);

    await waitFor(() => {
      expect(mockReset).toHaveBeenCalled();
    });
  });
});
