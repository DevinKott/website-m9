function SectionHeader(props) {
    const { title } = props;

    return (
        <h2 className="text-2xl pt-5 pb-5 underline decoration-slate-600 text-neutral-900 hover:animate-pulse">
            {title}
        </h2>
    );
}

export default SectionHeader;