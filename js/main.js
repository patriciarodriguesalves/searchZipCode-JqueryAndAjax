function zipQuery(){
    $(".spinner").show();
    var zip = document.getElementById("zip").value;
    var url = "https://viacep.com.br/ws/" + zip + "/json/";

    $.ajax({
        url: url,
        type: "GET",
        success: function(response){

            $("#title-zip").html("Zip Code " + response.cep);
            $("#address").html(response.logradouro);
            $("#neighborhood").html(response.bairro);
            $("#locality").html(response.localidade);
            $("#uf").html(response.uf);     
            
            $(".zip-div").show();
            $(".spinner").hide();
        }
    })
}

$(function(){
    $(".zip-div").hide();
    $(".spinner").hide();  
})

