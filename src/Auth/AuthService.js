let email = 'admin@thewire.in';
let password = 'admin';

export default (credentials) => {
  console.log("HERE")
  return new Promise((resolve, reject) => {
    if (email === credentials.email && password === credentials.password) {
      resolve({
        email: 'admin@thewire.in',
        fname: 'Admin',
        isAuthenticated: true
      });
    } else {
      reject({ isAuthenticated: false });
    }
  });
}