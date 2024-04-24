export function formatPrice(price: number, unit?: string) {
  let priceStr = price.toFixed(2);

  let decimalIndex = priceStr.indexOf(".");

  let integerPart = priceStr.substring(0, decimalIndex);
  let decimalPart = priceStr.substring(decimalIndex);

  let formattedIntegerPart = "";
  for (let i = integerPart.length - 1, count = 0; i >= 0; i--) {
    formattedIntegerPart = integerPart[i] + formattedIntegerPart;
    count++;
    if (count % 3 === 0 && i !== 0) {
      formattedIntegerPart = "," + formattedIntegerPart;
    }
  }

  let formattedPrice = formattedIntegerPart + decimalPart;

  const unitPrice = unit ?? "vnđ";

  return `${formattedPrice} ${unitPrice}`;
}
