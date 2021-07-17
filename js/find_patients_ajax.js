var buttonAjax = document.querySelector("#ajax");
buttonAjax.addEventListener("click", function() {
   
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.send();
    xhr.addEventListener("load", function() {
        var response = JSON.parse(xhr.responseText);
        response.forEach(translateKeys);
        response.forEach(addPatient);
    });
});

function translateKeys(object) {
    let keys = Object.keys(object);
    let newKeys = {nome: "name", peso: "weight", altura: "height", gordura: "fat", imc: "bmi"};
    keys.forEach(function(key) {
        
        object[newKeys[key]] = object[key];
        delete object[key];
    })

}
