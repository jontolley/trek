const packageJson = require('../../package.json');

export const environment = {
  appName: 'Trek 2019',
  envName: 'PROD',
  production: true,
  apiUrl: 'https://trek-api.kh.org',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript']
  }
};
