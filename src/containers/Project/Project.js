import { Link } from "react-router-dom";

export const Project = ({ data }) => {

    let getText = (text) => {
        let maxlength = 300;
        if (text.length > maxlength) {
            return text.slice(0, maxlength) + '...';
        }
        return text;
    }
    return (
        
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{data.Title__c}</h5>
                    <p className="card-text">{getText(data.Description__c)}</p>
                    <Link to={'/project/' + data.Id} className="btn">More</Link>
                </div>
            </div>
    )
}