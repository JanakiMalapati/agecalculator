function calc()
{
    const date=new Date();
    var year=date.getFullYear();
    var mon=date.getMonth()+1;
    var dat=date.getDate();
    var d=(document.getElementById("day"));
    var dval=d.value;
    var ddefault=d.defaultValue;
    var m=(document.getElementById("mon"));
    var mval=m.value;
    var mdefault=m.defaultValue;
    var y=(document.getElementById("year"));
    var yval=y.value;
    var ydefault=y.defaultValue;
    if(dval==ddefault||mval==mdefault||yval==ydefault)
    {
        if(dval==ddefault)
        {
            document.getElementById("dayp").innerHTML="This field is required";
            document.getElementById("headingd").style.cssText="color:hsl(0, 100%, 67%)";
            document.getElementById("day").style.cssText="border-color:hsl(0, 100%, 67%)";
        }
        if(mval==mdefault){
            document.getElementById("monp").innerHTML="This field is required";
            document.getElementById("headingm").style.cssText="color:hsl(0, 100%, 67%)";
            document.getElementById("mon").style.cssText="border-color:hsl(0, 100%, 67%)";
        }
        if(yval==ydefault)
        {
            document.getElementById("yearp").innerHTML="This field is required";
            document.getElementById("headingy").style.cssText="color:hsl(0, 100%, 67%)";
            document.getElementById("year").style.cssText="border-color:hsl(0, 100%, 67%)";
        }
    }
    else if(dval>28&&mval==2)
    {
    if(dval>28&&mval==2)
    {
        if(dval%4!=0)
        {
        document.getElementById("dayp").innerHTML="Invalid Date";
        document.getElementById("headingd").style.cssText="color:hsl(0, 100%, 67%)";
        document.getElementById("day").style.cssText="border-color:hsl(0, 100%, 67%)";   
        }
        if(dval%4==0&&dval>29)
        {
            document.getElementById("dayp").innerHTML="Invalid Date";
            document.getElementById("headingd").style.cssText="color:hsl(0, 100%, 67%)";
            document.getElementById("day").style.cssText="border-color:hsl(0, 100%, 67%)"; 
        }
    }
    }
    else if(dval>31)
    {
    if(mval==1||mval==3||mval==5||mval==7||mval==8||mval==10||mval==12)
    {
        if(dval>31)
        {
            document.getElementById("dayp").innerHTML="Invalid Date";
            document.getElementById("headingd").style.cssText="color:hsl(0, 100%, 67%)";
            document.getElementById("day").style.cssText="border-color:hsl(0, 100%, 67%)";
        }
        return;
    }
    }
    if(mval==4||mval==6||mval==9||mval==11)
    {
        if(dval>30)
        {
            document.getElementById("dayp").innerHTML="Invalid Date";
            document.getElementById("headingd").style.cssText="color:hsl(0, 100%, 67%)";
            document.getElementById("day").style.cssText="border-color:hsl(0, 100%, 67%)";
            return;
        }
    }
    if(mval>12||mval<1)
    {
        document.getElementById("monp").innerHTML="Invalid Month";
        document.getElementById("headingm").style.cssText="color:hsl(0, 100%, 67%)";
        document.getElementById("mon").style.cssText="border-color:hsl(0, 100%, 67%)";
        return;
    }
    else if(yval>year||yval<0)
    {
        document.getElementById("yearp").innerHTML="Invalid Year";
        document.getElementById("headingy").style.cssText="color:hsl(0, 100%, 67%)";
        document.getElementById("year").style.cssText="border-color:hsl(0, 100%, 67%)";
    }
    else{
        var ageyear=(year-yval);
        if(mon>=mval)
        {
            var agemonth=(mon-mval);
        }
        else
        {
            ageyear--;
            var agemonth=12+mon-mval;
        }
        if(dat>=dval)
        {
            var agedate=dat-dval;
        }
        else{
            agemonth--;
            var agedate=31+dat-dval;
        }
        if(agemonth<0)
        {
            agemonth=11;
            ageyear--;
        }
        document.getElementById("years").innerHTML=ageyear;
        document.getElementById("months").innerHTML=agemonth;
        document.getElementById("days").innerHTML=agedate;
    }
}