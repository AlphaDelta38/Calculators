




const Mcalc = (colum, f,zminni) =>{
    let bool = false;
    let IndexMassive = [];
    for (let i = 0; i < f.length; i++) {
        if(f[0] <= f[i] ){
        }else{
            return false;
        }
    }

    f.forEach((value,index)=>{
        if(value === 1){
            IndexMassive.push(index)
        }
    })

    console.log(IndexMassive)
    let AdditionalCheck=[];
    IndexMassive.forEach((value,index)=>{
            for (let j = 0; j < zminni ; j++) {
                if(colum[j][value] === 1){
                    console.log(j, value, colum[j][value] )
                    AdditionalCheck.push(j)
                }
            // console.log(value, AdditionalCheck)
        }

        console.log(AdditionalCheck)
         for (let j = 0; j <AdditionalCheck.length ; j++) {
             for (let k = value; k < Math.pow(2,zminni); k++) {
                 console.log(AdditionalCheck)
                 if(colum[AdditionalCheck[j]][k] === 1){

                     if(!IndexMassive.includes(k)){
                         console.log(111111111111)
                         bool = true;
                     }
                 }
            }
         }
        console.log(AdditionalCheck)
        AdditionalCheck = [];

    })

    if(bool){
        return false;
    }

    return true;


}



export  default  Mcalc;