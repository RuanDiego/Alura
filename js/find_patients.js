function findExp(base, text) {
    
    // to lower case
    base = base.toLowerCase();
    text = text.toLowerCase();
    
    var test = base.indexOf(text);
    if (test != -1) {
        return true;
    } else {
        return false;
    }
}

var input = document.querySelector("#patient-finder");
input.addEventListener("input", function() {

    var nameInfo = document.querySelectorAll(".name-info");
    var inputValue = this.value;
    nameInfo.forEach(function(htmlName) {
    
        if (!findExp(htmlName.textContent, inputValue)) {
            htmlName.parentNode.classList.add("hidden");
        } else {
            htmlName.parentNode.classList.remove("hidden");
        }
    });
});
