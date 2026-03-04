import {
    useBlockProps,
    InspectorControls
} from '@wordpress/block-editor';
import {
    PanelBody,
    TextControl,
    Button
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { items } = attributes;

    const addItem = () => {
        setAttributes({
            items: [...items, { text: '', url: '' }]
        });
    };

    const updateItem = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setAttributes({ items: newItems });
    };

    const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setAttributes({ items: newItems });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title="Breadcrumb Links">
                    {items.map((item, index) => (
                        <div key={index}>
                            <TextControl
                                label="Text"
                                value={item.text}
                                onChange={(value) =>
                                    updateItem(index, 'text', value)
                                }
                            />
                            <TextControl
                                label="URL"
                                value={item.url}
                                onChange={(value) =>
                                    updateItem(index, 'url', value)
                                }
                            />
                            <Button
                                isDestructive
                                onClick={() => removeItem(index)}
                            >
                                Remove
                            </Button>
                            <hr />
                        </div>
                    ))}
                    <Button variant="primary" onClick={addItem}>
                        Add Breadcrumb
                    </Button>
                </PanelBody>
            </InspectorControls>

            <nav
                {...useBlockProps({ className: 'govuk-breadcrumbs' })}
                aria-label="Breadcrumb"
            >
                <ol className="govuk-breadcrumbs__list">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="govuk-breadcrumbs__list-item"
                        >
                            <a
                                className="govuk-breadcrumbs__link"
                                href={item.url}
                            >
                                {item.text || 'Breadcrumb'}
                            </a>
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
}
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { items } = attributes;

    return (
        <nav
            {...useBlockProps.save({ className: 'govuk-breadcrumbs' })}
            aria-label="Breadcrumb"
        >
            <ol className="govuk-breadcrumbs__list">
                {items.map((item, index) => (
                    <li
                        key={index}
                        className="govuk-breadcrumbs__list-item"
                    >
                        <a
                            className="govuk-breadcrumbs__link"
                            href={item.url}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ol>
        </nav>
    );
}