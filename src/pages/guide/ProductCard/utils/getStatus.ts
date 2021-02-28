import { ProductStatus } from "../../../../types/productStatus"


export function getStatus(days: number, max: number): ProductStatus {
  const percent = days / max;
  if (percent < .3) {
    return ProductStatus.justUpdated;
  }
  if (percent < .6) {
    return ProductStatus.midCycle;
  }
  return ProductStatus.dontBuy
}



export function getProductBuyStatus(status: ProductStatus): string {
  if (status === "Just Updated") {
    return "Buy Now";
  }
  if (status === "Mid-product Cycle" || status === "Neutral") {
    return "Neutral";
  }
  if (status === "Updates Soon") {
    return "Don't Buy";
  }
  return "";
}

