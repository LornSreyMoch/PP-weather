function deleteEmailLoginFromLocalStorage() {
    try {
       
        localStorage.removeItem('isLoggedIn');
        console.log("Email login information deleted from local storage.");
    } catch (error) {
       
        console.error("Error deleting email login information from local storage:", error);
    }
}

deleteEmailLoginFromLocalStorage();