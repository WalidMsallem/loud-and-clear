import React from 'react';
import { FormattedMessage } from "react-intl";
import  TabContent from '../../shared/components/tabContent'
import CustomizedTabs from "../../shared/components/customizedTabs";
import {loudPofessionalRental,minuitUneIVLlasersRental,production,authorizedReseller} from "./data"
import messages from "./messages";

import "./services.scss";

const Services = () => {
    const tabMenu = [
        {
          title: <FormattedMessage {...messages.loudPofessionalRental} />,
          key: "1",
          content: <TabContent data={loudPofessionalRental} />,
          id: "1"
        },
        {
            title: <FormattedMessage {...messages.minuitUneIVLlasersRental} />,
            key: "2",
            content: <TabContent data={minuitUneIVLlasersRental} />,
            id: "2"
          },
          {
            title: <FormattedMessage {...messages.production} />,
            key: "3",
            content: <TabContent data={production} />,
            id: "3"
          },
          {
            title: <FormattedMessage {...messages.authorizedReseller} />,
            key: "4",
            content: <TabContent data={authorizedReseller} />,
            id: "4"
          },
      ];

    return (
        <div className="services">
                 <CustomizedTabs tabMenu={tabMenu} className="rental-tabs" />
        </div>
    );
}

export default Services;
