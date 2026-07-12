/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    try{
    const p1 = await promise1;
    console.log(p1)
    const p2 = await promise2;
    console.log(p2)
    return p1 + p2
    }
    catch(error){
        console.log(error.message)
    }
    
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */