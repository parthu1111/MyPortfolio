import React, { useEffect, useState } from 'react'
import { Project } from '../Project/Project';
import { crosURL } from '../../constant';
import { useFetchState } from '../../customHook/useFetchState';

function ProjectsPage({ token }) {

    let [data, setData] = useState(null);
    let fetchData = useFetchState();
    useEffect(() => {
        if (token != null && data == null) {
            let query = 'select FIELDS(ALL) from Project__c limit 200'
            let url = crosURL + 'https://conga48-dev-ed.develop.my.salesforce.com/services/data/v61.0/query/?q=' + query;
            fetchData(url, 'GET', null, { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' })
                .then(res => {
                    if (res.ok) {
                        console.log(res.res.data.records);
                        setData(res.res.data.records);
                    }
                })
        }

    }, [token,data,fetchData])
    return (
        <>
            {data &&
                <div className="container">
                    <div className="row my-3">
                        {data.map((item) => (

                            <Project data={item} key={item.Id} />

                        ))}
                    </div>
                </div>
            }
        </>
    )
}

export default ProjectsPage