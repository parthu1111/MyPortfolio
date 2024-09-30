import { useEffect, useState } from "react";
import SubHeader from '../SubHeader/SubHeader';

const About = ({ data }) => {

    let [record, setRecord] = useState(data);
    useEffect(() => {
        if (data != null) {
            setRecord(data);
        }
    }, [data])
    return (
        <div className="container mbottom">
            <SubHeader title="ABOUT ME" />

            <div className="row">
                <div className="col-lg-6 col-md-12">
                    <div className="about_box">
                        <h3 className="box_header mb-3">Get to know me!</h3>
                        <div>
                            {record != null && record.About__c}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12">
                    <div className="about_box">
                        <h3 className="box_header mb-3">Skills</h3>
                        <div className="skill_box">
                            {record != null && record.Skill__c.split(',').map((item, i) => {
                                // <span className="skill_item" index={i}>{item}</span>
                                // if(i%2===0){
                                //     return <div className="shadow-sm m-2 m-md-1 p-3 bg-white rounded skill_item rise-shake">{item}</div>
                                // }
                                // else{
                                //     return <div className="shadow-sm m-2 m-md-1 p-3 bg-white rounded skill_item skew-shake-y">{item}</div>
                                // }
                                return <div className="shadow-sm m-2 m-md-1 p-3 rounded skill_item">{item}</div>
                                
                            })
                            }

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;