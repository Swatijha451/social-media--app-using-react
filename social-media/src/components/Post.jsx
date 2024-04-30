import { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import { PostList } from '../store/postlistStore';

const Post = ({ mypost }) => {
	const { deletePost } = useContext(PostList);

	return (
		<div
			className="card postCard "
			style={{ width: 'inherit' }}>
			<div className="card-body  ">
				<h5 className="card-title fw-bold">{mypost.title}</h5>
				<span
					className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"
					onClick={() => deletePost(mypost.id)}>
					<MdDelete />
				</span>
				<p className="card-text">{mypost.body}</p>
				{mypost.tags.map((tag) => (
					<span
						key={tag}
						className="badge text-bg-warning hashtags">
						{tag}
					</span>
				))}
				{/* <button type="button" className="btn btn-primary ">Post</button>  */}
				<div
					className="alert alert-success myAlert"
					role="alert">
					This post has been reacted by {mypost.reactions} people!
				</div>
			</div>
		</div>
	);
};
export default Post;
