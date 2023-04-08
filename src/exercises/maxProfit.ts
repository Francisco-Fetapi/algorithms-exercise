// Problem URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock

export function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let price = {
    buy: 0,
    sell: 1,
  };

  while (price.sell < prices.length) {
    let priceToBuy = prices[price.buy];
    let priceToSell = prices[price.sell];
    let profit = priceToSell - priceToBuy;

    maxProfit = Math.max(profit, maxProfit);

    if (profit < 0) {
      price.buy = price.sell;
    }
    price.sell++;
  }

  return maxProfit;
}
