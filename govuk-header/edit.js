import {
    useBlockProps,
    InspectorControls,
    RichText
} from '@wordpress/block-editor';

import {
    PanelBody,
    TextControl,
    Button
} from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
    const { serviceName, links } = attributes;
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
                <PanelBody title="Header Settings">
                    <TextControl
                        label="Service Name"
                        value={serviceName}
                        onChange={(value) =>
                            setAttributes({ serviceName: value })
                        }
                    />

                    <hr />

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

            <header {...blockProps} className="govuk-header" role="banner">
                <div className="govuk-header__container govuk-width-container">
                    <div className="govuk-header__logo">
                        <a href="/" className="govuk-header__link govuk-header__link--homepage">
                            GOV.UK
                        </a>
                    </div>

                    <div className="govuk-header__content">
                        <RichText
                            tagName="a"
                            className="govuk-header__link govuk-header__service-name"
                            value={serviceName}
                            onChange={(value) =>
                                setAttributes({ serviceName: value })
                            }
                            placeholder="Service name"
                        />

                        <nav>
                            <ul className="govuk-header__navigation">
                                {links.map((link, index) => (
                                    <li
                                        key={index}
                                        className="govuk-header__navigation-item"
                                    >
                                        <a
                                            className="govuk-header__link"
                                            href={link.url}
                                        >
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
}