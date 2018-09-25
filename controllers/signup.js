module.exports={
    'GET /signup':async(ctx,next)=>{
        ctx.render('signup.html',{
            title:'Sign Up',
            topic:'Sign Up',
            introduction:''
        })
    },
    'POST /signup':async(ctx,next)=>{
        ctx.redirect('/')
    }
}