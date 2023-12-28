export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("hu", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
