export default function caesarCipher(str,shift){
    return str
    .split('')
    .map((char)=>{
        if(char.match(/[a-z]/i)){
            let code=char.charCodeAt(0);
            let base=code>=65&&code<=90?65:97;
            return String.fromCharCode(((code-base+shift)%26)+base);
        }
        return char;
    })
    .join("");
}