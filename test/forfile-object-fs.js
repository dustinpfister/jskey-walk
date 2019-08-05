let fs = require('fs');
module.exports = {
    dir: './',
    recursive: true,
    beforeWalk: function(next){
        console.log('going to walk now');
        console.log('**********');
        next();
    },
    forFile : function(item, next){
        if(item.fileName.match(/.js$/)){
            //console.log(item.path);
            fs.readFile(item.path, 'hex', function(e, data){
              
                console.log(data)
                next();
                
            })
        }else{
          next();
        }
    },
    onDone : function(){
        console.log('**********');
        console.log('we are done now');
    }
};
