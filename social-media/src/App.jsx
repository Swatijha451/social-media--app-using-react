
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Post from './components/Post';
import CreatePost from './components/CreatePost';

function App() {
  

  return (
    
    <div className='main-content'>
      <Sidebar></Sidebar>
      <div className='content'>
      <Header></Header>
      <CreatePost></CreatePost>
      <Post></Post>
      <Footer></Footer>
      </div>
    </div>

  )
}

export default App
