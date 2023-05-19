import classes from "./ItemsList.module.css";

const DUMMY_ITEMS = [
  {
    id: "i1",
    name: "Laptop",
    description: "New eddition",
    price: 1150.99
  },
  {
    id: "i2",
    name: "Mobile",
    description: "Gaming",
    price: 765.5
  },
  {
    id: "i3",
    name: "Bracelet",
    description: "Fake one",
    price: 12.99
  }
];



const ItemsList = (props) => {

  const filteredaData = DUMMY_ITEMS.filter((pr) => {
    if (props.input === "") {
      return pr;
    } else {
      return pr.name.toLowerCase().includes(props.input)
    }
  })

  const data = filteredaData.map((item) => {
    return <div key={item.id} className={classes.item}> {item.name}</div>
  })

  return (
    
      <div className={classes.container}>
        {data}
      </div>
    
  )
}

export default ItemsList;