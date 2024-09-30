
import SectionHead from "../Shared/SectionHeading/SectionHead";
import PopularItem from "./PopularItem";
import Usehook from "../../useHook/Usehook";


const PopularSection = () => {

    const [menu] = Usehook()

    const popularItem = menu.filter(item=> item.category ==='popular');
    

    return (
        <div className="my-[70px]">
            <div>
                <SectionHead sectionPar='---Check it out---' sectionhead='FROM OUR MENU'></SectionHead>
            </div>
            <div className="grid md:grid-cols-2 gap-3">
            {
                popularItem.map((menus)=> <PopularItem menus={menus}></PopularItem>)
            }
            </div>
        </div>
    );
};

export default PopularSection;