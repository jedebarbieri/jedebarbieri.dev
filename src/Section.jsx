const Section = ({ title, children }) => {
    return (
        <div className="my-3 w-full">
            <div className="text-3xl uppercase font-normal pb-1 mb-5 border-b-1">{title}</div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Section;