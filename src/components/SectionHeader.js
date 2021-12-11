function SectionHeader(props) {
    const { title } = props;

    return (
        <h2 className="text-2xl pt-5 pb-5 underline text-neutral-900">
            {title}
        </h2>
    );
}

export default SectionHeader;