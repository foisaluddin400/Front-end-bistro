import SectionHead from "../../Pages/Shared/SectionHeading/SectionHead";
import Usehook from "../../useHook/Usehook";
import MenuCover from "../Components/MenuCover";
import MenuMaping from "../Components/MenuMaping";
import DessertBg from "../../assets/menu/dessert-bg.jpeg"
import Pizza from "../../assets/menu/pizza-bg.jpg"
import Salad from "../../assets/menu/salad-bg.jpg"
import Banner from "../../assets/menu/banner3.jpg"

const MainMenu = () => {
    const [menu] = Usehook()

    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');

    return (
        <div>
            <MenuCover title='OUR MENU' img={Banner}></MenuCover>
            <div>
                <SectionHead sectionPar='---Check it out---' sectionhead='FROM OUR MENU'></SectionHead>
            </div>
            <MenuMaping items={pizza} title='pizza' img={Salad}></MenuMaping>

            
            <div>
                <SectionHead sectionPar='---Check it out---' sectionhead='FROM OUR MENU'></SectionHead>
            </div>
            <MenuMaping items={soup} title='soup' img={Pizza}></MenuMaping>

            
            <div>
                <SectionHead sectionPar='---Check it out---' sectionhead='FROM OUR MENU'></SectionHead>
            </div>
            <MenuMaping items={dessert} title='dessert' img={DessertBg}></MenuMaping>


        </div>
    );
};

export default MainMenu;