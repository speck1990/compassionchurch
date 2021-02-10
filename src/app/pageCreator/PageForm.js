import React, { useContext, useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import PageContext from "../context/page/pageContext";
import "react-datepicker/dist/react-datepicker.css";
import { Alert } from "react-bootstrap";
import Blocks from "./blocks/Blocks";
import SaveCancel from "../shared/formElements/SaveCancel";
import Input from "../shared/formElements/Input";
import { useParams, useHistory } from "react-router-dom";
import Checkbox from "../shared/formElements/Checkbox";
import slugify from "slugify";
import Toolbox from "./blocks/Toolbox";

const PageForm = props => {
	const history = useHistory();
	const { id } = useParams();
	const pageContext = useContext(PageContext);

	const { current, setCurrent, clearCurrent, updateCurrent, updatePage, addPage, addBlock, loading, error, isSaved, blockTypes } = pageContext;

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

	const onTextChange = e => updateCurrent({ ...current, [e.target.name]: e.target.value });
	const onTitleChange = e => {
		const slug = slugify(e.target.value, { lower: true });
		updateCurrent({ ...current, title: e.target.value, slug });
	};

	const onDateChange = (date, { name }) => updateCurrent({ ...current, [name]: date });

	const onCheckboxChange = (value, e) => updateCurrent({ ...current, [e.target.name]: !value });

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

			case "options":
				addBlock({ type: blockTypes[source.index].type, ...blockTypes[source.index].template }, destination.index);
				break;

			default:
				break;
		}
	};

	return (
		<div>
			<div className="container d-flex p-md-0">
				<div className="az-content-body pd-lg-l-40 d-flex flex-column">
					<DragDropContext onDragEnd={onDragEnd}>
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
									{error.length > 0 && (
										<Alert variant="danger">
											{error.map((err, key) => (
												<div key={key}>{err.msg}</div>
											))}
										</Alert>
									)}
									<form onSubmit={handleSave}>
										<div className="wd-xl-50p">
											<Input label="Title" name="title" type="text" value={current.title} onChange={onTitleChange} />
											<Input label="Slug" name="slug" type="text" value={current.slug} onChange={onTextChange} disabled />
											<Input label="Description" name="description" as="textarea" value={current.description} rows="3" onChange={onTextChange} />
											<Input label="Publish" name="publish" placeholderText="Immediately" type="date" value={current.publish} onChange={onDateChange} />
											<Input label="Unpublish" name="unpublish" placeholderText="Never" type="date" value={current.unpublish} onChange={onDateChange} />
											<Checkbox name="visible" label="Visible" value={current.visible} onCheckboxChange={onCheckboxChange} />
										</div>

										<hr className="mg-y-30" />

										<div className="az-content-label mg-b-5">Page Content</div>
										<p className="mg-b-20">Drag and drop content blocks onto the page.</p>

										<div className="block-container">
											<Toolbox />
											<Blocks blocks={current.content} />
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
