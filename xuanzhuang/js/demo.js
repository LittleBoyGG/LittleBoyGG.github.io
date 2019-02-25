window.onload = function() {
    var slide = document.getElementsByClassName('slide')[0],
        arrow = slide.children[1],
        liArr = slide.children[0].children;
   		prevOrnext = arrow.children;
	// var prev = document.getElementsByClassName('prev')[0];
 	// var next = document.getElementsByClassName('next')[0];
    var arr = [{ // 0
    		width: 400,
            top: 50,
            left: 400,
            opacity: 10,
            z: 2
   		},
    	{ //  1
            width: 400,
            top: 70,
            left: 50,
            opacity: 20,
            z: 3
        },
        { // 2
            width: 600,
            top: 140,
            left: 0,
            opacity: 80,
            z: 4
        },
        { // 3
            width: 800,
            top: 120,
            left: 200,
            opacity: 100,
            z: 5
        },
        { // 4
            width: 600,
            top: 140,
            left: 600,
            opacity: 80,
            z: 4
        },
        { //5
            width: 400,
            top: 70,
            left: 750,
            opacity: 20,
            z: 3
        }
    ];
    var flag = true;
    slide.addEventListener('mouseenter', function() {
        // animate(arrow, { "opacity": 100 });
        arrow.style.opacity = 1;
    });
    slide.onmouseleave = function() {
        // animate(arrow, { "opacity": 0 });
        arrow.style.opacity = 0;
    }

    // for (var i = 0; i < liArr.length; i++) {
    //     animate(liArr[i], {
    //         "width": arr[i].width,
    //         "top": arr[i].top,
    //         "left": arr[i].left,
    //         "opacity": arr[i].opacity, //待会看jquery1.0.0.1
    //         "zIndex": arr[i].z
    //     });
    // }
    move();
    
    // prev.onclick = function(){
    // 	move(true);
    // }
    // next.onclick = function(){
    // 	move(false);
    // }
    for (var k in prevOrnext) {
        prevOrnext[k].onclick = function() {
            if (flag) {
            	flag = false;
                if (this.className === "prev") {
                    move(true);
                } else {
                    move(false);
                }
            }
        }
    }

    function move(bool) {
        if (bool !== undefined) {
            if (bool) {
                arr.push(arr.shift());
            } else {
                arr.unshift(arr.pop());
            }
        }
        for (var i = 0; i < liArr.length; i++) {
            animate(liArr[i], {
                "width": arr[i].width,
                "top": arr[i].top,
                "left": arr[i].left,
                "opacity": arr[i].opacity, //待会看jquery1.0.0.1
                "zIndex": arr[i].z
            }, function() {
            	flag = true;
            });
        }
    }



}