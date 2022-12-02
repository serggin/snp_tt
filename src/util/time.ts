function getTime(): string {
  const now = new Date();
  return now.toTimeString().substring(0, 8);
}

export { getTime };
