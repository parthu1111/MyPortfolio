import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";
//import { crosURL } from '../../constant'
//import { useFetchState } from '../../customHook/useFetchState'

function ProjectDetail({projects}) {
  const { id } = useParams();
  console.log(id);
  
  let [data, setData] = useState(null);
  //let fetchData = useFetchState();
  useEffect(() => {
      // if (token != null && data == null) {
      //   let query = "select FIELDS(ALL) from Project__c where Id='"+id+"' limit 200";
      //   let url = crosURL + 'https://conga48-dev-ed.develop.my.salesforce.com/services/data/v61.0/query/?q=' + query;
      //     fetchData(url, 'GET', null, { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' })
      //         .then(res => {
      //             if (res.ok) {
      //                 console.log(res.res.data.records[0]);
      //                 setData(res.res.data.records[0]);
      //             }
      //         })
      // }
      projects && setData(projects.find(item=>item.Id===id));

  }, [data,id,projects])

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    pauseOnHover: true
  };
  return (
    <div className="container my-3">
      {data &&<div className="row justify-content-center">
        <div className="col-12 card">
          <div className="row p-4">
            <div className="col-12 projectTitle">
              <p className='text-center'>{data.Title}</p>
            </div>
            {data.imageLinks__c?<div className='col-12 proj_imgs my-2 justify-content-center d-flex'>
              <div className="img_preview">
                <Slider {...settings}>
                  {data.Imagelinks.split(',').map((item,index)=>(
                    <div className="img_box" key={item.Id}>
                    <img src={item} alt='img not found'/>
                  </div>
                  ))}
                </Slider>
              </div>
            </div>:<h3>no images</h3>}
            <div className="col-12">
              <div className="proj_header my-4">
                <p className='text-center'>Project Description</p>
              </div>
              <div>
                <p className='proj_text'>{data.Description}</p>
              </div>
            </div>

            <div className="col-12">
              <div className="proj_header my-4">
                <p className='text-center'>My Contribution</p>
              </div>
              <div>
                <p className='proj_text'>{data.RoleDetail}</p>
              </div>
            </div>

            <div className="col-12">
            <div className="proj_header my-4">
                <p className='text-center'>Technologies</p>
              </div>
              <div className="skill_box">
                                {data.Technology.split(',').map((item,i)=>(<span className="skill_item m-2 m-md-1 p-3 rounded" index={item.Id}>{item}</span>))}
                               
                            </div>
            </div>
            
          </div>
        </div>
      </div>}
    </div>
  )
}

export default ProjectDetail