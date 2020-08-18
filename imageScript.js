"use strict";

var link = "";
var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) display(this.responseText);
};

xhttp.open("GET", "https://dog.ceo/api/breeds/image/random", true), xhttp.send();

function display(s) {
  //var pos = s.indexOf("http");
  //var pos1 = s.indexOf(".jpg");
  var a=JSON.parse(s);
  var link=a.message;
  //pos1 = pos1 + 3;
  //link += s.slice(pos, pos1 + 1);
  //link = link.replace(/\\/gi, "");
  link=decodeURIComponent(link);
  document.getElementById("img1").src = link;
  console.log(link);
  document.getElementById("p1").innerHTML=link;
}