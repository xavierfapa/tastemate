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

export async function getUserRecipies (userId: string) {
  try {
    const response = await fetch(`${BASE_URL}/recipies/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function postImage (image: any) {
  try {
    const response = await fetch(`${BASE_URL}/image`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(image)
    })
    const data = await response.text();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUniqueRecipie (recipieId: string) {
  try {
    const response = await fetch(`${BASE_URL}/recipie/${recipieId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteRecipieDB (recipieId: string) {
  try {
    const response = await fetch(`${BASE_URL}/recipies/${recipieId}`, {
      method: "DELETE"
    })
    if (response.ok) return true;
    return false;
  } catch (error) {
    console.log(error);
  }
}

export async function getOtherRecipies(userId: string) {
  try {
    const response = await fetch(`${BASE_URL}/recipiesOther?userId=${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
