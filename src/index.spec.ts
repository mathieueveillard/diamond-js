import { S, _, diamond } from ".";

it("should draw a diamond for n = 1", function () {
  expect(diamond(1)).toEqual([[S]]);
});

it("should draw a diamond for n = 3", function () {
  expect(diamond(3)).toEqual([
    [_, S, _],
    [S, S, S],
    [_, S, _],
  ]);
});

it("should draw a diamond for n = 5 (control)", function () {
  expect(diamond(5)).toEqual([
    [_, _, S, _, _],
    [_, S, S, S, _],
    [S, S, S, S, S],
    [_, S, S, S, _],
    [_, _, S, _, _],
  ]);
});
