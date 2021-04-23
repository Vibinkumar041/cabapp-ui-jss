function senior(){
    event.preventDefault();
    let value = document.getElementById('seniorcitizen').checked;
    localStorage.setItem("senior",value);
    if(value==true){
        let price=localStorage.getItem('pricegst');
        let seniorprice=price/2;
        localStorage.setItem("citizenprice",seniorprice);
        let peakprice=localStorage.getItem("peakpricegst")
        let seniorpeakprice=peakprice/2;
        localStorage.setItem("seniorpeak",seniorpeakprice);
    }
    
    alert("submited");
   
   
}
