This bug occurs when using the Expo `Linking` API to handle deep links.  Sometimes, the `Linking.addEventListener` doesn't trigger when a deep link is opened, even if the app is in the foreground or background. This is particularly problematic on Android devices.