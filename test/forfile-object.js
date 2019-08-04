module.exports = {
    forFile : function(item, next){
        console.log('***' + item.fileName);
        next();
    }
};
