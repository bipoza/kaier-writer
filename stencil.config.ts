import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'kaier-writer',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
  // collections: [
  //   'ionicons'
  // ],
};
