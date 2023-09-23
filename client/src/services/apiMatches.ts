import { Match } from "../Interfaces";

const BASE_URL = 'http://localhost:3000/api';

export async function postMatch (match: Match) {
  try {
    const response = await fetch(`${BASE_URL}/matches`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(match)
    })
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserMatches (userId: string) {
  try {
    const response = await fetch(`${BASE_URL}/matches/${userId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function checkIfMatchExists(user1: string, user2: string) {
  try {
    const response = await fetch(`${BASE_URL}/checkmatch/?user1=${user1}&user2=${user2}`);
    const data = await response.json();
    return data.matchExists;
  } catch (error) {
    console.log(error);
    return false;
  }
}


export async function updateMatch(user1: string, user2: string) {
  try {
    const response = await fetch(`${BASE_URL}/matches/updateMatch`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user1, user2 }),
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to update mutualMatch');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
