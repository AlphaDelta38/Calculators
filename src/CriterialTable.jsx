import React from 'react';
import cl from "./CriterialTable.module.css"





const CriterialTable = ({func, linom, funcsss}) => {
    let PrintMassive = func;
    let StirngMassvie=[];



    for (let i = 0; i < linom.length; i++) {
        StirngMassvie[i]="";
        for (let j = 0; j < linom[i].length; j++) {
            for (let k = 0; k < linom[i][j].length; k++) {
                console.log(i, j, k);
                console.log(`x${linom[i][j][k]}`)
                if(linom[i][j].length>1){
                    StirngMassvie[i] += `x${linom[i][j][k]+1}*`
                }else{
                   if(funcsss[i][0] === 1 && j !== 0){
                       console.log(i , func[i][0], j !== 0 )
                       StirngMassvie[i] += `x${linom[i][j][k]+1}+`
                   }else if(funcsss[i][0] === 0 && j === 0){
                       StirngMassvie[i] += `x${linom[i][j][k]+1}+`
                   }else{
                       StirngMassvie[i] += `${linom[i][j][k]}+`
                   }
                }

            }
            if(linom[i][j].length>1){
                StirngMassvie[i] += `+`
            }
        }
    }



    console.log(linom)
    console.log(PrintMassive)
    console.log(StirngMassvie[0])

    return (
        <div className={cl.Table}>
            <div className={cl.row}>
                <div></div>
                <div><h2>T0</h2></div>
                <div><h2>T1</h2></div>
                <div><h2>S</h2></div>
                <div><h2>M</h2></div>
                <div><h2>L</h2></div>
                <div><h2>Linom</h2></div>
            </div>
            {PrintMassive.map((value,index)=>
                <div className={cl.row}>
                    <div><h2>F{index + 1}</h2></div>
                    <div><h2>{value[0] ? "+" : "-"}</h2></div>
                    <div><h2>{value[1] ? "+" : "-"}</h2></div>
                    <div><h2>{value[2] ? "+" : "-"}</h2></div>
                    <div><h2>{value[3] ? "+" : "-"}</h2></div>
                    <div><h2>{value[4] ? "+" : "-"}</h2></div>
                    <div>
                        {
                            StirngMassvie[index]
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default CriterialTable;