let fs = require('fs'),
path = require('path');

let loadScript = (filePath)=>{
    
    if(!filePath){
        console.log('no vaild file path given for a forFile method script. Running built in ForFile method.');
        return Promise.reject(new Error('no vaild script path'));
    }
    
    return new Promise((resolve, reject)=>{
        
        try{
            let forFile = require(path.resolve(filePath));
            resolve(forFile);
        }catch(e){
            reject(e);
        }
        
    });
    
};

// walk method
let walk = (opt) =>{
    
    // options
    opt = opt || {};
    opt.dir = opt.dir || process.cwd();
    opt.forFile = opt.forFile || function(item, next){
        console.log(item.path);
        next();
    };
    opt.recursive = opt.recursive || false;
    
    // readNext
    let i = 0;
    let readNext = (files) => {
        let fileName = files[i];
        i += 1;
        if(i < files.length){
            let item = {
                fileName : files[i],
                path: path.join(opt.dir, files[i])
            };
            fs.stat(item.path, (e, stat)=> {
                if(stat.isDirectory()){
                    if(opt.recursive){                    
                        walk(Object.assign({}, opt, { dir: item.path }));
                    }
                    readNext(files);
                }else{
                    item.stat = stat;
                    opt.forFile(item, function(){
                        readNext(files);
                    });
                }
            });
        }
    };
    
    // read dir
    fs.readdir(opt.dir, (e,files)=>{
        if(files){
            readNext(files);
        }
    });
};

// main method that is exported
module.exports = (opt) => {

   loadScript(opt.scriptPath)
   
   .then((forFile)=>{
       
       console.log('using external forfile method.');
       
       walk(Object.assign({},opt,{forFile: forFile}));
       
    })
   
   .catch((e)=>{
    
        console.log(e.message);
        console.log('using internal forfile method.');
        
        walk(opt);
        
    });
    

};
