import axios from 'axios'

// export function getRecipes() {
//   return axios.get('http://gaellebriet-server.eddi.cloud:8090/recipes').then((response) => {
//     return response.data;
//   })
// }

export async function fetchRecipes() {
  const response = await axios.get('http://gaellebriet-server.eddi.cloud:8090/recipes');
  return response.data;
}