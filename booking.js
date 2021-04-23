function booking(){
    event.preventDefault();
    let date=new Date();
    let tdate=date.getDate();
    localStorage.setItem("tdate1",tdate);
    let tmonth=date.getMonth()+1;
    localStorage.setItem("tmonth1",tmonth);
    let tyear=date.getFullYear();
    localStorage.setItem("tyear1",tyear);
    let jdate1=document.querySelector("#jdate").value;
    localStorage.setItem("jdate",jdate1);
    let jdate=new Date(document.querySelector("#jdate").value);
    let jday=jdate.getDate();
    localStorage.setItem("jday1",jday);
    let jmonth=jdate.getMonth()+1;
    localStorage.setItem("jmonth1",jmonth);
    let jyear=jdate.getFullYear();
    localStorage.setItem("jyear1",jyear);
    let hour=document.getElementById("jtime").value;
    localStorage.setItem("time",hour);
    let hour1=hour.substring(0,2);
    let hour1int=parseInt(hour1);
    localStorage.setItem("hour2",hour1int);
    alert("submitted");
}
