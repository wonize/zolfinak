import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.zolfinak.app',
  appName: 'Zolfinak',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins:{
    SplashScreen: {
      launchShowDuration: 3000,
      launchFadeOutDuration: 3000,
      backgroundColor: "#ffffffff",
      showSpinner: false,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
    },
  }
};

export default config;
