$(document).ready(function () {
    $(document).bind('keypress', function(e) {
        if(e.keyCode==13){
             $('#button').trigger('click');
         }
    });


	$("#button").click(function () {
		let inputValue = $("#search").val();
		$("#textOutput").load(`./assets/data/${inputValue.toLowerCase()}.txt`, function (response, status, xhr) {
			if (status == "error") {
				var msg = "There was no match in our database. Please, make sure you typed the name of the country correctly.";
				alert(msg);
			} else {
				$("h1").html(`This is what we found about ${inputValue.toUpperCase()}:`);
                $("#search").val("");
			}
		});
	});
});
