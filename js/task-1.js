class User {
  constructor(name, email) {
    // Ініціалізація властивостей екземпляра
    this.name = name;
    this.email = email;
  }
}

const mango = new User('Mango', 'mango@mail.com');
console.log(mango); // { name: 'Mango', email: 'mango@mail.com' }

const poly = new User('Poly', 'poly@mail.com');
console.log(poly); // { name: 'Poly', email: 'poly@mail.com' }
