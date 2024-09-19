import { render, screen } from "@testing-library/react";
import MemberInfo from "./MemberInfo";

jest.mock("next/image", () => (props: any) => <img {...props} />);

describe("MemberInfo", () => {
  const mockMember: {
    name: string;
    email: string;
    status: string;
    isOwner: boolean;
  } = {
    name: "Abdelrahman",
    email: "abdelrahmabn@example.com",
    status: "ACTIVE",
    isOwner: true,
  };

  it("renders member info correctly", () => {
    render(<MemberInfo member={mockMember} />);

    expect(screen.getByText("Abdelrahman")).toBeInTheDocument();
    expect(screen.getByText("abdelrahmabn@example.com")).toBeInTheDocument();
    expect(screen.getByText("Active")).toBeInTheDocument();
    expect(screen.getByText("OWNER")).toBeInTheDocument();
  });

  it("does not render owner badge if isOwner is false", () => {
    const memberWithoutOwnerBadge = { ...mockMember, isOwner: false };
    render(<MemberInfo member={memberWithoutOwnerBadge} />);

    expect(screen.queryByText("OWNER")).not.toBeInTheDocument();
  });

  it("renders status as inactive correctly", () => {
    const memberWithInactiveStatus = {
      ...mockMember,
      status: "IN_ACTIVE",
    };
    render(<MemberInfo member={memberWithInactiveStatus} />);

    expect(screen.getByText("Inactive")).toBeInTheDocument();
  });

  it("renders avatar and owner badge images", () => {
    render(<MemberInfo member={mockMember} />);
  });
});
