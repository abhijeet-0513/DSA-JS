const memo=['hello','everyone','hi','memo','bye','hello','everyone','hi','memo','bye']
function findMemo(array){
  let t0=performance.now()
  for (let i = 0; i < array.length; i++) {
    if(array[i]==='memo'){
      console.log(i, 'Found memo')
      break
    }
    
  }
  let t1=performance.now()
  console.log(`call to find memo is ${t1-t0} miliseconds`)
}
findMemo(memo)