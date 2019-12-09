


function callTime(){

    var t = document.getElementById("txt");

    var d = new Date();
    var hr = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();

    if(hr<10)
        hr = "0"+hr;

    if(m<10)
        m = "0"+m;

    if(s<10)
        s = "0"+s;

    var k = hr+" : "+m+" : "+s;

    t.innerText = k;
}

setInterval(callTime,1000);