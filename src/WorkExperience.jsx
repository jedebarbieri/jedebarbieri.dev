const WorkExperience = ({position, company, location, startDate, endDate, description}) => {
    return (
        <div className="text-base">
            <div className="font-medium leading-5">{position}</div>
            <div className="leading-5"><span className="font-medium">{company}</span> - {location}</div>
            <div className="mb-2 opacity-60 text-sm leading-5">{startDate} - {endDate}</div>
            <div className="">
                {description}
            </div>
        </div>
    );
}

export default WorkExperience;

