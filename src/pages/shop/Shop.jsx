import React from 'react';
import SHOP_DATA from './data/clothes-data';
import Preview from '../../components/preview-collection/Preview';
import './shop.styles.scss';


class ShopPage extends React.Component{
  constructor(){
    super();

    this.state = {
      collections: SHOP_DATA
    }
  }

  render(){ 
    const { collections } = this.state
    return(
      <div className="shop-page">
        <h1>Collections</h1>
        {collections.map(collection => {
          return <Preview key={collection.id} title={collection.title} items={collection.items}/>
        })}
      </div>
    )
  }
}

export default ShopPage