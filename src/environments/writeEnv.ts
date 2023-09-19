const setEnv = () => {
  // Configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.ts';
  // Load node modules
  require('dotenv').config({
    path: '.env',
  });
  // `environment.ts` file structure
  const envConfigFile = `export const environmentD = {
    API_KEY_AP_FOOT: '${process.env['API_KEY_AP_FOOT']}',
    API_KEY_FOOT_PRED:'${process.env['API_KEY_FOOT_PRED']}',
    API_KEY_FIREBASE:'${process.env['API_KEY_FIREBASE']}',
  production: true,
  firebase:{
    projectId: ${process.env['projectId']}
    appId: ${process.env['appId']}
    databaseURL: ${process.env['databaseURL']}
    storageBucket: ${process.env['storageBucket']}
    apiKey: ${process.env['apiKey']}
    authDomain: ${process.env['authDomain']}
    messagingSenderId: ${process.env['messagingSenderId']}
    measurementId: ${process.env['projectId']}
  }
};
`;

  require('fs').writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      );
    }
  });
};

setEnv();
