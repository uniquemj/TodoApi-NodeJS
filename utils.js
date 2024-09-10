const fs = require('fs')

const writeDataToFile = (filename, content) =>{
    fs.writeFile(filename, JSON.stringify(content), (err)=>{
        if(err) throw err;
    })
}

const getPostData = (req) =>{
    return new Promise((resolve, reject)=>{
        try{
            let body = ''

            req.on('data', (chunk) =>{
                body += chunk.toString()
            })

            req.on('end', ()=>{
                resolve(JSON.parse(body))
            })
        } catch (err) {
            reject (err)
        }
    })
}


module.exports = {writeDataToFile, getPostData}