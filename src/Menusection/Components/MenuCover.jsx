

const MenuCover = ({img, title}) => {
    return (
        <div className="menuCover " style={{backgroundImage:`url("${img}")`}}>
            <div className="menuHeadd py-[100px]">
                <h1 className="text-5xl pb-3">{title}</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing </p>
            </div>
        </div>
    );
};

export default MenuCover;