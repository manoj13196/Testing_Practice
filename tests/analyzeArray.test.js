import analyzeArray from "../src/analyzeArray";

test("analyzes an array correctly", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("handles a single-element array", () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1,
  });
});

test("handles an empty array", () => {
  expect(analyzeArray([])).toEqual({
    average: NaN,
    min: undefined,
    max: undefined,
    length: 0,
  });
});
