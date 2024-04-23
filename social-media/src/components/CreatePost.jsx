import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/postlistStore";


const CreatePost = () => {
    const {addPost}=useContext(PostList)


    const userIdElement=useRef();
    const postTitleELement=useRef();
    const postContentElement=useRef();
    const reactionsElement=useRef();
    const postTagsElement=useRef();

    const handleSubmit=(event)=>{
        event.preventDefault();
        const userID=userIdElement.current.value;
        const title=postTitleELement.current.value;
        const content=postContentElement.current.value;
        const reactions=reactionsElement.current.value;
        const tags=postTagsElement.current.value.split(" ");

        userIdElement.current.value="";
        postTitleELement.current.value="";
        postContentElement.current.value="";
        reactionsElement.current.value="";
        reactionsElement.current.value="";

        addPost(userID,title,content,reactions,tags);
    };

	return (
		<form className="myform" onSubmit={handleSubmit}>
			<div className="mb-3">
				<label
					htmlFor="title"
					className="form-label">
					Post Title
				</label>
				<input
					type="text"
					className="form-control"
					id="title"
                    ref={postTitleELement}
                    placeholder="Howe are yo feeling today..."
				/>
			</div>
            <div className="mb-3">
				<label
					htmlFor="post-content"
					className="form-label">
					Post Content
				</label>
				<textarea
					type="text"
                    rows="4"
					className="form-control"
					id="post-content"
                    ref={postContentElement}
                    placeholder="tell us more about it"
				/>
            </div>
            <div className="mb-3">
				<label
					htmlFor="userId"
					className="form-label">
					User ID
				</label>
				<input
					type="text"
                    
					className="form-control"
					id="userID"
                    ref={userIdElement}
                    placeholder="Enter your userId here"
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
				className="btn btn-primary"
                >
				Submit
			</button>
		</form>
	);
};
export default CreatePost;
