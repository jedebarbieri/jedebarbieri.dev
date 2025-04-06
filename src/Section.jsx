const Section = ({ title, children }) => {
    return (
        <div className="mt-6">
            <div className="text-3xl uppercase font-normal pb-1 mb-4 border-b-1">{title}</div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default Section;