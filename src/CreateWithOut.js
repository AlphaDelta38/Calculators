


function createNewTable(suttevi, fiktivni, oldMassived, zminni, forOtherSolve)
{
    console.log("adadaadaa     " + suttevi)
    console.log("adadaadaa     " + fiktivni)
    let checklast=0;
    let ocuntdd = 0;
    let newmassive = [];
    for (let i = 0; i < suttevi.length+1; i++) {
        newmassive[i]  = [];
    }

    try {
        for (let i = 0; i < Number(zminni); i++) {
            for (let j = 0; j < forOtherSolve; j++) {
                    if(!fiktivni.includes(i)){
                        newmassive[ocuntdd][j] = oldMassived[i][j];
                        checklast++;
                        console.log(checklast)
                }
            }
            console.log(checklast === forOtherSolve)
            if(checklast === forOtherSolve){
                console.log("dasdsaadadadadadsasdad411414141414144142142135345345345345")
                ocuntdd++;
                checklast = 0;
            }

        }
        console.log("dadadadadadadadad")
        console.log(newmassive)
        return newmassive;
    }catch (e) {
    }



}

export  default  createNewTable;