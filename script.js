

function isPal(value){
    let palArr = value.split("");
    let reverseVal="";
    for(let i=0; i<palArr.length; i++){
        if(palArr[i]===' ') palArr.splice(i,1);
    }
    let inputValue = palArr.join('').toLowerCase();
    reverseVal = palArr.reverse().join('').toLowerCase();
    if(inputValue.indexOf(reverseVal)!=-1)
        return true;
    else return false;
}

console.log(isPal('А роза упала на лапу Азора'));