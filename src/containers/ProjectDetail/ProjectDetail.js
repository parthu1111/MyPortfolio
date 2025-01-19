import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//import { crosURL } from '../../constant'
//import { useFetchState } from '../../customHook/useFetchState'

function ProjectDetail({ projects }) {
  const { id } = useParams();
  console.log();

  let [data, setData] = useState(null);
  //let fetchData = useFetchState();
  useEffect(() => {
    projects && setData(projects.find(item => item.Id === id));

  }, [data, id, projects])

  return (
    
    <div>
      {data &&
        <div className="container projectDetail_Card p-4 my-3">

          <div className="row project_detail_header">
            <div className="col">
              <header className="py-3 text-center">
                <h1>{data.Title}</h1>
              </header>
            </div>
          </div>

          <div className="row vh-100 project_detail_body overflow-auto">

            <div className={`col-md-${data.Imagelinks ? 5 : 12} productdetail_col productdetail_col_data p-3 border-end`}>
              <div className="proudctdetail_col_data_inner p-1">
                <div className="proj_detail_header my-4">
                  <p className='text-center'>Project Description</p>
                </div>
                <div>
                  {/* <p className='proj_text'>{data.Description}</p> */}
                  <div dangerouslySetInnerHTML={{ __html: data.Description }}></div>
                </div>


                <div className="proj_detail_header my-4">
                  <p className='text-center'>My Contribution</p>
                </div>
                <div>
                  <p className='proj_text'>{data.RoleDetail}</p>
                </div>


                <div className="proj_detail_header my-4">
                  <p className='text-center'>Technologies</p>
                </div>
                <div>
                  <div className="skill_box">
                    {data.Technology.split(',').map((item, i) => (<span className="skill_item m-2 m-md-1 p-3 rounded" index={item.Id}>{item}</span>))}

                  </div>

                </div>
              </div>
            </div>


            {/* <div className="col-md-7  productdetail_col productdetail_col_proof p-3">
              {data && data.Imagelinks ?

                data.Imagelinks.split(',').map((item, index) => (
                  <div className="mb-3" key={index}>
                    <img
                      src={item}
                      alt={"Screenshot" + index}
                      className="img-fluid rounded"
                    />
                  </div>
                ))

                : <h3>no images</h3>}
            </div> */}
            {data.Imagelinks && data.Imagelinks.split(',').length > 0 && (
              <div className="col-md-7 productdetail_col productdetail_col_proof p-3">
                {data.Imagelinks.split(',').map((item, index) => (
                  <div className="mb-3" key={index}>
                    <img
                      src={item}
                      alt={"Screenshot" + index}
                      className="img-fluid rounded"
                    />
                  </div>
                ))}
              </div>
            )}
          </div >
        </div >
      }
    </div>
  )
}

export default ProjectDetail