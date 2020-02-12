import React from 'react'
import './feed.css'
import { StreamApp, NotificationDropdown, FlatFeed, LikeButton, Activity, CommentList, CommentField, StatusUpdateForm } from 'react-activity-feed';
import 'react-activity-feed/dist/index.css';
// import { FacebookProvider, Feed, Comments, Page} from 'react-facebook';


 class FacebookFeed extends React.Component {
  render() {
    return (
        <div className='facebook'>
        <StreamApp
        apiKey="du8he7epvp94"
        appId="45206"
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWE5YmRiZTgtMmQ0OS00YmRmLWJhOGItMTIzY2EwNmU0ZjY3In0.tbLNMVTfgQPdSqckaWhDMVC5bLMkm0B4Uhfft9_MpTM"
      >
        <NotificationDropdown notify />
        <StatusUpdateForm
          feedGroup="timeline"
          userId="5a9bdbe8-2d49-4bdf-ba8b-123ca06e4f67" />
        <FlatFeed
          options={ {reactions: { recent: true } } }
          notify
          Activity={(props) =>
              <Activity {...props}
                Footer={() => (
                  <div style={ {padding: '8px 16px'} }>
                    <LikeButton {...props} />
                    <CommentField
                      activity={props.activity}
                      onAddReaction={props.onAddReaction} />
                    <CommentList activityId={props.activity.id} />
                  </div>
                )}
              />
            }
          />
      </StreamApp>
      </div>
    );
  }
}

export default FacebookFeed


// <FacebookProvider appId="1060365504">
// {/* <Feed link="https://www.facebook.com">
//   {({ handleClick }) => (
//     <button type="button" onClick={handleClick}>Share on Feed</button>
//   )}
// </Feed> */}
// {/* <Comments href="http://www.facebook.com" /> */}
// <Page href="https://www.facebook.com" tabs="timeline" />
// </FacebookProvider>    