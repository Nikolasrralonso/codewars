// Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc){
    let str=String(cc);
    let last=str.slice(-4);
    return last.padStart(str.length,'#');
}
