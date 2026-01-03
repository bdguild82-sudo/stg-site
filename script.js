function toggleDropdown(id){
    const d=document.getElementById(id);
    d.style.display=d.style.display==="flex"?"none":"flex";
}

function loadPage(page){
    ["welcomePage","rankPage","clipsPage"].forEach(p=>{
        document.getElementById(p).style.display="none";
    });
    document.getElementById(page+"Page").style.display =
        page==="welcome" ? "flex" : "block";
}

const text="Welcome to the official STG CLAN WEBSITE";
let i=0,del=false;

function typeLoop(){
    const el=document.getElementById("typingText");
    el.textContent=text.substring(0,del?i--:i++);
    if(i>text.length+1)del=true;
    if(i<0){del=false;i=0}
    setTimeout(typeLoop,del?50:80);
}
typeLoop();
