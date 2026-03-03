import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { serviceName, links } = attributes;
    const blockProps = useBlockProps.save();

    return (
        <header {...blockProps} className="govuk-header" role="banner">
            <div className="govuk-header__container govuk-width-container">
                <div className="govuk-header__logo">
                    <a href="/" className="govuk-header__link govuk-header__link--homepage">
                        GOV.UK
                    </a>
                </div>

                <div className="govuk-header__content">
                    <RichText.Content
                        tagName="a"
                        className="govuk-header__link govuk-header__service-name"
                        value={serviceName}
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
    );
}