//import React, { useEffect, useState } from 'react'
import About from '../About/About'
import Home from '../Home/Home'
import Projects from '../Projects/Projects'
//import { useFetchState } from '../../customHook/useFetchState'
//import { crosURL } from '../../constant'
import Loader from '../Loader/Loader'


function Main({ data2 }) {

    
    return (
        <>
            {data2 ?
                <div>
                    <Home />
                    <About data={data2} />
                    <Projects projects={data2.projects} />
                    {/* <Footer /> */}
                </div>
                :
                <Loader/>
            }
        </>
    )
}

export default Main