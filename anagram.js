//anagram or not
//priti - itpria //true

//Method 1

//condition are
//step1 - convert both string to uppercase to lowercase
//step2 - check length of both strings
//step3 - spit, sort then join string for both
//step4 - compare both if it is same return true otherwise false

// function isAngram(str1, str2){
//     let newStr1 = str1.toLowerCase();
//     let newStr2 = str2.toLowerCase();
//     if(newStr1.length !== newStr2.length) return false;
    
//     newStr1 = newStr1.split('').sort().join('');
//     newStr2 = newStr2.split('').sort().join('');
    
//     return newStr1 === newStr2;
    
// }

// console.log(isAngram('hello', 'lleoh'));

//Method 2

//step1 - convert both string to uppercase to lowercase
//step2 - check length of both strings
//string1 = 'hello'
//{h:1, e: 1, l: 2, o: 1}

function checkAnagram(str1, str2){
    let newStr1 = str1.toLowerCase();
    let newStr2 = str2.toLowerCase();
    if(newStr1.length !== newStr2.length) return false;

    var counter = {};
    for(let letters of newStr1){
        counter[letters] = (counter[letters] || 0) + 1;
    }

    for(let items of newStr2){
        if(!counter[items]) return false;

        counter[items] -= 1;
    }

    return true;
    
   
}
console.log(checkAnagram('mobile', 'elimboa'));
