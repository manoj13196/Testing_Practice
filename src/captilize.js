export function captilize(str){

    if(typeof str!=='string'|| str.length===0){
        throw new Error('Invalid input');  
    } 

    return str.charAt(0).toUpperCase() +str.slice(1);

}