import { useNavigate } from "react-router-dom"
export const OrderSummary = () => {
    const nav = useNavigate();
    return(<>
        <div>Order confirmed! </div>
        <button onClick={() => nav(-1)}>Go back</button>
        </>
        
    )
}