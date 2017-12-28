module.exports = {
  isEmpty (input) {
    if (input) {
      const regX = /^$/;
      return regX.test(input);
    } else {
      return true
    }
  },
  isEmail (input) {
    if (input) {
      const regX = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      return regX.test(input);
    } else {
      return false
    }
  },
  isArray (input) {
    return input != null && Object.prototype.toString.call(input) === '[object Array]'
  },
  isObject (input) {
    return input != null && Object.prototype.toString.call(input) === '[object Object]'
  },
  isFunction (input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]'
  },
  isObjectEmpty (obj) {
    var k
    for (k in obj) {
      return false
    }
    return true
  },
  isUndefined (input) {
    return input === void 0
  },
  isNumber (input) {
    return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]'
  },
  hasOwnProp (a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
  }
}