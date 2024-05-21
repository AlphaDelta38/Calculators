





const createFullTable = (zminni, fullZminni, userFunction) =>{
    console.log(userFunction, "dasdasdasasdasdsadasdasdasdasdasd")
    let collum =[];
    let counter=Number(zminni);
    let counterMassive =0;
    let rowMassive =[];
    let rowMassivddd =[];
    for (let i = 0; i < zminni; i++) {
        collum[i] = [];

    }

    for (let i = 0; i <fullZminni ; i++) {
        rowMassive[i] =[];
        rowMassivddd[i] =[];

    }

    for (let i = 0; i < zminni; i++) {
        for (let j = 0; j < fullZminni/Math.pow(2, counter); j++) {

            for (let k = 0; k < Math.pow(2, counter) ; k++) {
                if(k < Math.pow(2, counter)/2){
                    collum[i][counterMassive] = 0;
                    counterMassive++;
                }else {
                    collum[i][counterMassive] = 1;
                    counterMassive++;
                }
            }
        }
        counter--;
        counterMassive=0;
    }

    for (let i = 0; i <fullZminni ; i++) {
        let stringField="";
        for (let j = 0; j < zminni; j++) {
            rowMassive[i][j] = collum[j][i];
            for (let k = 0; k < userFunction.length; k++) {
                rowMassive[i][j+1+k] =userFunction[k][i];
            }
            stringField += `${collum[j][i]}     `
            console.log(stringField)




        }
        for (let j = 0; j < userFunction.length; j++) {
            stringField += `  ${userFunction[j][i]}   `
        }
        rowMassivddd[i] = stringField;
    }


    let returnMassives = [];
    returnMassives = [rowMassive, rowMassivddd, collum];
    console.log(returnMassives[0]);
    console.log(rowMassive)
    console.log(collum)
    return returnMassives;
}

export default createFullTable;