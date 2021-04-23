function billEstimator() {
    event.preventDefault();
    let km = document.querySelector("#km").value;
    localStorage.setItem("kilometer",km);
    let cab = document.querySelector("#cab").value;
    localStorage.setItem("type",cab);
    let price = 0;
    switch (cab) {
        case "micro": { price = 10; break; }
        case "mini": { price = 15; break; }
        case "premium": { price = 20; break; }
    }
    let totalAmount = price * km;
    document.getElementById("price").value = totalAmount;
    localStorage.setItem("priceForKm",totalAmount);
}



