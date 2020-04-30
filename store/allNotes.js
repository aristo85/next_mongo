import axios from 'axios';
import fetch from "node-fetch";

export const getAllNotes = async () => {
    const res1 = await fetch(process.env.URI)
    const posts = await res1.json();
    return posts.data;
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
