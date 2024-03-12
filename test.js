var addTwoPromises = async function (p1, p2) {

    p1 = new Promise(function (resolve,reject) {
        setTimeout(() => {
              resolve(2);

        }, 2000);

    });
    p2 = new Promise(function (resolve,reject) {
        setTimeout(() => {
            resolve(5);

        }, 6000);

    });
    p3 =new Promise (function (resolve,reject) {
        setTimeout(() => {
            

        }, 7000);

    });
    p1.then(
        (value)=>{
            console.log(p1);
        }
    );
    p2.then(
        (value)=>{
            console.log(p2);
        }
    );
    Promise.all([p1, p2, p3]).then(function (values) {
        console.log(values);
    });
    




};
addTwoPromises();