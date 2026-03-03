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
    const { links } = attributes;
    const blockProps = useBlockProps();

    const updateLink = (index, field, value) => {
        const newLinks = [...links];
        newLinks[index][field] = value;
        setAttributes({ links: newLinks });
    };

    const addLink = () => {
        setAttributes({
            links: [...links, { text: "New link", url: "#" }]
        });
    };

    return (
        <>
            <InspectorControls>
                <PanelBody title="Footer Links">
                    {links.map((link, index) => (
                        <div key={index} style={{ marginBottom: "15px" }}>
                            <TextControl
                                label="Link Text"
                                value={link.text}
                                onChange={(value) =>
                                    updateLink(index, "text", value)
                                }
                            />
                            <TextControl
                                label="Link URL"
                                value={link.url}
                                onChange={(value) =>
                                    updateLink(index, "url", value)
                                }
                            />
                        </div>
                    ))}

                    <Button variant="primary" onClick={addLink}>
                        Add Link
                    </Button>
                </PanelBody>
            </InspectorControls>

            <footer {...blockProps} className="govuk-footer" role="contentinfo">
                <div className="govuk-width-container">
                    <div className="govuk-footer__meta">
                        <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
                            <h2 className="govuk-visually-hidden">
                                Support links
                            </h2>

                            <ul className="govuk-footer__inline-list">
                                {links.map((link, index) => (
                                    <li
                                        key={index}
                                        className="govuk-footer__inline-list-item"
                                    >
                                        <a
                                            className="govuk-footer__link"
                                            href={link.url}
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <span className="govuk-footer__licence-description">
                                All content is available under the Open Government Licence v3.0
                            </span>
                        </div>

                        <div className="govuk-footer__meta-item">
                            © Crown copyright {new Date().getFullYear()}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}