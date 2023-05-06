interface SubtitleProps {
    text: string;
    classNames?: string;
}

export default function Subtitle(props: SubtitleProps){
    const classNames = 'text-xl md:text-2xl block italic ' + props.classNames;
    return (
        <h2 className={classNames}>{ props.text }</h2>
    );
}