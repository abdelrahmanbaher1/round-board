/**
 * Removes special characters from text
 * @param  {string} text - Text to be sanitized
 * @returns {string} - Sanitized text
 */
export const sanitizeText = (text: string): string =>
  text
    .replace(/</g, "")
    .replace(/>/g, "")
    .replace(/%/g, "")
    .replace(/=/g, "")
    .replace(/"/g, "");

export const handleInputChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  updaterFun: React.Dispatch<React.SetStateAction<string>>
) => {
  updaterFun(event.target.value);
};

export const isEmptyString = (str: string) => {
  return str.length === 0;
};

export const genRanHex = (size: number) =>
  [...Array(size)]
    .map(() => Math.floor(Math.random() * 16).toString(16))
    .join("");

export function checkForErrorType<T extends object>(
  property: string,
  obj: T
): boolean {
  return property in obj;
}
