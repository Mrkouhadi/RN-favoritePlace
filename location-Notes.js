// https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md
/////////// set up
//  npm install react-native-maps --save-exact
// npx pod install
//go to  info.split
    // 	<key>NSLocationWhenInUseUsageDescription</key>
	// <string>FavoritePlace needs your permission in order use the map</string>
//go to appDelegate.mm
    // -- + #import <GoogleMaps/GoogleMaps.h>
    // --[GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; 
    // --  example:
        //         @implementation AppDelegate
        //         ...

        //         (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
        //         {
        //         +  [GMSServices provideAPIKey:@"_YOUR_API_KEY_"]; // add this line using the api key obtained from Google Console
        //         ...
    // get GOOGLE API_KEY

 // in podfile add: (above use_native_modules)
    // # React Native Maps dependencies
    // rn_maps_path = '../node_modules/react-native-maps'
    // pod 'react-native-google-maps', :path => rn_maps_path

    



// usage::
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

<MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 37.78825,
         longitude: -122.4324,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
</MapView>