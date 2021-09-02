// function parallax(element, distance, speed){
//     const item  = document.querySelector(element);
//     item.style.transform = `translateY(${distance * speed}px)`;

// }

// window.addEventListener("scroll", function(){
//     parallax(".jeder", window.scrollY, .9);
//     parallax(".small-rose", window.scrollY, 0.5);
//     parallax(".big-rose", window.scrollY, 0.2); 
    
// }); 


	function parallax(element, distance, speed){
	    const item  = document.querySelector(element);
	    item.style.transform = `translateY(${distance * speed}px)`;
	
	}

	window.addEventListener("scroll", function(){
	    parallax(".hero", window.scrollY, .1);
	    parallax(".small-rose", window.scrollY, .53);
	    parallax(".big-rose", window.scrollY, 0.15);
	    parallax(".medium-rose", window.scrollY, 0.18);
	}); 

