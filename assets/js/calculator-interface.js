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
     * Interact JS Functions
     * Interact is required for resizing as an issue in jQueryUI causes elements to fall out of alignment.
     * This issue is not present in Interact.
     */
    // Resizing
    interact('.resizable')
        .resizable({
            preserveAspectRatio: false,
            edges: {
                left: true,
                right: true,
                bottom: true,
                top: true
            }
        })
        .on('resizemove', function(event) {
            var target = event.target,
                x = (parseFloat(target.getAttribute('data-x')) || 0),
                y = (parseFloat(target.getAttribute('data-y')) || 0);
            // update the element's style
            target.style.width = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';
            // translate when resizing from top or left edges
            x += event.deltaRect.left;
            y += event.deltaRect.top;
            target.style.webkitTransform = target.style.transform =
                'translate(' + x + 'px,' + y + 'px)';
            target.setAttribute('data-x', x);
            target.setAttribute('data-y', y);
        });

    // Delete
    interact('.deletable')
        .on('hold', function(event) {
            $(event.target).remove();
            event.preventDefault();
        });

    /*
     * Calculator Functions
     */
    var current,
        screen,
        output,
        limit,
        zero,
        decimal,
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
            if (limit > 24) {
                alert("Max input reached");
            }
        }, false);
    }

    document.querySelector(".zero").addEventListener("click", function() {
        zero = this.value;
        if (screen.innerHTML === "") {
            output = screen.innerHTML = "0";
        } else if (screen.innerHTML.includes(operator)) {
            output = screen.innerHTML += "0";
        } else if (screen.innerHTML === output) {
            output = screen.innerHTML += "0";
        }
    }, false);

    document.querySelector(".decimal").addEventListener("click", function() {
        decimal = this.value;
        if (screen.innerHTML === "") {
            output = screen.innerHTML = screen.innerHTML.concat("0.");
        } else if (screen.innerHTML.includes(".") && !screen.innerHTML.includes(operator)) {
            output = screen.innerHTML;
        } else if (screen.innerHTML === output && !output.substr(output.indexOf(operator) + 2).includes(".")) {
            screen.innerHTML = screen.innerHTML.concat(".");
            output = screen.innerHTML;
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