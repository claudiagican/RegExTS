import { checkTextVsRegEx } from "./Utils.tsx";

test('check word', () => {
  expect(checkTextVsRegEx("abcdAA", "[a-z]")).toBe(true);
});

test('check number', () => {
    expect(checkTextVsRegEx("1234", "[0-9]")).toBe(true);
});