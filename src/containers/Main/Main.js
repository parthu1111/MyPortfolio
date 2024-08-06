import React, { useEffect,useState } from 'react'
import About from '../About/About'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
import Footer from '../Footer/Footer'
import { useFetchState } from '../../customHook/useFetchState'
import { crosURL } from '../../constant'

function Main({ token }) {

    let [data,setData]=useState(null);
    let fetchData=useFetchState();
    useEffect(()=>{
        if(token!=null && data==null){
            console.log('main useeffect method');
            let query='SELECT FIELDS(ALL), (SELECT FIELDS(ALL) FROM Projects__r limit 200) FROM Portfoilio__c LIMIT 200'
            let url=crosURL+'https://conga48-dev-ed.develop.my.salesforce.com/services/data/v61.0/query/?q='+query;
            fetchData(url,'GET',null,{'Authorization':'Bearer '+token,'Content-Type':'application/json'})
            .then(res=>{
                if(res.ok){
                    console.log(res);
                    let details=res.res.data.records[0];
                    console.log(details);
                    // setProjects(data.Projects__r.records);
                    // setPortfolio(res.res.data.records[0]);
                    setData(details);
                }
            })
        }

    },[token])
    return (
        <>
        {data?
            <div>
                <Home/>
                <About data={data}/>
                <Projects projects={data.Projects__r.records}/>
                <Footer/>
            </div>
            :
            <h1>Loading</h1>
        }
        </>
    )
}

export default Main