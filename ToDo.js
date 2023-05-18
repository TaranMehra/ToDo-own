//click on btn and reach to the page

const weekly = document.querySelector('.weekly');
const weeklypage = document.querySelector('.weeklytodo');
const today = document.querySelector('.today');
const todaypage = document.querySelector('.todaytodo');
const yesterday = document.querySelector('.yesterday');
const yesterdaypage = document.querySelector('.yesterdaytodo');
const input_page = document.querySelector('.input_page')
const input_taskbar = document.querySelector('#input_taskbar');



weekly.addEventListener("touchstart",function(e){
 weeklypage.scrollIntoView({behaviour:"smooth"})
  })


today.addEventListener("click",function(e){
  todaypage.scrollIntoView({behaviour:"smooth"})
},false)


yesterday.addEventListener("click",function(e){
  yesterdaypage.scrollIntoView({behaviour:"smooth"})
},false)


//  1 (intersection Observer)
const btn = document.querySelectorAll('.btn');
const wyt = document.querySelectorAll('.wyt');
//part 1 (intersection observer)
const conditions = {
 threshold: 0,
 rootMargin: "-50%",
}

const observer = new IntersectionObserver((enteries, observe)=> {
    enteries.forEach(entry=> {
     tell_curentbtn(entry.target).classList.remove('currentbtn');
        if (entry.isIntersecting) {
              input_page.style.display = "none";
              input_taskbar.value = "";
              entry.target.classList.add('this');
              tell_curentbtn(entry.target).classList.add('currentbtn');
              }
        else 
           entry.target.classList.remove('this');
        
     })}, conditions);

for (let keys of wyt) {
observer.observe(keys)
}


function tell_curentbtn(currentdiv){
   
   for (let symbol_btn of btn) {

    if (currentdiv.classList.contains('justweekly') && symbol_btn.classList.contains('justweekly')) 
       { return symbol_btn; }
     
     else if (currentdiv.classList.contains('justtoday')&&symbol_btn.classList.contains('justtoday')) 
     {return symbol_btn} 
     
    else if (currentdiv.classList.contains('justyesterday')&&symbol_btn.classList.contains('justyesterday')){
             return symbol_btn;     
    }

   }
}

//click to add(on weekly and today)
const click_to_add = document.querySelectorAll('.click_to_add');
const plus = document.querySelector('.click_to_add');

//weekly adder
click_to_add[0].addEventListener("click",(e)=>{
const weeklyli = e.target.parentNode.parentNode;
show_input_page(weeklyli);
 })

//today adder
click_to_add[1].addEventListener("click",(e)=>{
const todayli = e.target.parentNode.parentNode;
show_input_page(todayli);
 })



function show_input_page(caller){
 input_null.innerHTML = "";
 input_page.style.display = "grid";
 calling_by(caller);
 }
 
 
 //Entering the task 
 
 const submit_button = document.querySelector('.submit_button');
 const input_null = document.querySelector('#input_null');
 
 function calling_by(caller){
 submit_button.addEventListener("click",(e)=>{
   
    const entered_task = input_taskbar.value; 
  if(entered_task ==""){
             input_null.innerHTML = "Input is null";
                     }
 else{
      console.log("did you call me through ======================",caller.classList)
       if(caller.classList.contains('todaytodo')){
               today_page(entered_task);
        }
       else
             weekly_page(entered_task);
 }
 })};
 
 
const date = new Date(); 
 
//input triggered by todaytodo page

function today_page(entered_task){
let today_date = date.toDateString().replaceAll(" ","_");
console.log("today_date = ",today_date)
today_date = {};


//making today_date_keys
   
function get_today_date_key(){
 let temp_key_store = 0;
 setInterval( temp_key_store = function(){
 const keydate = new Date();
const today_date_keys = `${keydate.getFullYear()}${keydate.getMonth()+1}${date.getDate()}${date.getHours()}${keydate.getMinutes()}${keydate.getSeconds()}${keydate.getMilliseconds()}`;
return today_date_keys;
console.log("today date keys",today_date_keys);
return today_date_keys;
},1)
console.log("returning today date keys",temp_key_store);
 //console.log()
 return temp_key_store;
}

// setInterval(function(){
//  const newdate = new Date();
//  console.log("the seconds are ",newdate.getSeconds());
// },1000);


//making li element
const new_li = document.createElement('li');
  new_li.setAttribute("class","eachlist");
  new_li.innerHTML = `${entered_task}`;
  todaypage.appendChild(new_li);
 const today_date_key = get_today_date_key();
today_date[today_date_key] = new_li;
console.log("the gaint today object is", today_date)
//clearIgnterval(today_date_key);
}


//input triggered by weeklytodo page
function weekly_page(entered_task){
  const new_li = document.createElement('li')
  new_li.setAttribute("class","eachlist");
  new_li.innerHTML = `${entered_task}`;
  weeklypage.appendChild(new_li);
  
}


