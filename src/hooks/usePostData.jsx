import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const postData = createAsyncThunk(
  "data/postData",
  async ({ url, data }) => {    
    console.log(data)
    try {
      const response = await axios.post(url, {data});
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
