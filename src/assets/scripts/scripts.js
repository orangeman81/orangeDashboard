"use strict";

window.onload = function () {

    // collapsible
    var acc = document.querySelectorAll(".accordion");

    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            var collapsible = this.nextElementSibling;
            collapsible.classList.toggle("open");
            if (this.firstElementChild.innerHTML != "remove") {
                this.firstElementChild.innerHTML = "remove";
            } else {
                this.firstElementChild.innerHTML = "add";
            }
        });
    };

    // dropdown
    var dropdownTrigger = document.querySelectorAll(".dropdown-trigger");

    for (var i = 0; i < dropdownTrigger.length; i++) {
        dropdownTrigger[i].addEventListener("click", function () {
            var activeDropdown = document.querySelector(".dropdown.active");
            var dropdown = this.nextElementSibling;
            if (activeDropdown) {
                activeDropdown.classList.remove("active");
            }
            dropdown.classList.toggle("active");
        });
    };

    window.onclick = function (event) {
        var dropdowns = document.querySelectorAll(".dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('active') && !event.target.matches(".material-icons")) {
                openDropdown.classList.remove('active');
            }
        }
    };

};