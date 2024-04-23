const Sidebar = ({ selectedTab, setselectedTab }) => {
	const handleOnclick = (tabName) => {
		setselectedTab(tabName);
	};

	return (
		<div
			className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
			>
			<a
				href="/"
				className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
				<svg
					className="bi pe-none me-2"
					width="40"
					height="32">
					<use xlinkHref="#bootstrap"></use>
				</svg>
				<span className="fs-4">Sidebar</span>
			</a>
			<hr />
			<ul className="nav nav-pills flex-column mb-auto" style={{height:"100%"}}>
				<li
					className="nav-item"
					onClick={() => {
						handleOnclick('Home')
					}}>
					<a
						href="#"
						className={`nav-link text-white ${
							selectedTab === 'Home' && 'active'
						}`}
						aria-current="page">
						<svg
							className="bi pe-none me-2"
							width="16"
							height="16">
							<use xlinkHref="#home"></use>
						</svg>
						Home
					</a>
				</li>
				<li>
					<a
						href="#"
						className={`nav-link text-white ${
							selectedTab === 'Create Post' && 'active'
						}`}
                        onClick={()=>handleOnclick("Create Post")}>
						<svg
							className="bi pe-none me-2"
							width="16"
							height="16">
							<use xlinkHref="#speedometer2"></use>
						</svg>
						Create Post
					</a>
				</li>
			</ul>
			<hr />
		</div>
	);
};
export default Sidebar;
