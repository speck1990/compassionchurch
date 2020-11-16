import React, { useContext, useEffect } from "react";
import { Form } from "react-bootstrap";
import PageContext from "../context/page/pageContext";
import LinkContext from "../context/link/linkContext";
// import Select from "react-select";
import Select from "../shared/formElements/Select";
import Input from "../shared/formElements/Input";
import Checkbox from "../shared/formElements/Checkbox";
import Radio from "../shared/formElements/Radio";
import { useParams } from "react-router-dom";
import SaveCancel from "../shared/formElements/SaveCancel";

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
	const onSelectChange = e => updateCurrent({ ...current, link: e.value });
	const onLinkChange = e => updateCurrent({ ...current, link: "", [e.target.name]: e.target.value });
	const onCheckboxChange = (value, e) => updateCurrent({ ...current, [e.target.name]: !value });

	const handleSave = () => (id ? updateLink(current) : addLink(current));

	const options = [
		{ name: "page", value: "page", label: "Link to page" },
		{ name: "external", value: "external", label: "External link" }
	];

	return (
		<div>
			<div className="container d-flex p-md-0">
				<div className="az-content-body pd-lg-l-40 d-flex flex-column">
					<div>
						{current !== null && !loading ? (
							<div>
								<h2 className="az-content-title">{id ? "Edit Link" : "Add New Link"}</h2>
								<form onSubmit={handleSave}>
									<div className="wd-xl-50p">
										<Input label="Link Label" name="label" type="text" value={current.label} onChange={onTextChange} />
										<Radio onChange={onLinkChange} name="type" options={options} checkedValue={current.type} />

										{current.type === "page" ? (
											<Select defaultValue={pages.filter(page => page.id === current.link).map(page => ({ value: page.id, label: page.title }))} onChange={onSelectChange} name="link" label="Link" options={pages.map(page => ({ value: page.id, label: page.title }))} />
										) : (
											<Input label="Link" name="link" type="text" value={current.link} onChange={onTextChange} placeholder="http://www.example.com" />
										)}

										<Checkbox name="newTab" label="Open in new tab" value={current.newTab} onCheckboxChange={onCheckboxChange} />
									</div>

									<hr className="mg-y-30" />

									<SaveCancel onSave={handleSave} redirect="/links" />
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
