module.exports = (item, next ) => {
    console.log('this is just a test of the forfile script feature.');
    console.log('file found at: ' + item.path);
    console.log('**********');
    next();  
};
