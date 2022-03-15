import 'dotenv/config';
import axios from 'axios';

import { readFile } from 'fs/promises';

const users = JSON.parse(
  await readFile(new URL('../data/users.json', import.meta.url))
);

export async function createUser() {
  const response = await 
    axios.post(process.env.ENDPOINT_CREATE_USER, 
      { 'site_id': 'MLB'},
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`,
      },
    }).then(result => {
      console.log(result.data);
      return result.data;
    }).catch(error => {
      console.log(error);
      return error;
    });
  return response;
}


export const listUsers = () => {
  console.log(users);
  return users;
}
