import { ferryTechUri } from "./ferryTechUri";

export const getUser = async (email) => {
  const data = await fetch(ferryTechUri+`/users?userEmail=${email}`,{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    }
  });
  if(Number(data.status)===500){
    return null;
  }
  const response = await data.json();
  return response.body;
};

export const setUser = async (newUser) => {
  const {userName,userEmail,userPassword} = newUser;
  await fetch(ferryTechUri+'/users',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({userName,userEmail,userPassword})
  });
};

export const getLocals = async (local_id=-1) => {
  let data;
  if(local_id===-1){
    data = await fetch(ferryTechUri+'/locals',{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });
  }else{
    data = await fetch(ferryTechUri+`/locals?_id=${local_id}`,{
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      }
    });
  }
  if(Number(data.status)===500){
    return null;
  }
  const response = await data.json();
  return response.body;
};

export const getProductsLocal = async (local_id) => {
  const data = await fetch(ferryTechUri+`/locals?_id=${local_id}`,{
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    }
  });
  if(Number(data.status)===500){
    return null;
  }
  const response = await data.json();
  return response.body[0].productsList;
};
