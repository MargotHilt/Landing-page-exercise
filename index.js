
let hiddenMenu = document.querySelectorAll(".openable")
const openableTab = {menu: "nav", cross: "nav", features: {tabToOpen:"subnav-features", arrow: "down"}, company: {tabToOpen: "subnav-company", arrow: "down"}}
const modelContainerEl = document.getElementById("modal-container")

function openMenu(e){
    const targetId = e.currentTarget.id
    const target = openableTab[targetId]
        
    if(targetId == "features" || targetId == "company"){
        document.getElementById(target.tabToOpen).classList.toggle("hidden")
        if(target.arrow == "up"){target.arrow = "down"}
        else target.arrow = "up"
        e.currentTarget.lastElementChild.src = `./assets/icon-arrow-${target.arrow}.svg`
    }
    if(targetId == "menu" || targetId == "cross"){
        document.getElementById(target).classList.toggle("hidden")
        document.getElementById("modal-container").classList.toggle("modal-open")
    }
}


function closeMenu(menu){
    const subMenu = openableTab[menu.id]

    if(menu.id == "features" || menu.id == "company"){
        document.getElementById(subMenu.tabToOpen).classList.add("hidden")
        if(subMenu.arrow == "up"){subMenu.arrow = "down"}
        menu.lastElementChild.src = `./assets/icon-arrow-${subMenu.arrow}.svg`}
}

//nav state when resizing window//

window.addEventListener("resize", () => {
    hiddenMenu.forEach(menu => closeMenu(menu))
    if(modelContainerEl.classList.contains("modal-open")) {modelContainerEl.classList.toggle("modal-open")}
    if(window.innerWidth < 850){document.getElementById("nav").classList.add("hidden")}
    else document.getElementById("nav").classList.remove("hidden")   
})

//eventlistener state//

hiddenMenu.forEach(menu => menu.addEventListener("click", (e) => openMenu(e)))
hiddenMenu.forEach(menu => menu.addEventListener("mouseenter", (e) => 
    {if(window.innerWidth > 850){openMenu(e)}}
))
hiddenMenu.forEach(menu => menu.addEventListener("mouseleave", () => 
    {if(window.innerWidth > 850){setTimeout(() => closeMenu(menu), 2000)}}
))

//nav init state//

if(window.innerWidth < 850){
    document.getElementById("nav").classList.add("hidden")
}
else document.getElementById("nav").classList.remove("hidden")


