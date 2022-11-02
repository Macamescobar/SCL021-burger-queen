import Box from "@mui/material/Box";
import CategorySection from "../CategorySection/CategorySection";

export default function HomePage() {
  return (
    <div
      style={{
        width: "90vw",
        height: "80vh",
        margin: 30,
      }}
    >
      <Box sx={{ display: "flex", padding: 1 }}>
        <CategorySection></CategorySection>
      </Box>
    </div>
  );
}
