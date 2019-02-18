# redux-beacon-react-native-appsflyer

An integration for sending events to AppsFlyer via Redux Beacon.

# Usage

## Prerequisites

To use this package, you need Redux Beacon set up on your app. Refer to their instructions [here](https://rangle.gitbook.io/redux-beacon/) for how to do that.

You also need AppsFlyer SDK set up. To do this, follow their instructions for the React Native plugin [here](https://github.com/AppsFlyerSDK/react-native-appsflyer).

Once Redux Beacon and AppsFlyer are both set up, you are ready to implement this package. First install it with npm or Yarn:

```
yarn add redux-beacon-react-native-appsflyer
```

or

```
npm install redux-beacon-react-native-appsflyer --save
```

## Implementation

```
import appsFlyer from 'react-native-appsflyer`
import reduxBeaconAppsFlyer from 'redux-beacon-react-native-appsflyer'

const rbAF = reduxBeaconAppsFlyer(
  appsFlyer,
  success => console.log("AppsFlyer Event: ", success),
  error => console.error("AppsFlyer event unsuccessful: ", error)
)
```

The first parameter is the AppsFlyer object (which has already been set up in your application by calling `appsFlyer.initSdk()` with the necessary parameters as explained by their documentation). The second parameter is a success callback and the third is an error callback.

Next, create an event map for Redux Beacon:

```
const eventMap = {
    reduxAction1: () => ({
      event: "AppsFlyer event"
      // more key-value pairs
    }),
    reduxAction2: () => ({
      event: "Another AppsFlyer event"
    })
  },
```

Finally, pass both of these into `createMiddleware`:

```
import { createMiddleware } from 'redux-beacon'

createMiddleware(eventMap, rbAF)

```

More detailed set up for Redux Beacon can be found at their [documentation](https://rangle.gitbook.io/redux-beacon/).
  