
const pageTab = (tabName, populationFunction) => {
    const getName = () => tabName;
    const populateParent = (Parent) => populationFunction(Parent);


    return {getName, populateParent};
};

const tabbedPage = (restaurantName, parentElement, tabs) => {
    const getName = () => restaurantName;
    const getTabs = () => tabs;
    const getParent = () => parentElement;
    const clearTab = () => {
        console.log("clearPage() NOT IMPLEMENTED");
    };
    const setupHeader = () => {
        console.log("setupHeader() NOT IMPLEMENTED");
    };
    const setupTab = (tab) => {
        clearTab();
        tab.populateParent(getParent());
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


    return {getName, getTabs, getParent, initializePage};
};


export {
    tabbedPage,
    pageTab
}