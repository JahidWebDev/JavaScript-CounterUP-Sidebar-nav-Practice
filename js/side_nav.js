const sideNav = document.querySelector(".sidenav");
const navberIcon = document.querySelector(".navberIcon");
const cros = document.querySelector(".cros");

navberIcon.addEventListener("click", () =>{
    if (sideNav.classList.contains("sidenav")){
        sideNav.classList.toggle("activeSideNav");
    }
});

cros.addEventListener("click", () =>{
    
    sideNav.classList.add("activeSideNav");
    
});