




const TzeroCalc = (e) =>{

    if(e[0] === 0){
        return true;
    }else{
        return false;
    }

}

const ToneCalc = (e) =>{
    console.log(e[e.length-1])
    if(e[e.length-1] === 1){

        return true;
    }else{
        return false;
    }

}



export {TzeroCalc, ToneCalc }