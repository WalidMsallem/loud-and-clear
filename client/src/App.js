import React , {useState} from 'react';
import {BrowserRouter , Route } from 'react-router-dom'
import routes from './shared/routes'
import { IntlProviderWrapper } from "./IntlContext";
import Layout from './layout'
import './global.css'



function App (){
  const [language, setLanguage] = useState('en')
  return(
    <IntlProviderWrapper>
      <BrowserRouter>
        <div>
        <Layout setLanguage = {setLanguage} language = {language}>   
          <Route exact path= {routes.home.path} component= {routes.home.component}/> 
          <Route exact path= {routes.products.path} component= {routes.products.component}/>        
          <Route exact path= {routes.rental.path} component= {routes.rental.component}/> 
          <Route exact path= {routes.service.path} component= {routes.service.component}/> 
        </Layout>
        <Route exact path= {routes.impressium.path} component= {routes.impressium.component}/> 
        <Route exact path= {routes.events.path} component= {routes.events.component}/> 
        
        </div>
        </BrowserRouter>
    </IntlProviderWrapper>
  )
}
export default App;
