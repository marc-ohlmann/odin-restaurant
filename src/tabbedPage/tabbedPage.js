const c_TabbedPageStyleClass_Title = "tabbed-page-title";
const c_TabbedPageStyleClass_Button = "tabbed-page-button";
const c_TabbedPageStyleClass_ButtonBox = "tabbed-page-button-box";
const c_TabbedPageStyleClass_ContentBox = "tabbed-page-content-box";


const pageTab = (tabName, populationFunction) => {
    const getName = () => tabName;
    const populateParent = (Parent) => populationFunction(Parent);


    return {getName, populateParent};
};

const tabbedPage = (restaurantName, parentElement, tabs) => {
    const getName = () => restaurantName;
    const getTabs = () => tabs;
    const getTabbedPageParent = () => parentElement;

    let pageTabContentBox = null;
    const getTabContentBox = () => {
        pageTabContentBox;
    };

    const clearTab = () => {
        pageTabContentBox.replaceChildren();
    };

    const setupHeader = () => {
        // page title
        let pageTitle = document.createElement("div");
        pageTitle.innerText = getName();
        pageTitle.classList.add(c_TabbedPageStyleClass_Title);

        // tab buttons box
        let tabButtonsBox = document.createElement("div");
        tabButtonsBox.classList.add(c_TabbedPageStyleClass_ButtonBox);

        // tab buttons
        let tabs = getTabs();
        tabs.forEach((tab) => {
            let tab_button = document.createElement("button");

            tab_button.innerText = tab.getName();
            tab_button.classList.add(c_TabbedPageStyleClass_Button);
            tab_button.onclick = handleTabButtonClick;

            tabButtonsBox.appendChild(tab_button);
        });

        // tab content box
        pageTabContentBox = document.createElement("div");
        pageTabContentBox.classList.add(c_TabbedPageStyleClass_ContentBox);

        // attach to parent
        let parent = getTabbedPageParent();
        parent.appendChild(pageTitle);
        parent.appendChild(tabButtonsBox);
        parent.appendChild(pageTabContentBox);
    };

    const setupTab = (tab) => {
        clearTab();
        tab.populateParent(pageTabContentBox);
    };

    const setupDefaultTab = () => {
        if(getTabs().length > 0) 
        {
            setupTab(tabs[0]);
        }
    };

    const initializePage = () => {
        setupHeader();
        setupDefaultTab();
    };

    const handleTabButtonClick = (event) => {
        const button_name = event.target.innerText;
        const tabs = getTabs();

        let target_tab = null;
        tabs.forEach((tab) => {
            if(tab.getName() === button_name)
            {
                target_tab = tab;                
            }
        });

        if(target_tab != null)
        {
            setupTab(target_tab);
        }
        else
        {
            console.log("error: failed to find target tab for button name " + button_name);
        }
    };


    return {getName, getTabs, initializePage};
};


export {
    tabbedPage,
    pageTab
}