let a = 0;

init()
async function init(){
     await new Promise((resolve, reject) => {
        setTimeout(() => {
            a = 1;
            resolve(a)
        }, 2000);
    })
        console.log(a);
      

}

