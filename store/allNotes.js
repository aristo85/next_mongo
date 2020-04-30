import axios from 'axios';
// import fetch from "node-fetch";
import fetch from 'isomorphic-unfetch';

export const getAllNotes = async () => {
    return fetch(process.env.URI)
        .then(r => r.json())
        .then(data => {
            const notes = data.data;
            console.log(notes);
            return notes;

        });
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
