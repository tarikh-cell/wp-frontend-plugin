import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { links } = attributes;
    const blockProps = useBlockProps.save();

    return (
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
    );
}