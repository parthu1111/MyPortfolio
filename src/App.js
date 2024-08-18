import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { useEffect, useState } from "react";
import { useFetchState } from './customHook/useFetchState.js';
import ProjectDetail from './containers/ProjectDetail/ProjectDetail.js'
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

function App() {

  const [token, setToken] = useState(null);
  let fetchData = useFetchState();
  
  useEffect(() => {
    //fetch salesforce token
    if (token == null) {
      let url ='https://conga48-dev-ed.develop.my.salesforce.com/services/oauth2/token'
      let body = {
        'grant_type': "password",
        'client_id': process.env.REACT_APP_CONSUMERKEY,
        'client_secret': process.env.REACT_APP_CONSUMERSECRET,
        'username': process.env.REACT_APP_USERNAME,
        'password': process.env.REACT_APP_PASSWORD + process.env.REACT_APP_SECURITYTOKEN
      }
      let header = {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin':'https://zippy-kangaroo-8d99bf.netlify.app',
        'Access-Control-Allow-Methods':'POST, PUT, PATCH, GET, DELETE, OPTIONS',
        'Access-Control-Allow-Headers':'Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization',
        'Access-Control-Allow-Credentials':true,


      }
      fetchData(url, 'POST', body, header).then(res => {

        if (res.ok) {
          console.log('parent');
          console.log(res);
          setToken(res.res.data.access_token);
        }
        else {
          console.log(res);
        }
      });
    }
  }, [fetchData,token])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navbar />}>
        <Route index element={<Main token={token} />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='Project' element={<ProjectsPage token={token} />} />
        <Route path='/project/:id' element={<ProjectDetail token={token} />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router} />
  );
}

export default App;
