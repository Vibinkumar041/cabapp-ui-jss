function bill(){
    event.preventDefault();
    let mobnum=localStorage.getItem("mobnum");
    document.getElementById("mobnum").value =mobnum;
    let date=localStorage.getItem("jdate");
    document.getElementById("journeydate").value =date;
    let time=localStorage.getItem("time");
    document.getElementById("journeytime").value =time;
    let cabtype=localStorage.getItem("type");
    document.getElementById("cabtype").value =cabtype;
    let km=localStorage.getItem("kilometer");
    document.getElementById("kilometer").value =km;
    let citizen=localStorage.getItem("senior");
    let peak=localStorage.getItem("peak");
    if(citizen=="true" && peak=="true"){
        let peakprice=localStorage.getItem("seniorpeak");
        document.getElementById("totalamount").value = peakprice;
    }
    else if(citizen=="false" && peak=="false"){
        let price=localStorage.getItem("pricegst");
        document.getElementById("totalamount").value =price;
    }
    else if(citizen=="false" && peak=="true"){
        let price=localStorage.getItem("peakpricegst");
        document.getElementById("totalamount").value =price;
    }
    else if(citizen=="true" && peak=="false"){
        let price=localStorage.getItem("citizenprice");
        document.getElementById("totalamount").value =price;
    }
    alert("calculated");
}