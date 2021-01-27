import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import LinkContext from "../context/link/linkContext";

const Navigation = () => {
	const linkContext = useContext(LinkContext);

	const { links, getLinks, deleteLink, loading } = linkContext;

	useEffect(() => {
		getLinks();
		// eslint-disable-next-line
	}, []);

	const handleClick = (id, e) => {
		e.preventDefault();
		deleteLink(id);
	};

	return (
		<div>
			<div className="container d-flex p-md-0">
				<div className="az-content-body pd-lg-l-40 d-flex flex-column">
					<div className="row">
						<div className="col-sm-10 col-md-10 mg-t-10 mg-sm-t-0">
							<h2 className="az-content-title">Navigation</h2>
						</div>

						<div className="col-sm-2 col-md-2 mg-t-10 mg-sm-t-0">
							<Button as={Link} to="/links/create" variant="primary btn-rounded btn-block">
								Add Link
							</Button>
						</div>
					</div>

					<div className="az-content-label mg-b-5">Create and manage navigation</div>
					<p className="mg-b-20">Here's where you create and manage links that will be accessed on your website navigation.</p>

					{!loading ? (
						<div className="table-responsive">
							<Table hover className="mg-b-0">
								<thead>
									<tr>
										<th>Label</th>
										<th>Actions</th>
									</tr>
								</thead>

								<tbody>
									{links.length > 0 ? (
										links.map((link, key) => (
											<tr key={key}>
												<th scope="row" className="col-sm-10">
													<Link to={`/links/${link._id}`}>{link.label}</Link>
												</th>
												<td className="col-sm-2">
													<Button onClick={e => handleClick(link._id, e)} variant="btn-icon" className="list-action-button">
														<i className="far fa-trash-alt"></i>
													</Button>
												</td>
											</tr>
										))
									) : (
										<tr>
											<td col="2">No Links Available</td>
										</tr>
									)}
								</tbody>
							</Table>
						</div>
					) : (
						<div className="text-center mg-b-20">
							<div className="spinner-border" role="status">
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					)}

					<div className="ht-40"></div>
				</div>
				{/* az-content-body */}
			</div>
			{/* container */}
		</div>
	);

	// return (
	// 	<div>
	// 		<Link to="/links/create">Create Link</Link>
	// 		<br />
	// 		{links !== null && !loading ? (
	// 			links.map((link, key) => (
	// 				<div key={key}>
	// 					<Link to={`/links/${link.id}`}>{link.label}</Link>
	// 					<button onClick={e => handleClick(link.id, e)}>Delete</button>
	// 				</div>
	// 			))
	// 		) : (
	// 			<p></p>
	// 		)}
	// 	</div>
	// );
};

export default Navigation;
