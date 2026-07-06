export const formatDate = (date: string) => {
  const parsedDate = new Date(date);

  return {
    day: parsedDate.toLocaleDateString("en-US", {
      day: "2-digit",
    }),
    month: parsedDate
      .toLocaleDateString("en-US", {
        month: "short",
      })
      .toUpperCase(),
  };
};
