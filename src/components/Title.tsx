interface TitleProps {
    text: string;
    classNames?: string;
}

export default function Title(props: TitleProps){
    const classNames = 'font-mono text-2xl md:text-3xl block ' + props.classNames;
    return (
        <h2 className={classNames}>{ props.text }</h2>
    );
}