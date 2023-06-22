import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Main from './Layout/Main';
import Product from './Components/Product/Product';
import Friends from './Components/Friends/Friends';
import FriendDetails from './Components/FriendDetails/FriendDetails';
import Posts from './Components/Posts/Posts';
import PostDetails from './Components/PostDetails/PostDetails';
function App() {

  const router = createBrowserRouter([
    {path: '/',
    element: <Main></Main>, 
    children:[
      {path: '/', element: <Home></Home>},
      {path: 'home', element: <Home></Home>},
      {path: 'product', element: <Product></Product>},
      {
        path: 'friends',
        
        loader: async () =>{
          return fetch('https://jsonplaceholder.typicode.com/users')
        },
        
        element: <Friends></Friends>
      },

      {
        path: '/friend/:friendid',

        loader: async ({params}) =>{
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendid}`)
        },
        element: <FriendDetails></FriendDetails>
      },
      {
        path: '/posts',

        loader: async() =>{
          return fetch('https://jsonplaceholder.typicode.com/posts')
        },

        element: <Posts></Posts>
      },

      {
        path: '/post/:postid',

        loader: async({params})=>{
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postid}`)
        },

        element: <PostDetails></PostDetails>
      }
    ]},
    {path: 'about', element: <About></About>},
    {path:'*', element: <div>Not found</div>}
      
    
  ])

  return (
    <div className="App">
        <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
