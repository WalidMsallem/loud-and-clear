import React from "react";
import { IntlProvider } from "react-intl";
import deTranslation from './i18n/locales/de.json'
import enTranslation from './i18n/locales/en.json'

if (!Intl.RelativeTimeFormat) {
    require("@formatjs/intl-relativetimeformat/polyfill");
    require("@formatjs/intl-relativetimeformat/dist/locale-data/de"); // Add locale data for de
    require("@formatjs/intl-relativetimeformat/dist/locale-data/en"); // Add locale data for de
  }

const Context = React.createContext();

// const locale = window.location.search.replace("?locale=","") || "en"
const locale = "en";

class IntlProviderWrapper extends React.Component {
  constructor(...args) {
    super(...args);

    this.switchToEnglish = () =>
      this.setState({ locale: "en", messages: enTranslation });

    this.switchToDeutsch = () =>
      this.setState({ locale: "de", messages: deTranslation });

      this.switchLanguage = (value) => {
          if (value === 'en') {
            this.switchToEnglish ()
          }
          if (value === 'de') {
            this.switchToDeutsch ()
          }
      }
      this.setState({ locale: "de", messages: deTranslation });

    // pass everything in state to avoid creating object inside render method (like explained in the documentation)
    this.state = {
      locale,
      messages: enTranslation,
      switchToEnglish: this.switchToEnglish,
      switchToDeutsch: this.switchToDeutsch,
      switchLanguage  : this.switchLanguage
    };
  }

  render() {
    const { children } = this.props;
    const { locale, messages } = this.state;
    return (
      <Context.Provider value={this.state}>
        <IntlProvider
          key={locale}
          locale={locale}
          messages={messages}
          defaultLocale="en"
        >
          {children}
        </IntlProvider>
      </Context.Provider>
    );
  }
}

export { IntlProviderWrapper, Context as IntlContext };
