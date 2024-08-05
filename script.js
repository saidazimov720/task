function reducebyNurbek( cb ,initVal, arr) {
    let res = initVal;
    for (let i = 0; i < arr.length; i++) {
        res = cb(res, arr[i], i, arr);
    }
    return res;
}

const num = [1, 33, 23, 3, 213, 312, 312, 321];

let sum = reducebyNurbek(
     (acc, currNum, i, arr) => {
        acc.push([currNum, arr[i + 1]]);
        return acc;
    },
    [],
    num
);


console.log(sum);