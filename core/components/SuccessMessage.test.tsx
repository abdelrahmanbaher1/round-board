import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SuccessMessage from "./SuccessMessage";

describe("ErrorMessage", () => {
  it("renders the component with message", () => {
    render(<SuccessMessage message="This is a success message" />);

    expect(screen.getByText("This is a success message")).toBeInTheDocument();
  });

  it("renders the component with an icon", () => {
    const mockIcon = <span data-testid="mock-icon">!</span>;

    render(
      <SuccessMessage
        icon={mockIcon}
        message="This is a success message with an icon"
      />
    );

    expect(
      screen.getByText("This is a success message with an icon")
    ).toBeInTheDocument();

    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });
});
