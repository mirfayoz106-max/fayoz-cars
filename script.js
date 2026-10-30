
const params = new URLSearchParams(window.location.search);
const car = params.get("car");

const carInput = document.getElementById("carName");

if (carInput && car) {
    carInput.value = car;
}

const form = document.getElementById("myForm");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        document.getElementById("result").textContent =
            "Спасибо! Ваша заявка заполнена.";

        form.reset();
    });
}
