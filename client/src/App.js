import React from 'react';
import { Switch,Router, Route } from 'react-router-dom'
// import routes from 'shared/generalRoutes'
import routes from './shared/routes'
import Layout from './layout'
import './global.css'

function App (){
  return(
    <div>
     <Layout>   
     <FormattedMessage id="app.text" />
     <FormattedMessage id="app.learn-react-link" />
       <Route exact path= {routes.home.path} component= {routes.home.component}/> 
       <Route exact path= {routes.products.path} component= {routes.products.component}/>        
       <Route exact path= {routes.rental.path} component= {routes.rental.component}/> 
       <Route exact path= {routes.service.path} component= {routes.service.component}/> 
     </Layout>
     <Route exact path= {routes.impressium.path} component= {routes.impressium.component}/> 
    </div>
  )
}
export default App;
