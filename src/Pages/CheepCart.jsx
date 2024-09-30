import SectionHead from "./Shared/SectionHeading/SectionHead";


const CheepCart = () => {
    const cheep = [
        {
            img:"https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg",
            name: "Escalope de Veau",
            recipe: 'Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette',
        },
        {
            img:"https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg",
            name: "Escalope de Veau",
            recipe: 'Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette',
        },
        {
            img:"https://cristianonew.ukrdevs.com/wp-content/uploads/2016/08/product-2-370x247.jpg",
            name: "Escalope de Veau",
            recipe: 'Pan roasted haddock fillet wrapped in smoked French bacon with pea purée and tomato and chive vinaigrette',
        }
    ]
    return (
        <div>
            <div className="mt-[90px]">
                <SectionHead sectionPar='------Should Try------' sectionhead='CHEF RECOMMENDS'></SectionHead>
            </div>

            <div className="md:grid grid-cols-3">
                {
                    cheep.map((cheeps)=> 
                    <div className="bg-zinc-100 m-5">
                        <img className="w-[100%]" src={cheeps.img} alt="img" />
                        <div className="p-5 text-center">
                            <h1 className="text-2xl font-semibold">{cheeps.name}</h1>
                            <p className="py-3 text-sm">{cheeps.recipe}</p>
                            <button className="btn bg-yellow-600 text-white border-none">Add To cart</button>
                        </div>
                    </div>
                    
                )
                }
            </div>
        </div>
    );
};

export default CheepCart;