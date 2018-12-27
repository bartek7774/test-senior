const chunk=require('./chunk');

test('should return array',()=>{
  expect(chunk([1,2,3,4,5,6,7,8])).toBeInstanceOf(Array);
});

test('chunk an array of 10 values with length of 2',()=>{
  expect(chunk([1,2,3,4,5,6,7,8,9,10],2)).toEqual([[1,2],[3,4],[5,6],[7,8],[9,10]]);
});
