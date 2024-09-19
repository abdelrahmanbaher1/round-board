import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ErrorMessage from "@/core/components/ErrorMessage";

describe("ErrorMessage", () => {
  it("renders the component with message", () => {
    render(<ErrorMessage message="This is an error message" />);

    expect(screen.getByText("This is an error message")).toBeInTheDocument();
  });

  it("renders the component with an icon", () => {
    const mockIcon = <span data-testid="mock-icon">!</span>;

    render(
      <ErrorMessage
        icon={mockIcon}
        message="This is an error message with an icon"
      />
    );

    expect(
      screen.getByText("This is an error message with an icon")
    ).toBeInTheDocument();

    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });
});
