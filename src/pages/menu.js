import  {   pageTab
        }   from '../tabbedPage/tabbedPage';


const menuTab = pageTab("Menu", (parentElement) => {

    let menuItem_PBJSoup = document.createElement("div");
    menuItem_PBJSoup.innerText = "Peanut Butter & Jelly Soup - $6.99";
    parentElement.appendChild(menuItem_PBJSoup);
    menuItem_PBJSoup.classList.add("menu-item");


    let menuItem_MCPizza = document.createElement("div");
    menuItem_MCPizza.innerText = "Macaroni & Cheese Pizza -- $3.99 / Slice";
    parentElement.appendChild(menuItem_MCPizza);
    menuItem_MCPizza.classList.add("menu-item");
});


export {
    menuTab,
}