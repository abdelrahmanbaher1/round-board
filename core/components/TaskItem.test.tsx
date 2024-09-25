import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TaskItem from "./TaskItem";
import { TTicket } from "../server/definations";

jest.mock("./TaskPriority", () => () => <div data-testid="task-priority" />);
jest.mock("./TaskType", () => ({ type }: { type: "MACRO" | "TASK" }) => (
  <div data-testid="task-type">{type}</div>
));

const mockTask: TTicket = {
  id: "task1234",
  title: "Sample Task Title",
  priority: "HIGH",
  description: "This is a task description",
  status: "OPEN",
  projectId: "project123",
  userId: "user123",
};

describe("TaskItem Component", () => {
  test("renders TaskItem with correct ID, title, priority, and type", () => {
    render(<TaskItem taskItem={mockTask} />);

    expect(screen.getByTestId("task-priority")).toBeInTheDocument();

    const taskType = screen.getByTestId("task-type");
    expect(taskType).toBeInTheDocument();
    expect(["MACRO", "TASK"]).toContain(taskType.textContent);

    expect(screen.getByText(mockTask.id.slice(0, 4))).toBeInTheDocument();

    expect(screen.getByText(mockTask.title)).toBeInTheDocument();
  });

  test("renders truncated task title when it's too long", () => {
    const longTitle = "This is a very long task title that will be truncated";
    const longTask = { ...mockTask, title: longTitle };

    render(<TaskItem taskItem={longTask} />);

    const taskTitle = screen.getByText(longTitle);
    expect(taskTitle).toBeInTheDocument();
    expect(taskTitle).toHaveClass("text-ellipsis");
    expect(taskTitle).toHaveClass("whitespace-nowrap");
  });
});
