$(document).ready(function(){

	$("#menu-icon").click(function(){
		console.log("inside click");
		if($("#menu-icon").hasClass("ion-android-menu")){
			$("#menu-icon").removeClass("ion-android-menu");
			$("#menu-icon").addClass("ion-android-close");
			$("#nav-bar").css("display", "block");
		}else{
			$("#menu-icon").removeClass("ion-android-close");
			$("#menu-icon").addClass("ion-android-menu");
			$("#nav-bar").css("display", "none");
		}
	});


});