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

module.exports = store