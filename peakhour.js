function peakhour(){
    event.preventDefault();
    let hour=localStorage.getItem("hour2");
    let pricegst=localStorage.getItem("pricegst");
    let pricegstint=parseFloat(pricegst);
    if(hour>=17 && hour<=19){
        let peakgst=1.25;
    let peakprice=(pricegstint*peakgst/100)+pricegstint;
    localStorage.setItem("peakpricegst",peakprice);
    localStorage.setItem("peak",true);
    document.getElementById("peak").value = "peak hour";
    }else{
        localStorage.setItem("peak",false);
        document.getElementById("peak").value = " not a peak hour";
    }
    alert("submited");
    
}