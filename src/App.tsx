import { Box, CircularProgress, Container, Grid } from '@mui/material';
import './App.css';

import MultipleSelect from './components/Filter';
import BasicCard from './components/BasicCard';
import { appendJobs, useGetSampleJdJSONQuery } from './redux/jobSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store/store';
import LocationMultipleSelect from './components/LocationFilter';
import SalaryMultipleSelect from './components/SalaryFilter';
import ExperienceMultipleSelect from './components/ExperienceFilter';

function App() {
  const [offset, setOffset] = useState(0);
  const [filterRoles, setFilterRoles] = useState<string[]>([]);
  const [filterLocations, setFilterLocations] = useState<string[]>([]);
  const [filterExperiences, setFilterExperiences] = useState<string[]>([]);
  const [filterSalaries, setFilterSalaries] = useState<string[]>([]);
  const { data, refetch, isFetching, isLoading, error } =
    useGetSampleJdJSONQuery({
      limit: 10,
      offset: offset,
    });

  const dispatch = useDispatch();
  const jobs = useSelector((state: RootState) => state.jobSlice.jdList);

  const applyFilterRoles = (roles: string[]) => {
    setFilterRoles([...roles]);
  };
  const applyFilterLocations = (locations: string[]) => {
    setFilterLocations([...locations]);
  };
  const applyFilterExperiences = (experiences: string[]) => {
    setFilterExperiences([...experiences]);
  };
  const applyFilterSalaries = (salaries: string[]) => {
    setFilterSalaries([...salaries]);
  };

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

  // Apply filtering based on each filter array
  const filteredJobs = jobs
    .filter((job) => {
      // Filter based on job roles if filterRoles array is present
      return filterRoles.length > 0
        ? filterRoles.includes(job.jobRole ?? '')
        : true;
    })
    .filter((job) => {
      // Filter based on job locations if filterLocations array is present
      return filterLocations.length > 0
        ? filterLocations.includes(job.location ?? '')
        : true;
    })
    .filter((job) => {
      // Filter based on job salaries if filterSalaries array is present
      return filterSalaries.length > 0
        ? filterSalaries.includes(
            job.minJdSalary?.toString() ?? job.maxJdSalary?.toString() ?? ''
          )
        : true;
    })
    .filter((job) => {
      // Filter based on job experiences if filterExperiences array is present
      return filterExperiences.length > 0
        ? filterExperiences.includes(
            job.minExp?.toString() ?? job.maxExp?.toString() ?? ''
          )
        : true;
    });

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
        <MultipleSelect onFilterChange={applyFilterRoles} />
        <LocationMultipleSelect onFilterChange={applyFilterLocations} />
        <SalaryMultipleSelect onFilterChange={applyFilterSalaries} />
        <ExperienceMultipleSelect onFilterChange={applyFilterExperiences} />
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
        {filteredJobs?.map((job) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={job.jdUid}>
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
