import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'
import { apiSlice } from '../../api/apiSlice'

const analyticAdapter = createEntityAdapter({})
const initialState = analyticAdapter.getInitialState()

export const analyticApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAnalytics: builder.query({
      query: (year) => `/analytics?year=${year}`,
      validateStatus: (response, result) => {
        return response.status === 200 && !result.isError
      },
      keepUnusedDataFor: 5,
      providesTags: (result, error, arg) => [{ type: 'Analytic', id: 'LIST' }]
    })
  })
})

export const { useGetAnalyticsQuery } = analyticApiSlice

// returns the query result object
export const selectAnalyticResult = analyticApiSlice.endpoints.getAnalytics.select()

// creates memoized selector
const selectAnalyticsData = createSelector(
  selectAnalyticResult,
  (analyticsResult) => analyticsResult.data // normalized state object with ids & entities
)

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllAnalytics,
  selectById: selectAnalyticById,
  selectIds: selectAnalyticids
  // Pass in a selector that returns the users slice of state
} = analyticAdapter.getSelectors((state) => selectAnalyticsData(state) ?? initialState)
