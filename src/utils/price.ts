export function formatPrice(price: number, unit?: string) {
  return price.toLocaleString("vi", {
    style: "currency",
    currency: unit ?? "VND",
  });
}
