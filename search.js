const googleDatabase=[
  'cats.com',
  'souprecipes.com',
  'flwoers.com',
  'animals.com',
  'catpictures.com',
  'myfavouritecats.com',
  'myfavouritecats2.com'
];

const googleSearch=(seatchInput,db)=>{
  const matches=db.filter(website=>{
    return website.includes(seatchInput);
  });
  return matches.length>3? matches.slice(0,3):matches;
}

console.log(googleSearch('cat',googleDatabase))
module.exports=googleSearch;