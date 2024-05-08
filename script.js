for(link of document.getElementsByClassName("overlay")){
    link.onmousemove = function(e){
        const decimal = e.clientX / link.offsetWidth;
        const basePercent = 50,
              percentRange = 50,
              adjustablepercent = percentRange * decimal;
        const lightbluepercent = basePercent + adjustablepercent;
        console.log('hello');
        this.style.setProperty('--light-blue-percent',`${lightbluepercent}%`)
    }
}