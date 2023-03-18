function callBack() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const flag = true;
      if (flag) {
        resolve("1st one");
      } else {
        reject("rejected 1st");
      }
    }, 1000);
  });
}

function callBack1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const flag = true;
      if (flag) {
        resolve("2nd one");
      } else {
        reject("rejected 2nd");
      }
    }, 1000);
  });
}

async function callBack2() {
  let data = new Promise((resolve, reject) => {
    setTimeout(() => {
      const flag = false;
      if (flag) {
        return resolve("3rd one");
      } else {
        return reject("rejected 3rd");
      }
    }, 1000);
  });

  let pp = await data;
  console.log(pp);
}
callBack2();

/* let data = Promise.allSettled([callBack(), callBack1(), callBack2()]);
data
  .then((item) => {
    console.log("Resolveddd!!", item);
  })
  .catch((err) => {
    console.log(err);
  }); */
