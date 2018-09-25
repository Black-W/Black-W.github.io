const mammoth = require('mammoth')



module.exports={
    'GET /public/practice/:name':async(ctx,next)=>{
        const name = ctx.params.name;
        var html
        await mammoth.convertToHtml({
        path:__dirname+'/../public/upload/'+name
        }).then(function(result){
            html = result.value;
        })
        //can not use .done()

        // ctx.response.body= html
        ctx.render('practice.html',{
            title:`${name.substring(1)}`,
            topic:`${name.substring(1).substring(0,2)}`,
            introduction:'',
            acticle:html
            
        })
    }
}