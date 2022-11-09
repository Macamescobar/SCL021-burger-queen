import { Routes, Route } from "react-router-dom"
import HomePage from "../sections/Homepage/Homepage"
import { ListOrder } from "../sections/ListOrders/ListOrder"



export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="kitchen" element={<ListOrder/>}/>
        </Routes> 
    </>
  )
}
