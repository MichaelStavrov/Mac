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

export function getTitleStatus(status: ProductStatus): string {
  if (status === "justUpdated") {
    return  "Buy Now"
  }
  if (status === "midCycle") {
    return "Neutral"
  }
  if (status === "dontBuy") {
    return "Don't Buy"
  }
  if (status === "neutral") {
    return "Neutral"
  }
  return "";
}

export function getStatusCell(status: ProductStatus): string {
  if (status === "justUpdated") {
    return  "Just Updated"
  }
  if (status === "midCycle") {
    return "Mid-product Cycle"
  }
  if (status === "dontBuy") {
    return "Updates Soon"
  }
  return ""
}