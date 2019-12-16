// Your code goes here!

import {modulo, percentage, percentageOf, difference} from './percentage.js'
import {calculateAspectRatio} from './aspect-ratio.js'


modulo()

percentage()

percentageOf()

difference()




var ratio_1 = document.querySelector('#ratio_1')
var ratio_2 = document.querySelector('#ratio_2')
var ratio_new_height = document.querySelector('#ratio_result_height')
var ratio_new_width = document.querySelector('#ratio_result_width')
var newValues = [ratio_new_width,ratio_new_height ]

newValues.forEach(input => {
    input.addEventListener('keyup', getResult)
})

function getResult(e) {
    var origWidth = parseInt(ratio_1.value)
    var origHeight = parseInt(ratio_2.value)
    calculateAspectRatio(origWidth, origHeight, newValues, e.target)
}
