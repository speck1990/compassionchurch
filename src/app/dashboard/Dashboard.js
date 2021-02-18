import React, { useContext } from "react";
import AuthContext from "../context/auth/authContext";

const Dashboard = () => {
	const authContext = useContext(AuthContext);

	const { user, logoutUser } = authContext;

	return (
		<div className="container d-flex p-md-0">
			<div className="az-content-body pd-lg-l-40 d-flex flex-column">
				<hr className="mg-y-30" />

				<h1>Welcome, {user && `${user.firstName} ${user.lastName}`}</h1>

				<hr className="mg-y-30" />

				<div className="row row-sm">
					<div className="col-md">
						<div className="card bg-gray-200 bd-0">
							<div className="card-body">
								<p className="tx-80">
									<i className="typcn typcn-document"></i>
								</p>
								<h5 className="card-title tx-dark tx-medium mg-b-10">Pages</h5>
								<p className="card-subtitle mg-b-15">Edit and manage pages</p>
								<p className="card-text">An important part of your website is your content. Create pages that will appear on your website.</p>
								<a href="/pages" className="card-link">
									All Pages
								</a>
								<a href="/pages/create" className="card-link">
									Create Page
								</a>
							</div>
						</div>
						{/* card */}
					</div>
					{/* col */}
					<div className="col-md mg-t-20 mg-md-t-0">
						<div className="card bg-indigo tx-white bd-0">
							<div className="card-body">
								<p className="tx-80">
									<i className="typcn typcn-location-arrow-outline"></i>
								</p>
								<h5 className="card-title tx-white tx-medium mg-b-10">Navigation</h5>
								<p className="card-subtitle mg-b-15 tx-white-8">Edit and manage navigation</p>
								<p className="card-text">Every website needs navigation. Create links that will appear in your navigation bar.</p>
								<a href="/links" className="card-link tx-white-7 hover-white">
									All Links
								</a>
								<a href="/links/create" className="card-link tx-white-7 hover-white">
									Create Link
								</a>
							</div>
						</div>
						{/* card */}
					</div>
					{/* col */}
					<div className="col-md mg-t-20 mg-md-t-0">
						<div className="card bg-gray-800 tx-white bd-0">
							<div className="card-body">
								<p className="tx-80">
									<i className="typcn typcn-spanner-outline"></i>
								</p>
								<h5 className="card-title tx-white tx-medium mg-b-10">Settings</h5>
								<p className="card-subtitle tx-white-8 mg-b-15">Edit and manage settings</p>
								<p className="card-text">Fine tune your website with settings. Edit your websites smallest parts.</p>
								<a href="/settings" className="card-link tx-white-7 hover-white">
									Edit Settings
								</a>
							</div>
						</div>
						{/* card */}
					</div>
					{/* col */}
				</div>
				{/* row */}

				<hr className="mg-y-30" />

				<button className="btn btn-az-primary pd-x-30 mg-r-5" onClick={logoutUser}>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Dashboard;
