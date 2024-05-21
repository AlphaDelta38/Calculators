



const Scalc = (f) =>{
    let  gottedFunc  = f;
    let temp = f;
    let counter=0;
    console.log(temp)
    gottedFunc = gottedFunc.map(item => item === 1 ? 0 : 1);
    console.log(gottedFunc)
    gottedFunc = gottedFunc.reverse()
    console.log(gottedFunc)
    for (let i = 0; i < f.length; i++) {
        if(temp[i] === gottedFunc[i] ){

            counter++;
        }
    }

    console.log(temp)
    console.log(gottedFunc)
    if(counter === f.length){
        return true;
    }else {
        return false
    }


}


export  default  Scalc;