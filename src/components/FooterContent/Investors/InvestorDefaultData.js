import classes from './InvestorDefaultData.module.css';
import InvestorDefaultDisplay from "./InvestorDefaultDisplay";


const DUMMY_INVESTOR = [
    {
        id: 'i1',
        title: 'The Store Announces Fourth Quarter Results',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        date: '12 dec 2023',
    },
    {
        id: 'i2',
        title: 'The Store Announces Third Quarter Results',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        date: '6 sep 2023',
    },
    {
        id: 'i3',
        title: 'The Store Announces Second Quarter Results',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        date: '20 jun 2023',
    },
    {
        id: 'i4',
        title: 'The Store Announces First Quarter Results',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        date: '20 mar 2023',
    },
];

const InvestorDefaultData = () => {
    const testList = DUMMY_INVESTOR.map((Item) => (
        <InvestorDefaultDisplay
            id={Item.id}
            key={Item.id}
            date={Item.date}
            content={Item.content}
            title={Item.title}
        />
    ));
    

    return (

        <div className={classes.container}>
            {testList}
        </div>

    )
};


export default InvestorDefaultData;