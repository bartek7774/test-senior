const search=require('./search');

dbMock=[
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com'
];

describe('googleSearch',()=>{
  it('is searching google', ()=>{
    expect(search('request',dbMock)).toEqual([]);
    expect(search('dog',dbMock))
      .toEqual(['dog.com',
                'dogpictures.com'])
  });
  it('work with undefined or null', ()=>{
    expect(search(undefined,dbMock)).toEqual([]);
    expect(search(null,dbMock)).toEqual([]);
  });
});