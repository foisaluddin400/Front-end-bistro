const PopularItem = ({ menus }) => {
  const { name, image, recipe, price } = menus;
  return (
    <div>
      <div className="hidden md:block">
        <div className="flex gap-x-4 p-4 ">
          <div>
            <img
              className="w-[100px] mt-3"
              style={{ borderRadius: "10px 10px 10px 10px" }}
              src={image}
              alt=""
            />
          </div>
          <div>
            <h1 className="md:text-2xl ">{name}------------</h1>
            <p className="md:mt-2 text-sm text-[#9e9e9e]"> {recipe}</p>
          </div>
          <h2 className="text-yellow-600 font-bold">${price}</h2>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex p-4">
          <div>
            <img
              className="w-[100px] mt-3"
              style={{ borderRadius: "10px 10px 10px 10px" }}
              src={image}
              alt=""
            />
          </div>
          <div className="pl-5">
            <div>
              <h1 className="md:text-2xl ">{name}------------</h1>
              <p className="md:mt-2 text-sm text-[#9e9e9e]"> {recipe}</p>
            </div>
            <h2 className="text-yellow-600 font-bold">${price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularItem;
