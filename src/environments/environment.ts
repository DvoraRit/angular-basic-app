/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    
    firebaseConfig : {
        apiKey: "AIzaSyDqvGhmvEmvsuwNf0EkSQA5YgymYWFsCFE",
        authDomain: "ng-first-app-8e94b.firebaseapp.com",
        databaseURL: "https://ng-first-app-8e94b-default-rtdb.firebaseio.com",
        projectId: "ng-first-app-8e94b",
        storageBucket: "ng-first-app-8e94b.appspot.com",
        messagingSenderId: "605602390028",
        appId: "1:605602390028:web:cb8c4c28f2b5665fab8e29",
        measurementId: "G-QQDHFHD3MX"
      }
  };