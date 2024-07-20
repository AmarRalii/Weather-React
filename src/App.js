import './App.css';
import {RouterProvider,  createHashRouter} from 'react-router-dom';
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import News from './Component/News/News';
import Contact from './Component/Contact/Contact';





let routers = createHashRouter([
  {path:'',element:<Layout/>, children:[
    {index:true, element:<Home></Home>},
    {path:'news', element:<News></News>},
    {path:'contact', element:<Contact></Contact>},

  ]
}])




function App() {
  return <RouterProvider router={routers}></RouterProvider>
}

export default App;
