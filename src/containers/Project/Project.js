import { Link } from "react-router-dom";

export const Project = ({ data }) => {

    let getText = (text) => {
        let maxlength = 300;
        if (text.length > maxlength) {
            return text.slice(0, maxlength) + '...';
        }
        return text;
    }

    let convertRichTextToPlainText=(htmlContent) =>{
        const tempElement = document.createElement('div');
        tempElement.innerHTML = htmlContent;
        let text=getText(tempElement.innerText);
        return text;
      }
    return (
        
            <div className="card project_card p-1">
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title project_card_title p-1">{data.Title}</h5>
                    <p className="card-text project_card_text p-1 mb-3">{convertRichTextToPlainText(data.Description)}</p>
                    <Link to={'/project/' + data.Id} className="btn moreButton mt-auto">More</Link>
                </div>
            </div>
    )
}