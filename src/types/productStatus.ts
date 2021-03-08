

export enum ProductStatus {
  buyNow = "Just Updated",
  midCycle = "Mid-product Cycle",
  dontBuy = "Updates Soon",
  neutral = "Neutral"
}

export const ProductColorStatus: { [key in ProductStatus]: string } = {
  [ProductStatus.dontBuy]: '#aa0d23',
  [ProductStatus.midCycle]: '#ffc125',
  [ProductStatus.buyNow]: '#66bc00',
  [ProductStatus.neutral]: '#426694',
}