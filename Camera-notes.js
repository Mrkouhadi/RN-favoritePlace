///////////// set up /////////////
// https://github.com/ivpusic/react-native-image-crop-picker
// npm i react-native-image-crop-picker --save
// ios
    // cd ios 
    // pod install
    // go to info.split
        // after : 	// <key>NSLocationWhenInUseUsageDescription</key>
                    // <string></string>
                // write: 	<key>NSPhotoLibraryUsageDescription</key>
                //          <string></string>
                //          <key>NSCameraUsageDescription</key>
                //          <string></string>
// android:
    // add these two lines in (android/build.gradle)
        //maven { url 'https://maven.google.com' }
        // maven { url "https://www.jitpack.io" }
                    // example: allprojects {
                    //     repositories {
                    //     mavenLocal()
                    //     jcenter()
                    //     maven { url "$rootDir/../node_modules/react-native/android" }
                    
                    //     // ADD THIS
                    //     maven { url 'https://maven.google.com' }
                    
                    //     // ADD THIS
                    //     maven { url "https://www.jitpack.io" }
                    //     }
                    // }
    // Add useSupportLibrary (android/app/build.gradle)
                    // android {
                    //     ...
                    
                    //     defaultConfig {
                    //         ...
                    //         vectorDrawables.useSupportLibrary = true
                    //         ...
                    //     }
                    //     ...
                    // }
    // add following to app/src/main/AndroidManifest.xml
        //     <uses-permission android:name="android.permission.CAMERA"/>
        //     <uses-feature android:name="android.hardware.camera" android:required="false" />
        //     <uses-feature android:name="android.hardware.camera.front" android:required="false" /> 

// usage
        // import ImagePicker from 'react-native-image-crop-picker';
        // const takePhotoHandler = () =>{
        //     ImagePicker.openCamera({
        //         //width: 300,
        //         //height: 400,
        //         compressImageMaxHeight:300,
        //         compressImageMaxWidth:300,
        //         cropping: true,
        //     }).then(image => {
        //         console.log(image);
        //     });
        // }
        // const selectPhotoHandler = () =>{
        //     ImagePicker.openPicker({
        //         // width: 300,
        //         // height: 400,
        //         compressImageMaxHeight:300,
        //         compressImageMaxWidth:300,
        //         cropping: true
        //     }).then(image => {
        //         console.log(image);
        //     });
        // }