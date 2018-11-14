const packageJson = require('../../package.json');

export const environment = {
  appName: 'Trek 2019',
  envName: 'TEST',
  production: false,
  apiUrl: 'https://trek-api-dev.kh.org',
  versions: {
    app: packageJson.version,
    angular: packageJson.dependencies['@angular/core'],
    bootstrap: packageJson.dependencies.bootstrap,
    rxjs: packageJson.dependencies.rxjs,
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies['typescript']
  }
};
