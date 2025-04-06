const Education = ({ title, school, startDate, endDate }) => {
    return (
        <div className="text-base mb-5">
            <div className="font-medium leading-5">{title}</div>
            <div className="leading-5">{school}</div>
            <div className="mb-2 opacity-60 text-sm leading-5">{startDate} - {endDate}</div>
        </div>
    );
}

export default Education;