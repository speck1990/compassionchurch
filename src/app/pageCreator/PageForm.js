import React, { useContext, useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import PageContext from "../context/page/pageContext";
import "react-datepicker/dist/react-datepicker.css";
import { Alert } from "react-bootstrap";
import AddBlock from "./blocks/AddBlock";
import Blocks from "./blocks/Blocks";
import SaveCancel from "../shared/formElements/SaveCancel";
import Input from "../shared/formElements/Input";
import { useParams, useHistory } from "react-router-dom";

const PageForm = props => {
	const history = useHistory();
	const { id } = useParams();
	const pageContext = useContext(PageContext);

	const { current, setCurrent, clearCurrent, updateCurrent, updatePage, addPage, loading, error, isSaved } = pageContext;

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

	// FIXME: MAKE SURE IF THERE IS AN ERROR PAGE DOES NOT GO BACK TO PAGES PAGE
	const handleSave = () => (id ? updatePage(current) : addPage(current));

	const handleCancel = () => history.push("/pages");

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
							{current !== null ? (
								<div>
									<h2 className="az-content-title">
										{id ? "Edit Page " : "Add New Page "}
										{loading && (
											<div className="spinner-border text-primary" role="status">
												<span className="sr-only">Loading...</span>
											</div>
										)}
									</h2>
									{error && (
										<Alert variant="danger">
											{error.map((err, key) => (
												<div key={key}>{err.msg}</div>
											))}
										</Alert>
									)}
									{isSaved && <Alert variant="success">Page Saved!</Alert>}
									<form onSubmit={handleSave}>
										<div className="wd-xl-50p">
											<Input label="Title" name="title" type="text" value={current.title} onChange={onTextChange} />
											<Input label="Slug" name="slug" type="text" value={current.slug} onChange={onTextChange} />
											<Input label="Description" name="description" as="textarea" value={current.description} rows="3" onChange={onTextChange} />
											<Input label="Publish" name="publish" placeholderText="Immediately" type="date" value={current.publish} onChange={setPublishDate} />
											<Input label="Unpublish" name="unpublish" placeholderText="Never" type="date" value={current.unpublish} onChange={setUnpublishDate} />
										</div>

										<hr className="mg-y-30" />

										<div className="az-content-label mg-b-5">Page Content</div>
										<p className="mg-b-20">Click the button to add new content blocks to page.</p>

										<div>
											<AddBlock location="-1" isVisible={isVisible} />
											<Blocks blocks={current.content} isVisible={isVisible} />
										</div>

										<hr className="mg-y-30" />

										<SaveCancel onSave={handleSave} onCancel={handleCancel} />
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
