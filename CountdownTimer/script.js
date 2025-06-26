const endDate=new Date("27 july, 2025 2:00:00").getTime();
const startDate=new Date().getTime();

let x=setInterval(function updateTimer(){
      const now=new Date().getTime();
      const distanceCovered=now-startDate;
      const distancePending=endDate-now;
      //calculate remaining time
      // 1 second=1000miliseconds
      //1 min=60 seconds=60000 ms
      //1 hour=60*60 seconds=3600000ms
      //1 day=24*60*60 seconds=86400000
      const days=Math.floor(distancePending/(24*60*60*1000));
      const hours=Math.floor((distancePending%(24*60*60*1000))/(60*60*1000));
      const minutes=Math.floor((distancePending%(60*60*1000))/(60*1000));
      const seconds=Math.floor((distancePending%(60*1000))/1000);

      //populate on ui
      document.getElementById("days").innerHTML=days;
      document.getElementById("hours").innerHTML=hours;
      document.getElementById("minutes").innerHTML=minutes;
      document.getElementById("seconds").innerHTML=seconds;


      //calculate width percentage for progress bar
      const totalDistance=endDate-startDate;
      const percentageDist=(distanceCovered/totalDistance)*100;
      //setting width for progress bar
      document.getElementById("progress-bar").style.width=percentageDist+"%";

      if(distancePending<0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML="EXPERIED";
        document.getElementById("progress-bar").style.width=100+"%";
      }

},1000);