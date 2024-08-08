var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var mobile = {
    brand: 'Apple',
    color: 'Silver',
    price: 35000
};
console.log(mobile);
console.log(mobile.brand);
var student = {
    name: 'Arjun Reddy',
    age: 24,
    course: 'MBBS',
    address: {
        street: 'Road No 10, JubileeHills',
        city: 'Hyderabad',
        state: 'TS',
        country: 'India'
    }
};
console.log("STREET : " + student.address.street + "\n             CITY : " + student.address.city + " \n             STATE : " + student.address.state + " \n             COUNTRY : " + student.address.country);
// ES6 Feature :  Destructuring
var _a = student.address, street = _a.street, city = _a.city, state = _a.state, country = _a.country;
console.log("STREET : " + street + "\n             CITY : " + city + " \n             STATE : " + state + " \n             COUNTRY : " + country);
var product = {
    sno: 'AA102',
    name: 'Mi Watch',
    color: 'black',
    price: 1520,
    qty: 20
};
var newProduct = __assign(__assign({}, product), { sales: 1400 });
console.log(newProduct);
