interface SubtitleProps {
    text: string;
    classNames?: string;
}

export default function Subtitle(props: SubtitleProps){
    const classNames = 'font-mono text-xl md:text-2xl block italic ' + props.classNames;
    return (
        <h2 className={classNames} dangerouslySetInnerHTML={{__html: props.text}}></h2>
    );
}