import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteData = createAsyncThunk(
  "data/deleteData",
  async ({ url, data}) => {   
    console.log(data)
    try {
      const response = await axios.delete(url,{data});
      return response;
    } catch (error) {
      throw error;
    }
  }
);
