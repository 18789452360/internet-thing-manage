/**
 * string字符串操作工具类
 * @authors jp
 * @date    2018-02-05
 */

var trim,
    changeCase,
    checkPwd,
    filterTag,
    getRandomString;
  /**
   * 去除空格
   * @param    {str}
   * @param    {type} 1-所有空格 2-前后空格 3-前空格 4-后空格
   * @return   {String}
   */
  trim = (str, type) => {
    type = type || 1
    switch (type) {
    	case 1:
    	  return str.replace(/\s+/g, "")
    	case 2:
    	  return str.replace(/(^\s*)|(\s*$)/g, "")
    	case 3:
    	  return str.replace(/(^\s*)/g, "")
    	case 4:
    	  return str.replace(/(\s*$)/g, "")
    	default:
    	  return str
    }
  };
  /**
   * 转换大小写
   * @param    {str}
   * @param    {type} 1-首字母大写  2-首字母小写  3-大小写转换  4-全部大写   5-全部小写
   * @return   {[type]}
   */
  changeCase = (str, type) => {
    type = type || 4
    switch (type) {
    	case 1:
	    	return str.replace(/\b\w+\b/g, function (word) {
	    		return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase()
	    	})
    	case 2:
	    	return str.replace(/\b\w+\b/g, function (word) {
	    		return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase()
	    	})
    	case 3:
	    	return str.split('').map(function (word) {
	    		if (/[a-z]/.test(word)) {
	    			return word.toUpperCase()
	    		} else {
	    			return word.toLowerCase()
	    		}
	    	}).join('')
    	case 4:
    		return str.toUpperCase()
    	case 5:
    		return str.toLowerCase()
    	default:
    		return str
    }
  };
  /*检测密码强度*/
  checkPwd = (str) => {
  	var Lv = 0
  	if (str.length < 6) {
        return Lv
    }
    if (/[0-9]/.test(str)) {
        Lv++
    }
    if (/[a-z]/.test(str)) {
        Lv++
    }
    if (/[A-Z]/.test(str)) {
        Lv++
    }
    if (/[.|-|_]/.test(str)) {
        Lv++
    }
    return Lv
  };
  /*过滤html代码(把<>转换)*/
  filterTag = (str) => {
  	str = str.replace(/&/ig, "&amp;")
    str = str.replace(/</ig, "&lt;")
    str = str.replace(/>/ig, "&gt;")
    str = str.replace(" ", "&nbsp;")
    return str
  };
  /* 随机数 */
  getRandomString = (lenght) => {
    var len = length || 32;
    var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; // 默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
    var maxPos = chars.length;
    var pwd = '';
    for (var i = 0; i < len; i++) {
        pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
  }
export {
  trim,
  changeCase,
  checkPwd,
  filterTag,
  getRandomString
}