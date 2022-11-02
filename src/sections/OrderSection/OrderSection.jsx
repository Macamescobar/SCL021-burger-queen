import { Container } from "@mui/material";

export default function OrderSection() {
 
  return (
    <Container
      sx={{
        width: "40vw",
        bgcolor: "#FFFFFF",
        boxShadow: "1px 3px 1px #9E9E9E",
        borderRadius: 10,
        fontSize: "1rem",
        fontWeight: "700",
        height: "85vh",
      }}
    >
      {
        <div className="title-order">
          <h3>Your order summary</h3>
        </div>
      }
    </Container>
  );
}
