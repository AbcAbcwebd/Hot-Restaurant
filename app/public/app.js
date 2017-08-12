$( document ).ready(function() {
    $("#make-reservation").click(function(){
    	event.preventDefault();
	    var resName = $('#reserve_name').val();
	    var resPhone = $('#reserve_phone').val();
	    var resEmail = $('#reserve_email').val();
	    var resObj = {
	    	name: resName,
	    	phone: resPhone,
	    	email: resEmail
	    };

	    $.post('http://localhost:3000/recieve-reservation',resObj,function() {
	    	console.log("Record sent");
	    });

	    window.location.href = "tables.html";
	});
});