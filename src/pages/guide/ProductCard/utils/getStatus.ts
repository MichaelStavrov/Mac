import { ProductStatus } from "../../../../types/productStatus"


export function getStatus(days: number, max: number): ProductStatus {
  const percent = days / max;
  if (percent < .3) {
    return ProductStatus.buyNow;
  }
  if (percent < .6) {
    return ProductStatus.midCycle;
  }
  return ProductStatus.dontBuy
}

type ProductBuyStatuses = "Buy Now" | "Neutral" | "Don't Buy";

export function getProductBuyStatus(status: ProductStatus): ProductBuyStatuses {
  if (status === "Just Updated") {
    return "Buy Now";
  }
  if (status === "Mid-product Cycle" || status === "Neutral") {
    return "Neutral";
  }
  return "Don't Buy";
}

