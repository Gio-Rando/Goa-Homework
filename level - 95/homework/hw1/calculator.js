// const calc = (a,b,oper)=>{
//     return eval(`${a} ${oper} ${b}`)
// }

// module.exports = {calc}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const filter = (lst,fnc)=>{
    let res=[]
    for(let i of lst){
        if(fnc(i)){
            res.push(i)
        }
    }
    return res
}

export {filter}