import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from './heroku';

axios.defaults.baseURL = BASE_URL;

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (userContact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/contacts', userContact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      const { data } = await axios.delete('/contacts/' + id);
      return data.id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const updateContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      const { data } = await axios.patch('/contacts/' + id);
      return data.id;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
