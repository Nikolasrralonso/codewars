

function maskify(cc){
    let str=String(cc);
    let last=str.slice(-4);
    return last.padStart(str.length,'#');
}
