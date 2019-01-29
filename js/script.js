

document.getElementById("first").addEventListener("mouseover", function() {
    document.getElementById("country").innerHTML="Ivory coast";
});

var sec=document.getElementById("second");
sec.addEventListener("mouseup",function mycolor(){
    sec.style.backgroundColor="orange";
});



var x=document.getElementById("three");
x.addEventListener("mouseout",function mytext(){
    x.innerHTML="gone";
});



var y=document.getElementById("four");
y.addEventListener("click",function invisible(){
    y.style.visibility='hidden';
});


var z=document.getElementById("five");
z.addEventListener("wheel",function reset(){
    location.reload();
});
