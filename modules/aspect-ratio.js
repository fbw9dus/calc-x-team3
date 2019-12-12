export  var oWidth = document.querySelector('#ratio_1')
export  var oHeight = document.querySelector('#ratio_2')




export  var newValue[0] = document.querySelector('#ratio_result_width')
export  var resultHeight = document.querySelector('#ratio_result_height')

oWidth.addEventListener("keyup", calculateAspectRatio)
oHeight.addEventListener("keyup", calculateAspectRatio)
resultWidth.addEventListener("keyup", calculateAspectRatio)
resultHeight.addEventListener("keyup", calculateAspectRatio)


export function calculateAspectRatio(originalWidth, originalHeight, newValues) {
    let originalWidth= parseInt(oWidth.value)
    let originalHeight = parseInt(oHeight.value)

    let resultWidth = newValues[0];
    let resultHeight = newValues[1];
  
    if ((originalWidth > 0) && (originalHeight> 0)) {
        newValues.forEach(newValue => {
            if ((newValue.classList.contains("height")) && (newValue.value > 0)) {
                return resultWidth.value = ((originalWidth / originalHeight) * newValue.value).toFixed(2);
                
            } else if ((newValue.classList.contains("width")) && (newValue.value > 0)) {
                newValue.style.outline = "pink";
                return resultHeight.value = ((originalHeight / originalWidth) * newValue.value).toFixed(2);
            }
        })
    }
}

