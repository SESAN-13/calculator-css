let output = document.getElementById('inputtext')

let calculate =  function cal(num){
    output.value= output.value + num
}

let result = function re(){
    try{
        output.value=eval(output.value)

    }
    catch(err){
        output.value='err'
    }
}

function clr(){
    output.value= ' '
}
