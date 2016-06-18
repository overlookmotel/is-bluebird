// --------------------
// is-bluebird module
// Tests
// --------------------

// modules
var chai = require('chai'),
	expect = chai.expect,
	Bluebird2 = require('bluebird2'),
	Bluebird3 = require('bluebird3'),
	isBluebird = require('../lib/');

// init
chai.config.includeStack = true;

// tests

/* jshint expr: true */
/* global describe, it */

describe('isBluebird', function() {
	it('returns true for bluebird v2 promise', function() {
		expect(isBluebird(bluebird2Promise())).to.be.true;
	});

	it('returns true for bluebird v3 promise', function() {
		expect(isBluebird(bluebird3Promise())).to.be.true;
	});

	testIfNativePromise('returns false for native JS promise', function() {
		expect(isBluebird(nativePromise())).to.be.false;
	});

	it('returns false for undefined', function() {
		expect(isBluebird()).to.be.false;
	});

	it('returns false for null', function() {
		expect(isBluebird(null)).to.be.false;
	});

	it('returns false for object', function() {
		expect(isBluebird({_addCallbacks: function() {}})).to.be.false;
	});
});

describe('isBluebird.ctor', function() {
	it('returns true for bluebird v2 constructor', function() {
		expect(isBluebird.ctor(Bluebird2)).to.be.true;
	});

	it('returns true for bluebird v3 constructor', function() {
		expect(isBluebird.ctor(Bluebird3)).to.be.true;
	});

	testIfNativePromise('returns false for native JS promise constructor', function() {
		expect(isBluebird.ctor(Promise)).to.be.false;
	});

	it('returns false for undefined', function() {
		expect(isBluebird.ctor()).to.be.false;
	});

	it('returns false for null', function() {
		expect(isBluebird.ctor(null)).to.be.false;
	});

	it('returns false for object', function() {
		var obj = {};
		obj.prototype = {_addCallbacks: function() {}};
		expect(isBluebird.ctor(obj)).to.be.false;
	});
});

describe('isBluebird.v2', function() {
	it('returns true for bluebird v2 promise', function() {
		expect(isBluebird.v2(bluebird2Promise())).to.be.true;
	});

	it('returns false for bluebird v3 promise', function() {
		expect(isBluebird.v2(bluebird3Promise())).to.be.false;
	});

	testIfNativePromise('returns false for native JS promise', function() {
		expect(isBluebird.v2(nativePromise())).to.be.false;
	});

	it('returns false for undefined', function() {
		expect(isBluebird.v2()).to.be.false;
	});

	it('returns false for null', function() {
		expect(isBluebird.v2(null)).to.be.false;
	});

	it('returns false for object', function() {
		expect(isBluebird.v2({_addCallbacks: function() {}})).to.be.false;
	});
});

describe('isBluebird.v2.ctor', function() {
	it('returns true for bluebird v2 constructor', function() {
		expect(isBluebird.v2.ctor(Bluebird2)).to.be.true;
	});

	it('returns false for bluebird v3 constructor', function() {
		expect(isBluebird.v2.ctor(Bluebird3)).to.be.false;
	});

	testIfNativePromise('returns false for native JS promise constructor', function() {
		expect(isBluebird.v2.ctor(Promise)).to.be.false;
	});

	it('returns false for undefined', function() {
		expect(isBluebird.v2.ctor()).to.be.false;
	});

	it('returns false for null', function() {
		expect(isBluebird.v2.ctor(null)).to.be.false;
	});

	it('returns false for object', function() {
		var obj = {};
		obj.prototype = {_addCallbacks: function() {}};
		expect(isBluebird.v2.ctor(obj)).to.be.false;
	});
});

describe('isBluebird.v3', function() {
	it('returns true for bluebird v3 promise', function() {
		expect(isBluebird.v3(bluebird3Promise())).to.be.true;
	});

	it('returns false for bluebird v2 promise', function() {
		expect(isBluebird.v3(bluebird2Promise())).to.be.false;
	});

	testIfNativePromise('returns false for native JS promise', function() {
		expect(isBluebird.v3(nativePromise())).to.be.false;
	});

	it('returns false for undefined', function() {
		expect(isBluebird.v3()).to.be.false;
	});

	it('returns false for null', function() {
		expect(isBluebird.v3(null)).to.be.false;
	});

	it('returns false for object', function() {
		expect(isBluebird.v3({_addCallbacks: function() {}})).to.be.false;
	});
});

describe('isBluebird.v3.ctor', function() {
	it('returns true for bluebird v3 constructor', function() {
		expect(isBluebird.v3.ctor(Bluebird3)).to.be.true;
	});

	it('returns false for bluebird v2 constructor', function() {
		expect(isBluebird.v3.ctor(Bluebird2)).to.be.false;
	});

	testIfNativePromise('returns false for native JS promise constructor', function() {
		expect(isBluebird.v3.ctor(Promise)).to.be.false;
	});

	it('returns false for undefined', function() {
		expect(isBluebird.v3.ctor()).to.be.false;
	});

	it('returns false for null', function() {
		expect(isBluebird.v3.ctor(null)).to.be.false;
	});

	it('returns false for object', function() {
		var obj = {};
		obj.prototype = {_addCallbacks: function() {}};
		expect(isBluebird.v3.ctor(obj)).to.be.false;
	});
});

// support functions
function bluebird2Promise() {
	return new Bluebird2(function() {});
}

function bluebird3Promise() {
	return new Bluebird3(function() {});
}

function nativePromise() {
	return new Promise(function() {});
}

function testIfNativePromise(name, fn) {
	if (global.Promise) return it(name, fn);
	return it.skip(name);
}
