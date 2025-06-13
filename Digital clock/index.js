function updateTime(){
    const now = new Date();

    const hour = now.getHours();
    const minute = now.getMinutes();
    const sec = now.getSeconds();
    
    let hours = hour < 10 ? '0'+hour : hour;
    let minutes = minute < 10 ? '0'+minute : minute;
    let sect = sec < 10 ? '0'+sec : sec;


    document.getElementById('clock').textContent=`${hours}:${minutes}:${sect}`;
}


setInterval(updateTime,'1000');
updateTime();