import { Recipie } from "../Interfaces";

const BASE_URL = 'http://localhost:3000/api';

export async function postRecipie (recipie: Recipie) {
  try {
    const response = await fetch(`${BASE_URL}/recipies`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(recipie)
    })
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}