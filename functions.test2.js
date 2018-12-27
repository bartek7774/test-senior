const functions=require('./functions');


test('Adds 2 + 2 to equal 4', ()=>{
  expect(functions.add(2,2)).toBe(4);
});


test('Adds 2 + 2 to NOT equal 4', ()=>{
  expect(functions.add(2,2)).not.toBe(5);
});

test('Should be null', ()=>{
  expect(functions.isNull()).toBeNull();
});

test('Should be falsy', ()=>{
  expect(functions.checkValue(0)).toBeFalsy();
});

test('Should be Brad Traversy object',()=>{
  expect(functions.createUser()).toEqual({firstName:'Brad',lastName:'Traversy'});
});


test('Should be under 1600',()=>{
  const load1 =  800;
  const load2 = 500;

  expect(load1+load2).toBeLessThan(1600);
});

// regex
test('There is no I in team',()=>{
  expect('team').not.toMatch(/i/ig);
});

// arrays
test('Admin should be in usernames',()=>{
  usernames=['john','karen','admin'];
  expect(usernames).toContain('admin');
});

//db data promise
test('User fetched name should be Leanne Graham',()=>{
  expect.assertions(1);
  return functions.fetchUser()
    .then((data)=>{
      expect(data.name).toEqual('Leanne Graham');
    });
});

//db data async
test('User async fetched name should be Leanne Graham', async()=>{
  const data= await functions.fetchUser()
  expect(data.name).toEqual('Leanne Graham');
});