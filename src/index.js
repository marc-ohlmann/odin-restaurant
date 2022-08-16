import './style/style.css';

import  {   tabbedPage,
            pageTab
        }   from './tabbedPage/tabbedPage';

import  {   aboutTab,
        }   from './pages/about';

import  {   contactTab,
        }   from './pages/contact';

import  {   menuTab,
        }   from './pages/menu';


const htmlContentParent = document.querySelector("body");

const tabs = [
    menuTab,
    contactTab, 
    aboutTab, 
];

const restaurantPage = tabbedPage("Duck Duck Eat", htmlContentParent, tabs);


restaurantPage.initializePage();