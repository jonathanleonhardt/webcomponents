$(document).ready(function() {
	var fatoGato = "";

	$("#botaoAdicionar").click(function() {
		event.preventDefault();
		var item = $("#novo-item").val();
		$("#lista-mercado").append("<li>" + item + " <button class='remover-item'>Comprado</button></li>");
		$("#novo-item").val("");

		$.ajax({
			url: "https://cat-fact.herokuapp.com/facts",
			success: function(data) {
				if ( fatoGato === "") {
					var aleatorio = Math.floor(Math.random() * data.length);
					fatoGato = data[aleatorio].text;
					$("#fatos-gato").append("<p>" + fatoGato + "</p>");
				}
			},
			error: function() {
				$("#fatos-gato").append("<p>Erro ao obter resultado da API</p>");
			}
		});
	});

	$("#lista-mercado").on("click", ".remover-item", function() {
		$(this).parent().remove();
	});

	$("#lista-mercado").on("click", "li", function() {
		$(this).toggleClass("completed");
	});

});