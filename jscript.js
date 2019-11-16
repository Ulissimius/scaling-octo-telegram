var arr = document.querySelectorAll('.imgs')
var posArr = [];
arr.forEach(myFunction)
function myFunction(item) {
    var a = parseInt(item.style.top.slice(0, item.style.top.length-2));
    posArr.push(a);
}


function myMove() {
    var id = setInterval(frame, 9.341);
    

    function frame() {
        if (posArr[9] != -440) {
            posArr[9]--;
            arr[9].style.top = posArr[9] + 'px';
        } else {
            posArr[9] = 0;
        }

        if (posArr[9] == -440 && posArr[8] != -440) {
            posArr[8] += -44;
            arr[8].style.top = posArr[8] + "px";
        } else if (posArr[8] == -440) {
            posArr[8] = 0;
        }

        if (posArr[8] == -440 && posArr[7] != -440) {
            posArr[7] += -44;
            arr[7].style.top = posArr[7] + "px";
        } else if (posArr[7] == -440) {
            posArr[7] = 0;
        }
        
        if (posArr[7] == -440 && posArr[6] != -440) {
            posArr[6] += -44;
            arr[6].style.top = posArr[6] + "px";
        } else if (posArr[6] == -440) {
            posArr[6] = 0;
        }

        if (posArr[6] == -440 && posArr[5] != -440) {
            posArr[5] += -44;
            arr[5].style.top = posArr[5] + "px";
        } else if (posArr[5] == -440) {
            posArr[5] = 0;
        }

        if (posArr[5] == -440 && posArr[4] != -440) {
            posArr[4] += -44;
            arr[4].style.top = posArr[4] + "px";
        } else if (posArr[4] == -440) {
            posArr[4] = 0;
        }

        if (posArr[4] == -440 && posArr[3] != -440) {
            posArr[3] += -44;
            arr[3].style.top = posArr[3] + "px";
        } else if (posArr[3] == -440) {
            posArr[3] = 0;
        }

        if (posArr[3] == -440 && posArr[2] != -440) {
            posArr[2] += -44;
            arr[2].style.top = posArr[2] + "px";
        } else if (posArr[2] == -440) {
            posArr[2] = 0;
        }

        if (posArr[2] == -440 && posArr[1] != -440) {
            posArr[1] += -44;
            arr[1].style.top = posArr[1] + "px";
        } else if (posArr[1] == -440) {
            posArr[1] = 0;
        }

        if (posArr[1] == -440 && posArr[0] != -440) {
            posArr[0] += -44;
            arr[0].style.top = posArr[0] + "px";
        } else if (posArr[0] == -440) {
            posArr[0] = 0;
        }
    }
} 
myMove();

// var whatever = document.querySelector("#img10").style.top;
// var whater2 = document.getElementById("test");
// whater2.innerHTML = whatever;

  /*
  0 = 0
  1 = 44
  2 = 88
  3 = 132
  4 = 176
  5 = 220
  6 = 264
  7 = 308
  8 = 352
  9 = 396
  0 = 440
  */