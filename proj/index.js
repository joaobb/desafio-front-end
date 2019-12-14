const $quant_picker_inc = document.getElementsByClassName("quant_picker__counter__inc")[0]
const $quant_picker_dec = document.getElementsByClassName("quant_picker__counter__dec")[0]
const $quant_display = document.getElementsByClassName("quant_picker__disp")[0]

$quant_picker_inc.onclick = () => updateSctikerQuant(1)
$quant_picker_dec.onclick = () => updateSctikerQuant(-1)
$quant_display.onkeyup = () => updateSctikerQuant()

function updateSctikerQuant (change = 0) {
    if ( Number($quant_display.value) + change <= 0 ) $quant_display.value = 0;
    else $quant_display.value = Math.trunc(Number($quant_display.value)) + change

    return false
}