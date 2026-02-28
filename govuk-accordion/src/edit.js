import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { items } = attributes;

	// Update the section title
	const updateItem = (index, field, value) => {
		const newItems = [...items];
		newItems[index][field] = value;
		setAttributes({ items: newItems });
	};

	// Add a new section
	const addItem = () => {
		setAttributes({
			items: [...items, { title: 'New Section', content: 'Content' }]
		});
	};

	// Remove a section
	const removeItem = (index) => {
		const newItems = items.filter((_, i) => i !== index);
		setAttributes({ items: newItems });
	};

	return (
		<div {...useBlockProps()} className="govuk-accordion" data-module="govuk-accordion">
			{items.map((item, index) => (
				<section className="govuk-accordion__section" key={index}>
					<div className="govuk-accordion__section-header">
						<h2 className="govuk-accordion__section-heading">
							<RichText
								tagName="span"
								className="govuk-accordion__section-button"
								value={item.title}
								onChange={(value) => updateItem(index, 'title', value)}
								placeholder={__('Accordion Title', 'govuk-accordion')}
								allowedFormats={[]}
							/>
						</h2>
					</div>
					<div className="govuk-accordion__section-content">
						<RichText
							tagName="div"
							value={item.content}
							onChange={(value) => updateItem(index, 'content', value)}
							placeholder={__('Accordion Content', 'govuk-accordion')}
						/>
					</div>
					<Button
						variant="secondary"
						onClick={() => removeItem(index)}
					>
						{__('Remove Section', 'govuk-accordion')}
					</Button>
				</section>
			))}

			<Button variant="primary" onClick={addItem}>
				{__('Add Section', 'govuk-accordion')}
			</Button>
		</div>
	);
}