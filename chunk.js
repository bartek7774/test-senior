function chunk(arr,n){
  var _arr=[];
  return arr.reduce((acc,cur,idx,original)=>{
    // console.log(acc,idx,Math.floor(Math.round(idx/3)),idx%3);
    if(original.length===idx-1){
      acc.push(_arr.slice());
      return acc;
    }
    if(Math.floor(Math.round(idx%n))===0){
      acc.push(_arr.slice());
      _arr=[];
    } 
    
    _arr.push(cur);
    
    return acc;
  },[]);
}
module.exports=chunk;