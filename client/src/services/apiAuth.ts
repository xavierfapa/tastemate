import { User, userLoged } from "../Interfaces";

const BASE_URL = import.meta.env.VITE_APP_URL;

const postRequest = async (endpoint: string, data: any) => {
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responeData = await response.json();
    return responeData;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export async function registerUser (user: User) {
  return postRequest('register', user)
}

export async function loginUser (user: userLoged) {
  return postRequest('login', user)
}

// export async function registerUser (user: User) {
//   try {
//     const response = await fetch(`${BASE_URL}/register`, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(user)
//     })
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }

// export async function loginUser (user: userLoged) {
//   try {
//     const response = await fetch(`${BASE_URL}/login`, {
//       method: "POST",
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify(user)
//     })
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }