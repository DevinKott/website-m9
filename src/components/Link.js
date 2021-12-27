function Link(props) {
    const {
        linkTo = "https://www.google.com/",
        comp = undefined
    } = props;

    if (comp === null || comp === undefined) {
        return null;
    }

    return (
        <a
            href={linkTo}
            target="_blank"
            rel="noreferrer"
        >
            {comp}
        </a>
    );
};

export default Link;