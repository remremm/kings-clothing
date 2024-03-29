import React from 'react';
import './Collection-item.styles.scss';

const CollectionItem = (props) => {
  return(
    <div className="collection-item">
      <div 
        className="image"
        style={{backgroundImage: `url(${props.item.imageUrl})`}}
      />
      <div className="collection-footer">
        <span className="name">{props.item.name}</span>
        <span className="price">{props.item.price}</span>
      </div>
    </div>
  )
}

export default CollectionItem;