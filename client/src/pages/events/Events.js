import React , { Fragment ,memo } from 'react';
import { FormattedMessage } from "react-intl";
import CustomizedTabs from "../../shared/components/customizedTabs";
import ImageGallery from "react-image-gallery";
import {partnerAndClientEventsImages ,ourEventsImages ,loudProffesionalEventImages } from "./data";
import messages from "./message";
import "./events.scss";

const CarrosselContainer = ({images}) => {
    if (images.length ===0) {
      return <Fragment />
    }
    return < div>
          <ImageGallery items={images} sizes="40" />;
    </div>
  }


const Events = () => {
    const tabMenu = [
        {
          title: <FormattedMessage {...messages.loudProffesionalEvent} />,
          key: "1",
          content: <CarrosselContainer images ={loudProffesionalEventImages} />,
          id: "1"
        },
        {
          title: <FormattedMessage {...messages.ourEvents} />,
          key: "2",
          content: <CarrosselContainer  images ={ourEventsImages}  />,
          id: "2"
        },
        {
          title: <FormattedMessage {...messages.partnerAndClientEvents} />,
          key: "3",
          content: <CarrosselContainer images={partnerAndClientEventsImages} />,
          id: "3"
        }
      ];
    return (
        <div  className="events">
      <CustomizedTabs tabMenu={tabMenu} className="rental-tabs" />
        </div>
    );
}

export default memo (Events);
