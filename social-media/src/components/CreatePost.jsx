 import { useContext } from 'react';
 import { useRef } from 'react';
import { PostList } from '../store/postlistStore';
import { useNavigate } from 'react-router-dom';
// import { redirect } from 'react-router-dom';
// import { Form } from 'react-router-dom';

const CreatePost = () => {
	const {addPost}=useContext(PostList)
	 const navigate = useNavigate();

	 const userIdElement = useRef();
	const postTitleELement = useRef();
	const postContentElement = useRef();
	const reactionsElement = useRef();
	const postTagsElement = useRef();

	const handleSubmit = (event) => {
		event.preventDefault();
		const userID = userIdElement.current.value;
		const postTitle = postTitleELement.current.value;
		const postContent = postContentElement.current.value;
		const reactions = reactionsElement.current.value;
		const tags = postTagsElement.current.value.split(' ');

		

		 userIdElement.current.value = '';
		postTitleELement.current.value = '';
		postContentElement.current.value = '';
		reactionsElement.current.value = '';
		reactionsElement.current.value = '';

		fetch('https://dummyjson.com/posts/add', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			title:postTitle,
			body:postContent,
			reactions:reactions,
			userId:userID,
			tags:tags,
		}),
	})
		.then((res) => res.json())
		.then((post)=>{
			addPost(post);
			navigate("/")
		});
		// .then((mypost)=>addPost(mypost));
		 

	};	

	return (
		<form
			className="myform" onSubmit={handleSubmit}>
			<div className="mb-3">
				<label
					htmlFor="userId"
					className="form-label">
					User Id
				</label>
				<input
					type="text"
					className="form-control"
					id="userId"
					 ref={userIdElement}
					placeholder="enter your user id here"
				/>
			</div>
			<div className="mb-3">
				<label
					htmlFor="title"
					className="form-label">
					Title
				</label>
				<input
					type="text"
					className="form-control"
					id="title"
					ref={postTitleELement}
					placeholder="Enter your post title here"
				/>
			</div>
			<div className="mb-3">
				<label
					htmlFor="body"
					className="form-label">
					Post Content
				</label>
				<textarea
					type="text"
					rows="4"
					className="form-control"
					id="body"
					ref={postContentElement}
					placeholder="tell us more about it"
				/>
			</div>
			
			<div className="mb-3">
				<label
					htmlFor="reactions"
					className="form-label">
					Reactions
				</label>
				<input
					type="text"
					className="form-control"
					id="reactions"
					ref={reactionsElement}
					placeholder="How many people reacted to it"
				/>
			</div>
			<div className="mb-3">
				<label
					htmlFor="tags"
					className="form-label">
					Tags
				</label>
				<input
					type="text"
					className="form-control"
					id="tags"
					ref={postTagsElement}
					placeholder="Enter yor tags here with space"
				/>
			</div>
			<button
				type="submit"
				className="btn btn-primary">
				post
			</button>
		</form>
	);
};

// export async function createPostAction(data){
// 	const formData=await data.request.formData();
// 	const postData= Object.fromEntries(formData);
// 	postData.tags= postData.tags.split(" ");

	

// 		return redirect("/");
// };

export default CreatePost;
