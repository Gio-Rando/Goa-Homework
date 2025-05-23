const promise1 = new Promise((resolve) => {
  resolve("Hello, Promise!")
});

promise1
    .then((response) => {
  console.log(response)
})

const promise2 = new Promise((resolve, reject) => {
  reject("Something went wrong!")
})

promise2
  .then((response) => {
    console.log(response)
  })
  .catch((response) => {
    console.log(response)
  })

const promise3 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("2 seconds have passed");
  }, 2000);
});

promise3.then((response) => {
  console.log(response)
})

const promise4 = new Promise((resolve, reject) => {
  const x = Math.round(Math.random())

  if (x) {
    resolve("Success!");
  } else {
    reject("Failed!");
  }
});

promise4
  .then((response) => {
    console.log(response); 
  })
  .catch((response) => {
    console.log(response);
  });

  const promise5 = new Promise((resolve,reject)=>{resolve(5)});

promise5
  .then((response) => {
    console.log(response) 
    return response * 2
  })
  .then((response) => {
    console.log(response)
    return response * 2
  })
  .then((response) => {
    console.log(response)
    return response * 2
  })
  .then((response) => {
    console.log(response)
  });

const promise6 = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve("Data fetched!");
  }, 1000);
});

promise6
    .then((response) => {
  console.log(response)
})
