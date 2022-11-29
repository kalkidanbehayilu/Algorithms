
class User {
  constructor() {
    this.firstName = "";
    this.lastName = "";
    this.age = 0;

    this.address = [];
  }
}

function initUserAbstractDataType() {
  var user1 = new User();

  user1.firstName = "Ayele";
  user1.lastName = "Kebede";
  user1.age = 20;
  user1.address = ["Bole", "Shegole", "Koye feche"];

  console.log(user1);

  var user2 = new User();

  user2.firstName = "Tola";
  user2.lastName = "Lola";
  user2.age = 30;
  user2.address = ["Finfine"];

  console.log(user2);
}

initUserAbstractDataType();
