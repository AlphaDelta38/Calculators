import React, {useState} from 'react';
import cl from "./MakKlaski.module.css";
import createFullTable from "./createFullTable";
import MakAlgoritm from "./MakAlgoritm";
import makAlgoritm from "./MakAlgoritm";







const MakKlaski = () => {

    const [zminni, setZminni] = useState(0)
    const [functionFull2, SetfunctionFull2] = useState([])
    const [zminniMassive, setZminniMassive] = useState([])
    const [rowMassive, setrowMassive] = useState([])
    const [MassiveFunc, SetMassvieFunc] = useState([]);
    const [out, setOut] = useState("")


    function checkFunction(e){

        SetfunctionFull2(e)
        for (let i = 0; i < e.length; i++) {

            MassiveFunc[i] = Number(e[i]);
        }
        console.log(MassiveFunc)
    }



    function start(){
       let tempZminnimassive = [];
        for (let i = 0; i < Number(zminni); i++) {
            tempZminnimassive[i] = i+1
        }
        setZminniMassive(tempZminnimassive)


        console.log("zminni", zminni)
        console.log(MassiveFunc)
        let ForCalc = createFullTable(Number(zminni),Math.pow(2,Number(zminni)), [MassiveFunc] )[0]
        let x =  createFullTable(Number(zminni),Math.pow(2,Number(zminni)), [MassiveFunc] )[1]
        setrowMassive(x)
        console.log(ForCalc)

        let Hw=0;

        for (let i = 0; i < ForCalc.length; i++) {
            if(MassiveFunc[i] === 1){
                Hw++;
            }
        }
        
        
        
        
        let RowMasiveForMak =[];
        
        for (let i = 0; i < Hw; i++) {
            RowMasiveForMak[i] = [];
        }

        let counter =0 ;
        for (let i = 0; i < ForCalc.length; i++) {
                if(ForCalc[i][ForCalc[0].length-1] === 1){
                    for (let k = 0; k < ForCalc[0].length-1; k++) {
                        RowMasiveForMak[counter][k] =ForCalc[i][k]
                    }
                    counter++;
                }

        }

        console.log(RowMasiveForMak)

        let solution = makAlgoritm(RowMasiveForMak);


        let string = "";
        solution.forEach((value, index, array)=>{
                value.forEach((value, index)=>{
                    if(value === 0){
                        string += `-x${index+1}`;

                    }else if(value === 1){
                        string += `x${index+1}`;
                    }
                })
            string += " v ";
        })
        setOut(string)
    console.log(string)

    }


    return (
        <div className={cl.Table}>
            <div className={cl.Form}>
                <div>
                    <input type="number" value={zminni} onChange={(e) => {
                        setZminni(e.target.value)
                    }} placeholder="Введите количество переменных"/>
                </div>
                <div>
                    <input type="number" value={functionFull2} onChange={(e) => {
                        checkFunction(e.target.value)
                    }} placeholder="Введите функцию"/>
                </div>
                <div className="btn">
                    <button onClick={start}>Старт</button>
                </div>

            </div>
            <div className="Result">
                {`Result:`}
                <div>
                    <div className="OutX">{zminniMassive.map((e, index) =>
                        <div>{`x` + (1 + index)} </div>
                    )}
                        <div style={{display: "flex", fontSize: "16px", gap: "14px", fontWeight: "0"}}>
                            <p2>f1</p2>
                        </div>
                    </div>
                    {rowMassive.map((e, index, array) =>
                        <div style={{letterSpacing: "8px"}} className="outTable">
                            {e}
                        </div>
                    )}
                </div>
            </div>
            <div className="Result">
                {`Result Mak-klaski:`}
                {out}
            </div>
        </div>
    );
};

export default MakKlaski;