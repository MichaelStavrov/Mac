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

export interface IProductStatus {
  productBuyStatus: string
  updateStatus: string
}

export function getCurrentlyStatus(status: ProductStatus): IProductStatus {
  if (status === "justUpdated") {
    return {
      productBuyStatus: "Buy Now",
      updateStatus: "Just Updated"
    }
  }
  if (status === "midCycle") {
    return {
      productBuyStatus: "Neutral",
      updateStatus: "Mid-product Cycle"
    }
  }
  if (status === "dontBuy") {
    return {
      productBuyStatus: "Don't Buy",
      updateStatus: "Updates Soon"
    }
  }
  if (status === "neutral") {
    return {
      productBuyStatus: "Neutral",
      updateStatus: ""
    }
  }
  return {
    productBuyStatus: "",
    updateStatus: ""
  }
}

