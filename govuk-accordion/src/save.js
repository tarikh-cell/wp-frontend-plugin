import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { items, accordionId } = attributes;

	return (
		<div {...useBlockProps.save()} className="govuk-accordion" id={accordionId} data-module="govuk-accordion">
			{items.map((item, index) => {
				const headingId = `${accordionId}-heading-${index}`;
				const contentId = `${accordionId}-content-${index}`;

				return (
					<section className="govuk-accordion__section" key={index}>
						<div className="govuk-accordion__section-header">
							<h2 className="govuk-accordion__section-heading" id={headingId}>
								<button
									className="govuk-accordion__section-button"
									aria-expanded="false"
									aria-controls={contentId}
								>
									<RichText.Content
										tagName="span"
										value={item.title}
									/>
								</button>
							</h2>
						</div>
						<div
							id={contentId}
							className="govuk-accordion__section-content"
							aria-labelledby={headingId}
						>
							<RichText.Content tagName="div" value={item.content} />
						</div>
					</section>
				);
			})}
		</div>
	);
}