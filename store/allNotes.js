import axios from 'axios';
import fetch from "node-fetch";

export const getAllNotes = async () => {
    const res = await axios.get(process.env.URI)
    const notes = await res.data;
    // console.log(res.data);
    return notes.data;
};

export const getAllPaths = async () => {
    const data = await getAllNotes();
    return data.map(note => {
      return {
          params: {
              id: note._id
          }
      }
  });
};

export const getNoteById = async (id) => {
    const res = await axios.get(`${process.env.URI}/${id}`)
    return res.data;
};
