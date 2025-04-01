import caesarCipher from "../src/caesarCipher";

test("shifts letters correctly", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("wraps from z to a", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("preserves case", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("keeps punctuation and spaces unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
