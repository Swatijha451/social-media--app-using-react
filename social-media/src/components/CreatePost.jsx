//  import { useContext } from 'react';
// import { useRef } from 'react';
//  import { PostList } from '../store/postlistStore';
import { redirect } from 'react-router-dom';
import { Form } from 'react-router-dom';

const CreatePost = () => {
	// const navigate = useNavigate();

	// const userIdElement = useRef();
	// const postTitleELement = useRef();
	// const postContentElement = useRef();
	// const reactionsElement = useRef();
	// const postTagsElement = useRef();

	// const handleSubmit = (event) => {
	// 	event.preventDefault();
	// 	const userID = userIdElement.current.value;
	// 	const title = postTitleELement.current.value;
	// 	const content = postContentElement.current.value;
	// 	const reactions = reactionsElement.current.value;
	// 	const tags = postTagsElement.current.value.split(' ');

	// 	userIdElement.current.value = '';
	// 	postTitleELement.current.value = '';
	// 	postContentElement.current.value = '';
	// 	reactionsElement.current.value = '';
	// 	reactionsElement.current.value = '';

		

	return (
		<Form
			className="myform" method='POST'>
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
					name="userId"
					placeholder="Howe are yo feeling today..."
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
					name='title'
					placeholder="Enter your userId here"
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
					name='body'
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
					name='reactions'
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
					name='tags'
					placeholder="Enter yor tags here with space"
				/>
			</div>
			<button
				type="submit"
				className="btn btn-primary">
				Submit
			</button>
		</Form>
	);
};

export async function createPostAction(data){
	const formData=await data.request.formData();
	const postData= Object.fromEntries(formData);
	postData.tags= postData.tags.split(" ");

	fetch('https://dummyjson.com/posts/add', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(postData),
	})
		.then((res) => res.json())
		.then((post)=>{
			console.log(post)
		});
		// .then((mypost)=>addPost(mypost));
		// navigate("/")

		return redirect("/");
};

export default CreatePost;
