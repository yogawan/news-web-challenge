import { Link } from 'react-router-dom'

const LinkPagesElements = (props) => {
    return (
        <li>
            <Link to={props.href}>{props.text}</Link>
        </li>
    );
};

export default LinkPagesElements;