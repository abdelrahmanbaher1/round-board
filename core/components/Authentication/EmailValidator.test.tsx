import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import EmailValidator from "./EmailValidator";
import { useRouter } from "next/navigation";
import { getApiInstance } from "@/core/server/api";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const queryClient = new QueryClient();

describe("EmailValidator", () => {
  const mockPush = jest.fn();
  const mockFetchUserByEmail = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
    (getApiInstance().user.fetchUserByEmail as jest.Mock) =
      mockFetchUserByEmail;
  });

  const renderWithProviders = (ui: React.ReactElement) => {
    return render(
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    );
  };

  it("renders the component correctly", () => {
    renderWithProviders(<EmailValidator />);

    expect(
      screen.getByPlaceholderText("Enter your email address")
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Next/i })).toBeInTheDocument();
  });

  it("disables the submit button when email is empty", () => {
    renderWithProviders(<EmailValidator />);

    expect(screen.getByRole("button", { name: /Next/i })).toBeDisabled();
  });

  it("enables the submit button when email is provided", () => {
    renderWithProviders(<EmailValidator />);

    fireEvent.change(screen.getByPlaceholderText("Enter your email address"), {
      target: { value: "test@example.com" },
    });

    expect(screen.getByRole("button", { name: /Next/i })).not.toBeDisabled();
  });

  it("handles form submission correctly when email exists", async () => {
    mockFetchUserByEmail.mockResolvedValue({ userExists: true });

    renderWithProviders(<EmailValidator />);

    fireEvent.change(screen.getByPlaceholderText("Enter your email address"), {
      target: { value: "test@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Next/i }));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/login");
    });
  });

  it("handles form submission correctly when email does not exist", async () => {
    mockFetchUserByEmail.mockResolvedValue({ userExists: false });

    renderWithProviders(<EmailValidator />);

    fireEvent.change(screen.getByPlaceholderText("Enter your email address"), {
      target: { value: "newuser@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Next/i }));

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith("/signup/user");
    });
  });

  it("displays an error message if the email check fails", async () => {
    mockFetchUserByEmail.mockRejectedValue(new Error("Network error"));
    renderWithProviders(<EmailValidator />);

    fireEvent.change(screen.getByPlaceholderText("Enter your email address"), {
      target: { value: "test@example.com" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Next/i }));

    await waitFor(() => {
      expect(
        screen.getByText("Error: An error occurred while checking the email.")
      ).toBeInTheDocument();
    });
  });
});
