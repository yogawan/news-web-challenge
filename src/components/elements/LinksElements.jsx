const LinkPagesElements = (props) => {
    return (
        <li>
            <a href={props.href}>{props.text}</a>
        </li>
    );
};

export default LinkPagesElements;