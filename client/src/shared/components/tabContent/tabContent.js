import React , {Fragment} from 'react';
import './tabContent.scss'

const renderBandleInformation = info => {
  const {title,ProductListTop,ProductListSub,Capacity,Price , dataList ,listTitle} = info
  return (
    <Fragment>
     {title && <div> title : {title}</div>} 
     {ProductListTop && <div> Product list top : {ProductListTop}</div>} 
     {ProductListSub && <div> Product list sub : {ProductListSub}</div> }   
      {/* <div> Amping : {info.title}</div> */}
     {Capacity && <div> Capacity : {Capacity}</div>}  
     {Price && <div> Price : {Price}</div>} 
     {listTitle && <div> title : {listTitle}</div>} 

     {dataList && dataList.map(element => <div>{element}</div>)}
    </Fragment>
  );
};


const TabContent = ({data}) => {

    return (
        <div className="content-for-bund-item">
          <div className="content-for-bund-item__image">
            <img src = {data.image} />
          </div>
          <div className="content-for-bund-item__info">
            {renderBandleInformation(data)}
          </div>
        </div>
      );
}

export default TabContent;
