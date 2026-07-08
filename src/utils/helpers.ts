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
const isDev = process.env.NODE_ENV === "development";

export const logger = {
  log: (...args: unknown[]) => {
    if (isDev) console.log(...args);
  },

  error: (...args: unknown[]) => {
    if (isDev) console.error(...args);
  },

  warn: (...args: unknown[]) => {
    if (isDev) console.warn(...args);
  },

  info: (...args: unknown[]) => {
    if (isDev) console.info(...args);
  },

  table: (data: unknown) => {
    if (isDev) console.table(data);
  },

  group: (label: string) => {
    if (isDev) console.group(label);
  },

  groupEnd: () => {
    if (isDev) console.groupEnd();
  },
};
