window.RU = window.RU||{};
(function(){
/**
 *
 * date 日期格式
 *
 * @memberof AJ
 *
 * @author 雷骏
 * @version 1.0.0
 *
 * */
var date = {
    /**
     * 日期格式化方法
     *
     * @param {?Date|Number} date - 日期对象（或时间戳）
     * @param {?String} formatter - 指定格式化格式 格式说明 y代表年份，M代表月份，d代表天数，h代表时，m代表分，s代表秒
     *
     * @returns {String} - 如果传入格式错误，则返回Invalid Date字符串
     *
     * @desc 日期格式化方法
     * @example
     * var d = new Date();
     * var ds = AJ.date.format(d,'yy-MM-dd'); //2014-05-03
     * var ds = AJ.date.format('yy/M/d'); //2014/5/3（不传date，默认去当前)
     * var ds = AJ.date.format(d.getTime(),'yy/M/d'); //2014/5/3（传入时间戳)
     * var ds = AJ.date.format(d); //2014/5/3 18:31:24（不传formatter）
     * var ds = AJ.date.format(); //2014/5/3 18:31:24（不传date和formatter
     *
     */
    format: function () {
        var date, formatter;
        if (arguments.length === 0) {
            date = new Date();
            formatter = 'yyyy-MM-dd hh:mm:ss';
        } else if (arguments.length === 1) {
            if (typeof arguments[0] === 'string') {
                date = new Date();
                formatter = arguments[0];
            } else {
                date = arguments[0];
                if (typeof date === 'number') {
                    var tmpDate = new Date();
                    tmpDate.setTime(date);
                    date = tmpDate;
                }
                formatter = 'yyyy-MM-dd hh:mm:ss';
            }
        } else {
            date = arguments[0];
            formatter = arguments[1];
        }
        if (typeof date === 'number') {
            var tmpDate = new Date();
            tmpDate.setTime(date);
            date = tmpDate;
        }
        if(date == 'Invalid Date'){
            return 'Invalid Date';
        }
        if (typeof arguments)
            var z = {
                y: date.getFullYear(),
                M: date.getMonth() + 1,
                d: date.getDate(),
                h: date.getHours(),
                m: date.getMinutes(),
                s: date.getSeconds()
            };
        return formatter.replace(/([yMdhms])+/g, function (v, t) {
            switch (t) {
                case 'y':
                    return z[t].toString().slice(-v.length);
                default:
                    return ((v.length > 1 ? '0' : '') + z[t]).slice(-2);
            }
        });
    },
    /**
     * 当前时间时间戳
     *
     *
     * @returns {Number}
     *
     * @desc 当前时间时间戳
     *
     * @example
     * var nowStamp= AJ.date.now();
     */
    now: function () {
        if (!Date.now) {
            return Date.now();
        } else {
            return (new Date).getTime();
        }
    }
};
window.RU.date = date;
})();
window.RU = window.RU||{};
(function(){
/**
 * Created at 15/9/29.
 * @Author Ling.
 * Modified from store.js
 * @Email i@zeroling.com
 */

// Store.js
var store = {},
    win = window,
    doc = win.document,
    localStorageName = 'localStorage',
    storage


store.set = function(key, value) {}
store.get = function(key, defaultVal) {}
store.has = function(key) { return store.get(key) !== undefined }
store.remove = function(key) {}
store.clear = function() {}
store.transact = function(key, defaultVal, transactionFn) {
    if (transactionFn == null) {
        transactionFn = defaultVal
        defaultVal = null
    }
    if (defaultVal == null) {
        defaultVal = {}
    }
    var val = store.get(key, defaultVal)
    transactionFn(val)
    store.set(key, val)
}

store.getAll = function() {}
store.forEach = function() {}

store.serialize = function(value) {
    return JSON.stringify(value)
}

store.deserialize = function(value) {
    if (typeof value != 'string') { return undefined }
    try { return JSON.parse(value) }
    catch(e) { return value || undefined }
}

store.enabled = (function () {
    try { return (localStorageName in win && win[localStorageName]) }
    catch(err) { return false }
})()

storage = win[localStorageName]

store.set = function(key, val) {
    if (val === undefined) { return store.remove(key) }
    storage.setItem(key, store.serialize(val))
    return val
}
store.get = function(key, defaultVal) {
    var val = store.deserialize(storage.getItem(key))
    return (val === undefined ? defaultVal : val)
}
store.remove = function(key) { storage.removeItem(key) }
store.clear = function() { storage.clear() }
store.getAll = function() {
    var ret = {}
    store.forEach(function(key, val) {
        ret[key] = val
    })
    return ret
}
store.forEach = function(callback) {
    for (var i=0; i<storage.length; i++) {
        var key = storage.key(i)
        callback(key, store.get(key))
    }
}

window.RU.store = store
})();