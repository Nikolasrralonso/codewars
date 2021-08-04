function iqTest(n){
    let a=[];
    let e =[];
    let o =[]
    a=n.split(" ");
    for(let i=0;i<a.length;i++)
    {
    if(a[i]%2==0){ e.push(i)}
    else
    o.push(i);
    }
    if(e.length>1)
    return o[0]+1;
    
    return e[0]+1;
  }
