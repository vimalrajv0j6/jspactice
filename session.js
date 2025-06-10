document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("complete");
    initApp();
  }
});
const initApp=()=>{
    const myContent = ["Earn","Grow","Give"];
    const myObj ={
        name: "vimal",
        myContent:["Earn","Grow","Give"],
        logname:function(){
            console.log(this.name);
        }
    };
    window.sessionStorage.setItem("mySessionStorage",JSON.stringify(myObj));
    const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStorage"));
    console.log(mySessionData);
    
}