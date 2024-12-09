import React, {useCallback, useEffect, useRef, useState} from 'react';
import Rules from './assets/RulesOfMachine.json';
import cl from "./MakKlaski.module.css";





const MachineOfTuring = () => {

    const [inputData, setInputData] = useState(0);
    const [resultActive, setResultActive] = useState(false);
    const [wayArrayState,setWayArrayState] = useState("");

    const regex = /^\((q\d+)\)([0-9]|a0)([LR])$/;
    const wayArray = [];



    function tape(number){
        let tapeLine = [];
        let currentState = "q1"
        let currentIndexOfElement;
        tapeLine.push("a0")
        tapeLine = [...tapeLine, ...number.split("")]
        tapeLine.push("a0")


        currentIndexOfElement = tapeLine.length-2

        while (true) {
            let currentAciton = Rules[currentState][tapeLine[currentIndexOfElement]];
            const splitAction = currentAciton.match(regex);
            const memoryOfCurrentElement = tapeLine[currentIndexOfElement];
            wayArray.push(currentAciton)

            tapeLine[currentIndexOfElement] = splitAction[2];

            if(memoryOfCurrentElement === "a0"){
                if(currentIndexOfElement === 0){
                    tapeLine.unshift("a0")
                    currentIndexOfElement++;
                }
            }


            if(splitAction[1] === "q0"){
                break;
            }


            if( splitAction[3] === "L"){
                currentIndexOfElement--;
            }else if( splitAction[3] === "R"){
                currentIndexOfElement++;
            }

            currentState = splitAction[1];
            console.log(currentAciton)
            console.log(tapeLine)
        }



        console.log("Reuslt: ", tapeLine)
        console.log("Reuslt: ", wayArray)

        tapeLine.pop()
        tapeLine.shift()



        let result = "";

        tapeLine.forEach((value,index)=>{
            result += value;

        })

        return result
    }





    return (
        <div className={cl.Table}>
            <div style={{
                position :"relative",
                display:"flex",
                alignItems:"center",
                justifyContent:"end"
            }}>
                {
                    <div style={{
                        display: "flex",
                        gap: "10px",
                        position :"absolute",
                        marginTop:"20px",
                        left:"0px",
                    }}>
                    </div>
                }
                <div className={cl.Arrow}>

                </div>
            </div>
            <div className={cl.Form}>
                <input placeholder={"number"} value={inputData} onChange={(e) => {
                    setResultActive(false)
                    setInputData(e.target.value)
                }}/>
                <button onClick={() => resultActive ? setResultActive(false) : setResultActive(true)}>Calculate</button>
                <div>
                    {resultActive && `Result: ${tape(inputData.toString())}`}
                </div>
            </div>
        </div>
    );
};

export default MachineOfTuring;