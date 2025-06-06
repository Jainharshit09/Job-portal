const navigateToLogin = (navigate:any) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
}

export default navigateToLogin;