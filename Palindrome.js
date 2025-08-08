//Case 1
function ispal(str){
    let reverse = str.split('').reverse().join('');
    return str.toLowerCase() === reverse.toLowerCase();
}
console.log(ispal('car'));

//Case 2
function isPalin(newStr){
    let left = 0;
    let right = newStr.length-1;
    if(newStr[left] !== newStr[right]){
        return false;
    }else{
        left++;
        right--;
    }
    return true;
}
console.log(isPalin('eye'));
