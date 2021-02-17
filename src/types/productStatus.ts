

export enum ProductStatus {
  justUpdated = "justUpdated",
  midCycle = "midCycle",
  dontBuy = "dontBuy",
  neutral = "neutral"
}

export const ProductColorStatus: { [key in ProductStatus]: string } = {
  [ProductStatus.dontBuy]: '#aa0d23',
  [ProductStatus.midCycle]: '#ffc125',
  [ProductStatus.justUpdated]: '#66bc00',
  [ProductStatus.neutral]: '#426694',
}