

const  MakAlgoritm = (table) =>{
        console.log(table)
    let TableForCalc = table;
    let propusk = [];
    let counter=0
    let FirstSkelika = [];
    let CounterForSkelikaMassive = 0;
    let TemlNumberK = 0;
    let LastSkleika = [];
    let UseCheck =[];
    let NotHasBeenUsed = [];
    let ResultMassive = [];

    for (let i = 0; i <= TableForCalc.length; i++) {
        propusk.push(i);
        for (let j = 0; j < TableForCalc.length; j++) {
            if(!propusk.includes(j)){
                for (let k = 0; k < TableForCalc[0].length; k++) {
                    if(TableForCalc[i][k] !== TableForCalc[j][k]){
                        counter++;
                        TemlNumberK = k;
                    }
                }

                if(counter === 1){
                    FirstSkelika[CounterForSkelikaMassive] = [];
                    for (let k = 0; k <TableForCalc[j].length ; k++) {
                        FirstSkelika[CounterForSkelikaMassive][k]= TableForCalc[j][k]
                    }
                    FirstSkelika[CounterForSkelikaMassive][TemlNumberK] = -1;
                    CounterForSkelikaMassive++;
                }
            }
            counter=0;
        }
    }
    CounterForSkelikaMassive=0;
    propusk = [];

    for (let i = 0; i <= FirstSkelika.length; i++) {
        propusk.push(i);
        for (let j = 0; j < FirstSkelika.length; j++) {
            if(!propusk.includes(j)){
                for (let k = 0; k < FirstSkelika[0].length; k++) {
                    if(FirstSkelika[i][k] !== FirstSkelika[j][k]){
                        counter++;
                        TemlNumberK = k;
                    }
                }

                if(counter === 1){
                    if(!UseCheck.includes(CounterForSkelikaMassive)){
                        UseCheck.push(CounterForSkelikaMassive)
                    }
                    UseCheck.push(j)

                    LastSkleika[CounterForSkelikaMassive] = [];
                    for (let k = 0; k <FirstSkelika[j].length ; k++) {
                        LastSkleika[CounterForSkelikaMassive][k]= FirstSkelika[j][k]
                    }
                    LastSkleika[CounterForSkelikaMassive][TemlNumberK] = -1;
                    CounterForSkelikaMassive++;
                }
            }
            counter=0;
        }
    }


    for (let i = 0; i < FirstSkelika.length; i++) {
        if(!UseCheck.includes(i)){
            NotHasBeenUsed.push(i);
        }
    }

    CounterForSkelikaMassive=0;
    propusk = [];

    console.log(FirstSkelika)
    console.log(LastSkleika)
    console.log(UseCheck)
    console.log(NotHasBeenUsed)


    for (let i = 0; i < LastSkleika.length; i++) {
            propusk.push(i)
        for (let j = 0; j <LastSkleika.length ; j++) {
            if(!propusk.includes(j)){
                for (let k = 0; k < LastSkleika[0].length; k++) {
                    if(LastSkleika[i][k] === LastSkleika[j][k]){
                        counter++;
                        console.log(counter)
                    }
                }
                if(counter !== LastSkleika[0].length){
                    console.log(i)
                    console.log(counter, LastSkleika[0].length)
                    ResultMassive[CounterForSkelikaMassive] =[];
                    for (let k = 0; k < LastSkleika[0].length; k++) {

                        ResultMassive[CounterForSkelikaMassive][k] = LastSkleika[i][k];
                    }

                    CounterForSkelikaMassive++
                    break;
                }else {
                    break;
                }
            }
            counter =0;
        }
        if(i === LastSkleika.length-1){
            ResultMassive[CounterForSkelikaMassive] = LastSkleika[LastSkleika.length-1];
            CounterForSkelikaMassive++;
        }
    }

    for (let i = 0; i < NotHasBeenUsed.length; i++) {
        ResultMassive[CounterForSkelikaMassive] = FirstSkelika[NotHasBeenUsed[i]];
        CounterForSkelikaMassive++;
    }

    console.log(ResultMassive)



    return ResultMassive




}


export  default MakAlgoritm;