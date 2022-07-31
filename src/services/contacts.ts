// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Contact, Contacts } from './types';

// Define a service using a base URL and expected endpoints
export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getContactById: builder.query<Contact, string>({
      query: (id) => `contacts/${id}`,
    }),
    getContacts: builder.query<Contacts, void>({
      query: () => 'contacts',
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetContactByIdQuery, useGetContactsQuery } = contactsApi;
