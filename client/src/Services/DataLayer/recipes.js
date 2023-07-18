import axios from 'axios'


export async function fetchAllRecipesFromDatabase() {
  const response = await axios
    .get(`http://gaellebriet-server.eddi.cloud:8090/recipes`)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error.toJSON())
    })
  // return response.data
  return response
}

export async function fetchOneRecipeWithCommentsFromDatabase(id) {
  const numericId = Number(id)
  const { data } = await axios.get(`http://gaellebriet-server.eddi.cloud:8090/recipes/${id}`)
  return data
}

export async function getOneRecipe(id) {
    const response = await axios.get('http://gaellebriet-server.eddi.cloud:8090/recipes/' + id)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error.toJSON())
    })
    return response
}

export async function addOneRecipeToDatabase(recipe) {
  await axios
    .post(`http://gaellebriet-server.eddi.cloud:8090/recipes`, {
      ...recipe
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.log(error.toJSON())
    })
}
// export async function addRecipe($recipe) {
//   const response = await axios
//     .post('http://localhost:8090/recipes', {
//       body: JSON.stringify($recipe)
//     })
//     .then((response) => response.data)
//     .catch((error) => {
//       console.log(error.toJSON())
//     })
//   return response
// }

// async fetchAllRecipesFromDatabase() {
//   return axios.get(`${BASEURL}/recipes`)
//       .then(response => response.data)
//       .catch(error => console.log(error.toJSON()));
// }

// const BASEURL = "http://localhost:8000/api";
// console.log('axios', axios);
// export default {
//     async fetchAllRecipesFromDatabase(){

//        return axios.get(`${BASEURL}/recipes`, {

//         validateStatus: function (status) {
//             return status < 500; // la requête résout tant que le code de sa réponse est
//                                 // inférieur à 500
//         }

//        })
//         .then((response) => response.data)
//         .catch(function (error) {
//             console.log(error.toJSON());
//         });

//        return data;

//     },
//     async fetchOneRecipeWithCommentsFromDatabase(id){
//         const numericId = Number(id);

//         const { data } = await axios.get(`${BASEURL}/recipes/${id}`);

//         return data;
//     },
//     async addOneRecipeToDatabase(recipe){

//         await axios.post(`${BASEURL}/recipes`, {
//             ...recipe
//         })
//         .then(function (response) {
//             console.log(response);
//         })
//         .catch(function (error) {
//             console.log(error.toJSON());
//         });
//     }
// }
