import { Box, Container, Grid } from '@mui/material';
import './App.css';

import MultipleSelect from './components/Filter';
import BasicCard from './components/BasicCard';
import { useGetSampleJdJSONQuery } from './redux/jobSlice';

function App() {
  const { data } = useGetSampleJdJSONQuery({ limit: 10, offset: 0 });

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
        {data?.jdList.map((job) => (
          <Grid item sm={12} md={6} lg={4} key={job.jdUid}>
            <BasicCard
              role={job.jobRole}
              location={job.location}
              details={job.jobDetailsFromCompany}
              link={job.jdLink}
              minSalary={job.minJdSalary}
              maxSalary={job.maxJdSalary}
              currency={job.salaryCurrencyCode}
              minExp={job.minExp}
              maxExp={job.maxExp}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
