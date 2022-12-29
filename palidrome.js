//madam - > madam - true
//dad -> dad
//sun -> nus - false

//using predefined javascript function
// function pali(str){
//     let reverseStr = str.split("").reverse().join("");
//     return str.toLowerCase() === reverseStr.toLowerCase();
// }

//console.log(pali("levelll"));

//case2 - using loop

function palindrom(str) {
    let newStr = str.toLowerCase();
    let left = 0;
    let right = newStr.length - 1;

    while(left < right) {
        if(newStr[left] !== newStr[right]) return false;
        left++;
        right--;
    }
    return true;
};

console.log(palindrom("levela"))