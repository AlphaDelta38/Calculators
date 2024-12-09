import React, {useState} from 'react';
import cl from "./MakKlaski.module.css";




const BackPack = () => {

    const [parametrs, setParametrs] = useState({price: 0, weight: 0});
    const [items, setItems] = useState([])
    const Weight = 80;

    function addItem(){
        setItems([...items, {price: parametrs.price, weight: Number(parametrs.weight)}])
    }

    function deleteItem(id){
        let temp = [...items.filter((item,index)=>index !== id)]
        setItems(temp)
    }


    function calculateBackPack(){
        const sortedCoficient = [];

        items.forEach((value, index)=>{
            sortedCoficient.push({coefficient:value.price/value.weight, id: index+1, weight: Number(value.weight)});
        })

        sortedCoficient.sort((a, b) => b.coefficient - a.coefficient);
        let finalPrice = 0;
        let finalWeight = 0;

        let index = sortedCoficient.length-1;
        let resultMassive = []
        while (true){

            const calcItem = sortedCoficient[index]
            let calcItemMinWeight = 1;
            let tempAllOfWeight = 0;


            for (let i = 0; i < index; i++) {
                tempAllOfWeight += Number(sortedCoficient[i].weight);
            }

            tempAllOfWeight  += calcItemMinWeight;
            tempAllOfWeight  += finalWeight;

            if(tempAllOfWeight > Weight || tempAllOfWeight === Weight){
                finalPrice += calcItem.coefficient * calcItemMinWeight;
                resultMassive.push({weight: calcItemMinWeight, id: calcItem.id})
                finalWeight +=calcItemMinWeight;

                //if equals
                if(tempAllOfWeight === Weight){
                    for (let i = 0; i < index; i++) {
                        resultMassive.push({weight: sortedCoficient[i].weight, id:sortedCoficient[i].id})
                        finalPrice += sortedCoficient[i].coefficient * sortedCoficient[i].weight;
                        finalWeight +=sortedCoficient[i].weight;
                    }
                }

            }else{
                const needWeight = Weight+1 - tempAllOfWeight;
                console.log(needWeight, tempAllOfWeight, needWeight+1-tempAllOfWeight)
                finalPrice += calcItem.coefficient * needWeight;
                resultMassive.push({weight: needWeight, id: calcItem.id})
                finalWeight += needWeight;
                for (let i = 0; i < index; i++) {
                    resultMassive.push({weight: sortedCoficient[i].weight, id:sortedCoficient[i].id})
                    finalPrice += sortedCoficient[i].coefficient * sortedCoficient[i].weight;
                    finalWeight +=sortedCoficient[i].weight;
                }
                break;
            }

            if(finalWeight === Weight || index === 0){
                break;
            }
            index--;
        }


        console.log(sortedCoficient)
        console.log(resultMassive)
        console.log(finalPrice)
        console.log(finalWeight)



    }



    return (
        <div className={cl.Table}>
            <div style={{justifyContent: "start"}} className={cl.Form}>
                <labeL>price</labeL>
                <input value={parametrs.price}
                       onChange={(e) => setParametrs({weight: parametrs.weight, price: e.target.value})}
                       placeholder={"Цена"}/>
                <label>weight</label>
                <input value={parametrs.weight}
                       onChange={(e) => setParametrs({price: parametrs.price, weight: e.target.value})}
                       placeholder={"Вес"}/>
                <button onClick={() => addItem()}>add item</button>
                <button onClick={() => calculateBackPack()}>calculate</button>
            </div>
            <div style={{marginTop: "40px"}}>
            <label style={{fontSize: "24px"}}>items:</label>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    rowGap: "6px"
                }}>
                    {items.length > 0 && items.map((item, index) =>
                        <div  key={index}>{`id: ${index+1}  price: ${item.price} weight: ${item.weight}`} <button onClick={()=>deleteItem(index)} style={{marginLeft:"10px"}}>Удалить</button></div>
                    )}

                </div>
            </div>

        </div>
    );
};

export default BackPack;