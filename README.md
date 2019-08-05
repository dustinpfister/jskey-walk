# jskey-walk

Custom file system walker for my jskey project that has truned into a collection of small projects liek this one. For starters I just need a CLI tool that will walk the contents of a folder and fire a script for each item that it finds in that folder. There are other features that come to mind such as walking recursivly, and building some of the fetures that I have in mind into the tool itself, but the core of the idea is just simply that.

## install

Like all of my projects so far I do not have any intenetion to publish this to npm, so the project must be coned down and then installed globaly.

```
$ git clone --depth 1 https://github.com/dustinpfister/jskey-walk
$ cd jskey-walk
$ sudo npm install -g
```

## Walk a target folder

As of this writing jekey-walk has a built in for file method that just logs the path of each file that it finds in the target folder.

```
$ jskey-walk walk -t foo
(paths of files found in foo)
```

When it comes to really using jskey-walk an external for file method should be given to it. This method will contain logic that is to be prefromed for each file found.

## Create a custom for file script for walk command

The jskey-walk walk command is not so great by itself. However a forFile script can be given bia the s option. This exteral script can just export a method or an object.

### A forFile method

To create a custom for file method have an exteral javaScript file that exports a single method. That method will be given a reference to each item as the first argument, and a function that can be called to continue on to the next item as the second argument.

Do whatever needs to be done for each file in this method, being sure to call next when that something is done.

```js
module.exports = (item, next) => {
    console.log('this is just a test of the forfile script feature.');
    console.log('file found at: ' + item.path);
    console.log('**********');
    next();  
};
```

The method can then be used by using the -s option

```
$ jskey-walk -t ./foo -s ./for-foo.js
```

### A forFile object

A For file Script can also be in object form

```js
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
```
