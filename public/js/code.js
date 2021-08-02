var lblPaises = [];
$.ajax({
    type: "GET",
    contentType: "application/json; charset=utf-8",
    url: "http://localhost:4000/paises/",
    dataType: "json",
    success: function (data) {
        data.forEach((element) => {
            lblPaises.push(element.paises);

            //mostrar paises
            $("#lista-paises").append('');
        });
        
    },
    error: function (data) {
        alert("Ocurrió un error al intentar obtener los países");
    },
});