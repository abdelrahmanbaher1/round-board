import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Badge from "./Badge";

describe("Badge", () => {
  it("renders TO_DO status correctly", () => {
    render(<Badge text="Task 1" status="TO_DO" />);
    const badge = screen.getByText("Task 1");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-blue-200 text-blue-300");
  });

  it("renders IN_PROGRESS status correctly", () => {
    render(<Badge text="Task 2" status="IN_PROGRESS" />);
    const badge = screen.getByText("Task 2");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-amber-200 text-amber-300");
  });

  it("renders READY_FOR_REVIEW status correctly", () => {
    render(<Badge text="Task 3" status="READY_FOR_REVIEW" />);
    const badge = screen.getByText("Task 3");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-fuchsia-200 text-fuchsia-500");
  });

  it("renders ERROR status correctly", () => {
    render(<Badge text="Task 4" status="ERROR" />);
    const badge = screen.getByText("Task 4");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-rose-200 text-rose-500");
  });

  it("renders CLOSED status correctly", () => {
    render(<Badge text="Task 5" status="CLOSED" />);
    const badge = screen.getByText("Task 5");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-green-200 text-emerald-400");
  });

  it("does not render for unknown status", () => {
    const { container } = render(<Badge text="Task 6" status="UNKNOWN" />);
    expect(container.firstChild).toBeNull();
  });
});
