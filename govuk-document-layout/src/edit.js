import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { useEffect } from 'react';

export default function Edit({ attributes, setAttributes, clientId }) {
    const { uniqueId } = attributes;
    const blockProps = useBlockProps({
        className: 'govuk-grid-row',
    });

    useEffect(() => {
        if (!uniqueId) {
            setAttributes({
                uniqueId: `anchor-${clientId.substring(0, 8)}`
            });
        }
    }, []);

    return (
        <div {...blockProps}>
            <div className="govuk-column-one-third">
                <InnerBlocks
                    allowedBlocks={['core/paragraph', 'core/image', 'core/heading']}
                    template={[['core/paragraph', { placeholder: 'Left column content...' }]]}
                />
            </div>
            <div className="gov-uk-column-two-thirds">
                <InnerBlocks
                    allowedBlocks={['core/paragraph', 'core/image', 'core/heading']}
                    template={[['core/paragraph', { placeholder: 'Right column content...' }]]}
                />
            </div>
        </div>
    );
}