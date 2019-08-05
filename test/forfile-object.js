module.exports = {
    dir: '/etc',
    forFile : function(item, next){
        if(item.fileName.match(/.conf/)){
            console.log(item.fileName);
        }
        next();
    }
};
