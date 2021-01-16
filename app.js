var queuelist = [];
var isplaying = false;
var looping = true;
var isfull = false;



var colorpicker = document.getElementById("selectedcolor");
var textfield = document.getElementById("Duration");
var qlist = document.getElementById("qlist");

var addtoqbtn = document.getElementById("addtoq");
var resetbtn = document.getElementById("resetbtn");
var startbtn = document.getElementById("startbtn");
var fullscbtn = document.getElementById("fullsc");

addtoqbtn.addEventListener("click", addtoq);
resetbtn.addEventListener("click", reset);
startbtn.addEventListener("click", startplaying);

fullscbtn.addEventListener("click", function(){
      console.log("full clicked");

      if(isfull == false) {
            document.getElementById("secondrow").style.visibility = "hidden";
            isfull = true;
      } else if (isfull == true) {
            document.getElementById("secondrow").style.visibility = "visible";
            isfull = false;
      }
      
      

})




function updatelist() {
      queuelist.forEach(element => {
            var li = document.createElement("li");
            li.appendChild(document.createTextNode(`Color: ${element.color} - Duration: ${element.duration}`));
            li.classList.add("collection-item");
            qlist.appendChild(li);
      });
}

function reset() {
      queuelist = [];
      qlist.innerHTML = "";
      document.body.style.backgroundColor = "white";
}

function addtoq() {
      queuelist.push({
            "color": colorpicker.value,
            "duration": textfield.value
      });

      textfield.value = "";
      qlist.innerHTML = "";
      updatelist();
}


function startplaying() {



      queuelist.forEach(function (obj, index) {
            setTimeout(function () {
                  console.log(obj.color);
                  document.body.style.backgroundColor = obj.color;
                  if (looping == true){
                        if( index ==  queuelist.length -1) {
                              startplaying();
                              return;
                            }
                  }
            }, obj.duration * index);

            
      });



}
