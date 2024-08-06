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
        <div className="col-lg-12 col-md-12">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{data.Title__c}</h5>
                    <p className="card-text">{getText(data.Description__c)}</p>
                    <Link to={'/project/' + data.Id} className="btn btn-outline-secondary">More</Link>
                </div>
            </div>
        </div>
    );
}