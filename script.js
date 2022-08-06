// init controller
var controller = new ScrollMagic.Controller();

var text1 = document.getElementsByClassName("text1");
var image = document.getElementsByClassName("image1");
var ring= document.getElementById("Opaque_Ring");

var scene1 = new ScrollMagic.Scene({triggerElement: "#trig1" ,duration:500})
                .on("enter", function () {
                    addanimate(text1,image,image,"ring1")
                    setbg("purple","grey")


                })
                .on("leave", function () {
                    for (let i = 0; i < text1.length; i++) {
                        text1[i].classList.remove("show")
                      }
                    for (let i = 0; i < image.length; i++) {
                        image[i].classList.remove("show")
                      }
                      ring.classList.remove("ring1");

                })
            
                .addTo(controller);
 

var text2 = document.getElementsByClassName("text2");
var image2 = document.getElementsByClassName("image2");
var image3 = document.getElementsByClassName("image3");
var scene2 = new ScrollMagic.Scene({triggerElement: "#trig2" ,duration:500})
.on("enter", function () {
    
    addanimate(text2,image2,image3,"ring2")
    setbg("violet","blue")

})
.on("leave", function () {
    
    removeanimate(text2,image2,image3,"ring2")

}).addTo(controller);



var text3 = document.getElementsByClassName("text3");
var image4=document.getElementsByClassName("image4")
var image5=document.getElementsByClassName("image5")
var scene2 = new ScrollMagic.Scene({triggerElement: "#trig3" ,duration:500})
.on("enter", function () {
    
    addanimate(text3,image4,image5,"ring3")
    setbg("blue","lightblue")

})
.on("leave", function () {
    removeanimate(text3,image4,image5,"ring3")

})
.addTo(controller);



var text4 = document.getElementsByClassName("text4");
var image6 = document.getElementsByClassName("image6");
var image7 = document.getElementsByClassName("image7");
var scene2 = new ScrollMagic.Scene({triggerElement: "#trig4" ,duration:500})
.on("enter", function () {
    
    addanimate(text4,image6,image7,"ring4")
    setbg("indigo","voiet")

})
.on("leave", function () {
    removeanimate(text4,image6,image7,"ring4")


})
.addTo(controller);



var text5 = document.getElementsByClassName("text5");
var image8 = document.getElementsByClassName("image8");
var image9 = document.getElementsByClassName("image9");
var scene2 = new ScrollMagic.Scene({triggerElement: "#trig5" ,duration:500})
.on("enter", function () {
    
    addanimate(text5,image8,image9,"ring5")
    setbg("blue","skyblue")

})
.on("leave", function () {
    removeanimate(text5,image8,image9,"ring5")

})
.addTo(controller);



var text6 = document.getElementsByClassName("text6");
var image10 = document.getElementsByClassName("image10");
var image11 = document.getElementsByClassName("image11");
var scene2 = new ScrollMagic.Scene({triggerElement: "#trig6" ,duration:500})
.on("enter", function () {
    
    addanimate(text6,image10,image11,"ring6")
    setbg("blue","skyblue")

})
.on("leave", function () {
    removeanimate(text6,image10,image11,"ring6")

})
.addTo(controller);



var text7 = document.getElementsByClassName("text7");
var image12 = document.getElementsByClassName("image12");
var image13 = document.getElementsByClassName("image13");
var scene2 = new ScrollMagic.Scene({triggerElement: "#trig7" ,duration:500})
.on("enter", function () {
    addanimate(text7,image12,image13,"ring7")
    setbg("green","lightgreen")

})
.on("leave", function () {
    removeanimate(text7,image12,image13,"ring7")


})
.addTo(controller);



function addanimate(text,image1,image2,ringclass){
    for (let i = 0; i < text.length; i++) {
        text[i].classList.add("show")
      }
    for (let i = 0; i < image1.length; i++) {
        image1[i].classList.add("show")
      }
    for (let i = 0; i < image2.length; i++) {
        image2[i].classList.add("show")
      }
    ring.classList.add(ringclass);


}

function removeanimate(text,image1,image2,ringclass){
    for (let i = 0; i < text.length; i++) {
        text[i].classList.remove("show")
      }
    for (let i = 0; i < image1.length; i++) {
        image1[i].classList.remove("show")
      }
    for (let i = 0; i < image2.length; i++) {
        image2[i].classList.remove("show")
      }
    ring.classList.remove(ringclass);


}


var sidebar=document.getElementsByClassName("sidebar")
var svg=document.getElementsByClassName("svg-box")
var content=document.getElementsByClassName("content")
function setbg(color1,color2)
{
    for(var i=0;i<sidebar.length;i++)
    {
        sidebar[i].style.background=color1;
    }
    for(var i=0;i<svg.length;i++)
    {
        svg[i].style.background=color1;
    }
    for(var i=0;i<content.length;i++)
    {
        content[i].style.background=color2;
    }

}