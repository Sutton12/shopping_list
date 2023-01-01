import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function AddItem(props){

    return (
        <>
        {!props.addingItem &&
            <button
                className="add-button"
                onClick={props.toggleAdd}
            >
                Add Item
            </button>}


        {props.addingItem && 
            <div className="new-item-container">
                <form onSubmit={props.addNewItem}>
                    <input
                        className="submit"
                        type="submit"
                        value="+"
                    >
                    </input>
                    <input
                        id="add-item"
                        type="text"
                        name="addItem"
                        className="add-item"
                        value={props.newItem}
                        onChange={props.updateNewItem}
                        >
                    </input>

                </form>
                <FontAwesomeIcon
                    icon={faTimes} 
                    className="close-new-item"
                    onClick={props.toggleAdd}
                />
            </div>
        
        }
        </>
    )   

}

export default AddItem