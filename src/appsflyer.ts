import { Target } from 'redux-beacon'

function reduxBeaconAppsFlyer(appsFlyer: any,
    successCallback: (success: string) => any,
    errorCallback: (error: Error) => any): Target {
    return function appsFlyerTarget(events: any[]) {
        events.forEach((event) => {
            const { event: name, ...attrs } = event
            appsFlyer.logEvent(name, attrs, successCallback, errorCallback)
        })
    }
}

export default reduxBeaconAppsFlyer
