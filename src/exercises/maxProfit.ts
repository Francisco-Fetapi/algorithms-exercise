// Problem URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock

export function maxProfit(prices: number[]): number {
  let profit = 0; //price for sell - price for buy
  let priceForBuy = 0;
  let priceForSell = 0;

  for (let i = 0; i < prices.length; i++) {
    priceForBuy = prices[i];

    for (let j = i + 1; j < prices.length; j++) {
      priceForSell = prices[j];
      let newPossibleProfit = priceForSell - priceForBuy;

      if (newPossibleProfit < 0) {
        break;
      }

      if (newPossibleProfit > profit) {
        profit = newPossibleProfit;
      }
    }
  }

  return profit;
}
