import CompletedListItem from "./CompletedListItem"

function CompletedList(props){

    const completedListItems = props.items.map(item => {
        return (
            <CompletedListItem
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
    return (
        <ul className="list completed-list">
        {completedListItems}
        </ul>

    )

}

export default CompletedList