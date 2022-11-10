import { Box } from "@mui/system";
import { OrderDetails } from "./OrderDetails";

export const KitchenOrder = () => {
  return (
    <div className="container-home-page">
      <Box sx={{ display: "flex", padding: 1 }}>
        <div className="container-kitchen">
          <div className="title-kitchen">
            <p> List of orders </p>
          </div>
          <div className="table-orders">
            <p> Table n°</p>
            <p> Customer </p>
            <p> Grand total </p>
            <p> Status </p>
            <p> Delete </p>
          </div>
        </div>
        <OrderDetails></OrderDetails>
      </Box>
    </div>
  );
};
