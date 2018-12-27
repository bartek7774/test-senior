const reverseString=require('./js_cardio');

test.skip('reverseString function exist', ()=>{
  expect(reverseString).toBeDefined();
});

test.skip('String should be sql', ()=>{
  expect(reverseString('lqs')).toBe('sql');
});

test.skip('String should be sql with uppercase', ()=>{
  expect(reverseString('lqS')).toBe('sql');
});