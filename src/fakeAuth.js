const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    setTimeout(() => {
      this.isAuthenticated = true;
      cb();
    }, 1000) // fake async
  },
  signout(cb) {
    setTimeout(() => {
      this.isAuthenticated = false
      cb();
    }, 1000) // fake async
  }
}

export default fakeAuth;
