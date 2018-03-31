const should = require('should');
const algo = require('../../index.js');

const items = 10;
function getUnqueItem(count, notEqual) {
	const _result = Math.floor(Math.random() * count);
	return _result === notEqual ? getUnqueItem(count, notEqual) : _result;
}
describe('Dynamic Connectivity', () => {
	it('Should connect a with b', () => {
		const dynamicConnectivity = new algo.DynamicConnectivity(items);
		for (let i = 0; i <= 5; i += 1) {
			const a = getUnqueItem(items, null);
			const b = getUnqueItem(items, a);
			dynamicConnectivity.connect(a, b);
		}
	});
});

describe('Dynamic Connectivity', () => {
	it('Should check is connected a with b. Should return TRUE', () => {
		const dynamicConnectivity = new algo.DynamicConnectivity(items);
		dynamicConnectivity.connect(1, 2);
		dynamicConnectivity.connect(5, 9);
		dynamicConnectivity.connect(3, 8);
		dynamicConnectivity.connect(2, 8);
		dynamicConnectivity.connect(5, 8);
		should(dynamicConnectivity.isConnected(1, 9)).be.eql(true);
	});
});

describe('Dynamic Connectivity', () => {
	it('Should check is connected a with b. Should return FALSE', () => {
		const dynamicConnectivity = new algo.DynamicConnectivity(items);
		dynamicConnectivity.connect(1, 2);
		dynamicConnectivity.connect(5, 9);
		dynamicConnectivity.connect(3, 8);
		dynamicConnectivity.connect(2, 8);
		dynamicConnectivity.connect(5, 8);
		should(dynamicConnectivity.isConnected(1, 4)).be.eql(false);
	});
});


describe('Dynamic Connectivity', () => {
	it.skip('Should provide high load test', function test(done) {
		this.timeout(10000);
		const _items = 20000000;
		const dynamicConnectivity = new algo.DynamicConnectivity(_items);
		for (let i = 0; i <= _items; i += 1) {
			const a = getUnqueItem(_items, null);
			const b = getUnqueItem(_items, a);
			dynamicConnectivity.connect(a, b);
		}
		// should(dynamicConnectivity.isConnected(1, 4)).be.eql(false);
		for (let i = 0; i <= 10; i += 1) {
			const a = getUnqueItem(_items, null);
			const b = getUnqueItem(_items, a);
			console.log('Check connection', a, b, dynamicConnectivity.isConnected(a, b));
		}
		done();
	});
});
