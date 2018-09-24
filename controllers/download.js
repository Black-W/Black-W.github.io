const send = require('koa-send');

module.exports={
    'GET /public/download/:name':async(ctx,next)=>{
        const name = ctx.params.name;
        const path = `public/upload/${name}`;
        ctx.attachment(path);
        await send(ctx,path);
    }
}