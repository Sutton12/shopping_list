
import ListItem from "./ListItem"

function List(props){

   
    const listItems = props.items.map(item => {

        return (
            <ListItem
                key={item.id}
                id={item.id}
                value={item.value}
                deleteItem={props.deleteItem}
                toggleComplete={props.toggleComplete}
                isComplete={item.isComplete}
                handleChange={props.handleChange}
            /> 
        )    
    })


    const me = true;

    return (
        <ul className="list">
        {listItems}
        </ul>
    )

}

export default List