'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {

  const { router, controller } = app;

  //前端错误监控
  router.post('/api/frontMonitor', 'monitor.index');

  router.get('/news', controller.news.list);
};
