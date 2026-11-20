function jsonStrToJson(str){

    try{
        return JSON.parse(str);
    }catch(error){
        console.log('Error occoured');
        console.log(error.massage);
        return {};
    }
    finally{
        console.log('Finally');
    }
}

let newObj2 = jsonStrToJson('{"A":; 1}');
console.log(newObj2);