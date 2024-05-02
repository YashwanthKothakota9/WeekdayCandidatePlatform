import { Box, Container, Grid } from '@mui/material';
import './App.css';

import MultipleSelect from './components/Filter';
import BasicCard from './components/BasicCard';

function App() {
  return (
    <Container sx={{ p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0.5,
          flexWrap: 'wrap',
        }}
      >
        <MultipleSelect />
        <MultipleSelect />
        <MultipleSelect />
        <MultipleSelect />
      </Box>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item sm={12} md={6} lg={4}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <BasicCard />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <BasicCard />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
