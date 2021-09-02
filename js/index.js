
    var item = 0;
	var left = document.querySelector("#anterior");
	var right = document.querySelector("#siguiente");

	left.addEventListener("click",()=>{
       
        changeItem(1)
    });

	right.addEventListener("click",()=>{

            changeItem(5)

    });


    function changeItem(n){
    	if (n == 1) {
      		if (item == 0) {

        		item = 5;

       		} else {

        		item--
        	}
    	} else {
        	if (item == 5) {
        		item = 0;
        	} else {
        		item++
        	}
    	}
    for (let i = 0; i < document.querySelectorAll(".intro").length; i++) {
    	document.querySelectorAll(".intro")[i].style.left = "105%";
        document.querySelectorAll(".intro")[i].style.opacity = "0";
    }
    document.querySelectorAll(".intro")[item].style.display = "block";
    document.querySelectorAll(".intro")[item].style.left = "5%";
    document.querySelectorAll(".intro")[item].style.opacity = "1";
	}


// -------------------------------------------------------------------------
    var item = 0;
    var left = document.querySelector("#anterior2");
    var right = document.querySelector("#siguiente2");

    left.addEventListener("click",()=>{changeItem2(1)});
    right.addEventListener("click",()=>{changeItem2(3)});


    function changeItem2(n){
        if (n == 1) {
            if (item == 0) {

                item = 5;

            } else {

                item--
            }
        } else {
            if (item == 5) {
                item = 0;
            } else {
                item++
            }
        }
        for (let i = 0; i < document.querySelectorAll(".caja-de-info").length; i++) {
        document.querySelectorAll(".caja-de-info")[i].style.display = "none";
        }
        document.querySelectorAll(".caja-de-info")[item].style.display = "block";
    }

// -------------------------------------------------------------------------


