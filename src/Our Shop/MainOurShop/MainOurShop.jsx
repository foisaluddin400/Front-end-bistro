import { useState } from "react";
import MenuCover from "../../Menusection/Components/MenuCover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Usehook from "../../useHook/Usehook";
import ShopCart from "../ShopComponents/ShopCart";
import { useParams } from "react-router-dom";

const MainOurShop = () => {
    //eti hocce path er sathe sathe jeno rout o eccess hoy
    const categorie = ['pizza','soup','dessert','salad','drinks'];
    const {category} = useParams();
    const initialIndex = categorie.indexOf(category);
    //eti hocce path er sathe sathe jeno rout o eccess hoy
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu] = Usehook()

    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div>
            <MenuCover title='OUR SHOP'></MenuCover>

            <div>
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>pizza</Tab>
                        <Tab>soup</Tab>
                        <Tab>dessert</Tab>
                        <Tab>salad</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel><ShopCart item={pizza}></ShopCart></TabPanel>
                    <TabPanel><ShopCart item={soup}></ShopCart></TabPanel>
                    <TabPanel><ShopCart item={dessert}></ShopCart></TabPanel>
                    <TabPanel><ShopCart item={salad}></ShopCart></TabPanel>
                    <TabPanel><ShopCart item={drinks}></ShopCart></TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default MainOurShop;