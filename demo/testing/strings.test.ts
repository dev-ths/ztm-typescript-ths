import { concat, div, failedString, slowString, failedPromise } from "./strings";

it('ensure concat works',()=>{
  expect(concat('what ','burger')).toEqual('what burger')
})

it('ensure div normally works',()=>{
  expect(div(15,5)).toEqual(3)
})

it('div throws error when dividing by 0',()=>{
  expect(()=>{
    div(100,0)}).toThrow()
  })

test('async works', async()=>{
  expect(await slowString()).toEqual('sample')
})

test("failed string fails with a 'whoops'", async () => {
  failedString()
    .then((data) => {
      expect(data).toBeUndefined();
    })
    .catch((err) => expect(err).toEqual("whoops"));
});

test("try catch fails with a 'whoops'", async () => {
  try {
    let data = await failedString()
    expect(data).toThrow()
  } catch (error){
    //expect(error).toEqual('whoops')
    expect(error).toEqual('whoops')
  }
});

test("async promise rejects with message unwrapped",async()=>{
  await expect(failedString()).rejects.toEqual("whoops")
})

test("async function throw", async () => {
  await expect(failedPromise()).rejects.toThrow()
});