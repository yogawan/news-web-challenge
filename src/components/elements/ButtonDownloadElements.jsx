const ButtonDownloadElements = (props) => {
    return (
        <div className="dl">
            <a className="white" href={props.href}>{props.text}</a>
        </div>
    );
};

export default ButtonDownloadElements;