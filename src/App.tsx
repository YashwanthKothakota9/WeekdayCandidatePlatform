import { Box, CircularProgress, Container, Grid } from '@mui/material';
import './App.css';

import MultipleSelect from './components/Filter';
import BasicCard from './components/BasicCard';
import { appendJobs, useGetSampleJdJSONQuery } from './redux/jobSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store/store';

function App() {
  const [offset, setOffset] = useState(0);
  const { data, refetch, isFetching, isLoading, error } =
    useGetSampleJdJSONQuery({
      limit: 10,
      offset: offset,
    });

  const dispatch = useDispatch();
  const jobs = useSelector((state: RootState) => state.jobSlice.jdList);

  useEffect(() => {
    const onScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        window.document.body.offsetHeight - 30
      ) {
        if (!isFetching) {
          setOffset((prevOffset) => prevOffset + 10);
        }
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [isFetching]);

  useEffect(() => {
    if (offset > 0) {
      refetch();
    }
  }, [offset, refetch]);

  useEffect(() => {
    if (data && data.jdList.length > 0) {
      dispatch(appendJobs(data.jdList));
    }
  }, [data, dispatch]);

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
        {isLoading && (
          <Grid item xs={12}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </Box>
          </Grid>
        )}
        {error && (
          <Grid item xs={12}>
            <Box sx={{ color: 'error.main', textAlign: 'center' }}>
              {error.message}
            </Box>
          </Grid>
        )}
        {jobs?.map((job) => (
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
