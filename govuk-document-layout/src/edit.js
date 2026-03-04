import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

const TEMPLATE = [
    ['core/group', { className: 'my-column' }]
];

export default function Edit() {
    return (
        <div {...useBlockProps({ className: 'my-two-columns' })}>
            <InnerBlocks
                template={TEMPLATE}
            />
        </div>
    );
}