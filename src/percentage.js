export  var modulo_1 = document.querySelector('#modulo_1')
export  var modulo_2 = document.querySelector('#modulo_2')
export  var modulo_result = document.querySelector('#modulo_result')



 modulo_1.addEventListener("keyup", modulo)
 modulo_2.addEventListener("keyup", modulo)






export function modulo() {
    let moduloNum1 = parseInt(modulo_1.value)
    let moduloNum2 = parseInt(modulo_2.value)
    modulo_result.value = moduloNum1 % moduloNum2
}
//-------------------------------------------

export  var percentage_1 = document.querySelector('#percentage_1')
export  var percentage_2 = document.querySelector('#percentage_2')
export  var percentage_result = document.querySelector('#percentage_result')



 percentage_1.addEventListener("keyup", percentage)
 percentage_2.addEventListener("keyup", percentage)


export function percentage() {
    let preNum1 = parseInt(percentage_1.value)
    let preNum2 = parseInt(percentage_2.value)
    percentage_result.value = (preNum1 * preNum2) / 100
}


//---------------------------------------------------------------

export  var percentageOf_1 = document.querySelector('#percentageOf_1')
export  var percentageOf_2 = document.querySelector('#percentageOf_2')
export  var percentageOf_result = document.querySelector('#percentageOf_result')



 percentageOf_1.addEventListener("keyup", percentageOf)
 percentageOf_2.addEventListener("keyup", percentageOf)

export function percentageOf() {
    let preOfNum1 = parseInt(percentageOf_1.value)
    let preOfNum2 = parseInt(percentageOf_2.value)
    percentageOf_result.value = (preOfNum1 * 100) / preOfNum2
}


//--------------------------------------------------------------


export  var difference_1 = document.querySelector('#difference_1')
export  var difference_2 = document.querySelector('#difference_2')
export  var difference_result = document.querySelector('#difference_result')



difference_1.addEventListener("keyup", difference)
difference_2.addEventListener("keyup", difference)

export function difference() {

    let diffNum1 = parseInt(difference_1.value)
    let diffNum2 = parseInt(difference_2.value)
    let calc = diffNum2 - diffNum1;
    difference_result.value = (calc * 100) / diffNum1
    
}

 
