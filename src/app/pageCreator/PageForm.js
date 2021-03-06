import React, { Fragment, useContext, useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import PageContext from "../context/page/pageContext";
import "react-datepicker/dist/react-datepicker.css";
import { Alert, Button, Modal } from "react-bootstrap";
import Canvas from "./blocks/Canvas";
import SaveCancel from "../shared/formElements/SaveCancel";
import Input from "../shared/formElements/Input";
import Image from "../shared/formElements/Image";
import { useParams, useHistory } from "react-router-dom";
import Checkbox from "../shared/formElements/Checkbox";
import slugify from "slugify";
import Toolbox from "./blocks/Toolbox";
import blockTypes from "./blocks/blockTypes";

const PageForm = props => {
	const history = useHistory();
	const { id } = useParams();
	const pageContext = useContext(PageContext);

	const { current, setCurrent, clearCurrent, updateCurrent, setHomePage, updatePage, addPage, addBlock, loading, error, isSaved, clearErrors } = pageContext;

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

	useEffect(() => {
		isSaved && history.push("/pages");
	}, [isSaved, history]);

	useEffect(() => {
		error !== "" &&
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
	}, [error]);

	const onTextChange = e => updateCurrent({ ...current, [e.target.name]: e.target.value });
	const onTitleChange = e => {
		const slug = current.home ? "/" : slugify(e.target.value, { lower: true });
		updateCurrent({ ...current, title: e.target.value, slug });
	};

	const onDateChange = (date, { name }) => updateCurrent({ ...current, [name]: date });

	const onCheckboxChange = (value, e) => updateCurrent({ ...current, [e.target.name]: !value });

	const onImageDelete = () => updateCurrent({ ...current, hero: null });
	const onImageDrop = url => updateCurrent({ ...current, hero: url });

	const setAsHomePage = () => {
		setHomePage(current._id);
	};

	const [showModal, setShowModal] = useState(false);

	const closeModal = () => {
		setShowModal(false);
	};

	const handleSave = () => (id ? updatePage(current) : addPage(current));

	const handleCancel = () => history.push("/pages");

	const onDragEnd = ({ destination, source }) => {
		if (!destination) return;

		switch (source.droppableId) {
			case destination.droppableId:
				const updatedContent = Array.from(current.content);
				const [removed] = updatedContent.splice(source.index, 1);
				updatedContent.splice(destination.index, 0, removed);

				updateCurrent({ ...current, content: updatedContent });
				break;

			case "toolbox":
				addBlock({ type: blockTypes[source.index].type, ...blockTypes[source.index].template }, destination.index);
				break;

			default:
				break;
		}

		// TODO: Have errors persist after block is moved or added instead of clearing errors
		clearErrors();
	};

	return (
		<div>
			<div className="container d-flex p-md-0">
				<div className="az-content-body pd-lg-l-40 d-flex flex-column">
					<DragDropContext onDragEnd={onDragEnd}>
						<div>
							{current !== null ? (
								<div>
									<div className="row">
										<div className="col-sm-10 col-md-10 mg-t-10 mg-sm-t-0">
											<h2 className="az-content-title">
												{current.home && (
													<span>
														<i className="fas fa-home"></i>{" "}
													</span>
												)}
												{id ? "Edit Page " : "Add New Page "}
												{loading && (
													<div className="spinner-border text-primary" role="status">
														<span className="sr-only">Loading...</span>
													</div>
												)}
											</h2>
										</div>

										<div className="col-sm-2 col-md-2 mg-t-10 mg-sm-t-0">
											{!current.home && (
												<Fragment>
													<Button variant="btn btn-az-primary btn-rounded btn-block" onClick={() => setShowModal(true)}>
														Set As Homepage
													</Button>

													<Modal show={showModal} size="md" onHide={() => closeModal("small")}>
														<Modal.Header closeButton>
															<Modal.Title>Are You Sure?</Modal.Title>
														</Modal.Header>

														<Modal.Body>
															<p>This action will convert the current page to the home page and convert the current home page to a normal page</p>
															<p>The following actions will take place:</p>
															<ul>
																<li>Current home page's slug will be set to slug based off of the title.</li>
																<li>Current page's slug will be removed.</li>
															</ul>
															<p>This action cannot be undone. Do you want to proceed?</p>
														</Modal.Body>

														<Modal.Footer>
															<Button variant="danger" onClick={setAsHomePage}>
																Yes
															</Button>
															<Button variant="outline-light" onClick={closeModal}>
																No
															</Button>
														</Modal.Footer>
													</Modal>
												</Fragment>
											)}
										</div>
									</div>
									{error !== "" && <Alert variant="danger">Please fix the errors before saving.</Alert>}
									<form onSubmit={handleSave}>
										<div className="wd-xl-50p">
											<Input label="Title" name="title" type="text" value={current.title} error={error.title} onChange={onTitleChange} />
											<Input label="Slug" name="slug" type="text" value={current.slug} error={error.slug} onChange={onTextChange} disabled />
											<Input label="Description" name="description" as="textarea" value={current.description} error={error.description} rows="3" onChange={onTextChange} />
											<Image label="Main Image" onDrop={onImageDrop} onDelete={onImageDelete} image={current.hero} />
											{!current.home && (
												<Fragment>
													<Input label="Publish" name="publish" placeholderText="Immediately" type="date" value={current.publish} error={error.publish} onChange={onDateChange} />
													<Input label="Unpublish" name="unpublish" placeholderText="Never" type="date" value={current.unpublish} error={error.unpublish} onChange={onDateChange} />
													<Checkbox name="visible" label="Visible" value={current.visible} onCheckboxChange={onCheckboxChange} />
												</Fragment>
											)}
										</div>

										<hr className="mg-y-30" />

										<div className="az-content-label mg-b-5">Page Content</div>
										<p className="mg-b-20">Drag and drop content blocks onto the page.</p>

										<div className="block-container">
											<Toolbox />
											<Canvas blocks={current.content} />
										</div>

										<hr className="mg-y-30" />

										<SaveCancel saveText="Save & Publish" onSave={handleSave} onCancel={handleCancel} />
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
