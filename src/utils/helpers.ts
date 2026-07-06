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
export function formatBlogDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
