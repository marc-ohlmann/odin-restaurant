import  {   pageTab
        }   from '../tabbedPage/tabbedPage';


const aboutTab = pageTab("About", (parentElement) => {
    let aboutText = document.createElement("div");
    aboutText.innerText = "Duck Duck Eat was started in August of 2022 by a couple of entrepreneurs \nseeking to pioneer changes in the restaurant industry.";
    parentElement.appendChild(aboutText);
});


export {
    aboutTab,
}