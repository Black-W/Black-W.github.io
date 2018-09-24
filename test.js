const docx2html=require('docx2html')
html =  docx2html(__dirname+'/public/upload/1fx.docx').then(function(h){
    h.toString()
})
console.log(html)