export default function chainTimeout(fn, t) {

	// SetTimeout Replacement using requestAnimationFrame
	function requestTimeout(func, delay) {
		let start = new Date().getTime();
		let handle = null;
		let loop = () => { ( (new Date().getTime() - start) >= delay ) ? func.call() : handle = requestAnimationFrame(loop) };
			handle = requestAnimationFrame(loop);
		return handle;
	}

	let queue = []
	let self = null;
	let timer = null;

	function schedule(fn, t) {
		timer = requestTimeout( function() {
			timer = null;
			fn.call();
			if (queue.length) {
				let item = queue.shift();
				schedule(item.fn, item.t);
			}
		}, t);
	}

	self = {
		chainTimeout: function(fn, t) {
			(queue.length || timer) ? queue.push({fn: fn, t: t}) : schedule(fn, t);
			return self;
        },
		clear: function() {
			cancelAnimationFrame(timer);
			queue = [];
			return self;
		}
	};

	return self.chainTimeout(fn, t);
}
