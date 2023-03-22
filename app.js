var sec = 0
var min = 0
var hr = 0
var start

function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function srt(){
    timer()
    start = setInterval(timer,100)
}
function pse(){
    start = clearInterval(start);
}
function stp(){
    start = clearInterval(start);
    sec = 0
    min = 0
    document.getElementById('timer').innerText = '00:00:00'
}
function timer(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    document.getElementById('timer').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}


