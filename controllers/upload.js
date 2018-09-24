const fs = require('fs')
const path = require('path');


module.exports={
    'POST /fileUpload':async (ctx,next)=> {
        const files = ctx.request.files.file;
        for(let file of files){
        const reader = fs.createReadStream(file.path)
        const stream = fs.createWriteStream(path.join(__dirname,'../public/upload/',file.name));
        reader.pipe(stream);
        console.log('uploading %s -> %s',file.name,stream.path);
        }
        ctx.redirect('/teacher')
    }
}