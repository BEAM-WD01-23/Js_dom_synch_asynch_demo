//i 
    //synchronous ...
    // let one = 'one';
    // let two = 'two';

    // console.log('three');//goes first
    // console.log(one);
    // console.log(two);
    //
    //simple asynchronous ....
    let one = 'one';
    let two = 'two';
    setTimeout(function(){
        //console.log('three');
    },2000);
    //console.log(one);
    //console.log(two);
    //
//ii, a simple synchronous function
    //
    function add(a,b){
        return a + b;
    }
    let result = add(3,7);
    //console.log(result);
    //
    //make it asynchronous
    async function addIt(a,b){
        return a + b
    }
    async function addFunction(){
        let result1 = await addIt(3,7);
        //console.log(result1);//await
    }
    addFunction();//10
    //
//
    function synchronousFunction(){
        for(let a=0; a<=4; a++){
            //console.log(a);
        }
    }
    synchronousFunction();
    console.log('executed after the loop is finished');
    //
    //asynchronous example
    function delay(delay_interval){
        return new Promise(resolve => setTimeout(resolve, delay_interval))
    }
    async function asynchronousFunction(){
        for(let a=0; a<=4; a++){
            //console.log(a);
            await delay(2000);
        }
    }
    asynchronousFunction();
    //console.log('executed after the loop is finished');
    //
//Promise
    //
    let result2 = function(score){
        return new Promise(function(resolve, reject){
            if(score > 60){
                resolve('you have passed!')
            }else{
                reject('you failed!')
            }
        })
    }
    async function showGrade(){
        try{
            const response = await result2(40)
            //console.log(response);
        }catch(err){
            //console.log(err)
        }
    }
    showGrade();
    //
// with API
    // fetch() ...
    let url = 'https://random-word-api.herokuapp.com/all';
    fetch(url)
    .then(response=>response.json())
    .then(result =>{
        //console.log(result)
    }).catch(err=>{
        //console.log(err);
    })

    //
    //
    async function fetchData(){
        try{
            const URL = 'https://random-word-api.herokuapp.com/all';
            const response = await fetch(URL)
            const data = await response.json();
            console.log(data);
        }catch(err){
            console.log(err)
        }
    }
    fetchData()

    

    