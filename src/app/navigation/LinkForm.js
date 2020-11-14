import React, { useContext, useEffect } from "react";
import { Form } from "react-bootstrap";
import PageContext from "../context/page/pageContext";
import LinkContext from "../context/link/linkContext";
import Select from "react-select";
import { useParams } from "react-router-dom";
import SaveCancel from "../shared/SaveCancel";

const LinkForm = props => {
	const { id } = useParams();
	const linkContext = useContext(LinkContext);
	const pageContext = useContext(PageContext);

	const { current, setCurrent, clearCurrent, updateCurrent, updateLink, addLink, loading } = linkContext;
	const { getPages, pages } = pageContext;

	useEffect(() => {
		getPages();

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
	const onSelectChange = e => {
		console.log(e.label);
		updateCurrent({ ...current, link: e.value });
	};
	const onLinkChange = e => {
		updateCurrent({ ...current, link: "", [e.target.name]: e.target.value });
	};
	const onCheckboxChange = (value, e) => updateCurrent({ ...current, [e.target.name]: !value });

	const handleOnClick = e => {
		if (id) {
			updateLink(current);
		} else {
			addLink(current);
		}
	};

	return (
		<div>
			<div className="container d-flex p-md-0">
				<div className="az-content-body pd-lg-l-40 d-flex flex-column">
					<div>
						{current !== null && !loading ? (
							<div>
								<h2 className="az-content-title">{id ? "Edit Link" : "Add New Link"}</h2>
								<form onSubmit={handleOnClick}>
									<div className="wd-xl-50p">
										{/* Link Label Textbox */}
										<div className="row row-xs align-items-center mg-b-20">
											<div className="col-md-4">
												<label htmlFor="label" className="form-label mg-b-0">
													Link Label
												</label>
											</div>
											<div className="col-md-8 mg-t-5 mg-md-t-0">
												<Form.Control type="text" name="label" autoComplete="off" value={current.label} onChange={onTextChange} />
											</div>
										</div>

										{/* Link Type Radio Controls */}
										<div className="row row-xs align-items-center mg-b-20">
											<div className="col-md-4">
												<label htmlFor="type" className="form-label mg-b-0">
													Link Type
												</label>
											</div>
											<div className="col-md-4 mg-t-5 mg-md-t-0">
												<Form.Check onChange={onLinkChange} type="radio" name="type" id="page" value="page" label="Link to page" className="rdiobox" checked={current.type === "page"} />
											</div>
											<div className="col-md-4 mg-t-5 mg-md-t-0">
												<Form.Check onChange={onLinkChange} type="radio" name="type" id="external" value="external" label="External link" className="rdiobox" checked={current.type === "external"} />
											</div>
										</div>

										{/* Link Value */}
										<div className="row row-xs align-items-center mg-b-20">
											<div className="col-md-4">
												<label htmlFor="type" className="form-label mg-b-0">
													Link
												</label>
											</div>
											<div className="col-md-5 mg-t-5 mg-md-t-0">
												{current.type === "page" ? (
													<Select defaultValue={pages.filter(page => page.id === current.link).map(page => ({ value: page.id, label: page.title }))} onChange={onSelectChange} name="link" options={pages.map(page => ({ value: page.id, label: page.title }))} />
												) : (
													<Form.Control type="text" name="link" autoComplete="off" value={current.link} onChange={onTextChange} placeholder="http://www.example.com" />
												)}
											</div>
										</div>

										{/* Open New Tab Checkbox */}
										<div className="row row-xs align-items-center mg-b-20">
											<div className="col-md-4">
												<label htmlFor="newTab" className="form-label mg-b-0"></label>
											</div>
											<div className="col-md-5 mg-t-5 mg-md-t-0">
												<Form.Check type="checkbox" name="newTab" id="newTab" label="Open in new tab" className="ckbox" onChange={e => onCheckboxChange(current.newTab, e)} defaultChecked={current.newTab} />
											</div>
										</div>
									</div>

									<hr className="mg-y-30" />

									<SaveCancel onSave={handleOnClick} redirect="/links" />
								</form>
							</div>
						) : (
							<p></p>
						)}
					</div>

					<div className="ht-40"></div>
				</div>
				{/* az-content-body */}
			</div>
			{/* container */}
		</div>
	);

	// 	return (
	// 		<div>
	// 			{current !== null && !loading ? (
	// 				<form onSubmit={handleOnClick}>
	// 					<div>
	// 						<label htmlFor="label">Link Label</label>
	// 						<br />
	// 						<input type="text" name="label" value={current.label} onChange={onTextChange} />
	// 					</div>
	// 					<div>
	// 						<input type="radio" name="type" value="page" onChange={onLinkChange} checked={current.type === "page"} />
	// 						<label htmlFor="page">Link to page</label>
	// 					</div>
	// 					<div>
	// 						<input type="radio" name="type" value="external" onChange={onLinkChange} checked={current.type === "external"} />
	// 						<label htmlFor="external">External Link</label>
	// 					</div>
	// 					<div>
	// 						<label htmlFor="link">Link</label>
	// 						{current.type === "page" ? (
	// 							<select name="link" value={current.link} onChange={onTextChange}>
	// 								<option></option>
	// 								{pages.map((page, key) => (
	// 									<option key={key} value={page.id}>
	// 										{page.title}
	// 									</option>
	// 								))}
	// 							</select>
	// 						) : (
	// 							<input type="input" name="link" value={current.link} onChange={onTextChange} />
	// 						)}
	// 					</div>
	// 					<div>
	// 						<input type="checkbox" id="newTab" name="newTab" onChange={e => onCheckboxChange(current.newTab, e)} defaultChecked={current.newTab} value={current.newTab} />
	// 						<label htmlFor="newTab"> Open in new tab</label>
	// 					</div>
	// 					<br />

	// 					<button onClick={handleOnClick}>Save & Publish</button>
	// 				</form>
	// 			) : (
	// 				<p></p>
	// 			)}
	// 		</div>
	// 	);
};

export default LinkForm;
