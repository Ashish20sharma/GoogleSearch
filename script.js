document.getElementById('clean').addEventListener("click", () => {
    document.getElementById("inp").value = ""
    document.getElementById("clean").style.display="none"
})
window.addEventListener("keydown",()=>{
    if(document.getElementById('inp').value.length>0){
        document.getElementById('clean').style.display="block"
    }
})
document.getElementById('search1').addEventListener('click',()=>{
    window.location.href=`https://www.google.com/search?q=${document.getElementById('inp').value}`
})