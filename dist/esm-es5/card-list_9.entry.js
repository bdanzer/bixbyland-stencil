var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
import { r as registerInstance, g as getContext, h, H as Host, c as getElement } from './core-9db7707a.js';
function _isPlaceholder(a) {
    return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}
/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry1(fn) {
    return function f1(a) {
        if (arguments.length === 0 || _isPlaceholder(a)) {
            return f1;
        }
        else {
            return fn.apply(this, arguments);
        }
    };
}
/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry2(fn) {
    return function f2(a, b) {
        switch (arguments.length) {
            case 0:
                return f2;
            case 1:
                return _isPlaceholder(a) ? f2 : _curry1(function (_b) {
                    return fn(a, _b);
                });
            default:
                return _isPlaceholder(a) && _isPlaceholder(b) ? f2 : _isPlaceholder(a) ? _curry1(function (_a) {
                    return fn(_a, b);
                }) : _isPlaceholder(b) ? _curry1(function (_b) {
                    return fn(a, _b);
                }) : fn(a, b);
        }
    };
}
/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
var add = /*#__PURE__*/ _curry2(function add(a, b) {
    return Number(a) + Number(b);
});
function _arity(n, fn) {
    /* eslint-disable no-unused-vars */
    switch (n) {
        case 0:
            return function () {
                return fn.apply(this, arguments);
            };
        case 1:
            return function (a0) {
                return fn.apply(this, arguments);
            };
        case 2:
            return function (a0, a1) {
                return fn.apply(this, arguments);
            };
        case 3:
            return function (a0, a1, a2) {
                return fn.apply(this, arguments);
            };
        case 4:
            return function (a0, a1, a2, a3) {
                return fn.apply(this, arguments);
            };
        case 5:
            return function (a0, a1, a2, a3, a4) {
                return fn.apply(this, arguments);
            };
        case 6:
            return function (a0, a1, a2, a3, a4, a5) {
                return fn.apply(this, arguments);
            };
        case 7:
            return function (a0, a1, a2, a3, a4, a5, a6) {
                return fn.apply(this, arguments);
            };
        case 8:
            return function (a0, a1, a2, a3, a4, a5, a6, a7) {
                return fn.apply(this, arguments);
            };
        case 9:
            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
                return fn.apply(this, arguments);
            };
        case 10:
            return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
                return fn.apply(this, arguments);
            };
        default:
            throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
    }
}
/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curryN(length, received, fn) {
    return function () {
        var combined = [];
        var argsIdx = 0;
        var left = length;
        var combinedIdx = 0;
        while (combinedIdx < received.length || argsIdx < arguments.length) {
            var result;
            if (combinedIdx < received.length && (!_isPlaceholder(received[combinedIdx]) || argsIdx >= arguments.length)) {
                result = received[combinedIdx];
            }
            else {
                result = arguments[argsIdx];
                argsIdx += 1;
            }
            combined[combinedIdx] = result;
            if (!_isPlaceholder(result)) {
                left -= 1;
            }
            combinedIdx += 1;
        }
        return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
    };
}
/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value [`R.__`](#__) may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is [`R.__`](#__),
 * the following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      const sumArgs = (...args) => R.sum(args);
 *
 *      const curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      const f = curriedAddFourNumbers(1, 2);
 *      const g = f(3);
 *      g(4); //=> 10
 */
var curryN = /*#__PURE__*/ _curry2(function curryN(length, fn) {
    if (length === 1) {
        return _curry1(fn);
    }
    return _arity(length, _curryN(length, [], fn));
});
/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry3(fn) {
    return function f3(a, b, c) {
        switch (arguments.length) {
            case 0:
                return f3;
            case 1:
                return _isPlaceholder(a) ? f3 : _curry2(function (_b, _c) {
                    return fn(a, _b, _c);
                });
            case 2:
                return _isPlaceholder(a) && _isPlaceholder(b) ? f3 : _isPlaceholder(a) ? _curry2(function (_a, _c) {
                    return fn(_a, b, _c);
                }) : _isPlaceholder(b) ? _curry2(function (_b, _c) {
                    return fn(a, _b, _c);
                }) : _curry1(function (_c) {
                    return fn(a, b, _c);
                });
            default:
                return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3 : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function (_a, _b) {
                    return fn(_a, _b, c);
                }) : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function (_a, _c) {
                    return fn(_a, b, _c);
                }) : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function (_b, _c) {
                    return fn(a, _b, _c);
                }) : _isPlaceholder(a) ? _curry1(function (_a) {
                    return fn(_a, b, c);
                }) : _isPlaceholder(b) ? _curry1(function (_b) {
                    return fn(a, _b, c);
                }) : _isPlaceholder(c) ? _curry1(function (_c) {
                    return fn(a, b, _c);
                }) : fn(a, b, c);
        }
    };
}
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
var _isArray = Array.isArray || function _isArray(val) {
    return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
};
function _isTransformer(obj) {
    return obj != null && typeof obj['@@transducer/step'] === 'function';
}
/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
function _dispatchable(methodNames, xf, fn) {
    return function () {
        if (arguments.length === 0) {
            return fn();
        }
        var args = Array.prototype.slice.call(arguments, 0);
        var obj = args.pop();
        if (!_isArray(obj)) {
            var idx = 0;
            while (idx < methodNames.length) {
                if (typeof obj[methodNames[idx]] === 'function') {
                    return obj[methodNames[idx]].apply(obj, args);
                }
                idx += 1;
            }
            if (_isTransformer(obj)) {
                var transducer = xf.apply(null, args);
                return transducer(obj);
            }
        }
        return fn.apply(this, arguments);
    };
}
var _xfBase = {
    init: function () {
        return this.xf['@@transducer/init']();
    },
    result: function (result) {
        return this.xf['@@transducer/result'](result);
    }
};
function _map(fn, functor) {
    var idx = 0;
    var len = functor.length;
    var result = Array(len);
    while (idx < len) {
        result[idx] = fn(functor[idx]);
        idx += 1;
    }
    return result;
}
function _isString(x) {
    return Object.prototype.toString.call(x) === '[object String]';
}
/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
var _isArrayLike = /*#__PURE__*/ _curry1(function isArrayLike(x) {
    if (_isArray(x)) {
        return true;
    }
    if (!x) {
        return false;
    }
    if (typeof x !== 'object') {
        return false;
    }
    if (_isString(x)) {
        return false;
    }
    if (x.nodeType === 1) {
        return !!x.length;
    }
    if (x.length === 0) {
        return true;
    }
    if (x.length > 0) {
        return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
    }
    return false;
});
var XWrap = /*#__PURE__*/ function () {
    function XWrap(fn) {
        this.f = fn;
    }
    XWrap.prototype['@@transducer/init'] = function () {
        throw new Error('init not implemented on XWrap');
    };
    XWrap.prototype['@@transducer/result'] = function (acc) {
        return acc;
    };
    XWrap.prototype['@@transducer/step'] = function (acc, x) {
        return this.f(acc, x);
    };
    return XWrap;
}();
function _xwrap(fn) {
    return new XWrap(fn);
}
/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
var bind = /*#__PURE__*/ _curry2(function bind(fn, thisObj) {
    return _arity(fn.length, function () {
        return fn.apply(thisObj, arguments);
    });
});
function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
        acc = xf['@@transducer/step'](acc, list[idx]);
        if (acc && acc['@@transducer/reduced']) {
            acc = acc['@@transducer/value'];
            break;
        }
        idx += 1;
    }
    return xf['@@transducer/result'](acc);
}
function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
        acc = xf['@@transducer/step'](acc, step.value);
        if (acc && acc['@@transducer/reduced']) {
            acc = acc['@@transducer/value'];
            break;
        }
        step = iter.next();
    }
    return xf['@@transducer/result'](acc);
}
function _methodReduce(xf, acc, obj, methodName) {
    return xf['@@transducer/result'](obj[methodName](bind(xf['@@transducer/step'], xf), acc));
}
var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';
function _reduce(fn, acc, list) {
    if (typeof fn === 'function') {
        fn = _xwrap(fn);
    }
    if (_isArrayLike(list)) {
        return _arrayReduce(fn, acc, list);
    }
    if (typeof list['fantasy-land/reduce'] === 'function') {
        return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
    }
    if (list[symIterator] != null) {
        return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
        return _iterableReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
        return _methodReduce(fn, acc, list, 'reduce');
    }
    throw new TypeError('reduce: list must be array or iterable');
}
var XMap = /*#__PURE__*/ function () {
    function XMap(f, xf) {
        this.xf = xf;
        this.f = f;
    }
    XMap.prototype['@@transducer/init'] = _xfBase.init;
    XMap.prototype['@@transducer/result'] = _xfBase.result;
    XMap.prototype['@@transducer/step'] = function (result, input) {
        return this.xf['@@transducer/step'](result, this.f(input));
    };
    return XMap;
}();
var _xmap = /*#__PURE__*/ _curry2(function _xmap(f, xf) {
    return new XMap(f, xf);
});
function _has(prop, obj) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
var toString = Object.prototype.toString;
var _isArguments = /*#__PURE__*/ function () {
    return toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
        return toString.call(x) === '[object Arguments]';
    } : function _isArguments(x) {
        return _has('callee', x);
    };
}();
// cover IE < 9 keys issues
var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
// Safari bug
var hasArgsEnumBug = /*#__PURE__*/ function () {
    return arguments.propertyIsEnumerable('length');
}();
var contains = function contains(list, item) {
    var idx = 0;
    while (idx < list.length) {
        if (list[idx] === item) {
            return true;
        }
        idx += 1;
    }
    return false;
};
/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? /*#__PURE__*/ _curry1(function keys(obj) {
    return Object(obj) !== obj ? [] : Object.keys(obj);
}) : /*#__PURE__*/ _curry1(function keys(obj) {
    if (Object(obj) !== obj) {
        return [];
    }
    var prop, nIdx;
    var ks = [];
    var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
    for (prop in obj) {
        if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
            ks[ks.length] = prop;
        }
    }
    if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while (nIdx >= 0) {
            prop = nonEnumerableProps[nIdx];
            if (_has(prop, obj) && !contains(ks, prop)) {
                ks[ks.length] = prop;
            }
            nIdx -= 1;
        }
    }
    return ks;
});
/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      const double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
var map = /*#__PURE__*/ _curry2(/*#__PURE__*/ _dispatchable(['fantasy-land/map', 'map'], _xmap, function map(fn, functor) {
    switch (Object.prototype.toString.call(functor)) {
        case '[object Function]':
            return curryN(functor.length, function () {
                return fn.call(this, functor.apply(this, arguments));
            });
        case '[object Object]':
            return _reduce(function (acc, key) {
                acc[key] = fn(functor[key]);
                return acc;
            }, {}, keys(functor));
        default:
            return _map(fn, functor);
    }
}));
/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
var path = /*#__PURE__*/ _curry2(function path(paths, obj) {
    var val = obj;
    var idx = 0;
    while (idx < paths.length) {
        if (val == null) {
            return;
        }
        val = val[paths[idx]];
        idx += 1;
    }
    return val;
});
/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 *      R.compose(R.inc, R.prop('x'))({ x: 3 }) //=> 4
 */
var prop = /*#__PURE__*/ _curry2(function prop(p, obj) {
    return path([p], obj);
});
/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
var reduce = /*#__PURE__*/ _curry3(_reduce);
/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */
var type = /*#__PURE__*/ _curry1(function type(val) {
    return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});
/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
var reverse = /*#__PURE__*/ _curry1(function reverse(list) {
    return _isString(list) ? list.split('').reverse().join('') : Array.prototype.slice.call(list, 0).reverse();
});
function _arrayFromIterator(iter) {
    var list = [];
    var next;
    while (!(next = iter.next()).done) {
        list.push(next.value);
    }
    return list;
}
function _includesWith(pred, x, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
        if (pred(x, list[idx])) {
            return true;
        }
        idx += 1;
    }
    return false;
}
function _functionName(f) {
    // String(x => x) evaluates to "x => x", so the pattern may not match.
    var match = String(f).match(/^function (\w*)/);
    return match == null ? '' : match[1];
}
// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs(a, b) {
    // SameValue algorithm
    if (a === b) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return a !== 0 || 1 / a === 1 / b;
    }
    else {
        // Step 6.a: NaN == NaN
        return a !== a && b !== b;
    }
}
var _objectIs$1 = typeof Object.is === 'function' ? Object.is : _objectIs;
/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */
function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
    var a = _arrayFromIterator(aIterator);
    var b = _arrayFromIterator(bIterator);
    function eq(_a, _b) {
        return _equals(_a, _b, stackA.slice(), stackB.slice());
    }
    // if *a* array contains any element that is not included in *b*
    return !_includesWith(function (b, aItem) {
        return !_includesWith(eq, aItem, b);
    }, b, a);
}
function _equals(a, b, stackA, stackB) {
    if (_objectIs$1(a, b)) {
        return true;
    }
    var typeA = type(a);
    if (typeA !== type(b)) {
        return false;
    }
    if (a == null || b == null) {
        return false;
    }
    if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
        return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
    }
    if (typeof a.equals === 'function' || typeof b.equals === 'function') {
        return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
    }
    switch (typeA) {
        case 'Arguments':
        case 'Array':
        case 'Object':
            if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
                return a === b;
            }
            break;
        case 'Boolean':
        case 'Number':
        case 'String':
            if (!(typeof a === typeof b && _objectIs$1(a.valueOf(), b.valueOf()))) {
                return false;
            }
            break;
        case 'Date':
            if (!_objectIs$1(a.valueOf(), b.valueOf())) {
                return false;
            }
            break;
        case 'Error':
            return a.name === b.name && a.message === b.message;
        case 'RegExp':
            if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
                return false;
            }
            break;
    }
    var idx = stackA.length - 1;
    while (idx >= 0) {
        if (stackA[idx] === a) {
            return stackB[idx] === b;
        }
        idx -= 1;
    }
    switch (typeA) {
        case 'Map':
            if (a.size !== b.size) {
                return false;
            }
            return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
        case 'Set':
            if (a.size !== b.size) {
                return false;
            }
            return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
        case 'Arguments':
        case 'Array':
        case 'Object':
        case 'Boolean':
        case 'Number':
        case 'String':
        case 'Date':
        case 'Error':
        case 'RegExp':
        case 'Int8Array':
        case 'Uint8Array':
        case 'Uint8ClampedArray':
        case 'Int16Array':
        case 'Uint16Array':
        case 'Int32Array':
        case 'Uint32Array':
        case 'Float32Array':
        case 'Float64Array':
        case 'ArrayBuffer':
            break;
        default:
            // Values of other types are only equal if identical.
            return false;
    }
    var keysA = keys(a);
    if (keysA.length !== keys(b).length) {
        return false;
    }
    var extendedStackA = stackA.concat([a]);
    var extendedStackB = stackB.concat([b]);
    idx = keysA.length - 1;
    while (idx >= 0) {
        var key = keysA[idx];
        if (!(_has(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
            return false;
        }
        idx -= 1;
    }
    return true;
}
/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
var equals = /*#__PURE__*/ _curry2(function equals(a, b) {
    return _equals(a, b, [], []);
});
function _indexOf(list, a, idx) {
    var inf, item;
    // Array.prototype.indexOf doesn't exist below IE9
    if (typeof list.indexOf === 'function') {
        switch (typeof a) {
            case 'number':
                if (a === 0) {
                    // manually crawl the list to distinguish between +0 and -0
                    inf = 1 / a;
                    while (idx < list.length) {
                        item = list[idx];
                        if (item === 0 && 1 / item === inf) {
                            return idx;
                        }
                        idx += 1;
                    }
                    return -1;
                }
                else if (a !== a) {
                    // NaN
                    while (idx < list.length) {
                        item = list[idx];
                        if (typeof item === 'number' && item !== item) {
                            return idx;
                        }
                        idx += 1;
                    }
                    return -1;
                }
                // non-zero numbers can utilise Set
                return list.indexOf(a, idx);
            // all these types can utilise Set
            case 'string':
            case 'boolean':
            case 'function':
            case 'undefined':
                return list.indexOf(a, idx);
            case 'object':
                if (a === null) {
                    // null can utilise Set
                    return list.indexOf(a, idx);
                }
        }
    }
    // anything else not covered above, defer to R.equals
    while (idx < list.length) {
        if (equals(list[idx], a)) {
            return idx;
        }
        idx += 1;
    }
    return -1;
}
function _includes(a, list) {
    return _indexOf(list, a, 0) >= 0;
}
function _complement(f) {
    return function () {
        return !f.apply(this, arguments);
    };
}
function _filter(fn, list) {
    var idx = 0;
    var len = list.length;
    var result = [];
    while (idx < len) {
        if (fn(list[idx])) {
            result[result.length] = list[idx];
        }
        idx += 1;
    }
    return result;
}
function _isObject(x) {
    return Object.prototype.toString.call(x) === '[object Object]';
}
var XFilter = /*#__PURE__*/ function () {
    function XFilter(f, xf) {
        this.xf = xf;
        this.f = f;
    }
    XFilter.prototype['@@transducer/init'] = _xfBase.init;
    XFilter.prototype['@@transducer/result'] = _xfBase.result;
    XFilter.prototype['@@transducer/step'] = function (result, input) {
        return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
    };
    return XFilter;
}();
var _xfilter = /*#__PURE__*/ _curry2(function _xfilter(f, xf) {
    return new XFilter(f, xf);
});
/**
 * Takes a predicate and a `Filterable`, and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate. Filterable objects include plain objects or any object
 * that has a filter method such as `Array`.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array} Filterable
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      const isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var filter = /*#__PURE__*/ _curry2(/*#__PURE__*/ _dispatchable(['filter'], _xfilter, function (pred, filterable) {
    return _isObject(filterable) ? _reduce(function (acc, key) {
        if (pred(filterable[key])) {
            acc[key] = filterable[key];
        }
        return acc;
    }, {}, keys(filterable)) :
        // else
        _filter(pred, filterable);
}));
/**
 * The complement of [`filter`](#filter).
 *
 * Acts as a transducer if a transformer is given in list position. Filterable
 * objects include plain objects or any object that has a filter method such
 * as `Array`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      const isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
var reject = /*#__PURE__*/ _curry2(function reject(pred, filterable) {
    return filter(_complement(pred), filterable);
});
/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty`,
 * `<Type>.prototype.empty` or implement the
 * [FantasyLand Monoid spec](https://github.com/fantasyland/fantasy-land#monoid).
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */
var empty = /*#__PURE__*/ _curry1(function empty(x) {
    return x != null && typeof x['fantasy-land/empty'] === 'function' ? x['fantasy-land/empty']() : x != null && x.constructor != null && typeof x.constructor['fantasy-land/empty'] === 'function' ? x.constructor['fantasy-land/empty']() : x != null && typeof x.empty === 'function' ? x.empty() : x != null && x.constructor != null && typeof x.constructor.empty === 'function' ? x.constructor.empty() : _isArray(x) ? [] : _isString(x) ? '' : _isObject(x) ? {} : _isArguments(x) ? function () {
        return arguments;
    }() : void 0 // else
    ;
});
/**
 * Returns `true` if the specified value is equal, in [`R.equals`](#equals)
 * terms, to at least one element of the given list; `false` otherwise.
 * Works also with strings.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.includes(3, [1, 2, 3]); //=> true
 *      R.includes(4, [1, 2, 3]); //=> false
 *      R.includes({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.includes([42], [[42]]); //=> true
 *      R.includes('ba', 'banana'); //=>true
 */
var includes = /*#__PURE__*/ _curry2(_includes);
/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */
var isEmpty = /*#__PURE__*/ _curry1(function isEmpty(x) {
    return x != null && equals(x, empty(x));
});
/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
var sum = /*#__PURE__*/ reduce(add, 0);
/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @see R.median
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */
var mean = /*#__PURE__*/ _curry1(function mean(list) {
    return sum(list) / list.length;
});
/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      const sortByFirstItem = R.sortBy(R.prop(0));
 *      const pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *
 *      const sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      const alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      const bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      const clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      const people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */
var sortBy = /*#__PURE__*/ _curry2(function sortBy(fn, list) {
    return Array.prototype.slice.call(list, 0).sort(function (a, b) {
        var aa = fn(a);
        var bb = fn(b);
        return aa < bb ? -1 : aa > bb ? 1 : 0;
    });
});
function getSubString(numberString, removeNumber) {
    return numberString.substring(0, numberString.length - removeNumber);
}
function formatLargeNumber(number) {
    var numberString = number.toString();
    var numberLength = number.toString().length;
    switch (numberLength) {
        //35000
        case 5:
        case 6:
            return getSubString(numberString, 3) + "K";
        // return numberString.replace('000', 'K');
        //3300000
        case 7:
        case 8:
        case 9:
            // str.substring(0, str.length - 1);
            return getSubString(numberString, 6) + "M";
        case 10:
        case 11:
        case 12:
            return getSubString(numberString, 9) + "B";
    }
    return numberString;
}
/**
 * TODO: Use R.sortWith with R.ascend & R.descend
 */
function sorter(value, haystack) {
    switch (value) {
        case 'alpha_asc':
            var sortByNameCaseInsensitive = sortBy(prop('post_title'));
            var sort = sortByNameCaseInsensitive(haystack);
            return sort;
        case 'alpha_dsc':
            var sortByNameCaseInsensitive = sortBy(prop('post_title'));
            var sort = sortByNameCaseInsensitive(haystack);
            return reverse(sort);
        case 'sqft_asc':
            var sortByNameCaseInsensitive = sortBy(function (haystack) { return haystack.meta.sq_ft[0]; });
            var sort = sortByNameCaseInsensitive(haystack);
            return sort;
        case 'sqft_dsc':
            var sortByNameCaseInsensitive = sortBy(function (haystack) { return haystack.meta.sq_ft[0]; });
            var sort = sortByNameCaseInsensitive(haystack);
            return reverse(sort);
    }
}
function scrollTo(parent, target, options) {
    if (options === void 0) { options = {}; }
    var defaults = Object.assign({ offset: 0 }, options);
    var marginTop = window.getComputedStyle(parent).getPropertyValue("margin-top");
    var containerSpacing = parseInt(marginTop);
    parent.scrollTop = target.offsetTop - containerSpacing - defaults.offset;
}
var CardList = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.activePostId = false;
        this.store = getContext(this, "store");
    }
    class_1.prototype.componentWillLoad = function () {
        this.store.mapStateToProps(this, function (state) {
            var _d = state.dataReducer, items = _d.items, loading = _d.loading, error = _d.error, posts = _d.posts, views = _d.views;
            return {
                items: items,
                loading: loading,
                error: error,
                posts: posts,
                views: views
            };
        });
        this.store.mapDispatchToProps(this, {});
    };
    class_1.prototype.componentDidLoad = function () { };
    class_1.prototype.handleRef = function (el, post) {
        if (post.ID == this.activePostId) {
            scrollTo(this.el, el);
        }
    };
    class_1.prototype.render = function () {
        var _this = this;
        return (this.posts && h(Host, null, this.posts.map(function (post) {
            return (h("property-card", { ref: function (el) { return _this.handleRef(el, post); }, view: _this.views, onClick: function () { return _this.handleCard(post); }, activePostId: _this.activePostId, postData: post }));
        })));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_1, "style", {
        get: function () { return "p{margin:0 0 20px;font-size:16px;line-height:26px;color:grey}p:last-child{margin:0}h1{font-size:40px;letter-spacing:3.5px;font-weight:800;text-transform:uppercase;text-align:center;padding:0;margin-top:0;margin-bottom:15px}h2{font-size:32px;line-height:1;margin-bottom:5px;margin-top:20px}h3,h4{font-size:15px;margin-bottom:0}h3,h4,h5{margin-top:0;text-transform:uppercase}h5{margin-bottom:5px;font-size:22px}.danzerpress-button-left{margin-right:15px}\@media screen and (max-width:767px){.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5,card-list.grid property-card{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}\@media screen and (max-width:767px){.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5,card-list.grid property-card{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}}.danzerpress-col-1,.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5,card-list.grid property-card{width:100%;position:relative;margin-bottom:20px;padding:0 15px}.danzerpress-col-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.danzerpress-col-2{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.danzerpress-col-3,card-list.grid property-card{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.danzerpress-col-4{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.danzerpress-col-5{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}a,input,li,p,textarea,ul{font-family:Open Sans,sans-serif}h1,h2,h3,h4,h5,h6{font-family:Raleway,sans-serif;font-weight:600;color:#333}html{-webkit-box-sizing:border-box;box-sizing:border-box;-ms-overflow-style:scrollbar;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}html .main-content{-ms-flex:1 0 auto;flex:1 0 auto}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}card-list.grid{display:-ms-flexbox;display:flex}\@media screen and (max-width:1024px){card-list.grid property-card{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}}\@media screen and (max-width:900px){card-list.grid property-card{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}"; },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
var FilterHeaderBar = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        this.views = {
            'map': 'Property Map',
            'grid': 'Property Grid'
        };
        this.activeFilter = 'all';
        this.activeView = 'map';
        this.categories = [
            'industrial',
            'office'
        ];
    }
    class_2.prototype.getViews = function () {
        var _this = this;
        var views = [];
        var _loop_1 = function (viewType) {
            var viewName = this_1.views[viewType];
            views.push(h("div", { class: "filter-label-wrap " + viewType }, h("span", { class: "filter-label-icon " + viewType + " " + ((this_1.activeView == viewType) ? 'active' : '') }), h("div", { class: "filter-label-type " + viewType + " " + ((this_1.activeView == viewType) ? 'active' : ''), onClick: function () { return _this.handleView(viewType); } }, viewName)));
        };
        var this_1 = this;
        for (var viewType in this.views) {
            _loop_1(viewType);
        }
        return views;
    };
    class_2.prototype.handleView = function (viewType) {
        this.activeView = viewType;
        this.view(viewType);
    };
    class_2.prototype.handleFilter = function (category) {
        this.activeFilter = category;
        this.filter(category);
    };
    class_2.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("div", { class: "filter-wrap" }, h("div", { class: "filters" }, h("span", { class: "filter-label" }, "Filter by:"), h("div", { class: (this.activeFilter == 'all') ? 'active' : '', onClick: function () { return _this.handleFilter('all'); } }, "All"), this.categories.map(function (category) {
            return (h("div", { class: (_this.activeFilter == category) ? 'active' : '', onClick: function () { return _this.handleFilter(category); } }, category));
        })), h("div", { class: "views" }, h("span", { class: "filter-label" }, "View As:"), this.getViews()))));
    };
    Object.defineProperty(class_2, "style", {
        get: function () { return "p{margin:0 0 20px;font-size:16px;line-height:26px;color:grey}p:last-child{margin:0}h1{font-size:40px;letter-spacing:3.5px;font-weight:800;text-transform:uppercase;text-align:center;padding:0;margin-top:0;margin-bottom:15px}h2{font-size:32px;line-height:1;margin-bottom:5px;margin-top:20px}h3,h4{font-size:15px;margin-bottom:0}h3,h4,h5{margin-top:0;text-transform:uppercase}h5{margin-bottom:5px;font-size:22px}.danzerpress-button-left{margin-right:15px}\@media screen and (max-width:767px){.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}\@media screen and (max-width:767px){.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}}.danzerpress-col-1,.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{width:100%;position:relative;margin-bottom:20px;padding:0 15px}.danzerpress-col-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.danzerpress-col-2{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.danzerpress-col-3{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.danzerpress-col-4{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.danzerpress-col-5{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}filter-header-bar .filter-wrap,filter-header-bar .filters,filter-header-bar .views{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}a,input,li,p,textarea,ul{font-family:Open Sans,sans-serif}h1,h2,h3,h4,h5,h6{font-family:Raleway,sans-serif;font-weight:600;color:#333}html{-webkit-box-sizing:border-box;box-sizing:border-box;-ms-overflow-style:scrollbar;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}html .main-content{-ms-flex:1 0 auto;flex:1 0 auto}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}filter-header-bar{font-family:Roboto,sans-serif}filter-header-bar .filter-wrap{padding:45px 0;max-width:1300px;margin:auto;-ms-flex-pack:justify;justify-content:space-between}filter-header-bar .filter-wrap .views .filter-label-wrap{display:-ms-flexbox;display:flex}\@media screen and (max-width:1024px){filter-header-bar .filter-wrap{display:-ms-flexbox;display:flex;padding:0}filter-header-bar .filter-wrap .active:after,filter-header-bar .filter-wrap .filter-label{display:none}filter-header-bar .filter-wrap .views{border-top:.25px solid #8390a2;-ms-flex-order:-1;order:-1;-ms-flex:0 0 100%;flex:0 0 100%}filter-header-bar .filter-wrap .views .filter-label-wrap{-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%;margin:0;text-align:center;padding:15px 16px}filter-header-bar .filter-wrap .filters{-ms-flex:0 0 100%;flex:0 0 100%;-webkit-box-shadow:0 3px 6px #000;box-shadow:0 3px 6px #000}filter-header-bar .filter-wrap .filters div{-ms-flex:0 0 33.3333%;flex:0 0 33.3333%;margin:0;text-align:center;padding:12px 0}filter-header-bar .filter-wrap .filters div:not(:last-child):before{height:100%;content:\"\";width:1px;background:#8390a2;position:absolute;top:50%;right:0;max-height:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}}filter-header-bar .filters div,filter-header-bar .filters span,filter-header-bar .views div,filter-header-bar .views span{font-size:20px;-webkit-transition:.2s;transition:.2s}filter-header-bar .filters span,filter-header-bar .views span{margin-right:28px;color:#7c8388}filter-header-bar .filters div,filter-header-bar .views div{position:relative;color:#b4bfc8;text-transform:uppercase;font-weight:500;cursor:pointer}filter-header-bar .filters div.active,filter-header-bar .views div.active{color:#11284a}filter-header-bar .filters div.active:after,filter-header-bar .views div.active:after{content:\"\";width:100%;height:2px;background:#000;position:absolute;bottom:-3px;left:0;max-width:40px}\@media screen and (min-width:1024px){filter-header-bar .filters .filter-label-wrap,filter-header-bar .filters:not(.views) div,filter-header-bar .views .filter-label-wrap,filter-header-bar .views:not(.views) div{margin-right:40px}}filter-header-bar .filters .filter-label-icon,filter-header-bar .views .filter-label-icon{margin-right:16px;opacity:.4;-webkit-transition:.5s;transition:.5s}filter-header-bar .filters .filter-label-icon.active,filter-header-bar .views .filter-label-icon.active{opacity:1}filter-header-bar .filters .filter-label-icon.grid:before,filter-header-bar .filters .filter-label-icon.map:before,filter-header-bar .views .filter-label-icon.grid:before,filter-header-bar .views .filter-label-icon.map:before{content:\"\";height:26px;display:block;background-size:contain;background-repeat:no-repeat}filter-header-bar .filters .filter-label-icon.map:before,filter-header-bar .views .filter-label-icon.map:before{width:20px;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'23.824\' height=\'32.622\' viewBox=\'0 0 23.824 32.622\'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:none;stroke:%23233853;stroke-linecap:round;stroke-linejoin:round;stroke-width:2.433px;%7D%3C/style%3E%3C/defs%3E%3Cg transform=\'translate(-137.284 -133.946)\'%3E%3Cpath class=\'a\' d=\'M149.2,135.163a10.7,10.7,0,0,1,10.7,10.7,11.237,11.237,0,0,1-1.725,5.826c-2.376,3.933-8.97,13.666-8.97,13.666s-6.6-9.733-8.973-13.666a11.236,11.236,0,0,1-1.724-5.826,10.7,10.7,0,0,1,10.7-10.7\'/%3E%3Ccircle class=\'a\' cx=\'4.795\' cy=\'4.795\' r=\'4.795\' transform=\'translate(144.402 141.037)\'/%3E%3C/g%3E%3C/svg%3E\")}filter-header-bar .filters .filter-label-icon.grid:before,filter-header-bar .views .filter-label-icon.grid:before{width:28px;background-image:url(\"data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'36.943\' height=\'32.438\' viewBox=\'0 0 36.943 32.438\'%3E%3Cdefs%3E%3Cstyle%3E.a%7Bfill:none;stroke:%23233853;stroke-linecap:round;stroke-linejoin:round;stroke-width:2.433px;%7D%3C/style%3E%3C/defs%3E%3Cg transform=\'translate(-498.442 -912.43)\'%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(499.659 913.646)\'/%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(499.659 925.81)\'/%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(499.659 937.974)\'/%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(514.076 913.646)\'/%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(514.076 925.81)\'/%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(514.076 937.974)\'/%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(528.494 913.646)\'/%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(528.494 925.81)\'/%3E%3Ccircle class=\'a\' cx=\'2.838\' cy=\'2.838\' r=\'2.838\' transform=\'translate(528.494 937.974)\'/%3E%3C/g%3E%3C/svg%3E\")}"; },
        enumerable: true,
        configurable: true
    });
    return class_2;
}());
var bind$1 = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
            args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
    };
};
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
var isBuffer = function isBuffer(obj) {
    return obj != null && obj.constructor != null &&
        typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
};
/*global toString:true*/
// utils is a library of generic helper functions non-specific to axios
var toString$1 = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
    return toString$1.call(val) === '[object Array]';
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
    return toString$1.call(val) === '[object ArrayBuffer]';
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
    var result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
    }
    else {
        result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
    }
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
    return typeof val === 'string';
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
    return typeof val === 'number';
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
    return typeof val === 'undefined';
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
    return val !== null && typeof val === 'object';
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
    return toString$1.call(val) === '[object Date]';
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
    return toString$1.call(val) === '[object File]';
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
    return toString$1.call(val) === '[object Blob]';
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
    return toString$1.call(val) === '[object Function]';
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
}
/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
    if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
        navigator.product === 'NativeScript' ||
        navigator.product === 'NS')) {
        return false;
    }
    return (typeof window !== 'undefined' &&
        typeof document !== 'undefined');
}
/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
        return;
    }
    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/
        obj = [obj];
    }
    if (isArray(obj)) {
        // Iterate over array values
        for (var i = 0, l = obj.length; i < l; i++) {
            fn.call(null, obj[i], i, obj);
        }
    }
    else {
        // Iterate over object keys
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj);
            }
        }
    }
}
/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge( /* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
        if (typeof result[key] === 'object' && typeof val === 'object') {
            result[key] = merge(result[key], val);
        }
        else {
            result[key] = val;
        }
    }
    for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
    }
    return result;
}
/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge( /* obj1, obj2, obj3, ... */) {
    var result = {};
    function assignValue(val, key) {
        if (typeof result[key] === 'object' && typeof val === 'object') {
            result[key] = deepMerge(result[key], val);
        }
        else if (typeof val === 'object') {
            result[key] = deepMerge({}, val);
        }
        else {
            result[key] = val;
        }
    }
    for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
    }
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') {
            a[key] = bind$1(val, thisArg);
        }
        else {
            a[key] = val;
        }
    });
    return a;
}
var utils = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    deepMerge: deepMerge,
    extend: extend,
    trim: trim
};
function encode(val) {
    return encodeURIComponent(val).
        replace(/%40/gi, '@').
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, '+').
        replace(/%5B/gi, '[').
        replace(/%5D/gi, ']');
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/
    if (!params) {
        return url;
    }
    var serializedParams;
    if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
    }
    else if (utils.isURLSearchParams(params)) {
        serializedParams = params.toString();
    }
    else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === 'undefined') {
                return;
            }
            if (utils.isArray(val)) {
                key = key + '[]';
            }
            else {
                val = [val];
            }
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) {
                    v = v.toISOString();
                }
                else if (utils.isObject(v)) {
                    v = JSON.stringify(v);
                }
                parts.push(encode(key) + '=' + encode(v));
            });
        });
        serializedParams = parts.join('&');
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) {
            url = url.slice(0, hashmarkIndex);
        }
        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
    }
    return url;
};
function InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) {
        this.handlers[id] = null;
    }
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
            fn(h);
        }
    });
};
var InterceptorManager_1 = InterceptorManager;
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData = function transformData(data, headers, fns) {
    /*eslint no-param-reassign:0*/
    utils.forEach(fns, function transform(fn) {
        data = fn(data, headers);
    });
    return data;
};
var isCancel = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};
var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};
/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
var enhanceError = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) {
        error.code = code;
    }
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function () {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code
        };
    };
    return error;
};
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
var createError = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
};
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!validateStatus || validateStatus(response.status)) {
        resolve(response);
    }
    else {
        reject(createError('Request failed with status code ' + response.status, response.config, null, response.request, response));
    }
};
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    'age', 'authorization', 'content-length', 'content-type', 'etag',
    'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
    'last-modified', 'location', 'max-forwards', 'proxy-authorization',
    'referer', 'retry-after', 'user-agent'
];
/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) {
        return parsed;
    }
    utils.forEach(headers.split('\n'), function parser(line) {
        i = line.indexOf(':');
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                return;
            }
            if (key === 'set-cookie') {
                parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
            }
            else {
                parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
            }
        }
    });
    return parsed;
};
var isURLSameOrigin = (utils.isStandardBrowserEnv() ?
    // Standard browser envs have full support of the APIs needed to test
    // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
        var msie = /(msie|trident)/i.test(navigator.userAgent);
        var urlParsingNode = document.createElement('a');
        var originURL;
        /**
      * Parse a URL to discover it's components
      *
      * @param {String} url The URL to be parsed
      * @returns {Object}
      */
        function resolveURL(url) {
            var href = url;
            if (msie) {
                // IE needs attribute set twice to normalize properties
                urlParsingNode.setAttribute('href', href);
                href = urlParsingNode.href;
            }
            urlParsingNode.setAttribute('href', href);
            // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
            return {
                href: urlParsingNode.href,
                protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
                host: urlParsingNode.host,
                search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
                hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
                hostname: urlParsingNode.hostname,
                port: urlParsingNode.port,
                pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                    urlParsingNode.pathname :
                    '/' + urlParsingNode.pathname
            };
        }
        originURL = resolveURL(window.location.href);
        /**
      * Determine if a URL shares the same origin as the current location
      *
      * @param {String} requestURL The URL to test
      * @returns {boolean} True if URL shares the same origin, otherwise false
      */
        return function isURLSameOrigin(requestURL) {
            var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
            return (parsed.protocol === originURL.protocol &&
                parsed.host === originURL.host);
        };
    })() :
    // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
        return function isURLSameOrigin() {
            return true;
        };
    })());
var cookies = (utils.isStandardBrowserEnv() ?
    // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
        return {
            write: function write(name, value, expires, path, domain, secure) {
                var cookie = [];
                cookie.push(name + '=' + encodeURIComponent(value));
                if (utils.isNumber(expires)) {
                    cookie.push('expires=' + new Date(expires).toGMTString());
                }
                if (utils.isString(path)) {
                    cookie.push('path=' + path);
                }
                if (utils.isString(domain)) {
                    cookie.push('domain=' + domain);
                }
                if (secure === true) {
                    cookie.push('secure');
                }
                document.cookie = cookie.join('; ');
            },
            read: function read(name) {
                var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
                return (match ? decodeURIComponent(match[3]) : null);
            },
            remove: function remove(name) {
                this.write(name, '', Date.now() - 86400000);
            }
        };
    })() :
    // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
        return {
            write: function write() { },
            read: function read() { return null; },
            remove: function remove() { }
        };
    })());
var xhr = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        if (utils.isFormData(requestData)) {
            delete requestHeaders['Content-Type']; // Let the browser set it
        }
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || '';
            var password = config.auth.password || '';
            requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
        }
        request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        // Listen for ready state
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) {
                return;
            }
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
                return;
            }
            // Prepare the response
            var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle(resolve, reject, response);
            // Clean up request
            request = null;
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) {
                return;
            }
            reject(createError('Request aborted', config, 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError('Network Error', config, null, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED', request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
            var cookies$1 = cookies;
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
                cookies$1.read(config.xsrfCookieName) :
                undefined;
            if (xsrfValue) {
                requestHeaders[config.xsrfHeaderName] = xsrfValue;
            }
        }
        // Add headers to the request
        if ('setRequestHeader' in request) {
            utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
                    // Remove Content-Type if data is undefined
                    delete requestHeaders[key];
                }
                else {
                    // Otherwise add header to the request
                    request.setRequestHeader(key, val);
                }
            });
        }
        // Add withCredentials to request if needed
        if (config.withCredentials) {
            request.withCredentials = true;
        }
        // Add responseType to request if needed
        if (config.responseType) {
            try {
                request.responseType = config.responseType;
            }
            catch (e) {
                // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
                // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
                if (config.responseType !== 'json') {
                    throw e;
                }
            }
        }
        // Handle progress if needed
        if (typeof config.onDownloadProgress === 'function') {
            request.addEventListener('progress', config.onDownloadProgress);
        }
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === 'function' && request.upload) {
            request.upload.addEventListener('progress', config.onUploadProgress);
        }
        if (config.cancelToken) {
            // Handle cancellation
            config.cancelToken.promise.then(function onCanceled(cancel) {
                if (!request) {
                    return;
                }
                request.abort();
                reject(cancel);
                // Clean up request
                request = null;
            });
        }
        if (requestData === undefined) {
            requestData = null;
        }
        // Send the request
        request.send(requestData);
    });
};
var DEFAULT_CONTENT_TYPE = {
    'Content-Type': 'application/x-www-form-urlencoded'
};
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = value;
    }
}
function getDefaultAdapter() {
    var adapter;
    // Only Node.JS has a process variable that is of [[Class]] process
    if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
        // For node use HTTP adapter
        adapter = xhr;
    }
    else if (typeof XMLHttpRequest !== 'undefined') {
        // For browsers use XHR adapter
        adapter = xhr;
    }
    return adapter;
}
var defaults = {
    adapter: getDefaultAdapter(),
    transformRequest: [function transformRequest(data, headers) {
            normalizeHeaderName(headers, 'Accept');
            normalizeHeaderName(headers, 'Content-Type');
            if (utils.isFormData(data) ||
                utils.isArrayBuffer(data) ||
                utils.isBuffer(data) ||
                utils.isStream(data) ||
                utils.isFile(data) ||
                utils.isBlob(data)) {
                return data;
            }
            if (utils.isArrayBufferView(data)) {
                return data.buffer;
            }
            if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
                return data.toString();
            }
            if (utils.isObject(data)) {
                setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
                return JSON.stringify(data);
            }
            return data;
        }],
    transformResponse: [function transformResponse(data) {
            /*eslint no-param-reassign:0*/
            if (typeof data === 'string') {
                try {
                    data = JSON.parse(data);
                }
                catch (e) { /* Ignore */ }
            }
            return data;
        }],
    /**
     * A timeout in milliseconds to abort a request. If set to 0 (default) a
     * timeout is not created.
     */
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    }
};
defaults.headers = {
    common: {
        'Accept': 'application/json, text/plain, */*'
    }
};
utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
var defaults_1 = defaults;
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs = function combineURLs(baseURL, relativeURL) {
    return relativeURL
        ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
        : baseURL;
};
/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
    if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
    }
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    // Support baseURL config
    if (config.baseURL && !isAbsoluteURL(config.url)) {
        config.url = combineURLs(config.baseURL, config.url);
    }
    // Ensure headers exist
    config.headers = config.headers || {};
    // Transform request data
    config.data = transformData(config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers || {});
    utils.forEach(['delete', 'get', 'head', 'post', 'put', 'patch', 'common'], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults_1.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData(response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) {
                reason.response.data = transformData(reason.response.data, reason.response.headers, config.transformResponse);
            }
        }
        return Promise.reject(reason);
    });
};
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
        if (typeof config2[prop] !== 'undefined') {
            config[prop] = config2[prop];
        }
    });
    utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
        if (utils.isObject(config2[prop])) {
            config[prop] = utils.deepMerge(config1[prop], config2[prop]);
        }
        else if (typeof config2[prop] !== 'undefined') {
            config[prop] = config2[prop];
        }
        else if (utils.isObject(config1[prop])) {
            config[prop] = utils.deepMerge(config1[prop]);
        }
        else if (typeof config1[prop] !== 'undefined') {
            config[prop] = config1[prop];
        }
    });
    utils.forEach([
        'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
        'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
        'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
        'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
        'socketPath'
    ], function defaultToConfig2(prop) {
        if (typeof config2[prop] !== 'undefined') {
            config[prop] = config2[prop];
        }
        else if (typeof config1[prop] !== 'undefined') {
            config[prop] = config1[prop];
        }
    });
    return config;
};
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager_1(),
        response: new InterceptorManager_1()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/
    // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === 'string') {
        config = arguments[1] || {};
        config.url = arguments[0];
    }
    else {
        config = config || {};
    }
    config = mergeConfig(this.defaults, config);
    config.method = config.method ? config.method.toLowerCase() : 'get';
    // Hook up interceptors middleware
    var chain = [dispatchRequest, undefined];
    var promise = Promise.resolve(config);
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
    });
    while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
};
Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};
// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function (url, config) {
        return this.request(utils.merge(config || {}, {
            method: method,
            url: url
        }));
    };
});
utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
    /*eslint func-names:0*/
    Axios.prototype[method] = function (url, data, config) {
        return this.request(utils.merge(config || {}, {
            method: method,
            url: url,
            data: data
        }));
    };
});
var Axios_1 = Axios;
/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
    this.message = message;
}
Cancel.prototype.toString = function toString() {
    return 'Cancel' + (this.message ? ': ' + this.message : '');
};
Cancel.prototype.__CANCEL__ = true;
var Cancel_1 = Cancel;
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
    if (typeof executor !== 'function') {
        throw new TypeError('executor must be a function.');
    }
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    executor(function cancel(message) {
        if (token.reason) {
            // Cancellation has already been requested
            return;
        }
        token.reason = new Cancel_1(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
        throw this.reason;
    }
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
var CancelToken_1 = CancelToken;
/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
    var context = new Axios_1(defaultConfig);
    var instance = bind$1(Axios_1.prototype.request, context);
    // Copy axios.prototype to instance
    utils.extend(instance, Axios_1.prototype, context);
    // Copy context to instance
    utils.extend(instance, context);
    return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults_1);
// Expose Axios class to allow class inheritance
axios.Axios = Axios_1;
// Factory for creating new instances
axios.create = function create(instanceConfig) {
    return createInstance(mergeConfig(axios.defaults, instanceConfig));
};
// Expose Cancel & CancelToken
axios.Cancel = Cancel_1;
axios.CancelToken = CancelToken_1;
axios.isCancel = isCancel;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = spread;
var axios_1 = axios;
// Allow use of default import syntax in TypeScript
var default_1 = axios;
axios_1.default = default_1;
var axios$1 = axios_1;
var GoogleMap = /** @class */ (function () {
    function class_3(hostRef) {
        registerInstance(this, hostRef);
        this.posts = [];
        this.activePostId = false;
        this.markersObj = {};
        this.store = getContext(this, "store");
    }
    class_3.prototype.componentDidLoad = function () {
        var _this = this;
        this.store.mapStateToProps(this, function (state) {
            var baseUrl = state.dataReducer.baseUrl;
            return {
                baseUrl: baseUrl
            };
        });
        this.mapObject = new google.maps.Map(this.map, {
            center: (this.posts.length) ? this.findLatitudeAvg() : { lat: 0, lng: 0 },
            zoom: 7,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            zoomControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            }
        });
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var centerControlDiv;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.getIcons()];
                    case 1:
                        _d.sent();
                        centerControlDiv = document.createElement('div');
                        this.CenterControl(centerControlDiv, this.mapObject);
                        centerControlDiv['index'] = 1;
                        this.mapObject.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(centerControlDiv);
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    class_3.prototype.postsWatch = function (_newData, _oldData) {
        this.clearMarkers();
        this.getIcons();
        this.setCenter();
    };
    class_3.prototype.activePostIdWatch = function (newId, oldId) {
        if (newId !== oldId) {
            var markerData = this.markersObj[newId];
            this.clearMarkers();
            this.getIcons();
            this.mapObject.setCenter(markerData.position);
        }
    };
    class_3.prototype.CenterControl = function (controlDiv, _map) {
        var _this = this;
        // Set CSS for the control border.
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.margin = '0 20px 20px 0';
        controlUI.style.textAlign = 'center';
        controlDiv.appendChild(controlUI);
        // Set CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.padding = '10px';
        controlText.style.lineHeight = '0';
        controlText.innerHTML = "<img style=\"max-width: 25px\" src=\"" + this.icons.google_map_current_location + "\">";
        controlUI.appendChild(controlText);
        // Setup the click event listeners: simply set the map to Chicago.
        controlUI.addEventListener('click', function () {
            _this.getCurrentPosition();
        });
    };
    class_3.prototype.getCurrentPosition = function () {
        var _this = this;
        navigator.geolocation.getCurrentPosition(function (position) {
            var currentLatitude = position.coords.latitude;
            var currentLongitude = position.coords.longitude;
            var currentPosition = {
                "lat": currentLatitude,
                "lng": currentLongitude
            };
            _this.mapObject.setCenter(currentPosition);
            _this.addMarker(currentPosition);
        });
    };
    class_3.prototype.setCenter = function () {
        this.mapObject.setCenter(this.findLatitudeAvg());
    };
    class_3.prototype.findLatitudeAvg = function () {
        var lat = mean(map(function (post) { return post.meta.latitude[0]; }, this.posts));
        var lng = mean(map(function (post) { return post.meta.longitude[0]; }, this.posts));
        return {
            "lat": lat,
            "lng": lng
        };
    };
    class_3.prototype.addMarker = function (position) {
        var marker = new google.maps.Marker({
            position: position,
            map: this.mapObject
        });
        marker.setMap(this.mapObject);
    };
    class_3.prototype.getIcons = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, icons;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!!this.icons) return [3 /*break*/, 2];
                        return [4 /*yield*/, axios$1.get(this.baseUrl + '/wp-json/bixby/v1/theme-settings')];
                    case 1:
                        res = _d.sent();
                        icons = map(function (themeOptions) {
                            return _this.baseUrl + themeOptions.url;
                        }, res.data);
                        this.icons = icons;
                        _d.label = 2;
                    case 2:
                        this.addMarkers();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * TODO: clean up for a better solution
     */
    class_3.prototype.getIconType = function (post) {
        if (this.activePostId === post.ID && post.categories[0]['slug'] == 'office') {
            return (this.icons && this.icons.google_map_office_active_icon) ? this.icons.google_map_office_active_icon : '';
        }
        if (this.activePostId === post.ID && post.categories[0]['slug'] == 'industrial') {
            return (this.icons && this.icons.google_map_property_active_icon) ? this.icons.google_map_property_active_icon : '';
        }
        if (post.categories[0]['slug'] == 'industrial') {
            return (this.icons && this.icons.google_map_property_icon) ? this.icons.google_map_property_icon : '';
        }
        //otherwise it's an office image
        return (this.icons && this.icons.google_map_office_icon) ? this.icons.google_map_office_icon : '';
    };
    class_3.prototype.addImage = function (url) {
        var image = {
            url: url,
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(20, 32),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 32)
        };
        return image;
    };
    class_3.prototype.addMarkers = function () {
        var _this = this;
        this.posts.forEach(function (post) {
            var position = {
                lat: parseFloat(post.meta.latitude[0]),
                lng: parseFloat(post.meta.longitude[0])
            };
            var marker = new google.maps.Marker({
                position: position,
                map: _this.mapObject,
                icon: _this.getIconType(post)
            });
            var markerObj = {
                ID: post.ID,
                categories: post.categories,
                marker: marker,
                position: position,
                post: post
            };
            _this.markersObj[post.ID] = markerObj;
            marker.setMap(_this.mapObject);
            marker.addListener('click', function (e) {
                _this.handleMarker(e, markerObj, _this.mapObject);
                _this.mapObject.setCenter({
                    'lat': e.latLng.lat(),
                    'lng': e.latLng.lng()
                });
            });
        });
    };
    class_3.prototype.clearMarkers = function () {
        for (var markerObj in this.markersObj) {
            this.markersObj[markerObj].marker.setMap(null);
        }
        this.markersObj = {};
    };
    class_3.prototype.render = function () {
        var _this = this;
        return (h("div", { id: "map", ref: function (el) { return _this.map = el; } }));
    };
    Object.defineProperty(class_3, "watchers", {
        get: function () {
            return {
                "posts": ["postsWatch"],
                "activePostId": ["activePostIdWatch"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_3, "style", {
        get: function () { return ""; },
        enumerable: true,
        configurable: true
    });
    return class_3;
}());
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
function unwrapExports(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}
function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
}
var nouislider = createCommonjsModule(function (module, exports) {
    /*! nouislider - 14.0.2 - 6/28/2019 */
    (function (factory) {
        {
            // Node/CommonJS
            module.exports = factory();
        }
    })(function () {
        var VERSION = "14.0.2";
        //region Helper Methods
        function isValidFormatter(entry) {
            return typeof entry === "object" && typeof entry.to === "function" && typeof entry.from === "function";
        }
        function removeElement(el) {
            el.parentElement.removeChild(el);
        }
        function isSet(value) {
            return value !== null && value !== undefined;
        }
        // Bindable version
        function preventDefault(e) {
            e.preventDefault();
        }
        // Removes duplicates from an array.
        function unique(array) {
            return array.filter(function (a) {
                return !this[a] ? (this[a] = true) : false;
            }, {});
        }
        // Round a value to the closest 'to'.
        function closest(value, to) {
            return Math.round(value / to) * to;
        }
        // Current position of an element relative to the document.
        function offset(elem, orientation) {
            var rect = elem.getBoundingClientRect();
            var doc = elem.ownerDocument;
            var docElem = doc.documentElement;
            var pageOffset = getPageOffset(doc);
            // getBoundingClientRect contains left scroll in Chrome on Android.
            // I haven't found a feature detection that proves this. Worst case
            // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.
            if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
                pageOffset.x = 0;
            }
            return orientation
                ? rect.top + pageOffset.y - docElem.clientTop
                : rect.left + pageOffset.x - docElem.clientLeft;
        }
        // Checks whether a value is numerical.
        function isNumeric(a) {
            return typeof a === "number" && !isNaN(a) && isFinite(a);
        }
        // Sets a class and removes it after [duration] ms.
        function addClassFor(element, className, duration) {
            if (duration > 0) {
                addClass(element, className);
                setTimeout(function () {
                    removeClass(element, className);
                }, duration);
            }
        }
        // Limits a value to 0 - 100
        function limit(a) {
            return Math.max(Math.min(a, 100), 0);
        }
        // Wraps a variable as an array, if it isn't one yet.
        // Note that an input array is returned by reference!
        function asArray(a) {
            return Array.isArray(a) ? a : [a];
        }
        // Counts decimals
        function countDecimals(numStr) {
            numStr = String(numStr);
            var pieces = numStr.split(".");
            return pieces.length > 1 ? pieces[1].length : 0;
        }
        // http://youmightnotneedjquery.com/#add_class
        function addClass(el, className) {
            if (el.classList) {
                el.classList.add(className);
            }
            else {
                el.className += " " + className;
            }
        }
        // http://youmightnotneedjquery.com/#remove_class
        function removeClass(el, className) {
            if (el.classList) {
                el.classList.remove(className);
            }
            else {
                el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
            }
        }
        // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/
        function hasClass(el, className) {
            return el.classList
                ? el.classList.contains(className)
                : new RegExp("\\b" + className + "\\b").test(el.className);
        }
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes
        function getPageOffset(doc) {
            var supportPageOffset = window.pageXOffset !== undefined;
            var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
            var x = supportPageOffset
                ? window.pageXOffset
                : isCSS1Compat
                    ? doc.documentElement.scrollLeft
                    : doc.body.scrollLeft;
            var y = supportPageOffset
                ? window.pageYOffset
                : isCSS1Compat
                    ? doc.documentElement.scrollTop
                    : doc.body.scrollTop;
            return {
                x: x,
                y: y
            };
        }
        // we provide a function to compute constants instead
        // of accessing window.* as soon as the module needs it
        // so that we do not compute anything if not needed
        function getActions() {
            // Determine the events to bind. IE11 implements pointerEvents without
            // a prefix, which breaks compatibility with the IE10 implementation.
            return window.navigator.pointerEnabled
                ? {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                }
                : window.navigator.msPointerEnabled
                    ? {
                        start: "MSPointerDown",
                        move: "MSPointerMove",
                        end: "MSPointerUp"
                    }
                    : {
                        start: "mousedown touchstart",
                        move: "mousemove touchmove",
                        end: "mouseup touchend"
                    };
        }
        // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
        // Issue #785
        function getSupportsPassive() {
            var supportsPassive = false;
            /* eslint-disable */
            try {
                var opts = Object.defineProperty({}, "passive", {
                    get: function () {
                        supportsPassive = true;
                    }
                });
                window.addEventListener("test", null, opts);
            }
            catch (e) { }
            /* eslint-enable */
            return supportsPassive;
        }
        function getSupportsTouchActionNone() {
            return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
        }
        //endregion
        //region Range Calculation
        // Determine the size of a sub-range in relation to a full range.
        function subRangeRatio(pa, pb) {
            return 100 / (pb - pa);
        }
        // (percentage) How many percent is this value of this range?
        function fromPercentage(range, value) {
            return (value * 100) / (range[1] - range[0]);
        }
        // (percentage) Where is this value on this range?
        function toPercentage(range, value) {
            return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0]);
        }
        // (value) How much is this percentage on this range?
        function isPercentage(range, value) {
            return (value * (range[1] - range[0])) / 100 + range[0];
        }
        function getJ(value, arr) {
            var j = 1;
            while (value >= arr[j]) {
                j += 1;
            }
            return j;
        }
        // (percentage) Input a value, find where, on a scale of 0-100, it applies.
        function toStepping(xVal, xPct, value) {
            if (value >= xVal.slice(-1)[0]) {
                return 100;
            }
            var j = getJ(value, xVal);
            var va = xVal[j - 1];
            var vb = xVal[j];
            var pa = xPct[j - 1];
            var pb = xPct[j];
            return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
        }
        // (value) Input a percentage, find where it is on the specified range.
        function fromStepping(xVal, xPct, value) {
            // There is no range group that fits 100
            if (value >= 100) {
                return xVal.slice(-1)[0];
            }
            var j = getJ(value, xPct);
            var va = xVal[j - 1];
            var vb = xVal[j];
            var pa = xPct[j - 1];
            var pb = xPct[j];
            return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
        }
        // (percentage) Get the step that applies at a certain value.
        function getStep(xPct, xSteps, snap, value) {
            if (value === 100) {
                return value;
            }
            var j = getJ(value, xPct);
            var a = xPct[j - 1];
            var b = xPct[j];
            // If 'snap' is set, steps are used as fixed points on the slider.
            if (snap) {
                // Find the closest position, a or b.
                if (value - a > (b - a) / 2) {
                    return b;
                }
                return a;
            }
            if (!xSteps[j - 1]) {
                return value;
            }
            return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
        }
        function handleEntryPoint(index, value, that) {
            var percentage;
            // Wrap numerical input in an array.
            if (typeof value === "number") {
                value = [value];
            }
            // Reject any invalid input, by testing whether value is an array.
            if (!Array.isArray(value)) {
                throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
            }
            // Covert min/max syntax to 0 and 100.
            if (index === "min") {
                percentage = 0;
            }
            else if (index === "max") {
                percentage = 100;
            }
            else {
                percentage = parseFloat(index);
            }
            // Check for correct input.
            if (!isNumeric(percentage) || !isNumeric(value[0])) {
                throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
            }
            // Store values.
            that.xPct.push(percentage);
            that.xVal.push(value[0]);
            // NaN will evaluate to false too, but to keep
            // logging clear, set step explicitly. Make sure
            // not to override the 'step' setting with false.
            if (!percentage) {
                if (!isNaN(value[1])) {
                    that.xSteps[0] = value[1];
                }
            }
            else {
                that.xSteps.push(isNaN(value[1]) ? false : value[1]);
            }
            that.xHighestCompleteStep.push(0);
        }
        function handleStepPoint(i, n, that) {
            // Ignore 'false' stepping.
            if (!n) {
                return;
            }
            // Step over zero-length ranges (#948);
            if (that.xVal[i] === that.xVal[i + 1]) {
                that.xSteps[i] = that.xHighestCompleteStep[i] = that.xVal[i];
                return;
            }
            // Factor to range ratio
            that.xSteps[i] =
                fromPercentage([that.xVal[i], that.xVal[i + 1]], n) / subRangeRatio(that.xPct[i], that.xPct[i + 1]);
            var totalSteps = (that.xVal[i + 1] - that.xVal[i]) / that.xNumSteps[i];
            var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
            var step = that.xVal[i] + that.xNumSteps[i] * highestStep;
            that.xHighestCompleteStep[i] = step;
        }
        //endregion
        //region Spectrum
        function Spectrum(entry, snap, singleStep) {
            this.xPct = [];
            this.xVal = [];
            this.xSteps = [singleStep || false];
            this.xNumSteps = [false];
            this.xHighestCompleteStep = [];
            this.snap = snap;
            var index;
            var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']
            // Map the object keys to an array.
            for (index in entry) {
                if (entry.hasOwnProperty(index)) {
                    ordered.push([entry[index], index]);
                }
            }
            // Sort all entries by value (numeric sort).
            if (ordered.length && typeof ordered[0][0] === "object") {
                ordered.sort(function (a, b) {
                    return a[0][0] - b[0][0];
                });
            }
            else {
                ordered.sort(function (a, b) {
                    return a[0] - b[0];
                });
            }
            // Convert all entries to subranges.
            for (index = 0; index < ordered.length; index++) {
                handleEntryPoint(ordered[index][1], ordered[index][0], this);
            }
            // Store the actual step values.
            // xSteps is sorted in the same order as xPct and xVal.
            this.xNumSteps = this.xSteps.slice(0);
            // Convert all numeric steps to the percentage of the subrange they represent.
            for (index = 0; index < this.xNumSteps.length; index++) {
                handleStepPoint(index, this.xNumSteps[index], this);
            }
        }
        Spectrum.prototype.getMargin = function (value) {
            var step = this.xNumSteps[0];
            if (step && (value / step) % 1 !== 0) {
                throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' must be divisible by step.");
            }
            return this.xPct.length === 2 ? fromPercentage(this.xVal, value) : false;
        };
        Spectrum.prototype.toStepping = function (value) {
            value = toStepping(this.xVal, this.xPct, value);
            return value;
        };
        Spectrum.prototype.fromStepping = function (value) {
            return fromStepping(this.xVal, this.xPct, value);
        };
        Spectrum.prototype.getStep = function (value) {
            value = getStep(this.xPct, this.xSteps, this.snap, value);
            return value;
        };
        Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
            var j = getJ(value, this.xPct);
            // When at the top or stepping down, look at the previous sub-range
            if (value === 100 || (isDown && value === this.xPct[j - 1])) {
                j = Math.max(j - 1, 1);
            }
            return (this.xVal[j] - this.xVal[j - 1]) / size;
        };
        Spectrum.prototype.getNearbySteps = function (value) {
            var j = getJ(value, this.xPct);
            return {
                stepBefore: {
                    startValue: this.xVal[j - 2],
                    step: this.xNumSteps[j - 2],
                    highestStep: this.xHighestCompleteStep[j - 2]
                },
                thisStep: {
                    startValue: this.xVal[j - 1],
                    step: this.xNumSteps[j - 1],
                    highestStep: this.xHighestCompleteStep[j - 1]
                },
                stepAfter: {
                    startValue: this.xVal[j],
                    step: this.xNumSteps[j],
                    highestStep: this.xHighestCompleteStep[j]
                }
            };
        };
        Spectrum.prototype.countStepDecimals = function () {
            var stepDecimals = this.xNumSteps.map(countDecimals);
            return Math.max.apply(null, stepDecimals);
        };
        // Outside testing
        Spectrum.prototype.convert = function (value) {
            return this.getStep(this.toStepping(value));
        };
        //endregion
        //region Options
        /*	Every input option is tested and parsed. This'll prevent
            endless validation in internal methods. These tests are
            structured with an item for every option available. An
            option can be marked as required by setting the 'r' flag.
            The testing function is provided with three arguments:
                - The provided value for the option;
                - A reference to the options object;
                - The name for the option;
    
            The testing function returns false when an error is detected,
            or true when everything is OK. It can also modify the option
            object, to make sure all values can be correctly looped elsewhere. */
        var defaultFormatter = {
            to: function (value) {
                return value !== undefined && value.toFixed(2);
            },
            from: Number
        };
        function validateFormat(entry) {
            // Any object with a to and from method is supported.
            if (isValidFormatter(entry)) {
                return true;
            }
            throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
        }
        function testStep(parsed, entry) {
            if (!isNumeric(entry)) {
                throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
            }
            // The step option can still be used to set stepping
            // for linear sliders. Overwritten if set in 'range'.
            parsed.singleStep = entry;
        }
        function testRange(parsed, entry) {
            // Filter incorrect input.
            if (typeof entry !== "object" || Array.isArray(entry)) {
                throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
            }
            // Catch missing start or end.
            if (entry.min === undefined || entry.max === undefined) {
                throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
            }
            // Catch equal start or end.
            if (entry.min === entry.max) {
                throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
            }
            parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
        }
        function testStart(parsed, entry) {
            entry = asArray(entry);
            // Validate input. Values aren't tested, as the public .val method
            // will always provide a valid location.
            if (!Array.isArray(entry) || !entry.length) {
                throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
            }
            // Store the number of handles.
            parsed.handles = entry.length;
            // When the slider is initialized, the .val method will
            // be called with the start options.
            parsed.start = entry;
        }
        function testSnap(parsed, entry) {
            // Enforce 100% stepping within subranges.
            parsed.snap = entry;
            if (typeof entry !== "boolean") {
                throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
            }
        }
        function testAnimate(parsed, entry) {
            // Enforce 100% stepping within subranges.
            parsed.animate = entry;
            if (typeof entry !== "boolean") {
                throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
            }
        }
        function testAnimationDuration(parsed, entry) {
            parsed.animationDuration = entry;
            if (typeof entry !== "number") {
                throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
            }
        }
        function testConnect(parsed, entry) {
            var connect = [false];
            var i;
            // Map legacy options
            if (entry === "lower") {
                entry = [true, false];
            }
            else if (entry === "upper") {
                entry = [false, true];
            }
            // Handle boolean options
            if (entry === true || entry === false) {
                for (i = 1; i < parsed.handles; i++) {
                    connect.push(entry);
                }
                connect.push(false);
            }
            // Reject invalid input
            else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
                throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
            }
            else {
                connect = entry;
            }
            parsed.connect = connect;
        }
        function testOrientation(parsed, entry) {
            // Set orientation to an a numerical value for easy
            // array selection.
            switch (entry) {
                case "horizontal":
                    parsed.ort = 0;
                    break;
                case "vertical":
                    parsed.ort = 1;
                    break;
                default:
                    throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
            }
        }
        function testMargin(parsed, entry) {
            if (!isNumeric(entry)) {
                throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
            }
            // Issue #582
            if (entry === 0) {
                return;
            }
            parsed.margin = parsed.spectrum.getMargin(entry);
            if (!parsed.margin) {
                throw new Error("noUiSlider (" + VERSION + "): 'margin' option is only supported on linear sliders.");
            }
        }
        function testLimit(parsed, entry) {
            if (!isNumeric(entry)) {
                throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
            }
            parsed.limit = parsed.spectrum.getMargin(entry);
            if (!parsed.limit || parsed.handles < 2) {
                throw new Error("noUiSlider (" +
                    VERSION +
                    "): 'limit' option is only supported on linear sliders with 2 or more handles.");
            }
        }
        function testPadding(parsed, entry) {
            if (!isNumeric(entry) && !Array.isArray(entry)) {
                throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
            }
            if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
                throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
            }
            if (entry === 0) {
                return;
            }
            if (!Array.isArray(entry)) {
                entry = [entry, entry];
            }
            // 'getMargin' returns false for invalid values.
            parsed.padding = [parsed.spectrum.getMargin(entry[0]), parsed.spectrum.getMargin(entry[1])];
            if (parsed.padding[0] === false || parsed.padding[1] === false) {
                throw new Error("noUiSlider (" + VERSION + "): 'padding' option is only supported on linear sliders.");
            }
            if (parsed.padding[0] < 0 || parsed.padding[1] < 0) {
                throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
            }
            if (parsed.padding[0] + parsed.padding[1] > 100) {
                throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
            }
        }
        function testDirection(parsed, entry) {
            // Set direction as a numerical value for easy parsing.
            // Invert connection for RTL sliders, so that the proper
            // handles get the connect/background classes.
            switch (entry) {
                case "ltr":
                    parsed.dir = 0;
                    break;
                case "rtl":
                    parsed.dir = 1;
                    break;
                default:
                    throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
            }
        }
        function testBehaviour(parsed, entry) {
            // Make sure the input is a string.
            if (typeof entry !== "string") {
                throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
            }
            // Check if the string contains any keywords.
            // None are required.
            var tap = entry.indexOf("tap") >= 0;
            var drag = entry.indexOf("drag") >= 0;
            var fixed = entry.indexOf("fixed") >= 0;
            var snap = entry.indexOf("snap") >= 0;
            var hover = entry.indexOf("hover") >= 0;
            var unconstrained = entry.indexOf("unconstrained") >= 0;
            if (fixed) {
                if (parsed.handles !== 2) {
                    throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
                }
                // Use margin to enforce fixed state
                testMargin(parsed, parsed.start[1] - parsed.start[0]);
            }
            if (unconstrained && (parsed.margin || parsed.limit)) {
                throw new Error("noUiSlider (" + VERSION + "): 'unconstrained' behaviour cannot be used with margin or limit");
            }
            parsed.events = {
                tap: tap || snap,
                drag: drag,
                fixed: fixed,
                snap: snap,
                hover: hover,
                unconstrained: unconstrained
            };
        }
        function testTooltips(parsed, entry) {
            if (entry === false) {
                return;
            }
            if (entry === true) {
                parsed.tooltips = [];
                for (var i = 0; i < parsed.handles; i++) {
                    parsed.tooltips.push(true);
                }
            }
            else {
                parsed.tooltips = asArray(entry);
                if (parsed.tooltips.length !== parsed.handles) {
                    throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
                }
                parsed.tooltips.forEach(function (formatter) {
                    if (typeof formatter !== "boolean" &&
                        (typeof formatter !== "object" || typeof formatter.to !== "function")) {
                        throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
                    }
                });
            }
        }
        function testAriaFormat(parsed, entry) {
            parsed.ariaFormat = entry;
            validateFormat(entry);
        }
        function testFormat(parsed, entry) {
            parsed.format = entry;
            validateFormat(entry);
        }
        function testKeyboardSupport(parsed, entry) {
            parsed.keyboardSupport = entry;
            if (typeof entry !== "boolean") {
                throw new Error("noUiSlider (" + VERSION + "): 'keyboardSupport' option must be a boolean.");
            }
        }
        function testDocumentElement(parsed, entry) {
            // This is an advanced option. Passed values are used without validation.
            parsed.documentElement = entry;
        }
        function testCssPrefix(parsed, entry) {
            if (typeof entry !== "string" && entry !== false) {
                throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
            }
            parsed.cssPrefix = entry;
        }
        function testCssClasses(parsed, entry) {
            if (typeof entry !== "object") {
                throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
            }
            if (typeof parsed.cssPrefix === "string") {
                parsed.cssClasses = {};
                for (var key in entry) {
                    if (!entry.hasOwnProperty(key)) {
                        continue;
                    }
                    parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
                }
            }
            else {
                parsed.cssClasses = entry;
            }
        }
        // Test all developer settings and parse to assumption-safe values.
        function testOptions(options) {
            // To prove a fix for #537, freeze options here.
            // If the object is modified, an error will be thrown.
            // Object.freeze(options);
            var parsed = {
                margin: 0,
                limit: 0,
                padding: 0,
                animate: true,
                animationDuration: 300,
                ariaFormat: defaultFormatter,
                format: defaultFormatter
            };
            // Tests are executed in the order they are presented here.
            var tests = {
                step: { r: false, t: testStep },
                start: { r: true, t: testStart },
                connect: { r: true, t: testConnect },
                direction: { r: true, t: testDirection },
                snap: { r: false, t: testSnap },
                animate: { r: false, t: testAnimate },
                animationDuration: { r: false, t: testAnimationDuration },
                range: { r: true, t: testRange },
                orientation: { r: false, t: testOrientation },
                margin: { r: false, t: testMargin },
                limit: { r: false, t: testLimit },
                padding: { r: false, t: testPadding },
                behaviour: { r: true, t: testBehaviour },
                ariaFormat: { r: false, t: testAriaFormat },
                format: { r: false, t: testFormat },
                tooltips: { r: false, t: testTooltips },
                keyboardSupport: { r: true, t: testKeyboardSupport },
                documentElement: { r: false, t: testDocumentElement },
                cssPrefix: { r: true, t: testCssPrefix },
                cssClasses: { r: true, t: testCssClasses }
            };
            var defaults = {
                connect: false,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: true,
                cssPrefix: "noUi-",
                cssClasses: {
                    target: "target",
                    base: "base",
                    origin: "origin",
                    handle: "handle",
                    handleLower: "handle-lower",
                    handleUpper: "handle-upper",
                    touchArea: "touch-area",
                    horizontal: "horizontal",
                    vertical: "vertical",
                    background: "background",
                    connect: "connect",
                    connects: "connects",
                    ltr: "ltr",
                    rtl: "rtl",
                    draggable: "draggable",
                    drag: "state-drag",
                    tap: "state-tap",
                    active: "active",
                    tooltip: "tooltip",
                    pips: "pips",
                    pipsHorizontal: "pips-horizontal",
                    pipsVertical: "pips-vertical",
                    marker: "marker",
                    markerHorizontal: "marker-horizontal",
                    markerVertical: "marker-vertical",
                    markerNormal: "marker-normal",
                    markerLarge: "marker-large",
                    markerSub: "marker-sub",
                    value: "value",
                    valueHorizontal: "value-horizontal",
                    valueVertical: "value-vertical",
                    valueNormal: "value-normal",
                    valueLarge: "value-large",
                    valueSub: "value-sub"
                }
            };
            // AriaFormat defaults to regular format, if any.
            if (options.format && !options.ariaFormat) {
                options.ariaFormat = options.format;
            }
            // Run all options through a testing mechanism to ensure correct
            // input. It should be noted that options might get modified to
            // be handled properly. E.g. wrapping integers in arrays.
            Object.keys(tests).forEach(function (name) {
                // If the option isn't set, but it is required, throw an error.
                if (!isSet(options[name]) && defaults[name] === undefined) {
                    if (tests[name].r) {
                        throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
                    }
                    return true;
                }
                tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
            });
            // Forward pips options
            parsed.pips = options.pips;
            // All recent browsers accept unprefixed transform.
            // We need -ms- for IE9 and -webkit- for older Android;
            // Assume use of -webkit- if unprefixed and -ms- are not supported.
            // https://caniuse.com/#feat=transforms2d
            var d = document.createElement("div");
            var msPrefix = d.style.msTransform !== undefined;
            var noPrefix = d.style.transform !== undefined;
            parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform";
            // Pips don't move, so we can place them using left/top.
            var styles = [["left", "top"], ["right", "bottom"]];
            parsed.style = styles[parsed.dir][parsed.ort];
            return parsed;
        }
        //endregion
        function scope(target, options, originalOptions) {
            var actions = getActions();
            var supportsTouchActionNone = getSupportsTouchActionNone();
            var supportsPassive = supportsTouchActionNone && getSupportsPassive();
            // All variables local to 'scope' are prefixed with 'scope_'
            // Slider DOM Nodes
            var scope_Target = target;
            var scope_Base;
            var scope_Handles;
            var scope_Connects;
            var scope_Pips;
            var scope_Tooltips;
            // Slider state values
            var scope_Spectrum = options.spectrum;
            var scope_Values = [];
            var scope_Locations = [];
            var scope_HandleNumbers = [];
            var scope_ActiveHandlesCount = 0;
            var scope_Events = {};
            // Exposed API
            var scope_Self;
            // Document Nodes
            var scope_Document = target.ownerDocument;
            var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
            var scope_Body = scope_Document.body;
            // Pips constants
            var PIPS_NONE = -1;
            var PIPS_NO_VALUE = 0;
            var PIPS_LARGE_VALUE = 1;
            var PIPS_SMALL_VALUE = 2;
            // For horizontal sliders in standard ltr documents,
            // make .noUi-origin overflow to the left so the document doesn't scroll.
            var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100;
            // Creates a node, adds it to target, returns the new node.
            function addNodeTo(addTarget, className) {
                var div = scope_Document.createElement("div");
                if (className) {
                    addClass(div, className);
                }
                addTarget.appendChild(div);
                return div;
            }
            // Append a origin to the base
            function addOrigin(base, handleNumber) {
                var origin = addNodeTo(base, options.cssClasses.origin);
                var handle = addNodeTo(origin, options.cssClasses.handle);
                addNodeTo(handle, options.cssClasses.touchArea);
                handle.setAttribute("data-handle", handleNumber);
                if (options.keyboardSupport) {
                    // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
                    // 0 = focusable and reachable
                    handle.setAttribute("tabindex", "0");
                    handle.addEventListener("keydown", function (event) {
                        return eventKeydown(event, handleNumber);
                    });
                }
                handle.setAttribute("role", "slider");
                handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");
                if (handleNumber === 0) {
                    addClass(handle, options.cssClasses.handleLower);
                }
                else if (handleNumber === options.handles - 1) {
                    addClass(handle, options.cssClasses.handleUpper);
                }
                return origin;
            }
            // Insert nodes for connect elements
            function addConnect(base, add) {
                if (!add) {
                    return false;
                }
                return addNodeTo(base, options.cssClasses.connect);
            }
            // Add handles to the slider base.
            function addElements(connectOptions, base) {
                var connectBase = addNodeTo(base, options.cssClasses.connects);
                scope_Handles = [];
                scope_Connects = [];
                scope_Connects.push(addConnect(connectBase, connectOptions[0]));
                // [::::O====O====O====]
                // connectOptions = [0, 1, 1, 1]
                for (var i = 0; i < options.handles; i++) {
                    // Keep a list of all added handles.
                    scope_Handles.push(addOrigin(base, i));
                    scope_HandleNumbers[i] = i;
                    scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
                }
            }
            // Initialize a single slider.
            function addSlider(addTarget) {
                // Apply classes and data to the target.
                addClass(addTarget, options.cssClasses.target);
                if (options.dir === 0) {
                    addClass(addTarget, options.cssClasses.ltr);
                }
                else {
                    addClass(addTarget, options.cssClasses.rtl);
                }
                if (options.ort === 0) {
                    addClass(addTarget, options.cssClasses.horizontal);
                }
                else {
                    addClass(addTarget, options.cssClasses.vertical);
                }
                return addNodeTo(addTarget, options.cssClasses.base);
            }
            function addTooltip(handle, handleNumber) {
                if (!options.tooltips[handleNumber]) {
                    return false;
                }
                return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
            }
            function isSliderDisabled() {
                return scope_Target.hasAttribute("disabled");
            }
            // Disable the slider dragging if any handle is disabled
            function isHandleDisabled(handleNumber) {
                var handleOrigin = scope_Handles[handleNumber];
                return handleOrigin.hasAttribute("disabled");
            }
            function removeTooltips() {
                if (scope_Tooltips) {
                    removeEvent("update.tooltips");
                    scope_Tooltips.forEach(function (tooltip) {
                        if (tooltip) {
                            removeElement(tooltip);
                        }
                    });
                    scope_Tooltips = null;
                }
            }
            // The tooltips option is a shorthand for using the 'update' event.
            function tooltips() {
                removeTooltips();
                // Tooltips are added with options.tooltips in original order.
                scope_Tooltips = scope_Handles.map(addTooltip);
                bindEvent("update.tooltips", function (values, handleNumber, unencoded) {
                    if (!scope_Tooltips[handleNumber]) {
                        return;
                    }
                    var formattedValue = values[handleNumber];
                    if (options.tooltips[handleNumber] !== true) {
                        formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
                    }
                    scope_Tooltips[handleNumber].innerHTML = formattedValue;
                });
            }
            function aria() {
                bindEvent("update", function (values, handleNumber, unencoded, tap, positions) {
                    // Update Aria Values for all handles, as a change in one changes min and max values for the next.
                    scope_HandleNumbers.forEach(function (index) {
                        var handle = scope_Handles[index];
                        var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
                        var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
                        var now = positions[index];
                        // Formatted value for display
                        var text = options.ariaFormat.to(unencoded[index]);
                        // Map to slider range values
                        min = scope_Spectrum.fromStepping(min).toFixed(1);
                        max = scope_Spectrum.fromStepping(max).toFixed(1);
                        now = scope_Spectrum.fromStepping(now).toFixed(1);
                        handle.children[0].setAttribute("aria-valuemin", min);
                        handle.children[0].setAttribute("aria-valuemax", max);
                        handle.children[0].setAttribute("aria-valuenow", now);
                        handle.children[0].setAttribute("aria-valuetext", text);
                    });
                });
            }
            function getGroup(mode, values, stepped) {
                // Use the range.
                if (mode === "range" || mode === "steps") {
                    return scope_Spectrum.xVal;
                }
                if (mode === "count") {
                    if (values < 2) {
                        throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
                    }
                    // Divide 0 - 100 in 'count' parts.
                    var interval = values - 1;
                    var spread = 100 / interval;
                    values = [];
                    // List these parts and have them handled as 'positions'.
                    while (interval--) {
                        values[interval] = interval * spread;
                    }
                    values.push(100);
                    mode = "positions";
                }
                if (mode === "positions") {
                    // Map all percentages to on-range values.
                    return values.map(function (value) {
                        return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
                    });
                }
                if (mode === "values") {
                    // If the value must be stepped, it needs to be converted to a percentage first.
                    if (stepped) {
                        return values.map(function (value) {
                            // Convert to percentage, apply step, return to value.
                            return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
                        });
                    }
                    // Otherwise, we can simply use the values.
                    return values;
                }
            }
            function generateSpread(density, mode, group) {
                function safeIncrement(value, increment) {
                    // Avoid floating point variance by dropping the smallest decimal places.
                    return (value + increment).toFixed(7) / 1;
                }
                var indexes = {};
                var firstInRange = scope_Spectrum.xVal[0];
                var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
                var ignoreFirst = false;
                var ignoreLast = false;
                var prevPct = 0;
                // Create a copy of the group, sort it and filter away all duplicates.
                group = unique(group.slice().sort(function (a, b) {
                    return a - b;
                }));
                // Make sure the range starts with the first element.
                if (group[0] !== firstInRange) {
                    group.unshift(firstInRange);
                    ignoreFirst = true;
                }
                // Likewise for the last one.
                if (group[group.length - 1] !== lastInRange) {
                    group.push(lastInRange);
                    ignoreLast = true;
                }
                group.forEach(function (current, index) {
                    // Get the current step and the lower + upper positions.
                    var step;
                    var i;
                    var q;
                    var low = current;
                    var high = group[index + 1];
                    var newPct;
                    var pctDifference;
                    var pctPos;
                    var type;
                    var steps;
                    var realSteps;
                    var stepSize;
                    var isSteps = mode === "steps";
                    // When using 'steps' mode, use the provided steps.
                    // Otherwise, we'll step on to the next subrange.
                    if (isSteps) {
                        step = scope_Spectrum.xNumSteps[index];
                    }
                    // Default to a 'full' step.
                    if (!step) {
                        step = high - low;
                    }
                    // Low can be 0, so test for false. If high is undefined,
                    // we are at the last subrange. Index 0 is already handled.
                    if (low === false || high === undefined) {
                        return;
                    }
                    // Make sure step isn't 0, which would cause an infinite loop (#654)
                    step = Math.max(step, 0.0000001);
                    // Find all steps in the subrange.
                    for (i = low; i <= high; i = safeIncrement(i, step)) {
                        // Get the percentage value for the current step,
                        // calculate the size for the subrange.
                        newPct = scope_Spectrum.toStepping(i);
                        pctDifference = newPct - prevPct;
                        steps = pctDifference / density;
                        realSteps = Math.round(steps);
                        // This ratio represents the amount of percentage-space a point indicates.
                        // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
                        // Round the percentage offset to an even number, then divide by two
                        // to spread the offset on both sides of the range.
                        stepSize = pctDifference / realSteps;
                        // Divide all points evenly, adding the correct number to this subrange.
                        // Run up to <= so that 100% gets a point, event if ignoreLast is set.
                        for (q = 1; q <= realSteps; q += 1) {
                            // The ratio between the rounded value and the actual size might be ~1% off.
                            // Correct the percentage offset by the number of points
                            // per subrange. density = 1 will result in 100 points on the
                            // full range, 2 for 50, 4 for 25, etc.
                            pctPos = prevPct + q * stepSize;
                            indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
                        }
                        // Determine the point type.
                        type = group.indexOf(i) > -1 ? PIPS_LARGE_VALUE : isSteps ? PIPS_SMALL_VALUE : PIPS_NO_VALUE;
                        // Enforce the 'ignoreFirst' option by overwriting the type for 0.
                        if (!index && ignoreFirst) {
                            type = 0;
                        }
                        if (!(i === high && ignoreLast)) {
                            // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
                            indexes[newPct.toFixed(5)] = [i, type];
                        }
                        // Update the percentage count.
                        prevPct = newPct;
                    }
                });
                return indexes;
            }
            function addMarking(spread, filterFunc, formatter) {
                var element = scope_Document.createElement("div");
                var valueSizeClasses = [];
                valueSizeClasses[PIPS_NO_VALUE] = options.cssClasses.valueNormal;
                valueSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.valueLarge;
                valueSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.valueSub;
                var markerSizeClasses = [];
                markerSizeClasses[PIPS_NO_VALUE] = options.cssClasses.markerNormal;
                markerSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.markerLarge;
                markerSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.markerSub;
                var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
                var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
                addClass(element, options.cssClasses.pips);
                addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);
                function getClasses(type, source) {
                    var a = source === options.cssClasses.value;
                    var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
                    var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
                    return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
                }
                function addSpread(offset, value, type) {
                    // Apply the filter function, if it is set.
                    type = filterFunc ? filterFunc(value, type) : type;
                    if (type === PIPS_NONE) {
                        return;
                    }
                    // Add a marker for every point
                    var node = addNodeTo(element, false);
                    node.className = getClasses(type, options.cssClasses.marker);
                    node.style[options.style] = offset + "%";
                    // Values are only appended for points marked '1' or '2'.
                    if (type > PIPS_NO_VALUE) {
                        node = addNodeTo(element, false);
                        node.className = getClasses(type, options.cssClasses.value);
                        node.setAttribute("data-value", value);
                        node.style[options.style] = offset + "%";
                        node.innerHTML = formatter.to(value);
                    }
                }
                // Append all points.
                Object.keys(spread).forEach(function (offset) {
                    addSpread(offset, spread[offset][0], spread[offset][1]);
                });
                return element;
            }
            function removePips() {
                if (scope_Pips) {
                    removeElement(scope_Pips);
                    scope_Pips = null;
                }
            }
            function pips(grid) {
                // Fix #669
                removePips();
                var mode = grid.mode;
                var density = grid.density || 1;
                var filter = grid.filter || false;
                var values = grid.values || false;
                var stepped = grid.stepped || false;
                var group = getGroup(mode, values, stepped);
                var spread = generateSpread(density, mode, group);
                var format = grid.format || {
                    to: Math.round
                };
                scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
                return scope_Pips;
            }
            // Shorthand for base dimensions.
            function baseSize() {
                var rect = scope_Base.getBoundingClientRect();
                var alt = "offset" + ["Width", "Height"][options.ort];
                return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
            }
            // Handler for attaching events trough a proxy.
            function attachEvent(events, element, callback, data) {
                // This function can be used to 'filter' events to the slider.
                // element is a node, not a nodeList
                var method = function (e) {
                    e = fixEvent(e, data.pageOffset, data.target || element);
                    // fixEvent returns false if this event has a different target
                    // when handling (multi-) touch events;
                    if (!e) {
                        return false;
                    }
                    // doNotReject is passed by all end events to make sure released touches
                    // are not rejected, leaving the slider "stuck" to the cursor;
                    if (isSliderDisabled() && !data.doNotReject) {
                        return false;
                    }
                    // Stop if an active 'tap' transition is taking place.
                    if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
                        return false;
                    }
                    // Ignore right or middle clicks on start #454
                    if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
                        return false;
                    }
                    // Ignore right or middle clicks on start #454
                    if (data.hover && e.buttons) {
                        return false;
                    }
                    // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
                    // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
                    // touch-action: manipulation, but that allows panning, which breaks
                    // sliders after zooming/on non-responsive pages.
                    // See: https://bugs.webkit.org/show_bug.cgi?id=133112
                    if (!supportsPassive) {
                        e.preventDefault();
                    }
                    e.calcPoint = e.points[options.ort];
                    // Call the event handler with the event [ and additional data ].
                    callback(e, data);
                };
                var methods = [];
                // Bind a closure on the target for every event type.
                events.split(" ").forEach(function (eventName) {
                    element.addEventListener(eventName, method, supportsPassive ? { passive: true } : false);
                    methods.push([eventName, method]);
                });
                return methods;
            }
            // Provide a clean event with standardized offset values.
            function fixEvent(e, pageOffset, eventTarget) {
                // Filter the event to register the type, which can be
                // touch, mouse or pointer. Offset changes need to be
                // made on an event specific basis.
                var touch = e.type.indexOf("touch") === 0;
                var mouse = e.type.indexOf("mouse") === 0;
                var pointer = e.type.indexOf("pointer") === 0;
                var x;
                var y;
                // IE10 implemented pointer events with a prefix;
                if (e.type.indexOf("MSPointer") === 0) {
                    pointer = true;
                }
                // The only thing one handle should be concerned about is the touches that originated on top of it.
                if (touch) {
                    // Returns true if a touch originated on the target.
                    var isTouchOnTarget = function (checkTouch) {
                        return checkTouch.target === eventTarget || eventTarget.contains(checkTouch.target);
                    };
                    // In the case of touchstart events, we need to make sure there is still no more than one
                    // touch on the target so we look amongst all touches.
                    if (e.type === "touchstart") {
                        var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget);
                        // Do not support more than one touch per handle.
                        if (targetTouches.length > 1) {
                            return false;
                        }
                        x = targetTouches[0].pageX;
                        y = targetTouches[0].pageY;
                    }
                    else {
                        // In the other cases, find on changedTouches is enough.
                        var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget);
                        // Cancel if the target touch has not moved.
                        if (!targetTouch) {
                            return false;
                        }
                        x = targetTouch.pageX;
                        y = targetTouch.pageY;
                    }
                }
                pageOffset = pageOffset || getPageOffset(scope_Document);
                if (mouse || pointer) {
                    x = e.clientX + pageOffset.x;
                    y = e.clientY + pageOffset.y;
                }
                e.pageOffset = pageOffset;
                e.points = [x, y];
                e.cursor = mouse || pointer; // Fix #435
                return e;
            }
            // Translate a coordinate in the document to a percentage on the slider
            function calcPointToPercentage(calcPoint) {
                var location = calcPoint - offset(scope_Base, options.ort);
                var proposal = (location * 100) / baseSize();
                // Clamp proposal between 0% and 100%
                // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
                // are used (e.g. contained handles feature)
                proposal = limit(proposal);
                return options.dir ? 100 - proposal : proposal;
            }
            // Find handle closest to a certain percentage on the slider
            function getClosestHandle(clickedPosition) {
                var smallestDifference = 100;
                var handleNumber = false;
                scope_Handles.forEach(function (handle, index) {
                    // Disabled handles are ignored
                    if (isHandleDisabled(index)) {
                        return;
                    }
                    var handlePosition = scope_Locations[index];
                    var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition);
                    // Initial state
                    var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100;
                    // Difference with this handle is smaller than the previously checked handle
                    var isCloser = differenceWithThisHandle < smallestDifference;
                    var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;
                    if (isCloser || isCloserAfter || clickAtEdge) {
                        handleNumber = index;
                        smallestDifference = differenceWithThisHandle;
                    }
                });
                return handleNumber;
            }
            // Fire 'end' when a mouse or pen leaves the document.
            function documentLeave(event, data) {
                if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
                    eventEnd(event, data);
                }
            }
            // Handle movement on document for handle and range drag.
            function eventMove(event, data) {
                // Fix #498
                // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
                // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
                // IE9 has .buttons and .which zero on mousemove.
                // Firefox breaks the spec MDN defines.
                if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
                    return eventEnd(event, data);
                }
                // Check if we are moving up or down
                var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint);
                // Convert the movement into a percentage of the slider width/height
                var proposal = (movement * 100) / data.baseSize;
                moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
            }
            // Unbind move events on document, call callbacks.
            function eventEnd(event, data) {
                // The handle is no longer active, so remove the class.
                if (data.handle) {
                    removeClass(data.handle, options.cssClasses.active);
                    scope_ActiveHandlesCount -= 1;
                }
                // Unbind the move and end events, which are added on 'start'.
                data.listeners.forEach(function (c) {
                    scope_DocumentElement.removeEventListener(c[0], c[1]);
                });
                if (scope_ActiveHandlesCount === 0) {
                    // Remove dragging class.
                    removeClass(scope_Target, options.cssClasses.drag);
                    setZindex();
                    // Remove cursor styles and text-selection events bound to the body.
                    if (event.cursor) {
                        scope_Body.style.cursor = "";
                        scope_Body.removeEventListener("selectstart", preventDefault);
                    }
                }
                data.handleNumbers.forEach(function (handleNumber) {
                    fireEvent("change", handleNumber);
                    fireEvent("set", handleNumber);
                    fireEvent("end", handleNumber);
                });
            }
            // Bind move events on document.
            function eventStart(event, data) {
                // Ignore event if any handle is disabled
                if (data.handleNumbers.some(isHandleDisabled)) {
                    return false;
                }
                var handle;
                if (data.handleNumbers.length === 1) {
                    var handleOrigin = scope_Handles[data.handleNumbers[0]];
                    handle = handleOrigin.children[0];
                    scope_ActiveHandlesCount += 1;
                    // Mark the handle as 'active' so it can be styled.
                    addClass(handle, options.cssClasses.active);
                }
                // A drag should never propagate up to the 'tap' event.
                event.stopPropagation();
                // Record the event listeners.
                var listeners = [];
                // Attach the move and end events.
                var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
                    // The event target has changed so we need to propagate the original one so that we keep
                    // relying on it to extract target touches.
                    target: event.target,
                    handle: handle,
                    listeners: listeners,
                    startCalcPoint: event.calcPoint,
                    baseSize: baseSize(),
                    pageOffset: event.pageOffset,
                    handleNumbers: data.handleNumbers,
                    buttonsProperty: event.buttons,
                    locations: scope_Locations.slice()
                });
                var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
                    target: event.target,
                    handle: handle,
                    listeners: listeners,
                    doNotReject: true,
                    handleNumbers: data.handleNumbers
                });
                var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
                    target: event.target,
                    handle: handle,
                    listeners: listeners,
                    doNotReject: true,
                    handleNumbers: data.handleNumbers
                });
                // We want to make sure we pushed the listeners in the listener list rather than creating
                // a new one as it has already been passed to the event handlers.
                listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent));
                // Text selection isn't an issue on touch devices,
                // so adding cursor styles can be skipped.
                if (event.cursor) {
                    // Prevent the 'I' cursor and extend the range-drag cursor.
                    scope_Body.style.cursor = getComputedStyle(event.target).cursor;
                    // Mark the target with a dragging state.
                    if (scope_Handles.length > 1) {
                        addClass(scope_Target, options.cssClasses.drag);
                    }
                    // Prevent text selection when dragging the handles.
                    // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
                    // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
                    // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
                    // The 'cursor' flag is false.
                    // See: http://caniuse.com/#search=selectstart
                    scope_Body.addEventListener("selectstart", preventDefault, false);
                }
                data.handleNumbers.forEach(function (handleNumber) {
                    fireEvent("start", handleNumber);
                });
            }
            // Move closest handle to tapped location.
            function eventTap(event) {
                // The tap event shouldn't propagate up
                event.stopPropagation();
                var proposal = calcPointToPercentage(event.calcPoint);
                var handleNumber = getClosestHandle(proposal);
                // Tackle the case that all handles are 'disabled'.
                if (handleNumber === false) {
                    return false;
                }
                // Flag the slider as it is now in a transitional state.
                // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.
                if (!options.events.snap) {
                    addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                }
                setHandle(handleNumber, proposal, true, true);
                setZindex();
                fireEvent("slide", handleNumber, true);
                fireEvent("update", handleNumber, true);
                fireEvent("change", handleNumber, true);
                fireEvent("set", handleNumber, true);
                if (options.events.snap) {
                    eventStart(event, { handleNumbers: [handleNumber] });
                }
            }
            // Fires a 'hover' event for a hovered mouse/pen position.
            function eventHover(event) {
                var proposal = calcPointToPercentage(event.calcPoint);
                var to = scope_Spectrum.getStep(proposal);
                var value = scope_Spectrum.fromStepping(to);
                Object.keys(scope_Events).forEach(function (targetEvent) {
                    if ("hover" === targetEvent.split(".")[0]) {
                        scope_Events[targetEvent].forEach(function (callback) {
                            callback.call(scope_Self, value);
                        });
                    }
                });
            }
            // Handles keydown on focused handles
            // Don't move the document when pressing arrow keys on focused handles
            function eventKeydown(event, handleNumber) {
                if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
                    return false;
                }
                var horizontalKeys = ["Left", "Right"];
                var verticalKeys = ["Down", "Up"];
                if (options.dir && !options.ort) {
                    // On an right-to-left slider, the left and right keys act inverted
                    horizontalKeys.reverse();
                }
                else if (options.ort && !options.dir) {
                    // On a top-to-bottom slider, the up and down keys act inverted
                    verticalKeys.reverse();
                }
                // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
                var key = event.key.replace("Arrow", "");
                var isDown = key === verticalKeys[0] || key === horizontalKeys[0];
                var isUp = key === verticalKeys[1] || key === horizontalKeys[1];
                if (!isDown && !isUp) {
                    return true;
                }
                event.preventDefault();
                var direction = isDown ? 0 : 1;
                var steps = getNextStepsForHandle(handleNumber);
                var step = steps[direction];
                // At the edge of a slider, do nothing
                if (step === null) {
                    return false;
                }
                // No step set, use the default of 10% of the sub-range
                if (step === false) {
                    step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, 10);
                }
                // Step over zero-length ranges (#948);
                step = Math.max(step, 0.0000001);
                // Decrement for down steps
                step = (isDown ? -1 : 1) * step;
                setHandle(handleNumber, scope_Spectrum.toStepping(scope_Values[handleNumber] + step), true, true);
                fireEvent("slide", handleNumber);
                fireEvent("update", handleNumber);
                fireEvent("change", handleNumber);
                fireEvent("set", handleNumber);
                return false;
            }
            // Attach events to several slider parts.
            function bindSliderEvents(behaviour) {
                // Attach the standard drag event to the handles.
                if (!behaviour.fixed) {
                    scope_Handles.forEach(function (handle, index) {
                        // These events are only bound to the visual handle
                        // element, not the 'real' origin element.
                        attachEvent(actions.start, handle.children[0], eventStart, {
                            handleNumbers: [index]
                        });
                    });
                }
                // Attach the tap event to the slider base.
                if (behaviour.tap) {
                    attachEvent(actions.start, scope_Base, eventTap, {});
                }
                // Fire hover events
                if (behaviour.hover) {
                    attachEvent(actions.move, scope_Base, eventHover, {
                        hover: true
                    });
                }
                // Make the range draggable.
                if (behaviour.drag) {
                    scope_Connects.forEach(function (connect, index) {
                        if (connect === false || index === 0 || index === scope_Connects.length - 1) {
                            return;
                        }
                        var handleBefore = scope_Handles[index - 1];
                        var handleAfter = scope_Handles[index];
                        var eventHolders = [connect];
                        addClass(connect, options.cssClasses.draggable);
                        // When the range is fixed, the entire range can
                        // be dragged by the handles. The handle in the first
                        // origin will propagate the start event upward,
                        // but it needs to be bound manually on the other.
                        if (behaviour.fixed) {
                            eventHolders.push(handleBefore.children[0]);
                            eventHolders.push(handleAfter.children[0]);
                        }
                        eventHolders.forEach(function (eventHolder) {
                            attachEvent(actions.start, eventHolder, eventStart, {
                                handles: [handleBefore, handleAfter],
                                handleNumbers: [index - 1, index]
                            });
                        });
                    });
                }
            }
            // Attach an event to this slider, possibly including a namespace
            function bindEvent(namespacedEvent, callback) {
                scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
                scope_Events[namespacedEvent].push(callback);
                // If the event bound is 'update,' fire it immediately for all handles.
                if (namespacedEvent.split(".")[0] === "update") {
                    scope_Handles.forEach(function (a, index) {
                        fireEvent("update", index);
                    });
                }
            }
            // Undo attachment of event
            function removeEvent(namespacedEvent) {
                var event = namespacedEvent && namespacedEvent.split(".")[0];
                var namespace = event && namespacedEvent.substring(event.length);
                Object.keys(scope_Events).forEach(function (bind) {
                    var tEvent = bind.split(".")[0];
                    var tNamespace = bind.substring(tEvent.length);
                    if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
                        delete scope_Events[bind];
                    }
                });
            }
            // External event handling
            function fireEvent(eventName, handleNumber, tap) {
                Object.keys(scope_Events).forEach(function (targetEvent) {
                    var eventType = targetEvent.split(".")[0];
                    if (eventName === eventType) {
                        scope_Events[targetEvent].forEach(function (callback) {
                            callback.call(
                            // Use the slider public API as the scope ('this')
                            scope_Self, 
                            // Return values as array, so arg_1[arg_2] is always valid.
                            scope_Values.map(options.format.to), 
                            // Handle index, 0 or 1
                            handleNumber, 
                            // Un-formatted slider values
                            scope_Values.slice(), 
                            // Event is fired by tap, true or false
                            tap || false, 
                            // Left offset of the handle, in relation to the slider
                            scope_Locations.slice());
                        });
                    }
                });
            }
            // Split out the handle positioning logic so the Move event can use it, too
            function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
                // For sliders with multiple handles, limit movement to the other handle.
                // Apply the margin option by adding it to the handle positions.
                if (scope_Handles.length > 1 && !options.events.unconstrained) {
                    if (lookBackward && handleNumber > 0) {
                        to = Math.max(to, reference[handleNumber - 1] + options.margin);
                    }
                    if (lookForward && handleNumber < scope_Handles.length - 1) {
                        to = Math.min(to, reference[handleNumber + 1] - options.margin);
                    }
                }
                // The limit option has the opposite effect, limiting handles to a
                // maximum distance from another. Limit must be > 0, as otherwise
                // handles would be unmovable.
                if (scope_Handles.length > 1 && options.limit) {
                    if (lookBackward && handleNumber > 0) {
                        to = Math.min(to, reference[handleNumber - 1] + options.limit);
                    }
                    if (lookForward && handleNumber < scope_Handles.length - 1) {
                        to = Math.max(to, reference[handleNumber + 1] - options.limit);
                    }
                }
                // The padding option keeps the handles a certain distance from the
                // edges of the slider. Padding must be > 0.
                if (options.padding) {
                    if (handleNumber === 0) {
                        to = Math.max(to, options.padding[0]);
                    }
                    if (handleNumber === scope_Handles.length - 1) {
                        to = Math.min(to, 100 - options.padding[1]);
                    }
                }
                to = scope_Spectrum.getStep(to);
                // Limit percentage to the 0 - 100 range
                to = limit(to);
                // Return false if handle can't move
                if (to === reference[handleNumber] && !getValue) {
                    return false;
                }
                return to;
            }
            // Uses slider orientation to create CSS rules. a = base value;
            function inRuleOrder(v, a) {
                var o = options.ort;
                return (o ? a : v) + ", " + (o ? v : a);
            }
            // Moves handle(s) by a percentage
            // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])
            function moveHandles(upward, proposal, locations, handleNumbers) {
                var proposals = locations.slice();
                var b = [!upward, upward];
                var f = [upward, !upward];
                // Copy handleNumbers so we don't change the dataset
                handleNumbers = handleNumbers.slice();
                // Check to see which handle is 'leading'.
                // If that one can't move the second can't either.
                if (upward) {
                    handleNumbers.reverse();
                }
                // Step 1: get the maximum percentage that any of the handles can move
                if (handleNumbers.length > 1) {
                    handleNumbers.forEach(function (handleNumber, o) {
                        var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false);
                        // Stop if one of the handles can't move.
                        if (to === false) {
                            proposal = 0;
                        }
                        else {
                            proposal = to - proposals[handleNumber];
                            proposals[handleNumber] = to;
                        }
                    });
                }
                // If using one handle, check backward AND forward
                else {
                    b = f = [true];
                }
                var state = false;
                // Step 2: Try to set the handles with the found percentage
                handleNumbers.forEach(function (handleNumber, o) {
                    state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
                });
                // Step 3: If a handle moved, fire events
                if (state) {
                    handleNumbers.forEach(function (handleNumber) {
                        fireEvent("update", handleNumber);
                        fireEvent("slide", handleNumber);
                    });
                }
            }
            // Takes a base value and an offset. This offset is used for the connect bar size.
            // In the initial design for this feature, the origin element was 1% wide.
            // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
            // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223
            function transformDirection(a, b) {
                return options.dir ? 100 - a - b : a;
            }
            // Updates scope_Locations and scope_Values, updates visual state
            function updateHandlePosition(handleNumber, to) {
                // Update locations.
                scope_Locations[handleNumber] = to;
                // Convert the value to the slider stepping/range.
                scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
                var translation = 10 * (transformDirection(to, 0) - scope_DirOffset);
                var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
                scope_Handles[handleNumber].style[options.transformRule] = translateRule;
                updateConnect(handleNumber);
                updateConnect(handleNumber + 1);
            }
            // Handles before the slider middle are stacked later = higher,
            // Handles after the middle later is lower
            // [[7] [8] .......... | .......... [5] [4]
            function setZindex() {
                scope_HandleNumbers.forEach(function (handleNumber) {
                    var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
                    var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
                    scope_Handles[handleNumber].style.zIndex = zIndex;
                });
            }
            // Test suggested values and apply margin, step.
            function setHandle(handleNumber, to, lookBackward, lookForward) {
                to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
                if (to === false) {
                    return false;
                }
                updateHandlePosition(handleNumber, to);
                return true;
            }
            // Updates style attribute for connect nodes
            function updateConnect(index) {
                // Skip connects set to false
                if (!scope_Connects[index]) {
                    return;
                }
                var l = 0;
                var h = 100;
                if (index !== 0) {
                    l = scope_Locations[index - 1];
                }
                if (index !== scope_Connects.length - 1) {
                    h = scope_Locations[index];
                }
                // We use two rules:
                // 'translate' to change the left/top offset;
                // 'scale' to change the width of the element;
                // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)
                var connectWidth = h - l;
                var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
                var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
                scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
            }
            // Parses value passed to .set method. Returns current value if not parse-able.
            function resolveToValue(to, handleNumber) {
                // Setting with null indicates an 'ignore'.
                // Inputting 'false' is invalid.
                if (to === null || to === false || to === undefined) {
                    return scope_Locations[handleNumber];
                }
                // If a formatted number was passed, attempt to decode it.
                if (typeof to === "number") {
                    to = String(to);
                }
                to = options.format.from(to);
                to = scope_Spectrum.toStepping(to);
                // If parsing the number failed, use the current value.
                if (to === false || isNaN(to)) {
                    return scope_Locations[handleNumber];
                }
                return to;
            }
            // Set the slider value.
            function valueSet(input, fireSetEvent) {
                var values = asArray(input);
                var isInit = scope_Locations[0] === undefined;
                // Event fires by default
                fireSetEvent = fireSetEvent === undefined ? true : !!fireSetEvent;
                // Animation is optional.
                // Make sure the initial values were set before using animated placement.
                if (options.animate && !isInit) {
                    addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
                }
                // First pass, without lookAhead but with lookBackward. Values are set from left to right.
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false);
                });
                // Second pass. Now that all base values are set, apply constraints
                scope_HandleNumbers.forEach(function (handleNumber) {
                    setHandle(handleNumber, scope_Locations[handleNumber], true, true);
                });
                setZindex();
                scope_HandleNumbers.forEach(function (handleNumber) {
                    fireEvent("update", handleNumber);
                    // Fire the event only for handles that received a new value, as per #579
                    if (values[handleNumber] !== null && fireSetEvent) {
                        fireEvent("set", handleNumber);
                    }
                });
            }
            // Reset slider to initial values
            function valueReset(fireSetEvent) {
                valueSet(options.start, fireSetEvent);
            }
            // Set value for a single handle
            function valueSetHandle(handleNumber, value, fireSetEvent) {
                // Ensure numeric input
                handleNumber = Number(handleNumber);
                if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
                    throw new Error("noUiSlider (" + VERSION + "): invalid handle number, got: " + handleNumber);
                }
                // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
                setHandle(handleNumber, resolveToValue(value, handleNumber), true, true);
                fireEvent("update", handleNumber);
                if (fireSetEvent) {
                    fireEvent("set", handleNumber);
                }
            }
            // Get the slider value.
            function valueGet() {
                var values = scope_Values.map(options.format.to);
                // If only one handle is used, return a single value.
                if (values.length === 1) {
                    return values[0];
                }
                return values;
            }
            // Removes classes from the root and empties it.
            function destroy() {
                for (var key in options.cssClasses) {
                    if (!options.cssClasses.hasOwnProperty(key)) {
                        continue;
                    }
                    removeClass(scope_Target, options.cssClasses[key]);
                }
                while (scope_Target.firstChild) {
                    scope_Target.removeChild(scope_Target.firstChild);
                }
                delete scope_Target.noUiSlider;
            }
            function getNextStepsForHandle(handleNumber) {
                var location = scope_Locations[handleNumber];
                var nearbySteps = scope_Spectrum.getNearbySteps(location);
                var value = scope_Values[handleNumber];
                var increment = nearbySteps.thisStep.step;
                var decrement = null;
                // If snapped, directly use defined step value
                if (options.snap) {
                    return [
                        value - nearbySteps.stepBefore.startValue || null,
                        nearbySteps.stepAfter.startValue - value || null
                    ];
                }
                // If the next value in this step moves into the next step,
                // the increment is the start of the next step - the current value
                if (increment !== false) {
                    if (value + increment > nearbySteps.stepAfter.startValue) {
                        increment = nearbySteps.stepAfter.startValue - value;
                    }
                }
                // If the value is beyond the starting point
                if (value > nearbySteps.thisStep.startValue) {
                    decrement = nearbySteps.thisStep.step;
                }
                else if (nearbySteps.stepBefore.step === false) {
                    decrement = false;
                }
                // If a handle is at the start of a step, it always steps back into the previous step first
                else {
                    decrement = value - nearbySteps.stepBefore.highestStep;
                }
                // Now, if at the slider edges, there is no in/decrement
                if (location === 100) {
                    increment = null;
                }
                else if (location === 0) {
                    decrement = null;
                }
                // As per #391, the comparison for the decrement step can have some rounding issues.
                var stepDecimals = scope_Spectrum.countStepDecimals();
                // Round per #391
                if (increment !== null && increment !== false) {
                    increment = Number(increment.toFixed(stepDecimals));
                }
                if (decrement !== null && decrement !== false) {
                    decrement = Number(decrement.toFixed(stepDecimals));
                }
                return [decrement, increment];
            }
            // Get the current step size for the slider.
            function getNextSteps() {
                return scope_HandleNumbers.map(getNextStepsForHandle);
            }
            // Updateable: margin, limit, padding, step, range, animate, snap
            function updateOptions(optionsToUpdate, fireSetEvent) {
                // Spectrum is created using the range, snap, direction and step options.
                // 'snap' and 'step' can be updated.
                // If 'snap' and 'step' are not passed, they should remain unchanged.
                var v = valueGet();
                var updateAble = [
                    "margin",
                    "limit",
                    "padding",
                    "range",
                    "animate",
                    "snap",
                    "step",
                    "format",
                    "pips",
                    "tooltips"
                ];
                // Only change options that we're actually passed to update.
                updateAble.forEach(function (name) {
                    // Check for undefined. null removes the value.
                    if (optionsToUpdate[name] !== undefined) {
                        originalOptions[name] = optionsToUpdate[name];
                    }
                });
                var newOptions = testOptions(originalOptions);
                // Load new options into the slider state
                updateAble.forEach(function (name) {
                    if (optionsToUpdate[name] !== undefined) {
                        options[name] = newOptions[name];
                    }
                });
                scope_Spectrum = newOptions.spectrum;
                // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)
                options.margin = newOptions.margin;
                options.limit = newOptions.limit;
                options.padding = newOptions.padding;
                // Update pips, removes existing.
                if (options.pips) {
                    pips(options.pips);
                }
                else {
                    removePips();
                }
                // Update tooltips, removes existing.
                if (options.tooltips) {
                    tooltips();
                }
                else {
                    removeTooltips();
                }
                // Invalidate the current positioning so valueSet forces an update.
                scope_Locations = [];
                valueSet(optionsToUpdate.start || v, fireSetEvent);
            }
            // Initialization steps
            function setupSlider() {
                // Create the base element, initialize HTML and set classes.
                // Add handles and connect elements.
                scope_Base = addSlider(scope_Target);
                addElements(options.connect, scope_Base);
                // Attach user events.
                bindSliderEvents(options.events);
                // Use the public value method to set the start values.
                valueSet(options.start);
                if (options.pips) {
                    pips(options.pips);
                }
                if (options.tooltips) {
                    tooltips();
                }
                aria();
            }
            setupSlider();
            // noinspection JSUnusedGlobalSymbols
            scope_Self = {
                destroy: destroy,
                steps: getNextSteps,
                on: bindEvent,
                off: removeEvent,
                get: valueGet,
                set: valueSet,
                setHandle: valueSetHandle,
                reset: valueReset,
                // Exposed for unit testing, don't use this in your application.
                __moveHandles: function (a, b, c) {
                    moveHandles(a, b, scope_Locations, c);
                },
                options: originalOptions,
                updateOptions: updateOptions,
                target: scope_Target,
                removePips: removePips,
                removeTooltips: removeTooltips,
                pips: pips // Issue #594
            };
            return scope_Self;
        }
        // Run the standard initializer
        function initialize(target, originalOptions) {
            if (!target || !target.nodeName) {
                throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
            }
            // Throw an error if the slider was already initialized.
            if (target.noUiSlider) {
                throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
            }
            // Test the options and create the slider environment;
            var options = testOptions(originalOptions);
            var api = scope(target, options, originalOptions);
            target.noUiSlider = api;
            return api;
        }
        // Use an object instead of a function for future expandability;
        return {
            // Exposed for unit testing, don't use this in your application.
            __spectrum: Spectrum,
            version: VERSION,
            create: initialize
        };
    });
});
var NoUiSliderWrapper = /** @class */ (function () {
    function class_4(hostRef) {
        registerInstance(this, hostRef);
    }
    class_4.prototype.componentDidLoad = function () {
        this.createSlider();
    };
    class_4.prototype.watchStart = function (newValue, oldValue) {
        if (!equals(newValue, oldValue)) {
            this.sliderComponent.updateOptions({
                start: newValue
            });
        }
    };
    class_4.prototype.createSlider = function () {
        var _this = this;
        this.slider = this.el;
        // const { onUpdate, onChange, onSlide, onStart, onEnd, onSet } = props;
        this.sliderComponent = nouislider.create(this.slider, {
            start: this.start,
            connect: true,
            range: {
                'min': 0,
                'max': 600
            },
            tooltips: true,
            format: {
                // 'to' the formatted value. Receives a number.
                to: function (value) {
                    return Math.round(value) + 'k';
                },
                // 'from' the formatted value.
                // Receives a string, should return a number.
                from: function (value) {
                    return Number(value.replace(',-', ''));
                }
            }
        });
        if (this.onStart) {
            this.sliderComponent.on("start", this.onStart);
        }
        if (this.onSlide) {
            this.sliderComponent.on("slide", this.onSlide);
        }
        if (this.onUpdate) {
            this.sliderComponent.on("update", function (_values, _handle, _unencoded, _tap, _positions) {
                _this.onUpdate(_values, _handle, _unencoded, _tap, _positions);
            });
        }
        if (this.onChange) {
            this.sliderComponent.on("change", function (_values, _handle, _unencoded, _tap, _positions) {
                _this.onChange(_values, _handle, _unencoded, _tap, _positions);
            });
        }
        if (this.onSet) {
            this.sliderComponent.on("set", this.onSet);
        }
        if (this.onEnd) {
            this.sliderComponent.on("end", this.onEnd);
        }
    };
    ;
    class_4.prototype.onChange = function (_values, _handle, _unencoded, _tap, _positions) {
        this.callback.apply(this, arguments);
    };
    class_4.prototype.onEnd = function (_values, _handle, _unencoded, _tap, _positions) { };
    class_4.prototype.onSet = function (_values, _handle, _unencoded, _tap, _positions) { };
    class_4.prototype.onSlide = function (_values, _handle, _unencoded, _tap, _positions) { };
    class_4.prototype.onStart = function (_values, _handle, _unencoded, _tap, _positions) { };
    class_4.prototype.onUpdate = function (_values, _handle, _unencoded, _tap, _positions) { };
    class_4.prototype.render = function () {
        var _this = this;
        return (h(Host, null, h("slot", { name: "title" }), h("div", { class: "row" }, h("span", { class: "handle-number" }, "1"), h("div", { ref: function (el) { return _this.el = el; }, id: "double-slider" }), h("span", { class: "handle-number" }, "600k"))));
    };
    Object.defineProperty(class_4, "watchers", {
        get: function () {
            return {
                "start": ["watchStart"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_4, "style", {
        get: function () { return "p{margin:0 0 20px;font-size:16px;line-height:26px;color:grey}p:last-child{margin:0}h1{font-size:40px;letter-spacing:3.5px;font-weight:800;text-transform:uppercase;text-align:center;padding:0;margin-top:0;margin-bottom:15px}h2{font-size:32px;line-height:1;margin-bottom:5px;margin-top:20px}h3,h4{font-size:15px;margin-bottom:0}h3,h4,h5{margin-top:0;text-transform:uppercase}h5{margin-bottom:5px;font-size:22px}.danzerpress-button-left{margin-right:15px}\@media screen and (max-width:767px){.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}\@media screen and (max-width:767px){.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}}.danzerpress-col-1,.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{width:100%;position:relative;margin-bottom:20px;padding:0 15px}.danzerpress-col-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.danzerpress-col-2{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.danzerpress-col-3{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.danzerpress-col-4{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.danzerpress-col-5{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}a,input,li,p,textarea,ul{font-family:Open Sans,sans-serif}h1,h2,h3,h4,h5,h6{font-family:Raleway,sans-serif;font-weight:600;color:#333}html{-webkit-box-sizing:border-box;box-sizing:border-box;-ms-overflow-style:scrollbar;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}html .main-content{-ms-flex:1 0 auto;flex:1 0 auto}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}no-ui-slider-wrapper{-ms-flex:1;flex:1;min-width:250px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;padding:12px 16px;background:#fff 0 0 no-repeat padding-box;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.23);border-radius:5px;opacity:1}no-ui-slider-wrapper slot-fb[name=title]{text-align:left;font:500 15px/20px Roboto;letter-spacing:.9px;color:#11284a;opacity:1;margin-bottom:14px}no-ui-slider-wrapper .row{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}no-ui-slider-wrapper .handle-number{display:none;text-align:left;font:500 11px/15px Roboto;letter-spacing:.66px;color:#11284a;opacity:1}\@media screen and (min-width:1024px){no-ui-slider-wrapper .handle-number{display:block}}no-ui-slider-wrapper #double-slider{max-width:300px;width:100%;margin:auto}\@media screen and (min-width:1024px){no-ui-slider-wrapper #double-slider{margin:0 10px}}no-ui-slider-wrapper #double-slider .noUi-handle{border:none;background:none;-webkit-box-shadow:none;box-shadow:none;outline:none;top:0}\@media screen and (min-width:1024px){no-ui-slider-wrapper #double-slider .noUi-handle{top:-9px}}no-ui-slider-wrapper #double-slider .noUi-handle.noUi-handle-upper{right:-2px}no-ui-slider-wrapper #double-slider .noUi-handle.noUi-handle-lower{right:-28px}no-ui-slider-wrapper #double-slider .noUi-handle:after,no-ui-slider-wrapper #double-slider .noUi-handle:before{display:none}no-ui-slider-wrapper #double-slider .noUi-connect{background:#11284a 0 0 no-repeat padding-box;border-radius:5px;opacity:1}no-ui-slider-wrapper #double-slider.noUi-horizontal{height:4px;border:none;background:grey}no-ui-slider-wrapper #double-slider.noUi-horizontal .noUi-tooltip{font-family:Roboto,sans-serif;bottom:9px;background:#11284a 0 0 no-repeat padding-box;border-radius:5px;opacity:1;font-size:11px;letter-spacing:.66px;color:#fff;border:none;padding:2.5px 5px}"; },
        enumerable: true,
        configurable: true
    });
    return class_4;
}());
function symbolObservablePonyfill(root) {
    var result;
    var Symbol = root.Symbol;
    if (typeof Symbol === 'function') {
        if (Symbol.observable) {
            result = Symbol.observable;
        }
        else {
            result = Symbol('observable');
            Symbol.observable = result;
        }
    }
    else {
        result = '@@observable';
    }
    return result;
}
/* global window */
var root;
if (typeof self !== 'undefined') {
    root = self;
}
else if (typeof window !== 'undefined') {
    root = window;
}
else if (typeof global !== 'undefined') {
    root = global;
}
else if (typeof module !== 'undefined') {
    root = module;
}
else {
    root = Function('return this')();
}
var result = symbolObservablePonyfill(root);
/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
    return Math.random().toString(36).substring(7).split('').join('.');
};
var ActionTypes = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    }
};
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
    if (typeof obj !== 'object' || obj === null)
        return false;
    var proto = obj;
    while (Object.getPrototypeOf(proto) !== null) {
        proto = Object.getPrototypeOf(proto);
    }
    return Object.getPrototypeOf(obj) === proto;
}
/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
    var _ref2;
    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
        throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
    }
    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        enhancer = preloadedState;
        preloadedState = undefined;
    }
    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
            throw new Error('Expected the enhancer to be a function.');
        }
        return enhancer(createStore)(reducer, preloadedState);
    }
    if (typeof reducer !== 'function') {
        throw new Error('Expected the reducer to be a function.');
    }
    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    /**
     * This makes a shallow copy of currentListeners so we can use
     * nextListeners as a temporary list while dispatching.
     *
     * This prevents any bugs around consumers calling
     * subscribe/unsubscribe in the middle of a dispatch.
     */
    function ensureCanMutateNextListeners() {
        if (nextListeners === currentListeners) {
            nextListeners = currentListeners.slice();
        }
    }
    /**
     * Reads the state tree managed by the store.
     *
     * @returns {any} The current state tree of your application.
     */
    function getState() {
        if (isDispatching) {
            throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
        }
        return currentState;
    }
    /**
     * Adds a change listener. It will be called any time an action is dispatched,
     * and some part of the state tree may potentially have changed. You may then
     * call `getState()` to read the current state tree inside the callback.
     *
     * You may call `dispatch()` from a change listener, with the following
     * caveats:
     *
     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
     * If you subscribe or unsubscribe while the listeners are being invoked, this
     * will not have any effect on the `dispatch()` that is currently in progress.
     * However, the next `dispatch()` call, whether nested or not, will use a more
     * recent snapshot of the subscription list.
     *
     * 2. The listener should not expect to see all state changes, as the state
     * might have been updated multiple times during a nested `dispatch()` before
     * the listener is called. It is, however, guaranteed that all subscribers
     * registered before the `dispatch()` started will be called with the latest
     * state by the time it exits.
     *
     * @param {Function} listener A callback to be invoked on every dispatch.
     * @returns {Function} A function to remove this change listener.
     */
    function subscribe(listener) {
        if (typeof listener !== 'function') {
            throw new Error('Expected the listener to be a function.');
        }
        if (isDispatching) {
            throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
        }
        var isSubscribed = true;
        ensureCanMutateNextListeners();
        nextListeners.push(listener);
        return function unsubscribe() {
            if (!isSubscribed) {
                return;
            }
            if (isDispatching) {
                throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
            }
            isSubscribed = false;
            ensureCanMutateNextListeners();
            var index = nextListeners.indexOf(listener);
            nextListeners.splice(index, 1);
        };
    }
    /**
     * Dispatches an action. It is the only way to trigger a state change.
     *
     * The `reducer` function, used to create the store, will be called with the
     * current state tree and the given `action`. Its return value will
     * be considered the **next** state of the tree, and the change listeners
     * will be notified.
     *
     * The base implementation only supports plain object actions. If you want to
     * dispatch a Promise, an Observable, a thunk, or something else, you need to
     * wrap your store creating function into the corresponding middleware. For
     * example, see the documentation for the `redux-thunk` package. Even the
     * middleware will eventually dispatch plain object actions using this method.
     *
     * @param {Object} action A plain object representing “what changed”. It is
     * a good idea to keep actions serializable so you can record and replay user
     * sessions, or use the time travelling `redux-devtools`. An action must have
     * a `type` property which may not be `undefined`. It is a good idea to use
     * string constants for action types.
     *
     * @returns {Object} For convenience, the same action object you dispatched.
     *
     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
     * return something else (for example, a Promise you can await).
     */
    function dispatch(action) {
        if (!isPlainObject(action)) {
            throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
        }
        if (typeof action.type === 'undefined') {
            throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
        }
        if (isDispatching) {
            throw new Error('Reducers may not dispatch actions.');
        }
        try {
            isDispatching = true;
            currentState = currentReducer(currentState, action);
        }
        finally {
            isDispatching = false;
        }
        var listeners = currentListeners = nextListeners;
        for (var i = 0; i < listeners.length; i++) {
            var listener = listeners[i];
            listener();
        }
        return action;
    }
    /**
     * Replaces the reducer currently used by the store to calculate the state.
     *
     * You might need this if your app implements code splitting and you want to
     * load some of the reducers dynamically. You might also need this if you
     * implement a hot reloading mechanism for Redux.
     *
     * @param {Function} nextReducer The reducer for the store to use instead.
     * @returns {void}
     */
    function replaceReducer(nextReducer) {
        if (typeof nextReducer !== 'function') {
            throw new Error('Expected the nextReducer to be a function.');
        }
        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
        // Any reducers that existed in both the new and old rootReducer
        // will receive the previous state. This effectively populates
        // the new state tree with any relevant data from the old one.
        dispatch({
            type: ActionTypes.REPLACE
        });
    }
    /**
     * Interoperability point for observable/reactive libraries.
     * @returns {observable} A minimal observable of state changes.
     * For more information, see the observable proposal:
     * https://github.com/tc39/proposal-observable
     */
    function observable() {
        var _ref;
        var outerSubscribe = subscribe;
        return _ref = {
            /**
             * The minimal observable subscription method.
             * @param {Object} observer Any object that can be used as an observer.
             * The observer object should have a `next` method.
             * @returns {subscription} An object with an `unsubscribe` method that can
             * be used to unsubscribe the observable from the store, and prevent further
             * emission of values from the observable.
             */
            subscribe: function subscribe(observer) {
                if (typeof observer !== 'object' || observer === null) {
                    throw new TypeError('Expected the observer to be an object.');
                }
                function observeState() {
                    if (observer.next) {
                        observer.next(getState());
                    }
                }
                observeState();
                var unsubscribe = outerSubscribe(observeState);
                return {
                    unsubscribe: unsubscribe
                };
            }
        }, _ref[result] = function () {
            return this;
        }, _ref;
    } // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    dispatch({
        type: ActionTypes.INIT
    });
    return _ref2 = {
        dispatch: dispatch,
        subscribe: subscribe,
        getState: getState,
        replaceReducer: replaceReducer
    }, _ref2[result] = observable, _ref2;
}
function getUndefinedStateErrorMessage(key, action) {
    var actionType = action && action.type;
    var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
    return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}
function assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function (key) {
        var reducer = reducers[key];
        var initialState = reducer(undefined, {
            type: ActionTypes.INIT
        });
        if (typeof initialState === 'undefined') {
            throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
        }
        if (typeof reducer(undefined, {
            type: ActionTypes.PROBE_UNKNOWN_ACTION()
        }) === 'undefined') {
            throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
        }
    });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for (var i = 0; i < reducerKeys.length; i++) {
        var key = reducerKeys[i];
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
    var shapeAssertionError;
    try {
        assertReducerShape(finalReducers);
    }
    catch (e) {
        shapeAssertionError = e;
    }
    return function combination(state, action) {
        if (state === void 0) {
            state = {};
        }
        if (shapeAssertionError) {
            throw shapeAssertionError;
        }
        var hasChanged = false;
        var nextState = {};
        for (var _i = 0; _i < finalReducerKeys.length; _i++) {
            var _key = finalReducerKeys[_i];
            var reducer = finalReducers[_key];
            var previousStateForKey = state[_key];
            var nextStateForKey = reducer(previousStateForKey, action);
            if (typeof nextStateForKey === 'undefined') {
                var errorMessage = getUndefinedStateErrorMessage(_key, action);
                throw new Error(errorMessage);
            }
            nextState[_key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    }
    else {
        obj[key] = value;
    }
    return obj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        keys.push.apply(keys, Object.getOwnPropertySymbols(object));
    }
    if (enumerableOnly)
        keys = keys.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
    return keys;
}
function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(source, true).forEach(function (key) {
                _defineProperty(target, key, source[key]);
            });
        }
        else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        }
        else {
            ownKeys(source).forEach(function (key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
        funcs[_key] = arguments[_key];
    }
    if (funcs.length === 0) {
        return function (arg) {
            return arg;
        };
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce(function (a, b) {
        return function () {
            return a(b.apply(void 0, arguments));
        };
    });
}
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
    for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
        middlewares[_key] = arguments[_key];
    }
    return function (createStore) {
        return function () {
            var store = createStore.apply(void 0, arguments);
            var _dispatch = function dispatch() {
                throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
            };
            var middlewareAPI = {
                getState: store.getState,
                dispatch: function dispatch() {
                    return _dispatch.apply(void 0, arguments);
                }
            };
            var chain = middlewares.map(function (middleware) {
                return middleware(middlewareAPI);
            });
            _dispatch = compose.apply(void 0, chain)(store.dispatch);
            return _objectSpread2({}, store, {
                dispatch: _dispatch
            });
        };
    };
}
var Actions;
(function (Actions) {
    Actions["LOAD_DATA_BEGIN"] = "LOAD_DATA_BEGIN";
    Actions["LOAD_POSTS"] = "LOAD_POSTS";
    Actions["CHANGE_FILTER"] = "CHANGE_FILTER";
    Actions["CHANGE_VIEW"] = "CHANGE_VIEW";
    Actions["SET_BASE"] = "SET_BASE";
    Actions["SORT_BY"] = "SORT_BY";
})(Actions || (Actions = {}));
var getInitialState = function () {
    return {
        baseUrl: '',
        items: [],
        loading: false,
        error: null,
        posts: [],
        filters: {
            "category": "all",
            "region": "",
            "search": "",
            "sqFootage": [0, 600],
            "sortBy": ""
        },
        views: "map",
        fetchUrl: '/wp-json/bixby/v1/properties'
    };
};
var dataReducer = function (state, action) {
    if (state === void 0) { state = getInitialState(); }
    switch (action.type) {
        case Actions.LOAD_DATA_BEGIN: {
            return Object.assign({}, state, { loading: false, items: action.payload.data });
        }
        case Actions.LOAD_POSTS: {
            return Object.assign({}, state, { posts: action.payload });
        }
        case Actions.CHANGE_FILTER: {
            var filters = {};
            if (!isEmpty(action.payload)) {
                filters = Object.assign({}, state.filters, action.payload);
            }
            else {
                filters = Object.assign({}, getInitialState().filters);
            }
            return Object.assign({}, state, { filters: filters });
        }
        case Actions.CHANGE_VIEW: {
            return Object.assign({}, state, { views: action.payload });
        }
        case Actions.SET_BASE: {
            return Object.assign({}, state, { baseUrl: action.payload });
        }
        case Actions.SORT_BY: {
            return Object.assign({}, state, { posts: action.payload.posts, filters: Object.assign({}, state.filters, { "sortBy": action.payload.sortBy }) });
        }
    }
    return state;
};
var rootReducer = combineReducers({
    dataReducer: dataReducer
});
function createThunkMiddleware(extraArgument) {
    return function (_ref) {
        var dispatch = _ref.dispatch, getState = _ref.getState;
        return function (next) {
            return function (action) {
                if (typeof action === 'function') {
                    return action(dispatch, getState, extraArgument);
                }
                return next(action);
            };
        };
    };
}
var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
var reduxLogger = createCommonjsModule(function (module, exports) {
    !function (e, t) { t(exports); }(commonjsGlobal, function (e) { function t(e, t) { e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }); } function r(e, t) { Object.defineProperty(this, "kind", { value: e, enumerable: !0 }), t && t.length && Object.defineProperty(this, "path", { value: t, enumerable: !0 }); } function n(e, t, r) { n.super_.call(this, "E", e), Object.defineProperty(this, "lhs", { value: t, enumerable: !0 }), Object.defineProperty(this, "rhs", { value: r, enumerable: !0 }); } function o(e, t) { o.super_.call(this, "N", e), Object.defineProperty(this, "rhs", { value: t, enumerable: !0 }); } function i(e, t) { i.super_.call(this, "D", e), Object.defineProperty(this, "lhs", { value: t, enumerable: !0 }); } function a(e, t, r) { a.super_.call(this, "A", e), Object.defineProperty(this, "index", { value: t, enumerable: !0 }), Object.defineProperty(this, "item", { value: r, enumerable: !0 }); } function f(e, t, r) { var n = e.slice((r || t) + 1 || e.length); return e.length = t < 0 ? e.length + t : t, e.push.apply(e, n), e; } function u(e) { var t = "undefined" == typeof e ? "undefined" : N(e); return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "function" == typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object"; } function l(e, t, r, c, s, d, p) { s = s || [], p = p || []; var g = s.slice(0); if ("undefined" != typeof d) {
        if (c) {
            if ("function" == typeof c && c(g, d))
                return;
            if ("object" === ("undefined" == typeof c ? "undefined" : N(c))) {
                if (c.prefilter && c.prefilter(g, d))
                    return;
                if (c.normalize) {
                    var h = c.normalize(g, d, e, t);
                    h && (e = h[0], t = h[1]);
                }
            }
        }
        g.push(d);
    } "regexp" === u(e) && "regexp" === u(t) && (e = e.toString(), t = t.toString()); var y = "undefined" == typeof e ? "undefined" : N(e), v = "undefined" == typeof t ? "undefined" : N(t), b = "undefined" !== y || p && p[p.length - 1].lhs && p[p.length - 1].lhs.hasOwnProperty(d), m = "undefined" !== v || p && p[p.length - 1].rhs && p[p.length - 1].rhs.hasOwnProperty(d); if (!b && m)
        r(new o(g, t));
    else if (!m && b)
        r(new i(g, e));
    else if (u(e) !== u(t))
        r(new n(g, e, t));
    else if ("date" === u(e) && e - t !== 0)
        r(new n(g, e, t));
    else if ("object" === y && null !== e && null !== t)
        if (p.filter(function (t) { return t.lhs === e; }).length)
            e !== t && r(new n(g, e, t));
        else {
            if (p.push({ lhs: e, rhs: t }), Array.isArray(e)) {
                var w;
                for (w = 0; w < e.length; w++)
                    w >= t.length ? r(new a(g, w, new i(void 0, e[w]))) : l(e[w], t[w], r, c, g, w, p);
                for (; w < t.length;)
                    r(new a(g, w, new o(void 0, t[w++])));
            }
            else {
                var x = Object.keys(e), S = Object.keys(t);
                x.forEach(function (n, o) { var i = S.indexOf(n); i >= 0 ? (l(e[n], t[n], r, c, g, n, p), S = f(S, i)) : l(e[n], void 0, r, c, g, n, p); }), S.forEach(function (e) { l(void 0, t[e], r, c, g, e, p); });
            }
            p.length = p.length - 1;
        }
    else
        e !== t && ("number" === y && isNaN(e) && isNaN(t) || r(new n(g, e, t))); } function c(e, t, r, n) { return n = n || [], l(e, t, function (e) { e && n.push(e); }, r), n.length ? n : void 0; } function s(e, t, r) { if (r.path && r.path.length) {
        var n, o = e[t], i = r.path.length - 1;
        for (n = 0; n < i; n++)
            o = o[r.path[n]];
        switch (r.kind) {
            case "A":
                s(o[r.path[n]], r.index, r.item);
                break;
            case "D":
                delete o[r.path[n]];
                break;
            case "E":
            case "N": o[r.path[n]] = r.rhs;
        }
    }
    else
        switch (r.kind) {
            case "A":
                s(e[t], r.index, r.item);
                break;
            case "D":
                e = f(e, t);
                break;
            case "E":
            case "N": e[t] = r.rhs;
        } return e; } function d(e, t, r) { if (e && t && r && r.kind) {
        for (var n = e, o = -1, i = r.path ? r.path.length - 1 : 0; ++o < i;)
            "undefined" == typeof n[r.path[o]] && (n[r.path[o]] = "number" == typeof r.path[o] ? [] : {}), n = n[r.path[o]];
        switch (r.kind) {
            case "A":
                s(r.path ? n[r.path[o]] : n, r.index, r.item);
                break;
            case "D":
                delete n[r.path[o]];
                break;
            case "E":
            case "N": n[r.path[o]] = r.rhs;
        }
    } } function p(e, t, r) { if (r.path && r.path.length) {
        var n, o = e[t], i = r.path.length - 1;
        for (n = 0; n < i; n++)
            o = o[r.path[n]];
        switch (r.kind) {
            case "A":
                p(o[r.path[n]], r.index, r.item);
                break;
            case "D":
                o[r.path[n]] = r.lhs;
                break;
            case "E":
                o[r.path[n]] = r.lhs;
                break;
            case "N": delete o[r.path[n]];
        }
    }
    else
        switch (r.kind) {
            case "A":
                p(e[t], r.index, r.item);
                break;
            case "D":
                e[t] = r.lhs;
                break;
            case "E":
                e[t] = r.lhs;
                break;
            case "N": e = f(e, t);
        } return e; } function g(e, t, r) { if (e && t && r && r.kind) {
        var n, o, i = e;
        for (o = r.path.length - 1, n = 0; n < o; n++)
            "undefined" == typeof i[r.path[n]] && (i[r.path[n]] = {}), i = i[r.path[n]];
        switch (r.kind) {
            case "A":
                p(i[r.path[n]], r.index, r.item);
                break;
            case "D":
                i[r.path[n]] = r.lhs;
                break;
            case "E":
                i[r.path[n]] = r.lhs;
                break;
            case "N": delete i[r.path[n]];
        }
    } } function h(e, t, r) { if (e && t) {
        var n = function (n) { r && !r(e, t, n) || d(e, t, n); };
        l(e, t, n);
    } } function y(e) { return "color: " + F[e].color + "; font-weight: bold"; } function v(e) { var t = e.kind, r = e.path, n = e.lhs, o = e.rhs, i = e.index, a = e.item; switch (t) {
        case "E": return [r.join("."), n, "→", o];
        case "N": return [r.join("."), o];
        case "D": return [r.join(".")];
        case "A": return [r.join(".") + "[" + i + "]", a];
        default: return [];
    } } function b(e, t, r, n) { var o = c(e, t); try {
        n ? r.groupCollapsed("diff") : r.group("diff");
    }
    catch (e) {
        r.log("diff");
    } o ? o.forEach(function (e) { var t = e.kind, n = v(e); r.log.apply(r, ["%c " + F[t].text, y(t)].concat(P(n))); }) : r.log("—— no diff ——"); try {
        r.groupEnd();
    }
    catch (e) {
        r.log("—— diff end —— ");
    } } function m(e, t, r, n) { switch ("undefined" == typeof e ? "undefined" : N(e)) {
        case "object": return "function" == typeof e[n] ? e[n].apply(e, P(r)) : e[n];
        case "function": return e(t);
        default: return e;
    } } function w(e) { var t = e.timestamp, r = e.duration; return function (e, n, o) { var i = ["action"]; return i.push("%c" + String(e.type)), t && i.push("%c@ " + n), r && i.push("%c(in " + o.toFixed(2) + " ms)"), i.join(" "); }; } function x(e, t) { var r = t.logger, n = t.actionTransformer, o = t.titleFormatter, i = void 0 === o ? w(t) : o, a = t.collapsed, f = t.colors, u = t.level, l = t.diff, c = "undefined" == typeof t.titleFormatter; e.forEach(function (o, s) { var d = o.started, p = o.startedTime, g = o.action, h = o.prevState, y = o.error, v = o.took, w = o.nextState, x = e[s + 1]; x && (w = x.prevState, v = x.started - d); var S = n(g), k = "function" == typeof a ? a(function () { return w; }, g, o) : a, j = D(p), E = f.title ? "color: " + f.title(S) + ";" : "", A = ["color: gray; font-weight: lighter;"]; A.push(E), t.timestamp && A.push("color: gray; font-weight: lighter;"), t.duration && A.push("color: gray; font-weight: lighter;"); var O = i(S, j, v); try {
        k ? f.title && c ? r.groupCollapsed.apply(r, ["%c " + O].concat(A)) : r.groupCollapsed(O) : f.title && c ? r.group.apply(r, ["%c " + O].concat(A)) : r.group(O);
    }
    catch (e) {
        r.log(O);
    } var N = m(u, S, [h], "prevState"), P = m(u, S, [S], "action"), C = m(u, S, [y, h], "error"), F = m(u, S, [w], "nextState"); if (N)
        if (f.prevState) {
            var L = "color: " + f.prevState(h) + "; font-weight: bold";
            r[N]("%c prev state", L, h);
        }
        else
            r[N]("prev state", h); if (P)
        if (f.action) {
            var T = "color: " + f.action(S) + "; font-weight: bold";
            r[P]("%c action    ", T, S);
        }
        else
            r[P]("action    ", S); if (y && C)
        if (f.error) {
            var M = "color: " + f.error(y, h) + "; font-weight: bold;";
            r[C]("%c error     ", M, y);
        }
        else
            r[C]("error     ", y); if (F)
        if (f.nextState) {
            var _ = "color: " + f.nextState(w) + "; font-weight: bold";
            r[F]("%c next state", _, w);
        }
        else
            r[F]("next state", w); l && b(h, w, r, k); try {
        r.groupEnd();
    }
    catch (e) {
        r.log("—— log end ——");
    } }); } function S() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = Object.assign({}, L, e), r = t.logger, n = t.stateTransformer, o = t.errorTransformer, i = t.predicate, a = t.logErrors, f = t.diffPredicate; if ("undefined" == typeof r)
        return function () { return function (e) { return function (t) { return e(t); }; }; }; if (e.getState && e.dispatch)
        return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"), function () { return function (e) { return function (t) { return e(t); }; }; }; var u = []; return function (e) { var r = e.getState; return function (e) { return function (l) { if ("function" == typeof i && !i(r, l))
        return e(l); var c = {}; u.push(c), c.started = O.now(), c.startedTime = new Date, c.prevState = n(r()), c.action = l; var s = void 0; if (a)
        try {
            s = e(l);
        }
        catch (e) {
            c.error = o(e);
        }
    else
        s = e(l); c.took = O.now() - c.started, c.nextState = n(r()); var d = t.diff && "function" == typeof f ? f(r, l) : t.diff; if (x(u, Object.assign({}, t, { diff: d })), u.length = 0, c.error)
        throw c.error; return s; }; }; }; } var k, j, E = function (e, t) { return new Array(t + 1).join(e); }, A = function (e, t) { return E("0", t - e.toString().length) + e; }, D = function (e) { return A(e.getHours(), 2) + ":" + A(e.getMinutes(), 2) + ":" + A(e.getSeconds(), 2) + "." + A(e.getMilliseconds(), 3); }, O = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date, N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e; } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e; }, P = function (e) { if (Array.isArray(e)) {
        for (var t = 0, r = Array(e.length); t < e.length; t++)
            r[t] = e[t];
        return r;
    } return Array.from(e); }, C = []; k = "object" === ("undefined" == typeof commonjsGlobal ? "undefined" : N(commonjsGlobal)) && commonjsGlobal ? commonjsGlobal : "undefined" != typeof window ? window : {}, j = k.DeepDiff, j && C.push(function () { "undefined" != typeof j && k.DeepDiff === c && (k.DeepDiff = j, j = void 0); }), t(n, r), t(o, r), t(i, r), t(a, r), Object.defineProperties(c, { diff: { value: c, enumerable: !0 }, observableDiff: { value: l, enumerable: !0 }, applyDiff: { value: h, enumerable: !0 }, applyChange: { value: d, enumerable: !0 }, revertChange: { value: g, enumerable: !0 }, isConflict: { value: function () { return "undefined" != typeof j; }, enumerable: !0 }, noConflict: { value: function () { return C && (C.forEach(function (e) { e(); }), C = null), c; }, enumerable: !0 } }); var F = { E: { color: "#2196F3", text: "CHANGED:" }, N: { color: "#4CAF50", text: "ADDED:" }, D: { color: "#F44336", text: "DELETED:" }, A: { color: "#2196F3", text: "ARRAY:" } }, L = { level: "log", logger: console, logErrors: !0, collapsed: void 0, predicate: void 0, duration: !1, timestamp: !0, stateTransformer: function (e) { return e; }, actionTransformer: function (e) { return e; }, errorTransformer: function (e) { return e; }, colors: { title: function () { return "inherit"; }, prevState: function () { return "#9E9E9E"; }, action: function () { return "#03A9F4"; }, nextState: function () { return "#4CAF50"; }, error: function () { return "#F20404"; } }, diff: !1, diffPredicate: void 0, transformer: void 0 }, T = function () { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.dispatch, r = e.getState; return "function" == typeof t || "function" == typeof r ? S()({ dispatch: t, getState: r }) : void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n"); }; e.defaults = L, e.createLogger = S, e.logger = T, e.default = T, Object.defineProperty(e, "__esModule", { value: !0 }); });
});
var logger = unwrapExports(reduxLogger);
var configureStore = function (preloadedState) { return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger)); };
var loadPosts = function () { return function (dispatch, _getState) { return __awaiter(_this, void 0, void 0, function () {
    var _d, filters, fetchUrl, baseUrl, posts, response, e_1;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                _d = _getState().dataReducer, filters = _d.filters, fetchUrl = _d.fetchUrl, baseUrl = _d.baseUrl;
                _f.label = 1;
            case 1:
                _f.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios$1.get(baseUrl + fetchUrl, {
                        params: Object.assign({}, filters)
                    })];
            case 2:
                response = _f.sent();
                if (response.status == 200) {
                    posts = (filters.sortBy) ? sorter(filters.sortBy, response.data) : response.data;
                    return [2 /*return*/, dispatch({
                            type: Actions.LOAD_POSTS,
                            payload: posts
                        })];
                }
                return [3 /*break*/, 4];
            case 3:
                e_1 = _f.sent();
                console.log(e_1);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); }; };
var changeFilter = function (data) { return function (dispatch, _getState) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_d) {
        return [2 /*return*/, dispatch({
                type: Actions.CHANGE_FILTER,
                payload: data
            })];
    });
}); }; };
var changeView = function (data) { return function (dispatch, _getState) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_d) {
        return [2 /*return*/, dispatch({
                type: Actions.CHANGE_VIEW,
                payload: data
            })];
    });
}); }; };
var setBase = function (data) { return function (dispatch, _getState) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_d) {
        return [2 /*return*/, dispatch({
                type: Actions.SET_BASE,
                payload: data
            })];
    });
}); }; };
var sortBy$1 = function (data) { return function (dispatch, _getState) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_d) {
        return [2 /*return*/, dispatch({
                type: Actions.SORT_BY,
                payload: data
            })];
    });
}); }; };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) {
        throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) {
            return false;
        }
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {};
        for (var i = 0; i < 10; i++) {
            test2['_' + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') {
            return false;
        }
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {};
        'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join('') !==
            'abcdefghijklmnopqrst') {
            return false;
        }
        return true;
    }
    catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
            if (hasOwnProperty.call(from, key)) {
                to[key] = from[key];
            }
        }
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for (var i = 0; i < symbols.length; i++) {
                if (propIsEnumerable.call(from, symbols[i])) {
                    to[symbols[i]] = from[symbols[i]];
                }
            }
        }
    }
    return to;
};
var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');
function decodeComponents(components, split) {
    try {
        // Try to decode the entire string first
        return decodeURIComponent(components.join(''));
    }
    catch (err) {
        // Do nothing
    }
    if (components.length === 1) {
        return components;
    }
    split = split || 1;
    // Split the array in 2 parts
    var left = components.slice(0, split);
    var right = components.slice(split);
    return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}
function decode(input) {
    try {
        return decodeURIComponent(input);
    }
    catch (err) {
        var tokens = input.match(singleMatcher);
        for (var i = 1; i < tokens.length; i++) {
            input = decodeComponents(tokens, i).join('');
            tokens = input.match(singleMatcher);
        }
        return input;
    }
}
function customDecodeURIComponent(input) {
    // Keep track of all the replacements and prefill the map with the `BOM`
    var replaceMap = {
        '%FE%FF': '\uFFFD\uFFFD',
        '%FF%FE': '\uFFFD\uFFFD'
    };
    var match = multiMatcher.exec(input);
    while (match) {
        try {
            // Decode as big chunks as possible
            replaceMap[match[0]] = decodeURIComponent(match[0]);
        }
        catch (err) {
            var result = decode(match[0]);
            if (result !== match[0]) {
                replaceMap[match[0]] = result;
            }
        }
        match = multiMatcher.exec(input);
    }
    // Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
    replaceMap['%C2'] = '\uFFFD';
    var entries = Object.keys(replaceMap);
    for (var i = 0; i < entries.length; i++) {
        // Replace all decoded components
        var key = entries[i];
        input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
    }
    return input;
}
var decodeUriComponent = function (encodedURI) {
    if (typeof encodedURI !== 'string') {
        throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
    }
    try {
        encodedURI = encodedURI.replace(/\+/g, ' ');
        // Try the built in decoder first
        return decodeURIComponent(encodedURI);
    }
    catch (err) {
        // Fallback to a more advanced decoder
        return customDecodeURIComponent(encodedURI);
    }
};
function parserForArrayFormat(opts) {
    var result;
    switch (opts.arrayFormat) {
        case 'index':
            return function (key, value, accumulator) {
                result = /\[(\d*)\]$/.exec(key);
                key = key.replace(/\[\d*\]$/, '');
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                if (accumulator[key] === undefined) {
                    accumulator[key] = {};
                }
                accumulator[key][result[1]] = value;
            };
        case 'bracket':
            return function (key, value, accumulator) {
                result = /(\[\])$/.exec(key);
                key = key.replace(/\[\]$/, '');
                if (!result) {
                    accumulator[key] = value;
                    return;
                }
                else if (accumulator[key] === undefined) {
                    accumulator[key] = [value];
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
        default:
            return function (key, value, accumulator) {
                if (accumulator[key] === undefined) {
                    accumulator[key] = value;
                    return;
                }
                accumulator[key] = [].concat(accumulator[key], value);
            };
    }
}
function keysSorter(input) {
    if (Array.isArray(input)) {
        return input.sort();
    }
    else if (typeof input === 'object') {
        return keysSorter(Object.keys(input)).sort(function (a, b) {
            return Number(a) - Number(b);
        }).map(function (key) {
            return input[key];
        });
    }
    return input;
}
function extract(str) {
    var queryStart = str.indexOf('?');
    if (queryStart === -1) {
        return '';
    }
    return str.slice(queryStart + 1);
}
function parse(str, opts) {
    opts = objectAssign({ arrayFormat: 'none' }, opts);
    var formatter = parserForArrayFormat(opts);
    // Create an object with no prototype
    // https://github.com/sindresorhus/query-string/issues/47
    var ret = Object.create(null);
    if (typeof str !== 'string') {
        return ret;
    }
    str = str.trim().replace(/^[?#&]/, '');
    if (!str) {
        return ret;
    }
    str.split('&').forEach(function (param) {
        var parts = param.replace(/\+/g, ' ').split('=');
        // Firefox (pre 40) decodes `%3D` to `=`
        // https://github.com/sindresorhus/query-string/pull/37
        var key = parts.shift();
        var val = parts.length > 0 ? parts.join('=') : undefined;
        // missing `=` should be `null`:
        // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
        val = val === undefined ? null : decodeUriComponent(val);
        formatter(decodeUriComponent(key), val, ret);
    });
    return Object.keys(ret).sort().reduce(function (result, key) {
        var val = ret[key];
        if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
            // Sort object keys, not values
            result[key] = keysSorter(val);
        }
        else {
            result[key] = val;
        }
        return result;
    }, Object.create(null));
}
var parseUrl = function (str, opts) {
    return {
        url: str.split('?')[0] || '',
        query: parse(extract(str), opts)
    };
};
var PortfolioApp = /** @class */ (function () {
    function class_5(hostRef) {
        registerInstance(this, hostRef);
        this.filters = 'all';
        this.views = 'map';
        this.acceptedCats = ['all', 'industrial', 'office'];
        this.store = getContext(this, "store");
    }
    class_5.prototype.componentWillLoad = function () {
        this.store.setStore(configureStore({}));
        this.store.mapStateToProps(this, function (state) {
            var _d = state.dataReducer, posts = _d.posts, filters = _d.filters, views = _d.views;
            return {
                posts: posts,
                filters: filters,
                views: views
            };
        });
        this.store.mapDispatchToProps(this, {
            loadPosts: loadPosts,
            changeFilter: changeFilter,
            changeView: changeView,
            setBase: setBase
        });
        this.setBase(this.baseUrl);
        this.checkUrl();
    };
    class_5.prototype.watchBaseUrl = function (_new, _old) {
        if (_new !== _old) {
            this.setBase(_new);
        }
    };
    class_5.prototype.checkUrl = function () {
        return __awaiter(this, void 0, void 0, function () {
            var obj, query;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        obj = parseUrl(window.location.href);
                        query = obj.query;
                        if (!(query && query.category)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.changeCategory(query.category)];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    class_5.prototype.componentDidLoad = function () {
        this.loadPosts();
    };
    class_5.prototype.handleFilter = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.changeCategory(filter)];
                    case 1:
                        _d.sent();
                        this.loadPosts();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_5.prototype.changeCategory = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_d) {
                if (includes(filter, this.acceptedCats)) {
                    this.changeFilter({ "category": filter });
                    this.loadPosts();
                }
                return [2 /*return*/];
            });
        });
    };
    class_5.prototype.handleView = function (view) {
        this.changeView(view);
    };
    class_5.prototype.render = function () {
        return (h(Host, { class: "portfolio-app" }, h("filter-header-bar", { activeFilter: this.filters.category, filter: this.handleFilter.bind(this), view: this.handleView.bind(this) }), h("property-info-bar", null), h("property-filters", null), h("property-listings", { class: this.views, view: this.views, posts: this.posts })));
    };
    Object.defineProperty(class_5, "watchers", {
        get: function () {
            return {
                "baseUrl": ["watchBaseUrl"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_5, "style", {
        get: function () { return "p{margin:0 0 20px;font-size:16px;line-height:26px;color:grey}p:last-child{margin:0}h1{font-size:40px;letter-spacing:3.5px;font-weight:800;text-transform:uppercase;text-align:center;padding:0;margin-top:0;margin-bottom:15px}h2{font-size:32px;line-height:1;margin-bottom:5px;margin-top:20px}h3,h4{font-size:15px;margin-bottom:0}h3,h4,h5{margin-top:0;text-transform:uppercase}h5{margin-bottom:5px;font-size:22px}.danzerpress-button-left{margin-right:15px}\@media screen and (max-width:767px){.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}\@media screen and (max-width:767px){.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}}.danzerpress-col-1,.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{width:100%;position:relative;margin-bottom:20px;padding:0 15px}.danzerpress-col-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.danzerpress-col-2{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.danzerpress-col-3{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.danzerpress-col-4{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.danzerpress-col-5{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}a,input,li,p,textarea,ul{font-family:Open Sans,sans-serif}h1,h2,h3,h4,h5,h6{font-family:Raleway,sans-serif;font-weight:600;color:#333}html{-webkit-box-sizing:border-box;box-sizing:border-box;-ms-overflow-style:scrollbar;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}html .main-content{-ms-flex:1 0 auto;flex:1 0 auto}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}"; },
        enumerable: true,
        configurable: true
    });
    return class_5;
}());
var PropertyCard = /** @class */ (function () {
    function class_6(hostRef) {
        registerInstance(this, hostRef);
        this.activePostId = false;
    }
    class_6.prototype.getPostTitle = function () {
        if (this.postData.meta.post_title_or_address && this.postData.meta.post_title_or_address[0] == '1' || !this.postData.meta.address) {
            return this.postData.post_title;
        }
        else {
            return this.postData.meta.address[0];
        }
    };
    class_6.prototype.render = function () {
        var Card = (h("div", { class: "property-card" + ((this.postData.ID == this.activePostId) ? ' active' : '') }, h("div", { class: "property-card-content-wrap" }, h("div", { class: "property-image-wrap" }, h("img", { src: this.postData.thumbnail })), h("div", { class: "property-content" }, h("div", { class: "property-content-wrap" }, h("span", { class: "property-title" }, h("div", { class: "property-address" }, this.getPostTitle(), ","), " ", this.postData.meta.city[0], " ", this.postData.meta.state_code[0], " ", this.postData.meta.zip_code[0]), h("p", null, h("span", null, "Region:"), "  ", this.postData.meta.region[0]), h("p", null, h("span", null, "Submarket:"), "  ", this.postData.meta.sub_market[0]), h("p", null, h("span", null, "Project Type:"), "  ", this.postData.categories[0].name), h("p", null, h("span", null, "Total SQ FT:"), "  ", new Intl.NumberFormat().format(this.postData.meta.sq_ft[0])), h("a", { class: "post-link", href: this.postData.link }, "View Details"))))));
        if (this.view == 'grid') {
            return (h("a", { href: this.postData.link }, Card));
        }
        return Card;
    };
    Object.defineProperty(class_6, "style", {
        get: function () { return "p{margin:0 0 20px;font-size:16px;line-height:26px;color:grey}p:last-child{margin:0}h1{font-size:40px;letter-spacing:3.5px;font-weight:800;text-transform:uppercase;text-align:center;padding:0;margin-top:0;margin-bottom:15px}h2{font-size:32px;line-height:1;margin-bottom:5px;margin-top:20px}h3,h4{font-size:15px;margin-bottom:0}h3,h4,h5{margin-top:0;text-transform:uppercase}h5{margin-bottom:5px;font-size:22px}.danzerpress-button-left{margin-right:15px}\@media screen and (max-width:1024px){property-card .property-card .property-card-content-wrap .property-content,property-card .property-card .property-card-content-wrap .property-image-wrap{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}\@media screen and (max-width:767px){.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}\@media screen and (max-width:767px){.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}}.danzerpress-col-1,.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5,card-list.grid .property-card .property-card-content-wrap .property-content,card-list.grid .property-card .property-card-content-wrap .property-image-wrap,property-card,property-card .property-card .property-card-content-wrap .property-content,property-card .property-card .property-card-content-wrap .property-image-wrap{width:100%;position:relative;margin-bottom:20px;padding:0 15px}.danzerpress-col-1,card-list.grid .property-card .property-card-content-wrap .property-content,card-list.grid .property-card .property-card-content-wrap .property-image-wrap,property-card{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.danzerpress-col-2{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.danzerpress-col-3{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.danzerpress-col-4{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.danzerpress-col-5{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}property-card .property-card .property-card-content-wrap .property-image-wrap{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}property-card .property-card .property-card-content-wrap .property-content{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}property-card .property-card .property-card-content-wrap{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}card-list.grid .property-card .property-card-content-wrap .property-content,card-list.grid .property-card .property-card-content-wrap .property-image-wrap,property-card,property-card .property-card .property-card-content-wrap .property-content,property-card .property-card .property-card-content-wrap .property-image-wrap{padding:0;margin:0}a,input,li,p,textarea,ul{font-family:Open Sans,sans-serif}h1,h2,h3,h4,h5,h6{font-family:Raleway,sans-serif;font-weight:600;color:#333}html{-webkit-box-sizing:border-box;box-sizing:border-box;-ms-overflow-style:scrollbar;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}html .main-content{-ms-flex:1 0 auto;flex:1 0 auto}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}property-card .property-card.active .property-card-content-wrap{background:#b4bfc8}property-card .property-card .property-card-content-wrap{padding:15px}property-card .property-card .property-card-content-wrap .property-content,property-card .property-card .property-card-content-wrap .property-image-wrap{-webkit-box-shadow:0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.23)}\@media screen and (max-width:1300px){property-card .property-card .property-card-content-wrap .property-image-wrap{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}property-card .property-card .property-card-content-wrap .property-image-wrap img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}\@media screen and (max-width:1300px){property-card .property-card .property-card-content-wrap .property-content{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}property-card .property-card .property-card-content-wrap .property-content .property-content-wrap{background:#fff;padding:20px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}property-card .property-card .property-card-content-wrap .property-content .property-content-wrap .property-title{font-size:23px;font-family:Roboto,sans-serif;color:#11284a;margin-bottom:6px;display:block;font:400 23px/30px Roboto;letter-spacing:.92px}property-card .property-card .property-card-content-wrap .property-content .property-content-wrap span{color:#11284a;font-size:16px;font-weight:700;font-style:italic}property-card .property-card .property-card-content-wrap .property-content .property-content-wrap p:not(:last-child){margin-bottom:7px;color:#7c8388}property-card .property-card .property-card-content-wrap .property-content .property-content-wrap .post-link{color:#11284a;font-weight:600;font-style:italic;font-family:Roboto,sans-serif;text-decoration:none;border-bottom:1px solid #11284a;padding-bottom:3px;margin-top:10px;display:inline-block;-ms-flex-item-align:end;align-self:flex-end}card-list.grid .property-card .property-card-content-wrap{padding:0}card-list.grid .property-card .property-card-content-wrap .property-image-wrap{max-height:360px;min-height:360px}card-list.grid .property-card .property-card-content-wrap .property-content span.property-title:before{content:\"\";height:3px;background:#11284a;width:40px;display:block;margin-bottom:7px}card-list.grid .property-card .property-card-content-wrap .property-content .post-link{display:none}"; },
        enumerable: true,
        configurable: true
    });
    return class_6;
}());
var PropertyFilters = /** @class */ (function () {
    function class_7(hostRef) {
        registerInstance(this, hostRef);
        this.posts = [];
        this.modal = false;
        this.regions = [];
        this.sortByInfo = {
            "alpha_asc": "Alphabetical ASC",
            "alpha_dsc": "Alphabetical DSC",
            "sqft_asc": "Square Feet ASC",
            "sqft_dsc": "Square Feet DSC"
        };
        this.store = getContext(this, "store");
    }
    class_7.prototype.componentDidLoad = function () {
        this.store.mapStateToProps(this, function (state) {
            var _d = state.dataReducer, filters = _d.filters, posts = _d.posts, baseUrl = _d.baseUrl;
            return {
                filters: filters, posts: posts, baseUrl: baseUrl
            };
        });
        this.store.mapDispatchToProps(this, {
            changeFilter: changeFilter,
            loadPosts: loadPosts,
            sortBy: sortBy$1
        });
        this.getRegions();
    };
    class_7.prototype.getRegions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, axios$1.get(this.baseUrl + '/wp-json/bixby/v1/properties/regions')];
                    case 1:
                        response = _d.sent();
                        return [2 /*return*/, this.regions = response.data];
                }
            });
        });
    };
    class_7.prototype.handleSearch = function (e) {
        var value = e.target.value;
        this.changeFilter({ "search": value });
        // if (value.length >= 3) {
        this.loadPosts();
        // }
    };
    class_7.prototype.handleRegion = function (e) {
        this.changeFilter({ "region": e.target.value });
        this.loadPosts();
    };
    class_7.prototype.handleSqFeet = function (_values, _handle, _unencoded, _tap, _positions) {
        var roundNumbers = _unencoded.map(function (number) { return Math.round(number); });
        this.changeFilter({ "sqFootage": roundNumbers });
        this.loadPosts();
    };
    class_7.prototype.getSortBy = function () {
        var options = [];
        for (var key in this.sortByInfo) {
            options.push((h("option", { value: key }, this.sortByInfo[key])));
        }
        return options;
    };
    class_7.prototype.handleSortBy = function (e) {
        var value = e.target.value;
        this.sortBy({
            'posts': sorter(value, this.posts),
            'sortBy': value
        });
    };
    class_7.prototype.handleResetFilters = function () {
        var isEmpty$1 = function (x) { return isEmpty(x) === true; };
        var result = reject(isEmpty$1, this.filters);
        if (!isEmpty(result)) {
            this.changeFilter({});
            this.loadPosts();
        }
    };
    class_7.prototype.render = function () {
        var _this = this;
        return [
            h("div", { class: "property-filters" + ((this.modal) ? ' modal-state' : '') }, h("span", { class: "property-count-wrap" }, h("div", { class: "result-header" }, "Property Results"), h("span", { class: "property-count" }, this.posts.length), " properties match your results"), (this.modal) && (h("span", { class: "filter-title" }, "Filter")), h("input", { onChange: function (e) { return _this.handleSearch(e); }, type: "text", value: (this.filters && this.filters.search) ? this.filters.search : '', placeholder: "Search properties by address", class: "search" }), h("select", { name: "regions", class: "dropdown", onChange: function (e) { return _this.handleRegion(e); } }, h("option", { selected: (this.filters && this.filters.region) ? false : true, disabled: true }, "Regions"), this.regions.map(function (region) { return h("option", { value: region.meta_value }, region.meta_value); })), h("no-ui-slider-wrapper", { start: (this.filters && this.filters.sqFootage) ? this.filters.sqFootage : [0, 100], callback: this.handleSqFeet.bind(this) }, h("slot", { name: "title" }, "Square Footage")), h("select", { name: "sortby", class: "dropdown", onChange: function (e) { return _this.handleSortBy(e); } }, h("option", { selected: (this.filters && this.filters.sortBy) ? false : true, disabled: true }, "SortBy"), this.getSortBy()), h("button", { onClick: function () { (_this.modal) ? _this.modal = !_this.modal : _this.handleResetFilters(); }, class: "reset-button" }, (this.modal) ? 'Apply' : 'Reset Filters'), h("div", { class: "modal-close-button", onClick: function () { _this.modal = !_this.modal; } }, "X")),
            h("div", { class: "modal-button", onClick: function () { return _this.modal = !_this.modal; } }, "Filter Results (", this.posts.length, ")")
        ];
    };
    Object.defineProperty(class_7, "style", {
        get: function () { return "p{margin:0 0 20px;font-size:16px;line-height:26px;color:grey}p:last-child{margin:0}h1{font-size:40px;letter-spacing:3.5px;font-weight:800;text-transform:uppercase;text-align:center;padding:0;margin-top:0;margin-bottom:15px}h2{font-size:32px;line-height:1;margin-bottom:5px;margin-top:20px}h3,h4{font-size:15px;margin-bottom:0}h3,h4,h5{margin-top:0;text-transform:uppercase}h5{margin-bottom:5px;font-size:22px}.danzerpress-button-left{margin-right:15px}\@media screen and (max-width:767px){.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}\@media screen and (max-width:767px){.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}}.danzerpress-col-1,.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{width:100%;position:relative;margin-bottom:20px;padding:0 15px}.danzerpress-col-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.danzerpress-col-2{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.danzerpress-col-3{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.danzerpress-col-4{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.danzerpress-col-5{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}a,input,li,p,textarea,ul{font-family:Open Sans,sans-serif}h1,h2,h3,h4,h5,h6{font-family:Raleway,sans-serif;font-weight:600;color:#333}html{-webkit-box-sizing:border-box;box-sizing:border-box;-ms-overflow-style:scrollbar;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}html .main-content{-ms-flex:1 0 auto;flex:1 0 auto}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}.property-filters{font-family:Roboto,sans-serif;padding:45px 15px;max-width:1300px;margin:auto;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;-webkit-transition:1s;transition:1s}.property-filters .modal-close-button{display:none}.property-filters.modal-state{background:#00264b;top:0;opacity:1}.property-filters.modal-state .modal-close-button{display:block;position:absolute;top:20px;right:20px;color:#fff;cursor:pointer}.property-filters .result-header{font-size:20px;font-weight:700;text-transform:uppercase;letter-spacing:1.6px;color:#00264b}.property-filters .property-count-wrap{color:#7c8388;font-size:20px;letter-spacing:1.2px;max-width:225px}.property-filters .search{-ms-flex-positive:1;flex-grow:1}.property-filters .reset-button,.property-filters input,.property-filters no-ui-slider-wrapper,.property-filters select{margin:0 10px;min-height:59px}.property-filters input,.property-filters select{padding:19px 16px;border:none;-webkit-appearance:none;-moz-appearance:none;background:#fff 0 0 no-repeat padding-box;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.23);border-radius:5px;opacity:1}.property-filters input,.property-filters input::-webkit-input-placeholder,.property-filters select{font:Regular 15px/20px Roboto;letter-spacing:.9px;color:#11284a}.property-filters input,.property-filters input::-moz-placeholder,.property-filters select{font:Regular 15px/20px Roboto;letter-spacing:.9px;color:#11284a}.property-filters input,.property-filters input:-ms-input-placeholder,.property-filters select{font:Regular 15px/20px Roboto;letter-spacing:.9px;color:#11284a}.property-filters input,.property-filters input::-ms-input-placeholder,.property-filters select{font:Regular 15px/20px Roboto;letter-spacing:.9px;color:#11284a}.property-filters input,.property-filters input::placeholder,.property-filters select{font:Regular 15px/20px Roboto;letter-spacing:.9px;color:#11284a}.property-filters .dropdown{min-width:150px;background-image:url(data:image/svg;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAeCAYAAADZ7LXbAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAKRJREFUeNrs1TEKwkAQheEvIoI2nsk7qFdIq1hoJ3gCC5sUVpY23sDKXnvrYOUBbGITG0kQjQriPlgYhmF/3ryFjbIs82nVfEEBEiAB8k+Q+q1IkqSDNVq4lMy3scIkjuP0FSdbjNHMLys6OwyQVlnXEsOS2QP6OL8jkzlmd70jus86eBT8FIu8PqGXg6oFX6ARGthgX+V1ReFnDJAACZAfhFwHAJI7HF2lZGQaAAAAAElFTkSuQmCC);background-position:100%;background-repeat:no-repeat}.property-filters .reset-button{padding:19px 17px;font:Regular 15px/20px Roboto;letter-spacing:.9px;color:#fff;background:#11284a 0 0 no-repeat padding-box;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.23);border-radius:5px;opacity:1;border:none}.property-filters .double-slider{-ms-flex:1;flex:1}\@media screen and (max-width:1024px){.property-filters{-ms-flex-direction:column;flex-direction:column;max-width:100%;opacity:0;top:-100vh;position:fixed;width:100vw;left:50%;right:50%;margin-left:-50vw;margin-right:-50vw;height:100vh;z-index:999;display:block;padding:69px 30px}.property-filters .property-count-wrap{display:none}.property-filters .filter-title,.property-filters input::-webkit-input-placeholder,.property-filters slot-fb[name=title]{font:600 20px/30px Roboto;letter-spacing:1.2px;color:#b4bfc8;opacity:1;text-transform:uppercase}.property-filters .filter-title,.property-filters input::-moz-placeholder,.property-filters slot-fb[name=title]{font:600 20px/30px Roboto;letter-spacing:1.2px;color:#b4bfc8;opacity:1;text-transform:uppercase}.property-filters .filter-title,.property-filters input:-ms-input-placeholder,.property-filters slot-fb[name=title]{font:600 20px/30px Roboto;letter-spacing:1.2px;color:#b4bfc8;opacity:1;text-transform:uppercase}.property-filters .filter-title,.property-filters input::-ms-input-placeholder,.property-filters slot-fb[name=title]{font:600 20px/30px Roboto;letter-spacing:1.2px;color:#b4bfc8;opacity:1;text-transform:uppercase}.property-filters .filter-title,.property-filters input::placeholder,.property-filters slot-fb[name=title]{font:600 20px/30px Roboto;letter-spacing:1.2px;color:#b4bfc8;opacity:1;text-transform:uppercase}.property-filters .filter-title{margin-bottom:50px;display:block}.property-filters slot-fb[name=title]{margin:50px 0 30px 0}.property-filters input,.property-filters no-ui-slider-wrapper,.property-filters select{background:transparent;color:#fff;font:500 16px/20px Roboto;letter-spacing:1.92px;color:#b4bfc8;opacity:1;width:100%;margin:0 0 20px 0;-webkit-box-shadow:none;box-shadow:none;padding-left:0}.property-filters no-ui-slider-wrapper #double-slider.noUi-horizontal{-webkit-box-shadow:none;box-shadow:none;background:#3d4d64;margin:0;width:100%;max-width:100%}.property-filters no-ui-slider-wrapper #double-slider.noUi-horizontal .noUi-tooltip{background:#3d4d64;border-radius:100%;width:36px;height:36px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.property-filters .noUi-horizontal .noUi-handle{top:1px}.property-filters no-ui-slider-wrapper #double-slider .noUi-connect{background:#fff}.property-filters input,.property-filters select{border-bottom:.25px solid #fff;border-radius:0}.property-filters .reset-button{background:#fff 0 0 no-repeat padding-box;border:1px solid #707070;border-radius:5px;display:block;width:100%;font:500 16px/20px Roboto;letter-spacing:1.92px;color:#000;opacity:1;text-transform:uppercase}}.modal-button{display:none}\@media screen and (max-width:1024px){.modal-button{display:block;text-align:left;font:500 12px/20px Roboto;letter-spacing:1.44px;color:#11284a;opacity:1;text-transform:uppercase;margin:35px 15px;cursor:pointer}}"; },
        enumerable: true,
        configurable: true
    });
    return class_7;
}());
var PropertyInfoBar = /** @class */ (function () {
    function class_8(hostRef) {
        registerInstance(this, hostRef);
        this.posts = [];
        this.filters = {
            "category": ""
        };
        this.store = getContext(this, "store");
    }
    class_8.prototype.watchPosts = function (_newValue, _oldValue) {
        var _this = this;
        this.category = _newValue.category;
        axios$1.get(this.baseUrl + '/wp-json/bixby/v1/properties/category-info', {
            params: {
                'category': _newValue.category
            }
        }).then(function (res) {
            _this.posts = res.data;
        });
    };
    class_8.prototype.componentDidLoad = function () {
        this.store.mapStateToProps(this, function (state) {
            var _d = state.dataReducer, baseUrl = _d.baseUrl, filters = _d.filters;
            return {
                baseUrl: baseUrl, filters: filters
            };
        });
    };
    class_8.prototype.countPosts = function () {
        return this.posts.length;
    };
    class_8.prototype.getSQFT = function () {
        var sqFootSum = sum(map(function (postData) { return postData.sq_ft; }, this.posts));
        return formatLargeNumber(sqFootSum);
    };
    class_8.prototype.getPrice = function () {
        var priceSum = sum(map(function (postData) { return postData.price; }, this.posts));
        return formatLargeNumber(priceSum);
    };
    class_8.prototype.render = function () {
        return (h("div", { class: "property-info-bar" }, h("div", { class: "property-info-bar-wrap" }, h("span", { class: "property-count-wrap" }, h("div", { class: "property-info-header" }, this.category, " Properties"), h("span", { class: "property-info-subheader" }, "Completed or Underway")), this.countPosts() != 0 ?
            h("div", { class: "property-info-stats" }, h("span", { class: "number-wrap" }, this.countPosts()), "Properties") : '', this.getSQFT() != 0 ?
            h("div", { class: "property-info-stats" }, h("span", { class: "number-wrap" }, this.getSQFT()), "Square Feet") : '', this.getPrice() != 0 ?
            h("div", { class: "property-info-stats" }, h("span", { class: "number-wrap" }, this.getPrice()), "Value") : '')));
    };
    Object.defineProperty(class_8, "watchers", {
        get: function () {
            return {
                "filters": ["watchPosts"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(class_8, "style", {
        get: function () { return "p{margin:0 0 20px;font-size:16px;line-height:26px;color:grey}p:last-child{margin:0}h1{font-size:40px;letter-spacing:3.5px;font-weight:800;text-transform:uppercase;text-align:center;padding:0;margin-top:0;margin-bottom:15px}h2{font-size:32px;line-height:1;margin-bottom:5px;margin-top:20px}h3,h4{font-size:15px;margin-bottom:0}h3,h4,h5{margin-top:0;text-transform:uppercase}h5{margin-bottom:5px;font-size:22px}.danzerpress-button-left{margin-right:15px}\@media screen and (max-width:767px){.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}\@media screen and (max-width:767px){.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}}.danzerpress-col-1,.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{width:100%;position:relative;margin-bottom:20px;padding:0 15px}.danzerpress-col-1{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.danzerpress-col-2{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.danzerpress-col-3{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.danzerpress-col-4{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.danzerpress-col-5{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}a,input,li,p,textarea,ul{font-family:Open Sans,sans-serif}h1,h2,h3,h4,h5,h6{font-family:Raleway,sans-serif;font-weight:600;color:#333}html{-webkit-box-sizing:border-box;box-sizing:border-box;-ms-overflow-style:scrollbar;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}html .main-content{-ms-flex:1 0 auto;flex:1 0 auto}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}.property-info-bar-wrap{max-width:1300px;margin:auto;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.property-info-bar{padding:30px 80px;background:#11284a 0 0 no-repeat padding-box;-webkit-box-shadow:0 3px 6px rgba(0,0,0,.23);box-shadow:0 3px 6px rgba(0,0,0,.23)}\@media screen and (max-width:950px){.property-info-bar{padding:30px 40px}}.property-info-bar .property-info-stats{font:600 Italic 24px/32px Roboto;letter-spacing:1.44px;color:#b4bfc8;opacity:1;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}\@media screen and (max-width:950px){.property-info-bar .property-info-stats{-ms-flex-direction:column;flex-direction:column;letter-spacing:1.44px;font:700 Italic 12px/16px Roboto;letter-spacing:.72px}}.property-info-bar .property-info-header,.property-info-bar .property-info-stats{text-transform:uppercase}.property-info-bar .property-info-header{text-align:left;font:700 Italic 24px/32px Roboto;letter-spacing:1.44px;color:#fff;opacity:1}\@media screen and (max-width:950px){.property-info-bar .property-info-header{-ms-flex-direction:column;flex-direction:column;letter-spacing:1.44px;font:700 Italic 12px/16px Roboto;letter-spacing:.72px}}.property-info-bar .property-info-subheader{text-align:left;font:400 20px/26px Roboto;letter-spacing:1.2px;color:#fff;opacity:1}\@media screen and (max-width:950px){.property-info-bar .property-info-subheader{-ms-flex-direction:column;flex-direction:column;letter-spacing:1.44px;font:400 10px/13px Roboto;letter-spacing:.72px}}.property-info-bar .number-wrap{font:400 74px/90px Roboto;letter-spacing:4.44px;color:#fff;opacity:1;margin-right:10px}\@media screen and (max-width:950px){.property-info-bar .number-wrap{font:500 24px/90px Roboto;margin:0;max-height:65px;line-height:1}}"; },
        enumerable: true,
        configurable: true
    });
    return class_8;
}());
var PropertyListings = /** @class */ (function () {
    function class_9(hostRef) {
        registerInstance(this, hostRef);
        this.activePostId = null;
    }
    class_9.prototype.handleMarker = function (_e, markerObj) {
        this.activePostId = markerObj.ID;
    };
    class_9.prototype.handleCard = function (post) {
        this.activePostId = post.ID;
    };
    class_9.prototype.render = function () {
        return (h(Host, null, this.view === 'map' && (h("google-map", { posts: this.posts, handleMarker: this.handleMarker.bind(this), activePostId: this.activePostId })), h("card-list", { class: this.view, handleCard: this.handleCard.bind(this), activePostId: this.activePostId, posts: this.posts })));
    };
    Object.defineProperty(class_9, "style", {
        get: function () { return "p{margin:0 0 20px;font-size:16px;line-height:26px;color:grey}p:last-child{margin:0}h1{font-size:40px;letter-spacing:3.5px;font-weight:800;text-transform:uppercase;text-align:center;padding:0;margin-top:0;margin-bottom:15px}h2{font-size:32px;line-height:1;margin-bottom:5px;margin-top:20px}h3,h4{font-size:15px;margin-bottom:0}h3,h4,h5{margin-top:0;text-transform:uppercase}h5{margin-bottom:5px;font-size:22px}.danzerpress-button-left{margin-right:15px}\@media screen and (max-width:1024px){property-listings card-list.map,property-listings google-map{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}\@media screen and (max-width:767px){.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}\@media screen and (max-width:767px){.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}}.danzerpress-col-1,.danzerpress-col-2,.danzerpress-col-3,.danzerpress-col-4,.danzerpress-col-5,property-listings card-list.grid,property-listings card-list.map,property-listings google-map{width:100%;position:relative;margin-bottom:20px;padding:0 15px}.danzerpress-col-1,property-listings card-list.grid{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}.danzerpress-col-2{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.danzerpress-col-3{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}.danzerpress-col-4{-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.danzerpress-col-5{-ms-flex:0 0 20%;flex:0 0 20%;max-width:20%}property-listings card-list.map{-ms-flex:0 0 33.333333%;flex:0 0 33.333333%;max-width:33.333333%}property-listings google-map{-ms-flex:0 0 66.666667%;flex:0 0 66.666667%;max-width:66.666667%}property-listings{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}a,input,li,p,textarea,ul{font-family:Open Sans,sans-serif}h1,h2,h3,h4,h5,h6{font-family:Raleway,sans-serif;font-weight:600;color:#333}html{-webkit-box-sizing:border-box;box-sizing:border-box;-ms-overflow-style:scrollbar;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%}html .main-content{-ms-flex:1 0 auto;flex:1 0 auto}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}property-listings card-list{display:inherit;-ms-flex-wrap:wrap;flex-wrap:wrap}property-listings card-list.map{max-height:500px;overflow:scroll}\@media screen and (max-width:1300px){property-listings card-list.map{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}property-listings card-list.grid{max-width:1300px;margin:auto;padding:0}\@media screen and (max-width:1300px){property-listings google-map{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}}property-listings google-map #map{width:100%;min-height:500px}\@media screen and (max-width:900px){property-listings google-map #map{min-height:300px}}"; },
        enumerable: true,
        configurable: true
    });
    return class_9;
}());
export { CardList as card_list, FilterHeaderBar as filter_header_bar, GoogleMap as google_map, NoUiSliderWrapper as no_ui_slider_wrapper, PortfolioApp as portfolio_app, PropertyCard as property_card, PropertyFilters as property_filters, PropertyInfoBar as property_info_bar, PropertyListings as property_listings };
