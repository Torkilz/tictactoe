var boxes = document.getElementById("boxes").children;


for (var i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function(){
    this.className = "boxHuman";
  if (boxes[0].className === "boxHuman" && boxes[3].className === "boxHuman" && boxes[6].className === "boxHuman" || boxes[1].className === "boxHuman" && boxes[4].className === "boxHuman" && boxes[7].className === "boxHuman" || boxes[2].className === "boxHuman" && boxes[5].className === "boxHuman" && boxes[8].className === "boxHuman" || boxes[0].className === "boxHuman" && boxes[1].className === "boxHuman" && boxes[2].className === "boxHuman" || boxes[3].className === "boxHuman" && boxes[4].className === "boxHuman" && boxes[5].className === "boxHuman" || boxes[6].className === "boxHuman" && boxes[7].className === "boxHuman" && boxes[8].className === "boxHuman" || boxes[0].className === "boxHuman" && boxes[4].className === "boxHuman" && boxes[8].className === "boxHuman" || boxes[2].className === "boxHuman"&& boxes[4].className === "boxHuman" && boxes[6].className === "boxHuman" ) {
    alert("Du vant! Gratulerer.");
    boxes[0].className = "box";
    boxes[1].className = "box";
    boxes[2].className = "box";
    boxes[3].className = "box";
    boxes[4].className = "box";
    boxes[5].className = "box";
    boxes[6].className = "box";
    boxes[7].className = "box";
    boxes[8].className = "box";
  } else if (boxes[0].className !== "boxHuman" && boxes[0].className !== "boxComputer") {
    boxes[0].className = "boxComputer";
  } else if (boxes[8].className !== "boxHuman" && boxes[8].className !== "boxComputer") {
    boxes[8].className = "boxComputer";
  } else if (boxes[2].className !== "boxHuman" && boxes[2].className !== "boxComputer") {
    boxes[2].className = "boxComputer";
  } else if (boxes[1].className !== "boxHuman" && boxes[1].className !== "boxComputer") {
    boxes[1].className = "boxComputer";
  } else if (boxes[5].className !== "boxHuman" && boxes[5].className !== "boxComputer") {
    boxes[5].className = "boxComputer";
  } else if (boxes[6].className !== "boxHuman" && boxes[6].className !== "boxComputer") {
    boxes[6].className = "boxComputer";
  } else if (boxes[3].className !== "boxHuman" && boxes[3].className !== "boxComputer") {
    boxes[3].className = "boxComputer";
  } else if (boxes[4].className !== "boxHuman" && boxes[4].className !== "boxComputer") {
    boxes[4].className = "boxComputer";
  } else if (boxes[7].className !== "boxHuman" && boxes[7].className !== "boxComputer") {
    boxes[7].className = "boxComputer";
  };
  if (boxes[0].className === "boxComputer" && boxes[3].className === "boxComputer" && boxes[6].className === "boxComputer" || boxes[1].className === "boxComputer" && boxes[4].className === "boxComputer" && boxes[7].className === "boxComputer" || boxes[2].className === "boxComputer" && boxes[5].className === "boxComputer" && boxes[8].className === "boxComputer" || boxes[0].className === "boxComputer" && boxes[1].className === "boxComputer" && boxes[2].className === "boxComputer" || boxes[3].className === "boxComputer" && boxes[4].className === "boxComputer" && boxes[5].className === "boxComputer" || boxes[6].className === "boxComputer" && boxes[7].className === "boxComputer" && boxes[8].className === "boxComputer" || boxes[0].className === "boxComputer" && boxes[4].className === "boxComputer" && boxes[8].className === "boxComputer" || boxes[2].className === "boxComputer" && boxes[4].className === "boxComputer" && boxes[6].className === "boxComputer") {
    alert("HAHA, jeg vant!");
    boxes[0].className = "box";
    boxes[1].className = "box";
    boxes[2].className = "box";
    boxes[3].className = "box";
    boxes[4].className = "box";
    boxes[5].className = "box";
    boxes[6].className = "box";
    boxes[7].className = "box";
    boxes[8].className = "box";
  };  
  });
};

/*
boxes.children.addEventListener("click", function(){
  this.className = "boxHuman";
});
*/
