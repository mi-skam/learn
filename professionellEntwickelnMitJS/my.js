var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var bjoern = new UserAccount("Björn", 0);
console.log(bjoern);
