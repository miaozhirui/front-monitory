const BaseController = require('./base')

module.exports = class MonitorController extends BaseController {

    async index() {

        const { ctx } = this;
        let errorInfo = JSON.stringify(ctx.request.body);

        try{

            errorInfo = await ctx.model.Monitor.create({content: errorInfo});

            this.success(errorInfo)
        } catch (error){

            this.error(error)
        }

    }
}

