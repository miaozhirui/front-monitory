'use strict';

module.exports = appInfo => {
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1529734946207_8937';

  // add your config here
  config.middleware = [
      'robot',
  ];

  config.view = {
      defaultViewEngine: 'ejs',
      mapping: {
          '.html': 'ejs',
      }
  }

  config.robot = {
      ua:[/Baiduspider/i]
  }

  config.security = {
      csrf:false,

  }
  config.cors = {

      origin: "*",
      allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  config.mongoose = {

      client: {
          url: 'mongodb://127.0.0.1/front-monitor'
      }
  }


  return config;
};
