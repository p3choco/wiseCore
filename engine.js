document.addEventListener("scroll",(val)=>{
    let el = document.getElementById("roadLeft");
    let al = document.getElementById("roadRight");
    el.style.right=window.scrollY/2;
    al.style.right=2000-(window.scrollY/2);
})
