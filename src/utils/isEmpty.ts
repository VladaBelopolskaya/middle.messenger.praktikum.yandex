export const isEmpty = (value: any) => {
  if (!value) {
    return true;
  }

  if (Array.isArray(value) && value.length === 0) {
    return true;
  }

  if (typeof value === "boolean" || typeof value === "number") {
    return true;
  }

  if (!value.size && Object.keys(value).length === 0) {
    return true;
  }

  return false;
};

export default isEmpty;
