const xo = {};
xo.el = {};
xo.el.fild = document.querySelector('.fild')
xo.el.squares = document.querySelectorAll('.fild .row div');
xo.el.stepHolder = document.querySelector('.stepHolder span');
xo.el.restartBtn = document.querySelector('button');
xo.el.scoreX = document.querySelector('.scores .scoreX span');
xo.el.scoreO = document.querySelector('.scores .scoreO span');
xo.el.countScoreX = 0;
xo.el.countScoreO = 0;
xo.el.curentStep = "X"
xo.func = {}
xo.func.countScores = function(s){
	if(s == "X"){
		xo.el.countScoreX++;
		return xo.el.scoreX.innerText = xo.el.countScoreX;
	}
	if(s == "O"){
		xo.el.countScoreO++;
		return xo.el.scoreO.innerText = xo.el.countScoreO;
	}
}
xo.func.step = function(event,text){
	if(event.target.classList.contains('sel') && xo.el.curentStep === "X" && !event.target.innerText) {
		event.target.innerText = xo.el.curentStep;
		xo.el.stepHolder.innerText  = "O";
		xo.el.curentStep = "O";
	}
	if(event.target.classList.contains('sel') && xo.el.curentStep === "O" && !event.target.innerText) {
		event.target.innerText = xo.el.curentStep;
		xo.el.stepHolder.innerText  = "X";
		xo.el.curentStep = "X";
	}
	xo.func.checkWin(xo.el.curentStep, xo.el.squares)
}
xo.func.restart = function (element){
	for(let i = 0; i <element.length; i++){
		element[i].innerText = "";
	}
}

xo.func.checkWin = function (s, element){
    for (let i = 0; i < 9; i = i+3) {
      if (element[i].innerHTML === s && element[i+1].innerHTML === s && element[i+2].innerHTML === s){
        alert('Winner "'+s+'"');
    	xo.func.restart(element)
    	xo.func.countScores(s)
    };
    }
    
    for (i = 0; i < 3; i++) {
      if (element[i].innerHTML === s && element[i+3].innerHTML === s && element[i+6].innerHTML === s){
        alert('Winner "'+s+'"');
        xo.func.restart(element)
        xo.func.countScores(s)
    }
    }
    
    if (element[0].innerHTML === s && element[4].innerHTML === s && element[8].innerHTML === s){
        alert('Winner "'+s+'"');
        xo.func.restart(element)
        xo.func.countScores(s)
    }
    if (element[2].innerHTML === s && element[4].innerHTML === s && element[6].innerHTML === s){
        alert('Winner "'+s+'"');
        xo.func.restart(element)
        xo.func.countScores(s)
    }
  }
xo.el.fild.onclick =  xo.func.step;
