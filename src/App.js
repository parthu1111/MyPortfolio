import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { useEffect, useState } from "react";
//import { useFetchState } from './customHook/useFetchState.js';
import ProjectDetail from './containers/ProjectDetail/ProjectDetail.js'
import '../node_modules/animate.css/animate.min.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Navbar from './containers/Navbar/Navbar.js'
import Contact from './containers/Contact/Contact.js'
import NotFound from './containers/NotFound/NotFound.js';
import ProjectsPage from './containers/ProjectsPage/ProjectsPage.js';
import Main from './containers/Main/Main.js';
import Footer from './containers/Footer/Footer.js';

function App() {

  //const [token, setToken] = useState(null);
  //let fetchData = useFetchState();
  const [data, setData] = useState(null);
  
  useEffect(() => {

    const fetchData = async () => {
      //const url="http://localhost:8888/api/v1/getdetails"
      const url="https://portfolioservices.netlify.app/api/v1/getdetails"
      const response = await fetch(url, {
        method: 'GET'
      });
      const resJson = await response.json();
      //console.log("public api to get data");
      //console.log(resJson);
      setData(resJson);
    };
  
    fetchData();
  }, [])

  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<><Navbar /><Footer/></>}>
        <Route index element={<Main  data2={data} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='Project' element={<ProjectsPage  projects={data?.projects}/>} />
        <Route path='/project/:id' element={<ProjectDetail  projects={data?.projects} />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
