
import { Container, Typography } from '@mui/material';
import Order from './components/Order/index.jsx';

function App() {
  return (
    <Container maxWidth="md">
      <Typography
      // margen inferior
      gutterBottom
      variant="h2"
      align="center">
        Bon appétit Restaurant
      </Typography>
      < Order />
    </Container>
  );
}

export default App;
