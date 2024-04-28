const WelcomeMsg = ({ onGetPostsClick }) => {
	return (
		<div className=" text-secondary px-4 py-5 text-center">
			<div className="py-5">
				<h1 className="display-6 fw-bold text-black">There are no posts</h1>
				{/* <div className="col-lg-6 mx-auto"> */}
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<button
							type="button"
							className="btn btn-info btn-lg px-4 me-sm-4 fw-bold"
							onClick={onGetPostsClick}>
							add Posts
						</button>
						<button
							type="button"
							className="btn btn-light btn-lg px-4">
							Secondary
						</button>
					</div>
				{/* </div> */}
			</div>
		</div>
	);
};
export default WelcomeMsg;
