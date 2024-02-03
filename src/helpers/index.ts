const isNumeric = (value: unknown): boolean => {
  return !isNaN(Number(value));
};

export { isNumeric };
