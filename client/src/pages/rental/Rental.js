import React, { Fragment ,memo} from "react";
import CustomizedTabs from "../../shared/components/customizedTabs";
import ImageGallery from "react-image-gallery";
import ContactForm from "./contact"
import { FormattedMessage } from "react-intl";
import  TabContent from '../../shared/components/tabContent'
import { bundle1, bundle2, bundle3, bundle4, bundle5, bundle6 ,monitoringBundleImage,minuitUneIVLCarreImage} from "./data";
import messages from "./message";

import "./rental.scss";


const ContentForPaBundles = ({ subTabMenu }) => (
  <CustomizedTabs tabMenu={subTabMenu} className="rental-tabs" />
);

const MonitoringBundleAndMinuitUneIVLCarreContent = ({images}) => {
  if (images.length ===0) {
    return <Fragment />
  }
  return < div>
        <ImageGallery items={images} sizes="40" />;
  </div>
}
const Rental = () => {
  const subTabMenu = [
    {
      title: <FormattedMessage {...messages.bundleXS} />,
      key: "1",
      content: <TabContent data={bundle1} />,
      id: "1"
    },
    {
      title: <FormattedMessage {...messages.bundleS} />,
      key: "2",
      content: <TabContent data={bundle2} />,
      id: "2"
    },
    {
      title: <FormattedMessage {...messages.bundleM} />,
      key: "3",
      content: <TabContent data={bundle3} />,
      id: "3"
    },
    {
      title: <FormattedMessage {...messages.bundleL} />,
      key: "4",
      content: <TabContent data={bundle4} />,
      id: "4"
    },
    {
      title: <FormattedMessage {...messages.bundleXl} />,
      key: "5",
      content: <TabContent data={bundle5} />,
      id: "5"
    },
    {
      title: <FormattedMessage {...messages.bundleXxl} />,
      key: "6",
      content: <TabContent data={bundle6} />,
      id: "6"
    }
  ];
  const tabMenu = [
    {
      title: <FormattedMessage {...messages.minuitUneIVCarre} />,
      key: "1",
      content: <MonitoringBundleAndMinuitUneIVLCarreContent images ={minuitUneIVLCarreImage} />,
      id: "1"
    },
    {
      title: <FormattedMessage {...messages.monitoringBundle} />,
      key: "2",
      content: <MonitoringBundleAndMinuitUneIVLCarreContent  images ={monitoringBundleImage}  />,
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
    <div className="rental">
      <CustomizedTabs tabMenu={tabMenu} className="rental-tabs" />
        <ContactForm />
    </div>
  );
};

export default memo (Rental);
