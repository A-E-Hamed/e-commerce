import NewsDisplay from "./NewsDisplay";
import classes from "./AboutContent.module.css";


const DUMMY_NEWS = [
    {
        id: 'n1',
        hint: 'The First news Item',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        date: '12 mar',
    },
    {
        id: 'n2',
        hint: 'The Second news Item',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        date: '6 oct',
    },
    {
        id: 'n3',
        hint: 'The Third news Item',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        date: '20 jul',
    },
];

const AboutContent = () => {
    const newsList = DUMMY_NEWS.map((newsItem) => (
        <NewsDisplay
            key={newsItem.id}
            id={newsItem.id}
            hint={newsItem.hint}
            content={newsItem.content}
            date={newsItem.date}
        />
    ));

    
    return (

        <div className={classes.container}>
            <h2>News Feed</h2>
            {newsList}
        </div>

    )


};

export default AboutContent;