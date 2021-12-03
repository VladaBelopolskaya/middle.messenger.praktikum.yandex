type TBaseRange = (
  start: number,
  end: number,
  step: number,
  isRight: boolean
) => number[];

type TRange = (
  start: number,
  end?: number,
  step?: number,
  isRight?: boolean
) => number[];

type TRightRange = (start: number, end?: number, step?: number) => number[];

const baseRange: TBaseRange = (start, end, step, isRight) => {
  let index = -1;
  let length = Math.max(Math.ceil((end - start) / step), 0);
  const result = new Array(length);
  let currentItem = start;

  while (length--) {
    result[isRight ? length : ++index] = currentItem;
    currentItem += step;
  }

  return result;
};

export const range: TRange = (start, end, step, isRight = false) => {
  let newEnd = end;
  let newStart = start;
  if (newEnd === undefined) {
    newEnd = start;
    newStart = 0;
  }

  const newStep = step === undefined ? (newStart < newEnd ? 1 : -1) : step;
  return baseRange(newStart, newEnd, newStep, isRight);
};

export const rangeRight: TRightRange = (start, end, step) =>
  range(start, end, step, true);
