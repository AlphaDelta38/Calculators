import React, {useState} from 'react';
import cl from "./Table.module.css"
import createFullTable from "./createFullTable";
import {TzeroCalc, ToneCalc} from "./Tcalc";
import Scalc from "./Scalc";
import Mcalc from "./Mcalc";
import Jagalkin from "./Jagalkin";
import jagalkin from "./Jagalkin";
import CriterialTable from "./CriterialTable";


const Table = () => {

    const [LinkZminni, setLinkZminni] = useState(0)
    const [HowManyFunction, setHowManyFunction] = useState()
    const [HowManyInput, setHowManyInput] = useState([])
    const [MassiveFunctions, setMassiveFunctions] = useState([])
    const [rowMassive, setrowMassive]= useState([])
    const [zminniMassive, setzminniMassive]= useState([])
    const [FinalResult, setFinalResult] = useState([])
    const [Finish, setFinish] = useState(false)
    const [Linom, Setlinom] = useState([])
    function changeZminni(value){
        setLinkZminni((value))

    }

    function changeHowMany(value){
        setHowManyFunction(value)



        let setMassive = [];
        let MassiveForFucntion = [];
        for (let i = 0; i < value; i++) {
            setMassive.push(i);
            MassiveForFucntion[i] = [];
        }
        setHowManyInput(setMassive);
        setMassiveFunctions(MassiveForFucntion);
    }

    function setFunctions(value, index){
        let Numbered = value.split("");
        MassiveFunctions[index] = [];
        for (let i = 0; i < Numbered.length; i++) {
           MassiveFunctions[index][i] = Number(Numbered[i]);
        }

        console.log(MassiveFunctions)
    }

    function start(){

        for (let i = 0; i < LinkZminni; i++) {
            zminniMassive[i] = i;

        }

        for (let i = 0; i < MassiveFunctions.length; i++) {
            FinalResult[i] = [];
        }
         let x = createFullTable(Number(LinkZminni),Math.pow(2,Number(LinkZminni)), MassiveFunctions )[1]
         let ForCalc = createFullTable(Number(LinkZminni),Math.pow(2,Number(LinkZminni)), MassiveFunctions )[2]
         console.log(ForCalc)
         setrowMassive(x);

         MassiveFunctions.forEach((value, index, array)=>{
            FinalResult[index][0] = TzeroCalc(value);
            FinalResult[index][1] = ToneCalc(value);
            FinalResult[index][2] = Scalc(value);
            FinalResult[index][3] = Mcalc(ForCalc,value,Number(LinkZminni));
            FinalResult[index][4] = Jagalkin(value,ForCalc,Number(LinkZminni))[0];
            Linom[index] = Jagalkin(value,ForCalc,Number(LinkZminni))[1];
            console.log(Linom[index])
         })

        console.log(FinalResult)
        setFinish(true)
    }





    return (
        <div className={cl.Table}>
            <div className={cl.Form}>
                <div>
                    <input type="number" placeholder="Количество перменных" value={LinkZminni} onChange={(e) => {
                        changeZminni((e.target.value))
                    }}/>

                    <input type="number" placeholder="Количество функций" value={HowManyFunction} onChange={(e) => {
                        changeHowMany((e.target.value))
                    }}/>
                </div>
                <div>
                    {
                        HowManyInput.map((value, index, array)=>
                            <input  onChange={(event)=>{setFunctions(event.target.value, index)}} placeholder={"function: " + (index)}  type="number" />
                        )
                    }
                </div>
                <div className="btn">
                    <div className="btn">
                        <button onClick={start}>Старт</button>
                    </div>
                </div>
            </div>
            <div className="Result">
                {`Result:`}
                <div>
                    <div className="OutX">{zminniMassive.map((e, index) =>
                        <div>{`x` + (1 + index)} </div>
                    )}
                        <div style={{display:"flex" , fontSize: "16px", gap: "14px", fontWeight: "0"}}>{MassiveFunctions.map((value, index, array)=><p2>f{index} </p2>)}</div>
                    </div>
                    {rowMassive.map((e, index, array) =>
                        <div style={{letterSpacing: "8px"}} className="outTable">
                            {e}
                        </div>
                    )}
                </div>
            </div>
            {Finish ? <CriterialTable funcsss={MassiveFunctions} linom={Linom} func={FinalResult}></CriterialTable> : null}
        </div>
    );
};

export default Table;