import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const patchData = createAsyncThunk(
  "data/patchData",
  async ({ url, data }) => {     
    console.log(data);   
    try {
      const response = await axios.patch(url, {data});
      return response; 
    } catch (error) {
      throw error;
    }
  }
);
