const isNumber = (value: unknown): boolean => {
  return !isNaN(Number(value));
};

export { isNumber };
