const home = (evt) => {
    evt.preventDefault();
    document.location.assign('/');
};

const search = (evt) => {
    evt.preventDefault();
    const input = document.querySelector('#home-search-input').value.trim();
    document.location.assign(`/info/search/${input}`);
};

const login = (evt) => {
    evt.preventDefault();
    document.location.assign('/login');
};

const signup = (evt) => {
    evt.preventDefault();
    document.location.assign('/signup');
};

const logout = async () => {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
    });
    if (!response.ok) {
        alert(response.statusText); // TODO: Remove this alert before pushing!!
        return;
    }
    document.location.assign('/');
};

const dashboard = (evt) => {
    evt.preventDefault();
    document.location.replace('/dashboard');
};

document.querySelector('#home-btn').addEventListener('click', home);
document.querySelector('#home-search-form').addEventListener('submit', search);

const loginBtn = document.querySelector('#login-btn');
if (loginBtn) {
    loginBtn.addEventListener('click', login);
}

const signupBtn = document.querySelector('#signup-btn');
if (signupBtn) {
    signupBtn.addEventListener('click', signup);
}

const dashBtn = document.querySelector('#dashboard-btn');
if (dashBtn) {
    dashBtn.addEventListener('click', dashboard);
}

const logoutBtn = document.querySelector('#logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', logout);
}
