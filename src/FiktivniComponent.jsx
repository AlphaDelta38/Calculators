import React, {useEffect, useState} from 'react';
import createFullTable from "./createFullTable";
import CreateWithOut from "./CreateWithOut";







const FiktivniComponent = () => {
    const [boolfunction, setboolfunction] = useState("");
    const [zminni, setzminni] = useState();
    const [dd, setdd] = useState(false);
    const [gg, setgg] = useState(true);
    const [zminniMassive, setZminniMassive] = useState([]);
    const [buttonacitivity, setbuttonacitivity] = useState(true);
    let forCheckWord;
    let forOtherSolve;
    let [costumerFunction, setcostumerFunction] = useState([]);
    const [rowMassive, setRowMassive] = useState([]);
    const [tempd, settemp] = useState(0);
    const [ForCalc, setForCalc] = useState([]);
    let [suttevd, setsutevd] = useState([]);
    let [fiktivnd, setfiktivnd] = useState([]);
    const [boolNValue, setboolNValue] = useState(true);
    const withouthfikti = [];


    const [newTable, setNewTable] = useState([]);
    const newCostumerFunction = [];

    function check(e) {


        forCheckWord = e.split("")[e.length - 1];
        if (e.length <= Math.pow(2, zminni) && Number(forCheckWord) === 0 || e === "") {
            setboolfunction(e.replace(/\D/g, ""));
            if (e.length > tempd && e.length !== 0) {
                setcostumerFunction([...costumerFunction, Number(forCheckWord)]);
            }


        } else if (e.length <= Math.pow(2, zminni) && Number(forCheckWord) === 1 || e === "") {
            if (e.length > tempd && e.length !== 0) {
                setcostumerFunction([...costumerFunction, Number(forCheckWord)]);
            }
            setboolfunction(e.replace(/\D/g, ""));
        }
        if (e.length < tempd) {
            const newCostumerFunction = [...costumerFunction];
            newCostumerFunction.pop();
            setcostumerFunction(newCostumerFunction)
        }


        if (e.length === 0) {
            setdd(false);
            setcostumerFunction([]);
        } else {
            setdd(true);
        }
        if (e.length === Math.pow(2, zminni)) {
            setbuttonacitivity(false);
        } else {
            setbuttonacitivity(true);
        }

        settemp(e.length);

    }

    function checktwo(e) {
        console.log(e);
        setzminni(e);

        if (e <= 0) {
            setgg(true);
        } else {
            setgg(false);
        }
    }


    async function toCalculate() {

        if(Number(zminni) === 1){
            setboolNValue(false)
        }else{
            setboolNValue(true)
        }

        let massive = [];
        for (let i = 0; i < zminni; i++) {
            massive[i] = i;
        }
        setZminniMassive(massive);
        forOtherSolve = Math.pow(2, zminni);
        setRowMassive(createFullTable(zminni, forOtherSolve, [boolfunction])[1]);
        let x;
        x = await createFullTable(zminni, forOtherSolve, [boolfunction])[2];
        await setForCalc(x)

        CalcFiktivni(x);
    }


    useEffect(() => {
        console.log(ForCalc)
    }, [ForCalc]);


    let counter = 0;
    let counetSuttevi = 0;
    let fiktivni = [];
    let suttevi = [];
    let bool = false;


    function CalcFiktivni(x) {
        // console.log(x)
        for (let i = 0; i < Number(zminni); i++) {
            for (let j = 0; j < forOtherSolve; j++) {
                if (x[i][j] === 0) {
                    // console.log("i", i, "j", j)
                    for (let k = 0; k < forOtherSolve; k++) {
                        if (x[i][k] === 1 ) {
                            // console.log("i", i, "k", k)
                            for (let l = 0; l < Number(zminni); l++) {
                                if (x[l][j] === x[l][k] && l !== i) {
                                    // console.log(x[l][j] ,  x[l][k])
                                    counter++
                                }
                                if (counter + 1 === Number(zminni)) {
                                    if (costumerFunction[j] === costumerFunction[k]) {
                                        console.log("j " + (j+1), "k " +(k+1), "i " +(i+1))
                                        counetSuttevi++;
                                        bool = true;
                                        break;

                                    }
                                }
                            }
                            counter = 0;
                        }
                        if (bool) {
                            break
                        }
                    }
                }
                bool = false;
            }

            if (counetSuttevi === forOtherSolve / 2) {
                fiktivni.push(i);

            } else {
                suttevi.push(i)
            }
            counetSuttevi = 0;
        }
        console.log("Fiktivni", fiktivni)
        console.log("suttevi", suttevi)
        for (let i = 0; i < suttevi.length; i++) {
            withouthfikti[i] = [1];
            console.log(i, "dadada")
        }

        setsutevd([...suttevi])
        setfiktivnd([...fiktivni])
        let Without = CreateWithOut(suttevi, fiktivni, ForCalc, zminni, forOtherSolve);
        console.log(Without)
        createNewTabe(Without, x);

    }



    async function createNewTabe(without,) {

        try {
            console.log(without)
            let WithOutRowMassive = [];
            for (let i = 0; i < forOtherSolve; i++) {
                WithOutRowMassive[i] = [];
            }

            for (let i = 0; i < forOtherSolve; i++) {
                for (let j = 0; j < suttevi.length; j++) {
                    WithOutRowMassive[i][j] = without[j][i]

                }
            }

            let sorted = WithOutRowMassive;

            let x = await createFullTable(suttevi.length, Math.pow(2, suttevi.length), [boolfunction])[2];
            console.log(x)

            let indexing = [];
            let encountered = {};


            const forSorting = (item, index) => {
                console.log(item.toString())
                let key = item.toString();
                if (!encountered[key]) {
                    encountered[key] = true;
                    return true;
                }
                indexing.push(index)
                return false;

            }


            sorted = WithOutRowMassive.filter((value, index, array) => forSorting(value, index))

            console.log(WithOutRowMassive)
            console.log(sorted)
            for (let i = 0; i < costumerFunction.length; i++) {
                newCostumerFunction.push(costumerFunction[indexing[i]])
            }

            console.log(indexing)
            let d = await createFullTable(suttevi.length, Math.pow(2, suttevi.length), [newCostumerFunction])[1];
            setNewTable(d)
            console.log(d)
            console.log(without)
        } catch (e) {

        }
    }








    return (
        <div className="App">
            <div className="Form">
                <div>
                    Введите количество переменных
                    <input disabled={dd} value={zminni} onChange={(e) => {
                        checktwo(e.target.value)
                    }} type="number" placeholder="Количество перменных"/>
                </div>
                <div>
                    Введите булевую функцию только 0 и 1
                    <input disabled={gg} type="number" value={boolfunction} onChange={(e) => {
                        check(e.target.value)
                    }} placeholder="Example: 101010101010"/>
                </div>
                <div className="btn">
                    <button disabled={buttonacitivity} onClick={toCalculate}>Старт</button>
                </div>
            </div>
            <div className="Result">
                {`Result:`}
                <div>
                    <div className="OutX">{zminniMassive.map((e, index) =>
                        <div>{`x` + (1 + index)} </div>
                    )}
                        <div> -f</div>
                    </div>
                    {rowMassive.map((e, index, array) =>
                        <div style={{letterSpacing: "8px"}} className="outTable">
                            {e}
                        </div>
                    )}
                </div>
                <div className="OutX">{fiktivnd.map((e, index) =>
                    <div>{`Fiktivni: ` + (e + 1)} </div>
                )}
                </div>
                <div className="OutX">{suttevd.map((e, index) =>
                    <div>{`suttevi: ` + (e + 1)} </div>
                )}
                </div>
            </div>
            <div className="Result">
                {`New Table:`}
                <div>
                    <div className="OutX">{boolNValue && suttevd.map((e, index) =>
                        <div>{`x` + (1 + index)} </div>
                    )}
                        <div> -f</div>
                    </div>
                    {boolNValue && newTable.map((e, index, array) =>
                        <div style={{letterSpacing: "8px"}} className="outTable">
                            {e}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FiktivniComponent;