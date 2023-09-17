export function formatDate(date) {
  return new Date(date).toLocaleDateString("hu", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
