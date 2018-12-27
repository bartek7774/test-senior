const fetch =require('node-fetch');
const swapi=require('./swapi');

it.skip('calls swapi to get people',(done)=>{
  expect.assertions(1);
  swapi.getPeople(fetch).then(data=>{
    expect(data.count).toBe(87);
    done();
  });
});

it.skip('calls swapi to get people',()=>{
  expect.assertions(2);
  return swapi.getPeople(fetch).then(data=>{
    expect(data.count).toBe(87);
    expect(data.results.length).toBeGreaterThan(5);
  });
});

it('getPeople returns count and results',()=>{
  const mockFetch=jest.fn().mockReturnValue(Promise.resolve({
    json:()=>({count:87,results:[1,2,3,4,5,6]})
  }));
  expect.assertions(4);
  return swapi.getPeople(mockFetch).then(data=>{
    expect(mockFetch.call.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.co/api/people');
    expect(data.count).toBe(87);
    expect(data.results.length).toBeGreaterThan(5);
  });

});