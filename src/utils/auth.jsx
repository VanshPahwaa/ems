const isLoggedIn = () => {
    const userData = JSON.parse(localStorage.getItem('loggedInUser'))
    if (userData) {
      return userData.role
    }
    return null
  }

  const findUserData = () => {
    const userData = JSON.parse(localStorage.getItem('loggedInUser'))
    if (userData) {
      return userData.user
    }
    return null
  }

export {isLoggedIn,findUserData}