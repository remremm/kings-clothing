import React from 'react';
import CollectionItem from '../collection-item/Collection-item';
import './preview.styles.scss';

const Preview = (props) => {
  return(
    <div className="collection-preview">
      <h1>{props.title.toUpperCase()}</h1>
      <div className="preview">
        {props.items
          .filter((item, index) => index < 4)
          .map(item => {
            return <CollectionItem key={item.id} item={item}/>
          })}
      </div>
    </div>
  )
}

export default Preview;