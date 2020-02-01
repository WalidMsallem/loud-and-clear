import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { IntlProvider } from 'react-intl'
import { BrowserRouter } from "react-router-dom";

import { addLocaleData } from "react-intl";

import locale_en from 'react-intl/locale-data/en';
import locale_de from 'react-intl/locale-data/de';

addLocaleData([...locale_en, ...locale_de]);

import messages_fr from './translations/fr.json'
import messages_en from './translations/en.json'

const messages = {
  'de': messages_de,
  'en': messages_en
};

const language = navigator.language.split(/[-_]/)[0];  // language without region code


ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </IntlProvider>,
  document.getElementById("root")
);
