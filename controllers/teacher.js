const fs = require('fs')
const path = require('path')

function processFileName(file){
return `<li class="list-group-item"><a href="/public/download/${file}">${file.substring(1)}</a></li>`
}

module.exports={
    'GET /teacher':async(ctx,next)=>{
        var level1 =[],
            level2 =[],
            level3 =[],
            level4 =[],
            level5 =[],
            level6 =[],
            level7 =[],
            level8 =[]

        fs.readdirSync(path.join(__dirname+'/..'+'/public'+'/upload')).forEach((f)=>{
            console.log(`<--${f}`)
            if(f.startsWith('1')){
            level1.push(processFileName(f))
            }
            else if(f.startsWith('2')){
            level2.push(processFileName(f))
            }
            else if(f.startsWith('3')){
            level3.push(processFileName(f))
            }
            else if(f.startsWith('4')){
            level4.push(processFileName(f))
            }
            else if(f.startsWith('5')){
            level5.push(processFileName(f))
            }
            else if(f.startsWith('6')){
            level6.push(processFileName(f))
            }
            else if(f.startsWith('7')){
            level7.push(processFileName(f))
            }
            else if(f.startsWith('8')){
            level8.push(processFileName(f))
            }
        })
        ctx.render('teacher.html',{
            title:'teacher',
            topic:'Hello Manager',
            introduction:'',
            level1:level1,
            level2:level2,
            level3:level3,
            level4:level4,
            level5:level5,
            level6:level6,
            level7:level7,
            level8:level8
        })
    }
}