function* generator(){
    var bar = yield 'foo';
    console.log('from generator: '+bar); // bar!
	yield(bar);
	bar+=' foo2';
	yield(bar);
}

var iterator = generator();
// Start execution till we get first yield value
var foo = iterator.next();
console.log(foo.value); // foo
// Resume execution of the generator, injecting 'bar' to be returned upon the next yield 
var nextThing = iterator.next('bar');
console.log("from main: "+JSON.stringify(iterator.next())); 
