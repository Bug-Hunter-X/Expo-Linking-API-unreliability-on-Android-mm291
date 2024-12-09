# Expo Linking API Unreliable Deep Link Handling on Android

This repository demonstrates a bug in the Expo `Linking` API where the `Linking.addEventListener` for deep links may fail to trigger reliably, especially on Android devices. The issue has been observed in both foreground and background app states.

## Setup

1. Clone this repository.
2. Run `npm install` or `yarn install` to install the dependencies.
3. Run `expo start` to start the Expo development server.

## Reproducing the Bug

1. Build and run the app on an Android device (emulator or physical).
2. Send a deep link to the app (e.g., via a web browser). Observe the console logs to see if the event listener triggers consistently.  You will likely observe instances where the link is not handled.

## Potential Causes

* Issues with Android's intent handling system.
* Timing and concurrency problems within the Expo `Linking` implementation.

## Solution (Provided in `bugSolution.js`)

The suggested solution involves using a combination of `Linking.getInitialURL` and `Linking.addEventListener`. This approach aims to capture initial URLs and subsequent URLs more consistently. The `getInitialURL` will help capture a deep link if the app is launched via that link. The event listener would then track all further links.

This is an example, and the optimal approach might require more comprehensive handling of Android-specific intents, or using a more sophisticated deep linking library.