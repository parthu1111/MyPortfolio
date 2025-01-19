import React from 'react'
import { Project } from '../Project/Project';
//import { crosURL } from '../../constant';
//import { useFetchState } from '../../customHook/useFetchState';

function ProjectsPage({ token ,projects}) {

    return (
        <>
            {projects &&
                <div className="container">
                    <div className="row my-3">
                        {projects.map((item) => (

                            <div className="col-lg-4 col-md-12 my-2 d-flex align-items-stretch">
                                <Project data={item} key={item.Id} />
                            </div>

                        ))}
                    </div>
                </div>
            }
        </>
    )
}

export default ProjectsPage