import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export interface Job {
  jdUid: string;
  jdLink: string;
  jobDetailsFromCompany: string;
  maxJdSalary: number;
  minJdSalary: number | null;
  salaryCurrencyCode: string;
  location: string;
  minExp: number | null;
  maxExp: number | null;
  jobRole: string;
}

interface GetSampleJdJSONResponse {
  jdList: Job[];
  totalCount: number;
}

export const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    jdList: [] as Job[],
  },
  reducers: {
    appendJobs: (state, action: PayloadAction<Job[]>) => {
      state.jdList = [...state.jdList, ...action.payload];
    },
  },
});

export const { appendJobs } = jobSlice.actions;

const myHeaders = new Headers();
myHeaders.append('Content-type', 'application/json');

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
};

export const jobApi = createApi({
  reducerPath: 'jobs',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.weekday.technology/',
    prepareHeaders: (headers) => {
      return headers;
    },
    ...requestOptions,
  }),
  endpoints: (builder) => ({
    getSampleJdJSON: builder.query<
      GetSampleJdJSONResponse,
      { limit: number; offset: number }
    >({
      query: (body) => ({
        url: 'adhoc/getSampleJdJSON',
        body: { limit: body.limit, offset: body.offset },
      }),
    }),
  }),
});

export const { useGetSampleJdJSONQuery } = jobApi;

export const rootReducer = combineReducers({
  jobSlice: jobSlice.reducer,
  [jobApi.reducerPath]: jobApi.reducer,
});
