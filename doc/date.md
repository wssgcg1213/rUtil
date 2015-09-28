## date
date提供了获取当前时间戳和格式化指定日期的方法

### 示例代码
js

```javascript
	var date = RU.date;
	var d = new Date();
	var ds = date.format(d,'yy-MM-dd'); //2014-05-03
	var dnow = date.now(); //返回当前时间戳，如：1403104207894
```

### 接口列表

```javascript

	/**
	 * 日期格式化方法
	 *
	 * @memberof RU.date
	 * @param {!Date} date - 日期对象
	 * @param {?String} formatter - 指定格式化格式 格式说明 y代表年份，M代表月份，d代表天数，h代表时，m代表分，s代表秒
	 *
	 * @returns {String} - 如果传入格式错误，则返回Invalid Date字符串
	 *
	 * @desc 日期格式化方法
	 *
	 * @example
	 * var d = new Date();
	 * var ds = RU.date.format(d,'yy-MM-dd'); //2014-05-03
	 * var ds = RU.date.format(d,'yy/M/d'); //2014/5/3
	 * var ds = RU.date.format(d,'yy/MM/d hh:mm:ss'); //2014/5/3 18:31:24
	 */
	format: function (date, formatter)

	/**
	 * 当前时间时间戳
	 *
	 * @memberof RU.date
	 *
	 * @returns {Number}
	 *
	 * @desc 当前时间时间戳
	 *
	 * @example
	 * var nowStamp= RU.date.now();
	 */
	now: function ()
```

