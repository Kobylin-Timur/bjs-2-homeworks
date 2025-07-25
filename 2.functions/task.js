function getArrayParams(...arr) {
 let min = arr [0];
 let max = arr[0];
 let sum = 0;
 for (let i = 0; i < arr.length; i++) {
   if (arr[i] < min) {
     min = arr[i];
   }
   if (arr[i] > max) {
     max =arr[i];
   }
   sum += arr[i];
 }
 const avg = Number ((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}





function summElementsWorker(...arr) {
    if (arr.length === 0) return 0;
    return arr.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...arr) {
    if (arr.length === 0) return 0;
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return max - min;
}

function differenceEvenOddWorker(...arr) {
    if (arr.length === 0) return 0;

    let sumEven = 0;
    let sumOdd = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }

    return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
    if (arr.length === 0) return 0;

    let sumEven = 0;
    let countEven = 0;

    for (let num of arr) {
        if (num % 2 === 0) {
            sumEven += num;
            countEven++;
        }
    }

    return countEven === 0 ? 0 : sumEven / countEven;
}

function makeWork (arrOfArr, func) {

}

function makeWork(arrOfArr, func) {
    if (arrOfArr.length === 0) return -Infinity;

    let maxWorkerResult = func(...arrOfArr[0]);

    for (const arr of arrOfArr) {
        const currentResult = func(...arr);
        if (currentResult > maxWorkerResult) {
            maxWorkerResult = currentResult;
        }
    }

    return maxWorkerResult;
}