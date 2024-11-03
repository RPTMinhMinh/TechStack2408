let testPromise = new Promise(function(resolve, reject){
    let number = 10 
    if(number >= 5){
        resolve('Number > 5')
    }else{
        reject('nguvl')
    }
});

// testPromise.then(function(result){
//     console.log('Promise chayj thanh cong')
//     console.log('Ket qua', result)
// }).catch(function(error){
//     console.log('ngu')
//     console.log('Ket qua: ',error)
// }).finally(function(){
//     console.log('dung hay sai thi cung hien ra cho t')
// })



async function returnResultPromise(){
    try{
        let result = await testPromise()
        console.log(result)
    }catch(error){
        console.log(error)
    }finally{
        console.log('ket thuc')
    }
}
returnResultPromise()