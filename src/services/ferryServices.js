import { ferryTechUri } from "./ferryTechUri";

export const getUser = async (email) => {
  const data = await fetch(ferryTechUri+`/users?user_email=${email}`,{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    }
  });
  const response = await data.json();
  return response.body;
};

export const setUser = async (newUser) => {
  const {user_name,user_email,user_password} = newUser;
  await fetch(ferryTechUri+'/users',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({user_name,user_email,user_password})
  });
};

export const getLocals = async (local_id) => {
  const data = await fetch(ferryTechUri+`/locals?_id=${local_id}`,{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    }
  });
  const response = await data.json();
  return response.body;
};

export const addLocal = async (newProduct) => {
  const {products_list,local_name,local_status} = newProduct;
  await fetch(ferryTechUri+'/locals',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({products_list,local_name,local_status})
  });
};

// export const getProducts = async (local_id) => {
//   const data = await fetch(ferryTechUri+`/products?_id=${local_id}`,{
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//     }
//   });
//   const response = await data.json();
//   return response.body;
// };

// export const addProduct = async (newProduct) => {
//   const {products_list,local_name,local_status} = newProduct;
//   await fetch(ferryTechUri+'/products',{
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({products_list,local_name,local_status})
//   });
// };