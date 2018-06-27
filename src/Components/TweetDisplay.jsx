import React, { Component } from "react";
import { Timeline } from 'react-twitter-widgets'

const TweetDisplay = ({}) => {
    return(
        <div>
              <Timeline
                dataSource={{
                sourceType: 'profile',
                screenName: 'boomingapps'
                }}
                options={{
                username: 'TwitterDev',
                height: '400'
                }}
              onLoad={() => console.log('Timeline is loaded!')}
  />
        </div>
    )
}

export default TweetDisplay;





