

const SectionHead = ({sectionPar, sectionhead}) => {
    return (
        <div className="md:w-4/12 m-auto text-center my-10">
            <p className="text-yellow-600 mb-2">{sectionPar}</p>
            <h2 className="border-y-4 text-3xl py-2 ">{sectionhead}</h2>
        </div>
    );
};

export default SectionHead;