document.addEventListener("scroll",(val)=>{
    console.log(window.scrollY);
    let el = document.getElementById("roadLeft");
    el.style.right=window.scrollY/2;
})

document.addEventListener("scroll",(val)=>{
    console.log(window.scrollY);
    let el = document.getElementById("roadRight");
    el.style.right=(-window.scrollY/2)+1000;
})
