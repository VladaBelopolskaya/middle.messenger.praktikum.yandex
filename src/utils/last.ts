type TLast = <T>(list: T[]) => T | undefined;

const last: TLast = (list) => {
  // if (!Array.isArray(list)) {
  //   return undefined;
  // }

  const { length } = list;
  return length ? list[length - 1] : undefined;
};

export default last;
