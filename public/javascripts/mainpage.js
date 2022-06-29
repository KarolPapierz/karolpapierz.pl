
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}


var i = 0
var counter= 0
function rainbow(){
    const combo = document.getElementById("combo")
    const interweb = document.getElementById("rainbow")
    let text = interweb.innerText
    text = text.replaceAt(i-1, text.charAt(i-1).toLowerCase())
    text = text.replaceAt(i, text.charAt(i).toUpperCase())
    interweb.innerHTML = text
    i=i+1
    if(i>text.length){
        i=0
        counter=counter+1
        combo.style.color="red"
        combo.innerHTML = "    x"+ counter
    }
}



