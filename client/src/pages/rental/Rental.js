import React, { Fragment } from "react";
import CustomizedTabs from "../../shared/components/customizedTabs";
import ImageGallery from "react-image-gallery";
import ContactForm from "./contact"
import { FormattedMessage } from "react-intl";
import { bundle1, bundle2, bundle3, bundle4, bundle5, bundle6 } from "./data";
import messages from "./message";

import "./rental.scss";

const renderBandleInformation = info => {
  return (
    <Fragment>
      <div> title : {info.title}</div>
      <div> Product list top : {info.ProductListTop}</div>
      <div> Product list sub : {info.ProductListSub}</div>
      <div> Amping : {info.title}</div>
      <div> Capacity : {info.Capacity}</div>
      <div> Price : {info.Price}</div>
    </Fragment>
  );
};

const content1 = (
  <div className="sub-tabs">
    <h1 className="sub-tabs-title"> Content 1</h1>
  </div>
);

const content2 = (
  <div>
    <h1>Content 2</h1>
    <p>
      if the content is large , we must write this content under a comoponent
      wich we will create under this comoponent page
    </p>
  </div>
);
const ContentForPaBundles = ({ subTabMenu }) => (
  <CustomizedTabs tabMenu={subTabMenu} className="rental-tabs" />
);

const ContentForBundItem = ({ data }) => {
  return (
    <div className="content-for-bund-item">
      <div className="content-for-bund-item__images">
        <ImageGallery items={data.images} sizes="40" />;
      </div>
      <div className="content-for-bund-item__info">
        {renderBandleInformation(data)}
      </div>
    </div>
  );
};

const Rental = () => {
  const subTabMenu = [
    {
      title: <FormattedMessage {...messages.bundleXS} />,
      key: "1",
      content: <ContentForBundItem data={bundle1} />,
      id: "1"
    },
    {
      title: <FormattedMessage {...messages.bundleS} />,
      key: "2",
      content: <ContentForBundItem data={bundle2} />,
      id: "2"
    },
    {
      title: <FormattedMessage {...messages.bundleM} />,
      key: "3",
      content: <ContentForBundItem data={bundle3} />,
      id: "3"
    },
    {
      title: <FormattedMessage {...messages.bundleL} />,
      key: "4",
      content: <ContentForBundItem data={bundle4} />,
      id: "4"
    },
    {
      title: <FormattedMessage {...messages.bundleXl} />,
      key: "5",
      content: <ContentForBundItem data={bundle5} />,
      id: "5"
    },
    {
      title: <FormattedMessage {...messages.bundleXxl} />,
      key: "6",
      content: <ContentForBundItem data={bundle6} />,
      id: "6"
    }
  ];
  const tabMenu = [
    {
      title: <FormattedMessage {...messages.minuitUneIVCarre} />,
      key: "1",
      content: content1,
      id: "1"
    },
    {
      title: <FormattedMessage {...messages.monitoringBundle} />,
      key: "2",
      content: content2,
      id: "2"
    },
    {
      title: <FormattedMessage {...messages.paBundles} />,
      key: "3",
      content: <ContentForPaBundles subTabMenu={subTabMenu} />,
      id: "3"
    }
  ];
  return (
    <div className="rental ">
      <CustomizedTabs tabMenu={tabMenu} className="rental-tabs" />
        <ContactForm />
    </div>
  );
};

export default Rental;
