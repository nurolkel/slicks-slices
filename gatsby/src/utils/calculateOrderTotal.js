import calculatePizzaPrice from "./calculatePizzaPrice"

export default function calculateOrderTotal(order, pizzas) {
    // loop over each item in the order
    // calc the total for that pizza
    // add that total to the running total
//     const total = order.reduce((runningTotal, singleOrder) => {
//         const pizza = pizzas.find(pizza => pizza.id === singleOrder.id)
//         return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
//     }, 0)
//     return total;
    return order.reduce((runningTotal, singleOrder) => {
        const pizza = pizzas.find(
        (singlePizza) => singlePizza.id === singleOrder.id
        );
        return runningTotal + calculatePizzaPrice(pizza.price, singleOrder.size);
    }, 0);
 }