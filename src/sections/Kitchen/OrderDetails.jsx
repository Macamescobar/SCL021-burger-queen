import { Link } from "react-router-dom"



export const OrderDetails = () => {
  return (
    <>
     <div className="order-section-container">
        <p className="title-order"> Order Details </p>
        <Link to="/"><button className="btn-back"> Back </button></Link>
     </div>
    </>
    
  )
}
