export const S = "*";

type Star = typeof S;

export const _ = " ";

type Space = typeof _;

type Row = (Star | Space)[];

type Diamond = Row[];

export function diamond(dimension: number): Diamond {
  return makeArrayOfIndexes(dimension).map(makeRow(dimension));
}

function makeRow(dimension: number) {
  return function (line: number): Row {
    const equivalentLine = computeEquivalentTopHalfLine(dimension)(line);
    return makeTopHalfRow(dimension)(equivalentLine);
  };
}

function makeTopHalfRow(dimension: number) {
  return function (line: number): Row {
    return makeArrayOfIndexes(dimension).map((column) => {
      if (column < (dimension - 1) / 2 - line) {
        return _;
      }
      if (column > (dimension - 1) / 2 + line) {
        return _;
      }
      return S;
    });
  };
}

function makeArrayOfIndexes(dimension: number): number[] {
  return [...Array(dimension)].map((_, index) => index);
}

function computeEquivalentTopHalfLine(dimension: number) {
  return function (line: number): number {
    if (line <= (dimension - 1) / 2) {
      return line;
    }
    return dimension - 1 - line;
  };
}
