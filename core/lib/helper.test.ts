import { handleInputChange, isEmptyString, genRanHex } from "@/core/lib/helper"; // Adjust import path

describe("handleInputChange", () => {
  it("updates state with input value", () => {
    const setState = jest.fn();
    const event = {
      target: { value: "new value" },
    } as React.ChangeEvent<HTMLInputElement>;
    handleInputChange(event, setState);
    expect(setState).toHaveBeenCalledWith("new value");
  });
});

describe("isEmptyString", () => {
  it("returns true for empty strings", () => {
    expect(isEmptyString("")).toBe(true);
  });

  it("returns false for non-empty strings", () => {
    expect(isEmptyString("test")).toBe(false);
  });
});

describe("genRanHex", () => {
  it("generates a random hexadecimal string of the specified size", () => {
    const size = 8;
    const hexString = genRanHex(size);
    expect(hexString).toHaveLength(size);
    expect(/^[0-9a-f]+$/.test(hexString)).toBe(true);
  });
});
