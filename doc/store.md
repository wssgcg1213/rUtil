## store

store.js uses localStorage when available, and falls back on the userData behavior in IE6 and IE7. No flash to slow down your page load. No cookies to fatten your network requests.

store.js depends on JSON for serialization to disk.

### 示例代码
```
// Store 'marcus' at 'username'
RU.store.set('username', 'marcus')

// Get 'username'
RU.store.get('username')

// Remove 'username'
RU.store.remove('username')

// Clear all keys
RU.store.clear()

// Store an object literal - store.js uses JSON.stringify under the hood
RU.store.set('user', { name: 'marcus', likes: 'javascript' })

// Get the stored object - store.js uses JSON.parse under the hood
var user = RU.store.get('user')
alert(user.name + ' likes ' + user.likes)

// Get all stored values
RU.store.getAll().user.name == 'marcus'

// Loop over all stored values
RU.store.forEach(function(key, val) {
    console.log(key, '==', val)
})
```