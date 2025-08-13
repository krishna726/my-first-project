const Base_url=   "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json";
// const Base_url= 'https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=AUD&to=CAD&amount=1&=languageen';
// const Base_url=  'https://currency-converter241.p.rapidapi.com/conversion_rate?from=UYU&to=USD';


const  dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".btn");
const msg = document.querySelector(".msg");
 const fromcurr = document.querySelector("select[name='from']");
    const tocurr = document.querySelector("select[name='to']");
for( let select of dropdowns){
    for(let currcode in countryList){
        let newoption =document.createElement("option");
        newoption.innerText=currcode;
        newoption.value=currcode;

        if(select.name==="from"&& currcode=="USD"){
            newoption.selected="selected";   
        }
        if( select.name=="to"&&currcode=="INR")
            {
                 newoption.selected="selected"; 

        }
  
    select.append(newoption);

}
select.addEventListener("change",(eve)=>
    updateflag(eve.target)
);
}
const updateflag = (element)=>{
    
    let currcode=element.value;
    let countrycode = countryList[currcode];
    let newsrc=  `https://flagsapi.com/${countrycode}/flat/64.png`;
let img= element.parentElement.querySelector("img");
img.src=newsrc;
};
btn.addEventListener("click",async(evt)=>{
   evt.preventDefault(); 
let amount=document.querySelector(".amt input");
let amtval=  amount.value;
if(amtval==""||amtval<1){
    amtval=1;
    amount.value="1";
}   
console.log(amtval)
const URL=`${Base_url}/${fromcurr.value.toLowerCase()}/${tocurr.value.toLowerCase()}.json`;
let response=await fetch(URL);
console.log(response);
let data =await response.json();
console.log(data);
let rate =data [tocurr.value.toLowerCase()];
let finalamt= amtval*rate;
msg.innerText = `${amtval} ${fromcurr.value} = ${finalamt} ${tocurr.value}`;
}
);
