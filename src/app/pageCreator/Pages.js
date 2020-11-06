import React, { useContext, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageContext from "../context/page/pageContext";

const Pages = () => {
	const pageContext = useContext(PageContext);

	const { pages, getPages, deletePage, loading } = pageContext;

	useEffect(() => {
		getPages();
		// eslint-disable-next-line
	}, []);

	const handleClick = (id, e) => {
		e.preventDefault();
		deletePage(id);
	};

	return (
		<div>
			<div className="container d-flex p-md-0">
				<div className="az-content-body pd-lg-l-40 d-flex flex-column">
					<div className="row">
						<div className="col-sm-10 col-md-10 mg-t-10 mg-sm-t-0">
							<h2 className="az-content-title">Pages</h2>
						</div>

						<div className="col-sm-2 col-md-2 mg-t-10 mg-sm-t-0">
							<Button as={Link} to="/pages/create" variant="primary btn-rounded btn-block">
								Add Page
							</Button>
						</div>
					</div>
					<div className="az-content-label mg-b-5">Create and manage pages</div>
					<p className="mg-b-20">Here's where you create and manage pages that will be accessed on your website.</p>

					{pages !== null && !loading ? (
						<div className="table-responsive">
							<Table hover className="mg-b-0">
								<thead>
									<tr>
										<th>Title</th>
										<th>Actions</th>
									</tr>
								</thead>

								<tbody>
									{pages.map((page, key) => (
										<tr key={key}>
											<th scope="row" className="col-sm-10">
												<Link to={`/pages/${page.id}`}>{page.title}</Link>
											</th>
											<td className="col-sm-2">
												<Button onClick={e => handleClick(page.id, e)} variant="btn-icon">
													<i className="far fa-trash-alt"></i>
												</Button>
											</td>
										</tr>
									))}
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
};

export default Pages;
