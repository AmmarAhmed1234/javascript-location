/**
 * Created by Ammar on 3/21/2017.
 */

function loadContact1(){
    history.pushState({page:3},"page 1","/routing/1");
    //document.getElementById("image-1").setAttribute("src", "images/Star_Guy_01@2x.png" , "para");

    //location.href="javascript-routing.html";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("para").innerHTML =
                    this.responseText;
            }
            console.log(responseText);
        };
        xhttp.open("GET", "javascript-routing.html", true);
        xhttp.send();
}
function loadProduct2(){
    //history.replaceState({},"routing/1","routing/2");
    history.pushState({page:3},"page 1","/routing/2");
    //document.getElementById("image-1").setAttribute("src", "pagination.html");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("para").innerHTML =
                this.responseText;
        }
        console.log(responseText);
    };
    xhttp.open("GET", "contant.html", true);
    xhttp.send();
}
function loadProduct3() {
    //history.pushState({}, "", "routing/3");
    history.pushState({page:3},"page 1","/routing/3");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("para").innerHTML =
                this.responseText;
        }
        console.log(responseText);
    };
    xhttp.open("GET", "novels.html", true);four.html
    xhttp.send();
    //document.getElementById("image-1").setAttribute("src", "images/a01.png");
    //if(history.pushState({}, "", "routing/3")){}
    //else{}
}
function loadProduct4(){
    //history.pushState({},"","routing/4");
    //document.getElementById("image-1").setAttribute("src", "images/a02.png");
    history.pushState({page:3},"page 1","/routing/4");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("para").innerHTML =
                this.responseText;
        }
        console.log(responseText);
    };
    xhttp.open("GET", "four.html", true);
    xhttp.send();
}
function loadProduct5(){
    //history.pushState({},"","routing/5");
    //document.getElementById("image-1").setAttribute("src", "images/a03.png");
    history.pushState({page:3},"page 1","/routing/5");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("para").innerHTML =
                this.responseText;
        }
        console.log(responseText);
    };
    xhttp.open("GET", "five.html", true);
    xhttp.send();
}