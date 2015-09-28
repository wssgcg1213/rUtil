## store

store 模块是给 localStorage 加的一层套

tip: 使用前判断RU.store.enabled

### 示例代码
```
RU.store.set('username', 'marcus')
RU.store.get('username')
RU.store.remove('username')

// Clear all keys
RU.store.clear()

// 直接存对象直接量, 会用JSON.stringify格式化
RU.store.set('user', { name: 'marcus', likes: 'javascript' })

// 直接取对象直接量, 会用JSON.parse格式化
RU.store.get('user')

// 获取所有数据
RU.store.getAll().user.name == 'marcus'

// 遍历所有存入的数据
RU.store.forEach(function(key, val) {
    console.log(key, '==', val)
})
```