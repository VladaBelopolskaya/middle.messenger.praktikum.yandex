type TLast = <T>(list: T[]) => T | undefined;

export const last: TLast = (list) => {
  // if (!Array.isArray(list)) {
  //   return undefined;
  // }

  const length = list.length;
  return length ? list[length - 1] : undefined;
};
