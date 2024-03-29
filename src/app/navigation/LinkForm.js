import React, { useContext, useEffect } from "react";
import PageContext from "../context/page/pageContext";
import LinkContext from "../context/link/linkContext";
import Select from "../shared/formElements/Select";
import Input from "../shared/formElements/Input";
import Checkbox from "../shared/formElements/Checkbox";
import Radio from "../shared/formElements/Radio";
import { useParams, useHistory } from "react-router-dom";
import SaveCancel from "../shared/formElements/SaveCancel";
import { Alert } from "react-bootstrap";

const LinkForm = props => {
	const history = useHistory();
	const { id } = useParams();
	const linkContext = useContext(LinkContext);
	const pageContext = useContext(PageContext);

	const { current, setCurrent, clearCurrent, updateCurrent, updateLink, addLink, loading, error, isSaved } = linkContext;
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

	useEffect(() => {
		isSaved && history.push("/links");
	}, [isSaved, history]);

	useEffect(() => {
		error !== "" &&
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
	}, [error]);

	const onTextChange = e => updateCurrent({ ...current, [e.target.name]: e.target.value });
	const onSelectChange = e => updateCurrent({ ...current, linkValue: e.value });
	const onLinkChange = e => updateCurrent({ ...current, linkValue: "", [e.target.name]: e.target.value });
	const onCheckboxChange = (value, e) => updateCurrent({ ...current, [e.target.name]: !value });

	const handleSave = () => (id ? updateLink(current) : addLink(current));
	const handleCancel = () => history.push("/links");

	const options = [
		{ name: "page", value: "page", label: "Link to page" },
		{ name: "external", value: "external", label: "External link" }
	];

	return (
		<div>
			<div className="container d-flex p-md-0">
				<div className="az-content-body pd-lg-l-40 d-flex flex-column">
					<div>
						{current !== null && pages !== null ? (
							<div>
								<h2 className="az-content-title">
									{id ? "Edit Link " : "Add New Link "}
									{loading && (
										<div className="spinner-border text-primary" role="status">
											<span className="sr-only">Loading...</span>
										</div>
									)}
								</h2>
								{error !== "" && <Alert variant="danger">Please fix the errors before saving.</Alert>}
								<form onSubmit={handleSave}>
									<div className="wd-xl-50p">
										<Input label="Link Label" name="label" type="text" value={current.label} error={error.label} onChange={onTextChange} />
										<Radio onChange={onLinkChange} label="Type" name="type" options={options} error={error.type} checkedValue={current.type} />

										{current.type === "page" ? (
											<Select
												defaultValue={pages.filter(page => page.slug === current.linkValue).map(page => ({ value: page.slug, label: page.title }))}
												onChange={onSelectChange}
												name="linkValue"
												label="Link"
												options={pages.map(page => ({ value: page.slug, label: page.title }))}
												error={error.linkValue}
											/>
										) : (
											<Input label="Link" name="linkValue" type="text" value={current.linkValue} error={error.linkValue} onChange={onTextChange} placeholder="http://www.example.com" />
										)}

										<Checkbox name="newTab" label="Open in new tab" value={current.newTab} error={error.newTab} onCheckboxChange={onCheckboxChange} />
									</div>

									<hr className="mg-y-30" />

									<SaveCancel onSave={handleSave} onCancel={handleCancel} />
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
};

export default LinkForm;
