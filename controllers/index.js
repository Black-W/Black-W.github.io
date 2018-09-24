// index:

module.exports = {
    'GET /': async (ctx, next) => {
        ctx.render('index.html', {
            title: 'Welcome',
            topic: 'Welcome',
            introduction:'a site for french reading practice'
        });
    }
};
