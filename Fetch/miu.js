// const singleMaximum = (arr) => {
//     returnValue = 0
    
//     var a = Math.max(...arr)
//     for (i=0; i< arr.length; i++) {
//         if (arr[i] == a) {
//             returnValue++;
//         }        
//     }
//     returnValue == 1 ? console.log(1) : console.log(0)
// }

// singleMaximum([1,2,3,4]);
 

// const arr = [1,2,3,1,0]
// const singleMaximum = (arr) => {
//     max = arr[0];
//     outcome = 0
//     for(i=1; i<arr.length; i++) {
//         arr[i] > max ? max = arr[i] : max = max;
//     }
//     for(i=0; i<arr.length; i++) {
//         arr[i] == max ? outcome++ : outcome = outcome;
//     }
//     outcome == 1 ? console.log(1) : console.log(0)
// }

// singleMaximum([1,2,3,1,8]);

// const isSequencedArray = (arr, m, n) => {
//      outcome = 1;
//     if (arr[0]!==m || arr[arr.length-1]!==n) {
//         console.log("0")
//     } else{
//     for (i=1; i<arr.length; i++) {        
//         if (arr[i] == arr[i-1]+1 || arr[i] == arr[i-1]) {
//             outcome++
//         }
//     }
//         outcome==arr.length? console.log(1):console.log('nan')
//     }
// }
// isSequencedArray([-5,-5,-4,-4,-4,-3,-3,-2,-2,-2], -5, -2);
// isSequencedArray([-5,-4,-3,-2], -5, -2);


// const checkConcatenatedSum = (num, catlen) => {
// const arr = Array.from(String(num), Number)
// vul = ''
//     for (i=0; i<arr.length; i++) {
//         for (v=0; v<catlen; v++){
//             vul += `${arr[i]}`
//         }
//         vul += '+'
//     }
//     vul += '0'
//     eval(vul)==num? console.log(1):console.log(0)
//     console.log(vul)
// }
// checkConcatenatedSum(297, 3);

const checkConcatenatedSum = (num, catlen) => {
arr = Array.from(String(num), Number)
int = num
vul =''
        for (i=0; i<arr.length; i++) {            
            for (v=0; v<catlen; v++){
                vul += `${int%10}`
            }
            vul += '+'
            int = Math.trunc(int/10)
        }
        vul += '0'
        eval(vul)==num? console.log(1):console.log(0)
    }
    checkConcatenatedSum(13332, 4);

// const largestAdjacentSum = (arr) => {
//     max = (arr[0] + arr[1]);
//       for (i=1; i<arr.length-1; i++) {        
//         (arr[i]) + (arr[i+1]) > max ? max = (arr[i] +arr[i+1]): max=max        
//     }
//     console.log(max);
// }
// largestAdjacentSum([1,2,3,4]);
// largestAdjacentSum([18, -12, 9, -10]);
// largestAdjacentSum([1, 1, 1, 1, 1, 1, 1, 1, 1]);
// largestAdjacentSum([1,1,1,1,1,2,1,1,1]);