import  {   pageTab
        }   from '../tabbedPage/tabbedPage';


const contactTab = pageTab("Contact", (parentElement) => {

    let contactDetailsText_Phone = document.createElement("div");
    contactDetailsText_Phone.innerText = "(xxx) xxx-xxxx";
    parentElement.appendChild(contactDetailsText_Phone);

    
    let contactDetailsText_Address = document.createElement("div");
    contactDetailsText_Address.innerText = "11111 EastWest Fakeplace Ln \nNotacity, XY 00111";
    parentElement.appendChild(contactDetailsText_Address);

});


export {
    contactTab,
}