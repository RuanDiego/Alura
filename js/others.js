var pageTitle = document.querySelector("#title-header");
pageTitle.textContent = "Aparecida Nuticionista";

var tbody = document.getElementById("patient-table");
tbody.addEventListener("dblclick", function(event) {
    
    var element = event.target.parentNode;
    element.classList.add("fadeOut");
    setTimeout(function() {
        element.remove();
    }, 500)
});
