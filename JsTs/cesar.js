function generateAlphabet(start,end){
    let alph = '';
    for(let i = start; i<=end;i++){
        alph+=String.fromCharCode(i)
    }
    return alph
}

function getNewIndex(index,k){
    return (index + k) % 26;
}


function caesarCipher(s, k) {
    //edge case lul, no ops 
    if(k==0 || k==26) return s
    
    let lowercaseArray  = Array.from(generateAlphabet(97,127))
    let uppercaseArray  = Array.from(generateAlphabet(65,90))
    
    s = Array.from(s)
    k %= 26
    let ans = s.reduce((acc,current) =>{
        let codePoint = current.charCodeAt(0)
        //lower
        if(codePoint >=97 & codePoint <= 122){
            let newIndex = getNewIndex(lowercaseArray.indexOf(current),k)  
            acc+=lowercaseArray[newIndex]
        //upper
        }else if(codePoint >=65 & codePoint <= 90){
            let newIndex = getNewIndex(uppercaseArray.indexOf(current),k )
            acc+=uppercaseArray[newIndex]
        //none
        }else{
            acc+=current
        }
        return acc
    },"") 
    // console.log(ans)
    return ans

}

// let r1 = caesarCipher("middle-Outz",2) //okffng-Qwvb
// if(r1==='okffng-Qwvb') console.log('Y');