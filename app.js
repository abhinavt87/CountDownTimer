let endDate="16 September 2024 02:56 PM"

const endDateByUser = document.getElementById("dateTimeByUser")

const btn = document.getElementById("setBtn")
btn.onclick = () =>{

    let dateTimeVal = endDateByUser.value

    endDate = dateTimeVal;
    
    const endDateee = new Date(endDate);
   
    const hehe = endDateee.toString();
    const indexOfGMT = hehe.indexOf('GMT');
    const datePart = hehe.substring(0, indexOfGMT).trim();
    document.getElementById("end-date").innerText = datePart;

}


const inputs=document.querySelectorAll("input")
function clock(){
    const end=new Date(endDate)
    const now=new Date()
    const difference=(end-now)/1000;
    console.log(difference)

    if(difference<0) return;

    let days, hours, mins, secs;

    secs = Math.floor(difference)%60;
    mins = Math.floor(difference/60)%60;
    hours = Math.floor(difference/3600)%24;
    days = Math.floor(difference/3600/24)%24;
    

    inputs[0].value= days
    inputs[1].value=hours
    inputs[2].value= mins;
    inputs[3].value=secs;
    
}
clock()
setInterval(
    ()=>{
        clock()
    },
    1000
)