import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { DragDropContext } from "react-beautiful-dnd";
import PageContext from "../context/page/pageContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import AddBlock from "./blocks/AddBlock";
import Blocks from "./blocks/Blocks";
import SaveCancel from "../shared/SaveCancel";
import { useParams } from "react-router-dom";
import moment from "moment";

const PageForm = props => {
	const { id } = useParams();
	const pageContext = useContext(PageContext);

	const { current, setCurrent, clearCurrent, updateCurrent, updatePage, addPage, loading } = pageContext;

	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		if (id !== null) {
			setCurrent(id);
		} else {
			setCurrent();
		}

		return () => {
			clearCurrent();
		};

		// eslint-disable-next-line
	}, []);

	const onTextChange = e => updateCurrent({ ...current, [e.target.name]: e.target.value });
	const setPublishDate = date => updateCurrent({ ...current, publish: date });
	const setUnpublishDate = date => updateCurrent({ ...current, unpublish: date });

	const handleSave = () => (id ? updatePage(current) : addPage(current));

	const onDragStart = () => setIsVisible(false);

	const onDragEnd = ({ destination, source }) => {
		if (!destination) return;

		const updatedContent = Array.from(current.content);
		const [removed] = updatedContent.splice(source.index, 1);
		updatedContent.splice(destination.index, 0, removed);

		updateCurrent({ ...current, content: updatedContent });

		setIsVisible(true);
	};

	return (
		<div>
			<div className="container d-flex p-md-0">
				<div className="az-content-body pd-lg-l-40 d-flex flex-column">
					<DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
						<div>
							{current !== null && !loading ? (
								<div>
									<h2 className="az-content-title">{id ? "Edit Page" : "Add New Page"}</h2>
									<form onSubmit={handleSave}>
										<div className="wd-xl-50p">
											<div className="row row-xs align-items-center mg-b-20">
												<div className="col-md-4">
													<label htmlFor="title" className="form-label mg-b-0">
														Title
													</label>
												</div>
												{/* col */}
												<div className="col-md-8 mg-t-5 mg-md-t-0">
													<Form.Control type="text" name="title" autoComplete="off" value={current.title} onChange={onTextChange} />
												</div>
												{/* col */}
											</div>
											{/* row */}

											<div className="row row-xs align-items-center mg-b-20">
												<div className="col-md-4">
													<label htmlFor="subtitle" className="form-label mg-b-0">
														Subtitle
													</label>
												</div>
												{/* col */}
												<div className="col-md-8 mg-t-5 mg-md-t-0">
													<Form.Control type="text" name="subtitle" autoComplete="off" value={current.subtitle} onChange={onTextChange} />
												</div>
												{/* col */}
											</div>
											{/* row */}

											<div className="row row-xs mg-b-20">
												<div className="col-md-4">
													<label htmlFor="subtitle" className="form-label mg-b-0">
														Description
													</label>
												</div>
												{/* col */}
												<div className="col-md-8 mg-t-5 mg-md-t-0">
													<Form.Control as="textarea" rows="3" name="description" value={current.description} onChange={onTextChange} />
												</div>
												{/* col */}
											</div>
											{/* row */}

											<div className="row row-xs align-items-center mg-b-20">
												<div className="col-md-4">
													<label htmlFor="publish" className="form-label mg-b-0">
														Publish
													</label>
												</div>
												{/* col */}
												<div className="col-md-8 mg-t-5 mg-md-t-0">
													<div className="input-group">
														<div className="input-group-prepend">
															<div className="input-group-text">
																<i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
															</div>
														</div>
														<DatePicker
															selected={current.publish ? moment(current.publish).toDate() : null}
															onChange={date => setPublishDate(date)}
															className="form-control"
															style={{ "z-index": 3 }}
															showTimeSelect
															isClearable
															dateFormat="MM/dd/yyyy h:mm aa"
															placeholderText="Immediately"
														/>
													</div>
												</div>
												{/* col */}
											</div>
											{/* row */}

											<div className="row row-xs align-items-center mg-b-20">
												<div className="col-md-4">
													<label htmlFor="unpublish" className="form-label mg-b-0">
														Unpublish
													</label>
												</div>
												{/* col */}
												<div className="col-md-8 mg-t-5 mg-md-t-0">
													<div className="input-group">
														<div className="input-group-prepend">
															<div className="input-group-text">
																<i className="typcn typcn-calendar-outline tx-24 lh--9 op-6"></i>
															</div>
														</div>
														<DatePicker
															selected={current.unpublish ? moment(current.unpublish).toDate() : null}
															onChange={date => setUnpublishDate(date)}
															className="form-control"
															style={{ "z-index": 3 }}
															showTimeSelect
															isClearable
															dateFormat="MM/dd/yyyy h:mm aa"
															placeholderText="Never"
														/>
													</div>
												</div>
												{/* col */}
											</div>
											{/* row */}
										</div>

										<hr className="mg-y-30" />

										<div className="az-content-label mg-b-5">Page Content</div>
										<p className="mg-b-20">Click the button to add new content blocks to page.</p>

										<div>
											{isVisible ? <AddBlock location="-1" /> : ""}
											<Blocks blocks={current.content} isVisible={isVisible} />
										</div>

										<hr className="mg-y-30" />

										<SaveCancel onSave={handleSave} redirect="/pages" />
									</form>
								</div>
							) : (
								<p></p>
							)}
						</div>
					</DragDropContext>

					<div className="ht-40"></div>
				</div>
				{/* az-content-body */}
			</div>
			{/* container */}
		</div>
	);
};

export default PageForm;
