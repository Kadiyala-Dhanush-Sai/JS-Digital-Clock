function updatetime(){
    const now= new Date();
    let hours=now.getHours();
    let min=now.getMinutes();
    let sec=now.getSeconds();

    if(hours>12){
        hours=hours-12;
    }
    if(hours<10){
        hours="0"+hours;
    }
    if(min<10){
        min="0"+min;
    }
    if(sec<10){
        sec="0"+sec;
    }
    document.getElementById("hour").innerHTML=hours;
    document.getElementById("min").innerHTML=min;
    document.getElementById("sec").innerHTML=sec;

    // document.getElementById("clock").innerHTML=hours+":"+min+":"+sec;
    // document.getElementById("clock").innerHTML=hours+":"+min+":"+sec;
    // document.getElementById("clock").innerHTML=hours+":"+min+":"+sec;
    
}
    let show=true;
function blinking(){
    let qot=document.querySelectorAll(".qot");
    qot.forEach(qot => {
        
        if(show){
            document.querySelectorAll("qot").innerHTML=":";
        }else{
            document.querySelectorAll("qot").innerHTML=" ";
        }
    });
    show=!show;
}
setInterval(updatetime,1000);
setInterval(blinking,500);
updatetime();