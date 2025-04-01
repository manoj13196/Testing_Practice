export default function analyzeArray(arr){
    if(arr.length===0) return {average:NaN,min:undefined, max:undefined, length:0};

    const sum=arr.reduce((total,num)=>total+num,0);

    return {
        average: sum/arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    };
}