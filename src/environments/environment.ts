// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyB96ftMAobdipQT_rN5mDiUMU1N706kdMY',
        authDomain: 'portfolio-ed.firebaseapp.com',
        projectId: 'portfolio-ed',
        storageBucket: 'portfolio-ed.appspot.com',
        messagingSenderId: '661131878316',
        appId: '1:661131878316:web:73e5f42a7082b66d312409'
    },
    PROFILE_COLLECTION: 'profile',
    PROJECTS_COLLECTION: 'projects',
    CERTIFICATIONS_COLLECTION: 'courses'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
