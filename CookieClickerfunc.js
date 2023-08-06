// localStorsge Speicherungen
let ClickerCookies=JSON.parse(localStorage.getItem("ClickedCookies")) || 0;
let cps=JSON.parse(localStorage.getItem("Cps")) || 1;  
let CookieCounter=document.getElementById("CookieCounter");
let UpdateClickerMoney=JSON.parse(localStorage.getItem("UpdateClickerMoney")) || 50; 
let ClickZähler=JSON.parse(localStorage.getItem("ClickZähler")) || 0;
let ClickZähler2=JSON.parse(localStorage.getItem("ClickZähler2")) || 0;
let ClickZähler3=JSON.parse(localStorage.getItem("ClickZähler3")) || 0;
let RewardResult=JSON.parse(localStorage.getItem("ResultCounter")) || 0;
// Sound effekte/sonstiges
let CashSound=new Audio();
CashSound.src="img/CashSound.mp3";

let CrunchySound = new Audio();
CrunchySound.src="img/CrunchySound.mp4";


window.addEventListener("load",function(){
   CookieCounter.innerHTML=ClickerCookies;
   document.getElementById("UpdateClickerMoney").innerHTML=UpdateClickerMoney+"Cookies";

   if(ClickZähler == 1){
    document.getElementById("boughtSbtn1").classList.add("bought");
   }

   if(ClickZähler2 == 1){
    document.getElementById("boughtSbtn2").classList.add("bought");
   }

   if(ClickZähler3 == 1){
    document.getElementById("boughtSbtn3").classList.add("bought");
   }


   setInterval(function(){
    if(ClickZähler==1){

        ClickerCookies+=1
        RewardResult+=1
        CookieCounter.innerHTML=ClickerCookies;
        localStorage.setItem("ClickedCookies",JSON.stringify(ClickerCookies));
        localStorage.setItem("ResultCounter",JSON.stringify(RewardResult));
    }
 
 
},5000)


setInterval(function(){
    if(ClickZähler2==1){

        ClickerCookies+=5;
        RewardResult+=5
        CookieCounter.innerHTML=ClickerCookies;
        localStorage.setItem("ClickedCookies",JSON.stringify(ClickerCookies));
        localStorage.setItem("ResultCounter",JSON.stringify(RewardResult));
    }
    
    
   },3000)


   setInterval(function(){
    if(ClickZähler3==1){
        ClickerCookies+=1;
        RewardResult+=1
        CookieCounter.innerHTML=ClickerCookies;
        localStorage.setItem("ClickedCookies",JSON.stringify(ClickerCookies));
        localStorage.setItem("ResultCounter",JSON.stringify(RewardResult));
    }
    
    
   },1000)
})

function play() {
    var CrunchySound = document.createElement("audio");
    CrunchySound.src = "img/CrunchySound.mp4";

   

    setTimeout(function(){
        CrunchySound.play();
    },10)
   
  }



// CookieBild (Html Code) function
function Cookie(){

    play();
    ClickerCookies+=cps;
    RewardResult+=cps;
    CookieCounter.innerHTML=ClickerCookies;
    localStorage.setItem("ClickedCookies",JSON.stringify(ClickerCookies));
    localStorage.setItem("ResultCounter",JSON.stringify(RewardResult));
}

function UpdateClicker(){
    if(ClickerCookies >= UpdateClickerMoney){
        CashSound.play();
        cps+=1;
        ClickerCookies-=UpdateClickerMoney;
        UpdateClickerMoney+=100;
        CookieCounter.innerHTML=ClickerCookies;
        document.getElementById("UpdateClickerMoney").innerHTML=UpdateClickerMoney+"Cookies";
        localStorage.setItem("ClickedCookies",JSON.stringify(ClickerCookies));
        localStorage.setItem("Cps",JSON.stringify(cps));
        localStorage.setItem("UpdateClickerMoney",JSON.stringify(UpdateClickerMoney));
        localStorage.setItem("ResultCounter",JSON.stringify(RewardResult));

    }


}
// zeitspanne für den nächsten Klick
var lastClickTime = JSON.parse(localStorage.getItem("LastClickedGrandmaSuprise")) || 0;
var clickInterval = 600000;




function GrandmaSuprises(){

    var currentTime = new Date().getTime();
    if ((currentTime - lastClickTime) >= clickInterval) {
        
        lastClickTime = currentTime;
        ClickerCookies+=150;
        RewardResult+=150;
        CookieCounter.innerHTML=ClickerCookies;
        localStorage.setItem("ResultCounter",JSON.stringify(RewardResult));
        localStorage.setItem("LastClickedGrandmaSuprise",JSON.stringify(lastClickTime));
        document.getElementById("GrandmasSurpise").innerHTML="Next in 10 min";
        setTimeout(function(){
            document.getElementById("GrandmasSurpise").innerHTML="";
        }, 600000);
        
    } else {
        alert("Please wait 10 minutes before clicking again.");
    }
}

let RushLastClicked=JSON.parse(localStorage.getItem("neighborsfactoryRushs")) || 0;
let Rushinterval=21600000;

function Neighborsfactory(){

    let currentTime=new Date().getTime();
    if((currentTime-RushLastClicked) >=RushLastClicked){
        ClickerCookies+=350;
        RewardResult+=350;
        RushLastClicked=currentTime;
        CookieCounter.innerHTML=ClickerCookies;
        localStorage.setItem("ResultCounter",JSON.stringify(RewardResult));
        localStorage.setItem("neighborsfactoryRushs",JSON.stringify(RushLastClicked));
        document.getElementById("neighborsfactoryRush").innerHTML="Next Rush in 6h";
        setTimeout(function(){
            document.getElementById("neighborsfactoryRush").innerHTML="";
        },21600000);
    }else{alert("Du musst noch 6h warten")};

}

// Opening/Closing the Shop

function OpenShop(CookieShop) {
    document.getElementById(CookieShop).classList.add("ShowShop");

}

function CloseShop(CookieShop) {
    document.getElementById(CookieShop).classList.remove("ShowShop");

}

// Shop button functions with foreach

let Sbtns=document.querySelectorAll(".Shop-button");



Sbtns.forEach(function(Sbtn){
    Sbtn.addEventListener("click", function(e){
        const style=e.currentTarget.classList;
        
        
       
        
        if(style.contains("SBtn1")){
            if(ClickZähler < 1 && ClickerCookies >=200){
                document.getElementById("boughtSbtn1").classList.add("bought");
                CashSound.play();
                ClickZähler++;
                ClickerCookies-=200;
                localStorage.setItem("ClickZähler",JSON.stringify(ClickZähler));

     
               

            } 
          
        }

        if(style.contains("SBtn2")){
            if(ClickZähler2 <= 1 && ClickerCookies >=410){
                document.getElementById("boughtSbtn2").classList.add("bought");
                CashSound.play();
                ClickZähler2++;
                ClickerCookies-=410;
                localStorage.setItem("ClickZähler2",JSON.stringify(ClickZähler2));
     
               

            } 
        }

        if(style.contains("SBtn3")){
            if(ClickZähler3 <= 1 && ClickerCookies>=625){
                document.getElementById("boughtSbtn3").classList.add("bought");
                CashSound.play();
                ClickZähler3++;
                ClickerCookies-=625;
                localStorage.setItem("ClickZähler3",JSON.stringify(ClickZähler3));
     
               

            } 
        }

        if(style.contains("SBtn4") && ClickerCookies>=120){

            ClickerCookies-=120;
            ClickerCookies+=Math.floor(Math.random()*220) + 40;
            CookieCounter.innerHTML=ClickerCookies;
            CashSound.play();
           
        }

        localStorage.setItem("ClickedCookies",JSON.stringify(ClickerCookies));
    })

})



// Sidebar function

function OpenSidebar(SideBar) {
    document.getElementById(SideBar).classList.add("ShowSidebar");

}

function CloseSidesbar(SideBar){
    document.getElementById(SideBar).classList.remove("ShowSidebar");
    

}


// Reward Function

function Reward (n){
    if(n==1 && RewardResult >=1000){
      CookieCounter.style.color="blue";
    }

    if(n==2 && RewardResult >=10000){
        CookieCounter.style.color="blue";
      }

      if(n==3 && RewardResult >=15000){
        CookieCounter.style.color="blue";
      }

      if(n==4 && RewardResult >=50000){
        CookieCounter.style.color="blue";
      }

      if(n==5 && RewardResult >=100000){
        CookieCounter.style.color="blue";
      }

      if(n==6 && RewardResult >=1000000){
        CookieCounter.style.color="blue";
      }
}


