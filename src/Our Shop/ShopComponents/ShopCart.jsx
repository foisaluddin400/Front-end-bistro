
import ShopCarts from "./ShopCarts";


const ShopCart = ({item}) => {
   
    


    return (
        <div>
            <div className="grid md:grid-cols-4">
                {
                    item.map((cheeps)=> <div><ShopCarts cheeps={cheeps}></ShopCarts></div>)
                }
            </div>
        </div>
    );
};

export default ShopCart;