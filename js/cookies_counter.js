

document.addEventListener("DOMContentLoaded",function(){
	document.getElementById("totalCount").innerText = Cookies.get("total");
//	document.getElementById("chocolateCount").innerText = Cookies.get("chocolate");
//	document.getElementById("lemonCount").innerText = Cookies.get("lemon");


	document.getElementById("addSugar").addEventListener("click",function(event){
		event.preventDefault();
		console.log(Cookies.get("total"));
	    let totalCount = ~~Cookies.get("total") + 1;
	    Cookies.set("total", totalCount);
	    document.getElementById("totalCount").innerText = totalCount;
	})

	document.getElementById("addChocolate").addEventListener("click",function(event){
		event.preventDefault();
		console.log(Cookies.get("total"));
	    let totalCount = ~~Cookies.get("total") + 1;
	    Cookies.set("total", totalCount);
	    document.getElementById("totalCount").innerText = totalCount;
	})

	document.getElementById("addLemon").addEventListener("click",function(event){
		event.preventDefault();
		console.log(Cookies.get("total"));
	    let totalCount = ~~Cookies.get("total") + 1;
	    Cookies.set("total", totalCount);
	    document.getElementById("totalCount").innerText = totalCount;
	})

  	document.getElementById("remove").addEventListener("click",function(){
    	Cookies.expire("total");
    document.getElementById("totalCount").innerText = 0;
  	}); 


//	document.getElementById("addChocolate").addEventListener("click",function(event){
//		event.preventDefault();
//		console.log(Cookies.get("chocolate"));
//	    let chocolateCount = ~~Cookies.get("chocolate") + 1;
//	    Cookies.set("chocolate", chocolateCount);
//	    document.getElementById("chocolateCount").innerText = chocolateCount;
//	})
//
//
//
//	document.getElementById("addLemon").addEventListener("click",function(event){
//		event.preventDefault();
//		console.log(Cookies.get("lemon"));
//	    let lemonCount = ~~Cookies.get("lemon") + 1;
//	    Cookies.set("lemon", lemonCount);
//	    document.getElementById("lemonCount").innerText = lemonCount;
//	})


});