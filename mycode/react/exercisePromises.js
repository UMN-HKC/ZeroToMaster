// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
	setTimeout(function() {
		resolve('success');
	}, 4000);
});

// #2) Run the above promise and make it console.log "success"
promise.then(
	(message) => {
		console.log(message);
	});

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
Promise.resolve(new Promise((resolve, reject) => {
	setTimeout(function() {
		console.log('success');
	}, 4000);
}));

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch((reason) => {
	console.log('Ooops something went wrong');
});

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/peop2e/4'
]
const promiseArr = urls.map(url => fetch(url).then(people => people.json()));

Promise.all(promiseArr)
	.then(resolve => {
		console.log('1: ',resolve[0]);
		console.log('2: ',resolve[1]);
		console.log('3: ',resolve[2]);
		console.log('4: ',resolve[3]);
	})
	.catch(reason => console.log('this is an error:',reason));
// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?