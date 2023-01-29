import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Blog from '../Blog/Blog';
import About from '../About/About';
import Services from '../Services/Services';
import Pricing from '../Pricing/Pricing';
import Contact from '../Contact/Contact';
import NotFound from '../NotFound/NotFound';
import './App.scss';

function App() {
  const routes=createBrowserRouter([
        {path:'',element:<Layout/>,errorElement:<NotFound/>,children:[
          {index:true,element:<Home/>},
           {path:'about',element:<About/>},
          {path:'blog',element:<Blog/>},
          {path:'services',element:<Services/>},
          {path:'pricing',element:<Pricing/>},
          {path:'contact',element:<Contact/>},
        ]}
  ])
  return (
    <div className="App">
       <RouterProvider router={routes}>
       </RouterProvider>
    </div>
  );
}

export default App;
