import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { uniqueId } = attributes;
    const innerContent = <InnerBlocks.Content />;

    return (
        <div {...useBlockProps.save()} className="govuk-grid-row">
            <div className="govuk-column-one-third">
                <a href={`#${uniqueId}`}>
                    {innerContent}
                </a>
            </div>

            <div className="govuk-column-two-thirds" id={uniqueId}>
                <p className="govuk-heading-l">
                    {innerContent}
                </p>
            </div>
        </div>
    );
}