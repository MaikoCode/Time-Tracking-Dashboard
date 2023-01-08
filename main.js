const hours = document.querySelectorAll(".hours")
const previousPeriod = document.querySelectorAll(".previous")
const periodButtons = document.querySelectorAll(".period")

periodButtons.forEach(periodButton => {
    periodButton.addEventListener("click", handlePeriod);
});

let data = [];
function getJsonFile(name, data){
    fetch(name)
    .then((response) => response.json())
    .then((json) => {data.push(json)});
}
getJsonFile("./data.json", data)

function handlePeriod(e){
    console.log(data)
    for(let i = 0; i < periodButtons.length; i++){
        periodButtons[i].classList.remove("active")
    }

    e.target.classList.add("active")
   let = value = e.target.textContent
   value = value.toLowerCase()

   for(let i = 0; i < hours.length; i++){
        let pass = null
        let period = e.target.textContent
        if( period === "Daily"){
            pass = "Yesterday "
        }else if(period === "Weekly"){
            pass = "Last Week "
        }else{
            pass = "Last Month "
        }
        hours[i].textContent = data[0][i].timeframes[value].current + "hrs"
        previousPeriod[i].textContent = pass + data[0][i].timeframes[value].previous + " - hrs"
   }
}