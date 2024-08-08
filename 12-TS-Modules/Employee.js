"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, email, gender, designation) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.designation = designation;
    }
    // getter - setter
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    Employee.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Employee.prototype.getEmail = function () {
        return this.email;
    };
    Employee.prototype.setEmail = function (email) {
        this.email = email;
    };
    Employee.prototype.getGender = function () {
        return this.gender;
    };
    Employee.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    Employee.prototype.getDesignation = function () {
        return this.designation;
    };
    Employee.prototype.setDesignation = function (designation) {
        this.designation = designation;
    };
    Employee.prototype.fullName = function () {
        return this.getFirstName() + " " + this.getLastName();
    };
    Employee.prototype.bio = function () {
        var bio = "FullName : " + this.fullName() + "\n                           Email  " + this.getEmail() + "\n                           Gender : " + this.getGender() + "\n                           Designation : " + this.getDesignation();
        console.log(bio);
    };
    return Employee;
}());
exports.Employee = Employee;
