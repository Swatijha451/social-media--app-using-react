import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
// import Post from './components/Post';
import CreatePost from '../components/CreatePost';
import PostList from '../components/PostList';
import PostListProvider from '../store/postlistStore';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
	const [selectedTab, setselectedTab] = useState('Home');

	return (
		<PostListProvider>
			<div className="main-content">
				<Sidebar
					selectedTab={selectedTab}
					setselectedTab={setselectedTab}></Sidebar>
				 <div className="content">
					<Header></Header>
					<Outlet/>
					<Footer></Footer>
				</div>
			 </div> 
		</PostListProvider>
	);
}

export default App;
