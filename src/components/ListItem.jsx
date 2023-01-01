import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faCheck } from '@fortawesome/free-solid-svg-icons'



function ListItem(props){

    const item = (
        <li
            className="list-item"
        >   
            <div
                className="check-box"
                onClick={() => props.toggleComplete(props.id)}
            >
                <FontAwesomeIcon
                    icon={faCheck} 
                    className="check"
                />
            </div>
            <input
                className="item-value"
                type="text"
                value={props.value}
                onChange={(event) => props.handleChange(event, props.id)}
            >
            </input>

            <FontAwesomeIcon
                icon={faTrashCan}
                className="delete-item"
                onClick={() => props.deleteItem(props.id)}
            />
        </li>
    )

    
    

    return (

        <>
        {!props.isComplete && item}
        </>
    )

}

export default ListItem