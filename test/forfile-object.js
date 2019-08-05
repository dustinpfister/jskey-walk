module.exports = {
    dir: './',
    beforeWalk: function(next){
        console.log('going to walk now');
        console.log('**********');
        next();
    },
    forFile : function(item, next){
        if(item.fileName.match(/.md/)){
            console.log(item.fileName);
        }
        next();
    },
    onDone : function(){
        console.log('**********');
        console.log('we are done now');
    }
};
