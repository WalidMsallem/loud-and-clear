import React from "react";
import { Select } from 'antd'; 

import { IntlContext } from "./IntlContext";

const { Option } = Select

const LanguageSwitch = () => {
  const { locale , switchLanguage } = React.useContext(IntlContext);
  
 const changeLanguage =(value)=>{
    switchLanguage(value)
  }
  return (
    <>
      <Select 
    style={{ width: 100 }}
    onChange={changeLanguage}
    defaultValue = {locale}
  >
    <Option value="en">English</Option>
    <Option value="de">Gernaman</Option>
  </Select>
    </>
  );
};

// ... OR:
//
// const LanguageSwitch = () => (
//   <IntlContext.Consumer>
//     {({ switchToEnglish, switchToDeutsch }) => (
//       <React.Fragment>
//         <button onClick={switchToEnglish}>
//           English
//         </button>
//         <button onClick={switchToDeutsch}>
//           Deutsch
//         </button>
//       </React.Fragment>
//     )}
//   </IntlContext.Consumer>
// );

export default LanguageSwitch;
