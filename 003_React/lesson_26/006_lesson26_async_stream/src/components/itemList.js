import React from 'react'  

const ItemList = () => (
    <ul>
        {this.props.items.map((item) => {
            return <li key={item.id}><span className="glyphicon glyphicon-remove"></span> &nbsp; {item.name}</li>
        })}
    </ul>
) 

export default ItemList
