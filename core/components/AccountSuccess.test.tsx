import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AccountSuccess from "@/core/components/AccountSuccess";

describe("AccountSuccess", () => {
  it("renders the component and its elements", () => {
    render(<AccountSuccess />);

    expect(screen.getByText("You account is ready !")).toBeInTheDocument();
    expect(
      screen.getByText("Please verify your email and continue to Roundrush")
    ).toBeInTheDocument();
    expect(screen.getByText("Go To Login Page")).toBeInTheDocument();

    const link = screen.getByText("Go To Login Page");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/login");
  });
});
