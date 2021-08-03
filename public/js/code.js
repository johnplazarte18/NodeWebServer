const selectCountry = document.querySelector('#country');
const selectMedallas = document.querySelector('#medal');

$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    url: "http://localhost:3000/paises",
    dataType: "json",
    success: function (data) {
        data.forEach((element) => {
            option = document.createElement('option');
            option.value = element.iso3
            option.text = element.pais
            selectCountry.appendChild(option)
        });
    },
    error: function (data) {
        alert("Ocurrió un error al intentar obtener los países");
    },
});


$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    url: "http://localhost:3000/medallas",
    dataType: "json",
    success: function (data) {
        data.forEach((element) => {
            option = document.createElement('option');
            option.value = element.medalla
            option.text = element.medalla
            selectMedallas.appendChild(option)
        });
    },
    error: function (data) {
        alert("Ocurrió un error al intentar obtener las medallas");
    },
});

/*selectElement.addEventListener('change', (event) => {
    const resultado = document.querySelector('.resultado');
    resultado.textContent = `Te gusta el sabor ${event.target.value}`;
});*/