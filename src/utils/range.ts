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

  while (length--) {
    result[isRight ? length : ++index] = start;
    start += step;
  }

  return result;
};

const range: TRange = (start = 0, end, step, isRight = false) => {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  step = step === undefined ? (start < end ? 1 : -1) : step;
  return baseRange(start, end, step, isRight);
};

const rangeRight: TRightRange = (start, end, step) => {
  return range(start, end, step, true);
};
