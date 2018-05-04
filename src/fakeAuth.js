const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    setTimeout(() => {
      this.isAuthenticated = true;
      cb();
    }, 500) // fake async
  },
  signout(cb) {
    setTimeout(() => {
      this.isAuthenticated = false
      cb();
    }, 500) // fake async
  }
}

export default fakeAuth;
