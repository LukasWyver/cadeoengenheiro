export function formatPriceIntAndDecimal(value) {
  if (value === null || value === undefined) {
    return { priceInt: "0", priceDecimal: "00" };
  }

  const numeric = Number(String(value).replace(",", "."));

  if (isNaN(numeric)) {
    return { priceInt: "0", priceDecimal: "00" };
  }

  const formatted = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numeric);

  const parts = formatted.split(",");

  return {
    priceInt: parts[0],
    priceDecimal: parts[1] || "00",
  };
}
