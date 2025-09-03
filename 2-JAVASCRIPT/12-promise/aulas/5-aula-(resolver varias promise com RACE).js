const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('P1 ok! setTimeout');
    }, 2000);
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok!');
});

const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok!');
});

const resolveAllrace = Promise.race([p1, p2, p3]).then((dados)=>{
    console.log(dados)
})
