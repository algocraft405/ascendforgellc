export function money(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function modelCount(count: number) {
  return `${count} model${count === 1 ? "" : "s"}`;
}
