import { useState, useContext } from "react";
import OrderContext from "../components/OrderContext";
import attachNamesAndPrices from "./attachNamesAndPrices";
import calculateOrderTotal from "./calculateOrderTotal";
import formatMoney from "./formatMoney";

export default function usePizza({ pizzas, values }) {
    // Create some state to hold our order
    // Make a function to add things to order
    // make a function to remove things from order
    // send this data to a serverless function
    // Commented the useState because we are using context and a provider to pass down our state
    //const [order, setOrder] = useState([])
    const [order, setOrder] = useContext(OrderContext)
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    
    function addToOrder(orderPizza) {
        setOrder([...order, orderPizza]);
    }

    function removeFromOrder(index) {
        setOrder([
            // everything before the item we want to remove
            // everything after the item we want to delete
            ...order.slice(0,index),
            ...order.slice(index + 1),
        ])
    }

    // this is the function that is run when someone submits the form
    async function submitOrder(e) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);
        // gather all the data
        
        const body = {
            order: attachNamesAndPrices(order,pizzas),
            total: formatMoney(calculateOrderTotal(order,pizzas)),
            name: values.name,
            email: values.email,
            mapleSyrup: values.mapleSyrup,
        }
        // send this data to the severless functions
        const res = await fetch(`${process.env.GATSBY_SEVERLESS_BASE}/placeOrder`, {
            method: "POST",
            header: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body),
        });
        const text = JSON.parse(await res.text());

        // check if everthing worked

        if(res.status >= 400 && res.status < 600) {
            setLoading(false); //turn off loading
            setError(text.message);
        } else {
            setLoading(false);
            setMessage('Success! Come on down for your pizza')
        }
    }

   

    return {
        order,
        addToOrder,
        removeFromOrder,
        error,
        loading,
        message,
        submitOrder
    }

}