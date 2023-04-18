//    STOCK PRICES

/*
    INSTRUCTIONS: 
    This challenge, you’ll write a function, called best, that returns the maximum profit possible for buying-and-selling a stock.
    
    The best function will be given an array of stock prices in the order they happened throughout the day.
    
    It should return the maximum possible profit on the stock for that day.
    
    For example, with the following prices, our best option would have been to buy the stock at $10 and sell it at $22. So the profit would be $12:
    
    best([15, 10, 20, 22, 1, 9])
    12

    -- Here are some more examples with positive profit:

    best([1, 2, 3, 4, 5])
    // 4 - buy at $1, sell at $5   
    
    best([2, 3, 10, 6, 4, 8, 1])
    // 8 - buy at $2, sell at $10
    
    best([7, 9, 5, 6, 3, 2])
    // 2 - buy at $7, sell at $9
    
    best([0, 100])
    // 100 - buy at $0, sell at $100
    
    -- If no profit is possible, return $0:
    
    best([5, 4 , 3, 2, 1])
    // 0
    
    best([100])
    // 0
    
    best([100, 0])
    // 0
 */

function best(stockPrices){
    let maxProfit = 0, sell = 1, bestSell;
    let minBuy = stockPrices[0];
    //Verify if stockPrices array contains more than one element/value
    if (stockPrices.length===2 && stockPrices[1]<stockPrices[0]){
        return `Maximum Profit: $${maxProfit}. Sorry, no profit to be made within those 2 days`;
    } else if (stockPrices.length > 1){
        for (sell; sell < stockPrices.length; sell++){ 
            // The day we should buy at chipest price
            minBuy = Math.min(minBuy, stockPrices[sell -1]);
            // Find best price to sell
            maxProfit = Math.max(stockPrices[sell] - minBuy, maxProfit);
            bestSell = Math.max(minBuy, ...stockPrices)
        }
        return (`Maximum Profit: $${maxProfit}, if buy at $${stockPrices[minBuy]} and sell at $${bestSell}`);
    } // If stockPrices length is less than 2, result of maxProfit is $0 
    else {
        return `Maximum Profit: $${maxProfit}`;
    }
  
}


// function best(stockPrices){
    //     let buy, sell, sum; 
    //     let maxProfit=[] ;
//     for (buy= 0; buy < stockPrices.length-1; buy++ ){         
//         for (sell = buy+1; sell<stockPrices.length; sell++){
//             sum = (stockPrices[sell]-stockPrices[buy]); 
//             maxProfit.push(sum);
//             console.log(stockPrices[sell], stockPrices[buy], '---'+buy);
//             console.log(sum, '---sum');
//         } 
//     }
//     return maxProfit;   
// } 

console.log(best([15, 10, 20, 22, 1, 9]) );  
//Expected result: $12 - buy at $10, sell at $22

console.log(best([2, 3, 10, 6, 4, 8, 1]));
// Expected result: $8 - buy at $2, sell at $10

console.log(best([7, 9, 5, 6, 3, 2]));
// Expected result: $2 - buy at $7, sell at $9

console.log(best([0, 100])) ;
// Expected result: $100 - buy at $0, sell at $100

console.log(best([100, 0]))
// Expected result: $0    

console.log(best([100]));
// Expected result: $0    

console.log(best([5, 4 , 3, 2, 1]));
// Expected result: $0
