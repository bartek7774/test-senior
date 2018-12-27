const fetch =require('node-fetch');

const getPeople=fetch=>{
  return fetch('https://swapi.co/api/people')
      .then(res => res.json())
      .then(data=>{
        return {
           count: data.count,
           results: data.results
        }
      })
      .catch((err) => {
         console.log(err);
      });
}

const getPeopleAsync=async fetch=>{
  const response=await fetch('https://swapi.co/api/people');
  const data= await response.json();
  return {
     count: data.count,
     results: data.results
  }
}

module.exports={
  getPeople,
  getPeopleAsync
};