function reduxBeaconAppsFlyer() {
  return function appsFlyerTarget(events) {
    events.forEach(event => {
      const { event: name, ...attrs } = event;
      appsFlyer.trackEvent(name, attrs,
        (result) => console.log(`${name} event sent to AppsFlyer successfully`, result),
        (error) => console.log(`${name} event not sent to AppsFlyer`, error)
      );
    });
  };
}

export default reduxBeaconAppsFlyer;
