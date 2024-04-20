const Sidebar = () => {
	return (
		<div
			className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar"
                style={{ width: "280px"}} >
			<a
				href="/"
				classNameName="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white  text-decoration-none">
				 <svg
					classNameName="bi pe-none me-2"
					width="40"
					height="32">
					<use xlinkHref="#bootstrap"></use>
				</svg> 
				<span classNameName="fs-4"></span>
			</a>
			<ul classNameName="nav nav-pills flex-column mb-auto">
				<li classNameName="nav-item active">
					<a
						href="#"
						classNameName="nav-link active"
						aria-current="page">
						 <svg
							classNameName="bi pe-none me-2"
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
						classNameName="nav-link text-white">
						<svg
							classNameName="bi pe-none me-2"
							width="16"
							height="16">
							<use xlinkHref="#speedometer2"></use>
						</svg>
						Create Post
					</a>
				</li>
				
			</ul>
			<hr />
			<div classNameName="dropdown bottom">
				<a
					href="#"
					classNameName="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
					data-bs-toggle="dropdown"
					aria-expanded="false">
					{/* <img
						src="https://github.com/mdo.png"
						alt=""
						width="32"
						height="32"
						classNameName="rounded-circle me-2"
					/>
					<strong>mdo</strong> */}
				</a>
				<ul classNameName="dropdown-menu dropdown-menu-dark text-small shadow">
					<li>
						<a
							classNameName="dropdown-item"
							href="#">
							Sign out
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};
export default Sidebar;
