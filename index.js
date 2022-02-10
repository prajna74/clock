const hr=document.getElementById("hr");
const min=document.getElementById("min");

function gettime(){
    var date=new Date();
 let hours=date.getHours();
 let minutes=date.getMinutes();
 if(minutes<10)
 {
     minutes="0"+minutes;
 }
 hr.innerHTML=hours;
 min.innerHTML=minutes;
 let t=setTimeout(play,1000);
}
function play(){
    gettime();
}
gettime();
