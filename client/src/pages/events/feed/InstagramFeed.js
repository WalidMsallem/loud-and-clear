import React from 'react'

import './feed.css'
import { StreamApp, NotificationDropdown, FlatFeed } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
// import { FacebookProvider, Feed, Comments, Page} from 'react-facebook';


 class FacebookFeed extends React.Component {
  render() {
    return (
        <div className='instagram'>
        <StreamApp
        apiKey="du8he7epvp94"
        appId="1060365504"
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWE5YmRiZTgtMmQ0OS00YmRmLWJhOGItMTIzY2EwNmU0ZjY3In0.tbLNMVTfgQPdSqckaWhDMVC5bLMkm0B4Uhfft9_MpTM"
      >
        <NotificationDropdown notify/>
        <FlatFeed
          notify
        />
      </StreamApp>
      </div>
    );
  }
}

export default FacebookFeed