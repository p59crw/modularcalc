window.onload = function() {

    /*
     * JQuery Interface Functions
     */
    $(function() {
        $(".draggable").draggable({
            containment: "#container",
            scroll: false,
            scrollSpeed: 0,
            cursor: "move",
            cursorAt: {
                top: 25,
                left: 25
            },
            snap: ".snaptarget",
            snapMode: "outer",
            stack: ".draggable",
            cancel: false
        });
        $(".resizable").resizable({
            containment: "#container",
            maxWidth: 1000,
            minWidth: 300,
            maxHeight: 100,
            minHeight: 60,
            handles: "se",
            resize: function(event, ui) {

            }
        });
    });

    /*
     * Toolbar Functions
     */

    //Snap Mode
    document.querySelector("#snap-toggle").addEventListener("click", function() {
        var snaptoggle = document.getElementById("snap-toggle");
        if (snaptoggle.innerHTML === "snap on") {
            $(".draggable").draggable({
                containment: "#container",
                scroll: false,
                scrollSpeed: 0,
                cursor: "move",
                cursorAt: {
                    top: 25,
                    left: 25
                },
                snap: false,
                snapMode: "outer",
                stack: ".draggable",
                cancel: false
            });
            snaptoggle.innerHTML = "snap off";
        } else {
            $(".draggable").draggable({
                containment: "#container",
                scroll: false,
                scrollSpeed: 0,
                cursor: "move",
                cursorAt: {
                    top: 25,
                    left: 25
                },
                snap: ".snaptarget",
                snapMode: "outer",
                stack: ".draggable",
                cancel: false
            });
            snaptoggle.innerHTML = "snap on";
        }
    }, false);


    /*
    // Delete Mode
    document.querySelector("#delete-mode-toggle").addEventListener("click",function() {
    	var deletetoggle = document.getElementById("delete-mode-toggle");
    	if (deletetoggle.innerHTML === "delete mode on") {
    		
    		$(".deletable").mouseup(function(){
      // Clear timeout
      return false;
    }).mousedown(function(){
      // Set timeout
      return false; 
    });
    		
              deletetoggle.innerHTML = "delete mode off";
    	} else {
    				//Delete On Long Press Function
    var pressTimer;

    $(".deletable").mouseup(function(){
      clearTimeout(pressTimer);
      // Clear timeout
      return false;
    }).mousedown(function(e){
      // Set timeout
      pressTimer = window.setTimeout(function() { $(e.target).remove();},1000);
      return false; 
    });
              deletetoggle.innerHTML = "delete mode on";
    	}
        },false);
    */

    /*
     * Calculator Functions
     */
    var current,
        screen,
        output,
        limit,
        zero,
        period,
        operator;

    screen = document.getElementById("result");

    var elem = document.querySelectorAll(".num");

    var len = elem.length;

    for (var i = 0; i < len; i++) {

        elem[i].addEventListener("click", function() {

            num = this.value;

            if (screen.innerHTML === "undefined" || screen.innerHTML === "0") {
                screen.innerHTML = "";
            }
            output = screen.innerHTML += num;

            limit = output.length;

            if (limit > 16) {

                alert("Sorry no more input is allowed");

            }

        }, false);

    }

    document.querySelector(".zero").addEventListener("click", function() {

        zero = this.value;

        if (screen.innerHTML === "") {

            output = screen.innerHTML = zero;
        } else if (screen.innerHTML === output) {

            output = screen.innerHTML += zero;

        }

    }, false);

    document.querySelector(".period").addEventListener("click", function() {

        period = this.value;

        if (screen.innerHTML === "") {

            output = screen.innerHTML = screen.innerHTML.concat("0.");

        } else if (screen.innerHTML === output) {

            screen.innerHTML = screen.innerHTML.concat(".");

        }

    }, false);


    document.querySelector("#eqn-bg").addEventListener("click", function() {

        if (screen.innerHTML === "") {
            screen.innerHTML = "0";
            output = screen.innerHTML;
        } else if (screen.innerHTML === output) {

            screen.innerHTML = eval(output);
            output = screen.innerHTML;
        } else {
            screen.innerHTML = eval(output);
        }

    }, false);

    document.querySelector("#delete").addEventListener("click", function() {
        if (screen.innerHTML === "undefined" || screen.innerHTML === "") {
            screen.innerHTML = "";
            output = "";
        } else {
            screen.innerHTML = output.substr(0, output.length - 1);
            output = output.substr(0, output.length - 1);
        }

    }, false);


    var elem1 = document.querySelectorAll(".operator");

    var len1 = elem1.length;

    for (var i = 0; i < len1; i++) {

        elem1[i].addEventListener("click", function() {

            operator = this.value;

            if (screen.innerHTML === "") {

                screen.innerHTML = screen.innerHTML.concat("");

            } else if (output) {

                screen.innerHTML = output.concat(operator);

            }

        }, false);

    }
}