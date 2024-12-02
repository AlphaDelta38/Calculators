




const jagalkin = (f, table,zminni) =>{
    let massiveOne=[];
    let counter=0;
    let counterForZero=0;
    let JagalkinFunc = [];
    let ResultFunc = [];
    let Polinom =[];

    for (let i = 0; i < Math.pow(2,zminni); i++) {
        massiveOne[i] = [];

    }

    for (let i = 0; i < Math.pow(2,zminni)+2; i++) {
        JagalkinFunc[i] =[];

    }



    JagalkinFunc[0] = f;

    console.log(JagalkinFunc)

    for (let i = 0; i <Math.pow(2,zminni) ; i++) {
        for (let j = 0; j < zminni; j++) {

            if(table[j][i] === 1){
                massiveOne[i][counter]= j;
                counter++;
            }else{
                counterForZero++
            }
             if(counterForZero === zminni){
                 massiveOne[i][counter]= f[0];
             }


        }
        counterForZero=0;
        counter = 0;
    }


    let JagCounter=1;
    let CounterForMinus  = 1;

    for (let i = 0; i < Math.pow(2,zminni); i++) {
        console.log(JagalkinFunc[i].length , i, "вфвф")
        for (let j = 0; j < JagalkinFunc[0].length-CounterForMinus; j++) {
            console.log(i, j)
            if(JagalkinFunc[i][j] === JagalkinFunc[i][j+1]){
                JagalkinFunc[JagCounter][j]= 0;
            }else{
                JagalkinFunc[JagCounter][j] =1;
            }
        }
        JagCounter++;
        CounterForMinus++;
    }


    for (let i = 0; i < Math.pow(2,zminni); i++) {
        ResultFunc[i] = JagalkinFunc[i][0]
    }


    console.log(JagalkinFunc)
    console.log(massiveOne)
    console.log(ResultFunc)
    ResultFunc.forEach((item, index)=>item === 1 ? Polinom.push(massiveOne[index]) : null )
    console.log(Polinom)
    for (let i = 0; i < Polinom.length; i++) {
        if(Polinom[i].length > 1){
            return [false, Polinom];
        }
    }



    console.log(Polinom);
    return  [true, Polinom];
}



export default jagalkin;