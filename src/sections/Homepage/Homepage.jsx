import Box from "@mui/material/Box";
import CategorySection from "../CategorySection/CategorySection";

export default function HomePage() {
  return (
    <div className="container-home-page">
       <Box sx={{ display: "flex", padding: 1 }}>
        <CategorySection></CategorySection>
      </Box>
    </div>
  );
}
