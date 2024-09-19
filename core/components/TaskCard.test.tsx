import { render, screen, fireEvent } from "@testing-library/react";
import { useDrag } from "react-dnd";
import TaskCard from "./TaskCard";
import { TTask } from "@/tmpData";

jest.mock("react-dnd", () => ({
  useDrag: jest.fn(() => [{ isDragging: false }, jest.fn()]),
}));

describe("TaskCard", () => {
  const mockTask: TTask = {
    id: "task1",
    title: "Sample Task",
    priority: "HIGH",
    module: {
      name: "Module 1",
      color: "#ff0000",
    },
    assignee: {
      id: "user1",
      fullName: "John Doe",
      role: "ADMIN",
      thumbPicture: {
        id: "temp",
        link: "http://example.com/avatar.jpg",
      },
    },
    type: "MACRO",
  };

  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders task data correctly", () => {
    render(<TaskCard task={mockTask} onClick={mockOnClick} />);

    expect(screen.getByText("Sample Task")).toBeInTheDocument();

    expect(screen.getByText("Module 1")).toBeInTheDocument();
    expect(screen.getByText("Module 1")).toHaveStyle({
      backgroundColor: "#ff0000",
    });
  });

  it("handles dragging state", () => {
    (useDrag as jest.Mock).mockReturnValue([{ isDragging: true }, jest.fn()]);

    render(<TaskCard task={mockTask} onClick={mockOnClick} />);
  });

  it("calls onClick handler when clicked", () => {
    render(<TaskCard task={mockTask} onClick={mockOnClick} />);

    fireEvent.click(screen.getByText("Sample Task"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
