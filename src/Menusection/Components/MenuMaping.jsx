import { Link } from "react-router-dom";
import PopularItem from "../../Pages/PopulerSection/PopularItem";
import MenuCover from "./MenuCover";



const MenuMaping = ({ items ,title, img}) => {
    return (
        <div>
            <div className="my-[70px]">
                <MenuCover img={img} title={title}></MenuCover>

                <div className="grid md:grid-cols-2 gap-3">
                    {
                        items.map((menus) => <PopularItem menus={menus}></PopularItem>)
                    }
                </div>
                <div className="text-center mt-6">
                    <Link to={`/ourshop/${title}`}><button className="btn shadow-2xl bg-white  text-black"> Show Menu </button></Link>
                </div>
            </div>
        </div>
    );
};

export default MenuMaping;