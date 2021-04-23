function gst(){
    event.preventDefault();
    let price=localStorage.getItem('priceForKm');
    let priceInt = parseInt(price);
    let gst=7;
    let gstprice=(gst/100*priceInt)+priceInt;
    localStorage.setItem("pricegst",gstprice);
    document.getElementById("gstprice").value = gstprice;
    alert ("calculated");
}