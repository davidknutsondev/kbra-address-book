// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Contact, ContactInput, Contacts } from '../types';

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api/' }),
  endpoints: (build) => ({
    getContactById: build.query<Contact, string>({
      query: (id) => `contacts/${id}`,
    }),
    getContacts: build.query<Contacts, { searchInput?: string }>({
      query: (arg?) => {
        const { searchInput } = arg;
        return {
          url: 'contacts/',
          params: { searchInput },
        };
      },
    }),
    createContact: build.mutation<void, ContactInput>({
      query: (contactInput) => ({
        url: `contacts`,
        method: 'POST',
        body: contactInput,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactByIdQuery, useGetContactsQuery, useCreateContactMutation } =
  contactsApi;
