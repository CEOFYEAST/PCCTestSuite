export function deepCopy(toCopy){
    return  JSON.parse(JSON.stringify(toCopy));
}