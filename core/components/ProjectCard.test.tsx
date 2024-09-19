import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

const mockProject = {
  name: "Sample Project",
  color: "#ff5733",
};

describe("ProjectCard", () => {
  it("renders project initials correctly", () => {
    render(<ProjectCard project={mockProject} />);
    const initials = screen.getByText("SP");
    expect(initials).toBeInTheDocument();
  });

  it("renders project name correctly", () => {
    render(<ProjectCard project={mockProject} />);
    const name = screen.getByText("Sample Project");
    expect(name).toBeInTheDocument();
  });

  it("applies selected class when selected is true", () => {
    render(<ProjectCard project={mockProject} selected={true} />);
    const card = screen.getByText("Sample Project").closest("div");
    expect(card).toHaveClass("bg-gray-300");
  });

  it("does not apply selected class when selected is false", () => {
    render(<ProjectCard project={mockProject} selected={false} />);
    const card = screen.getByText("Sample Project").closest("div");
    expect(card).toHaveClass("bg-white");
  });

  it("does not apply selected class when selected is not provided", () => {
    render(<ProjectCard project={mockProject} />);
    const card = screen.getByText("Sample Project").closest("div");
    expect(card).toHaveClass("bg-white");
  });
});
