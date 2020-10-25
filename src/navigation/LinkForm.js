import React, { useContext, useEffect } from "react";
import PageContext from "../context/page/pageContext";
import LinkContext from "../context/link/linkContext";
import { useParams } from "react-router-dom";

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
	const onLinkChange = e => updateCurrent({ ...current, link: "", [e.target.name]: e.target.value });
	const onCheckboxChange = (value, e) => updateCurrent({ ...current, [e.target.name]: !value });

	const handleOnClick = e => {
		e.preventDefault();
		if (id) {
			updateLink(current);
		} else {
			addLink(current);
		}

		props.history.push("/links");
	};

	return (
		<div>
			{current !== null && !loading ? (
				<form onSubmit={handleOnClick}>
					<div>
						<label htmlFor="label">Link Label</label>
						<br />
						<input type="text" name="label" value={current.label} onChange={onTextChange} />
					</div>
					<div>
						<input type="radio" name="type" value="page" onChange={onLinkChange} checked={current.type === "page"} />
						<label htmlFor="page">Link to page</label>
					</div>
					<div>
						<input type="radio" name="type" value="external" onChange={onLinkChange} checked={current.type === "external"} />
						<label htmlFor="external">External Link</label>
					</div>
					<div>
						<label htmlFor="link">Link</label>
						{current.type === "page" ? (
							<select name="link" value={current.link} onChange={onTextChange}>
								<option></option>
								{pages.map((page, key) => (
									<option key={key} value={page.id}>
										{page.title}
									</option>
								))}
							</select>
						) : (
							<input type="input" name="link" value={current.link} onChange={onTextChange} />
						)}
					</div>
					<div>
						<input type="checkbox" id="newTab" name="newTab" onChange={e => onCheckboxChange(current.newTab, e)} defaultChecked={current.newTab} value={current.newTab} />
						<label htmlFor="newTab"> Open in new tab</label>
					</div>
					<br />

					<button onClick={handleOnClick}>Save & Publish</button>
				</form>
			) : (
				<p></p>
			)}
		</div>
	);
};

export default LinkForm;
