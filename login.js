const signInbtn = document.getElementById('signInbtn');
const authModel = document.getElementById('authModel');
const modelContent = authModel.querySelector('div');
const signinform = document.getElementById('signinform');
const showSigninformlink = document.getElementById('showsigninform');
const registerform = document.getElementById('registerform');
const showregisterformlink = document.getElementById('showregisterform');

const logInbtn = document.getElementById('logInbtn');
const authEModel = document.getElementById('authEModel');
const ModelContent = authEModel.querySelector('div');
const employeeloginform = document.getElementById('employeeloginform');

const loadingOverlay = document.getElementById('loadingOverlay');

//Function to open the authentication Model
function openModel() {
    authModel.classList.remove('hidden');
    authModel.classList.add('flex');
    setTimeout(() => {
        modelContent.classList.remove('scale-0', 'translate-y-[-100%]');
        modelContent.classList.add('scale-100', 'translate-y-0');
    }, 10);
}

//Function to open the emp Authentication Model
function openEModel() {
    authEModel.classList.remove('hidden');
    authEModel.classList.add('flex');
    setTimeout(() => {
        ModelContent.classList.remove('scale-0', 'transalte-y-[-100%]');
        ModelContent.classList.add('scale-100', 'translate-y-0');
    }, 10);
}

//Functin to close the authentication model
function closeModel() {
    modelContent.classList.remove('scale-100', 'translate-y-0');
    modelContent.classList.add('scale-0', 'translate-y-[-100%]');
    setTimeout(() => {
        authModel.classList.remove('flex');
        authModel.classList.add('hidden');
    }, 300);
}

//Function To close the emp authentication Model
function closeEModel() {
    ModelContent.classList.remove('scale-100', 'translate-y-0');
    ModelContent.classList.add('scale-0', 'translate-y-[-100%');
    setTimeout(() => {
        authEModel.classList.remove('flex');
        authEModel.classList.add('hidden');

    }, 300);
}

//Function to switch to the signin form
function showsigninform() {
    registerform.classList.add('opacity-0');
    setTimeout(() => {
        registerform.classList.add('hidden');
        signinform.classList.remove('hidden');
        setTimeout(() => {
            signinform.classList.remove('opacity-0');
        }, 50);

    }, 300);

}

//function to switch to registration form
function showregisterform() {
    signinform.classList.add('opacity-0');
    setTimeout(() => {
        signinform.classList.add('hidden');
        registerform.classList.remove('hidden');
        setTimeout(() => {
            registerform.classList.remove('opacity-0');
        }, 50);
    }, 300);
}


//function to show the loading overlay
function showLoading() {
    loadingOverlay.classList.remove('hidden');
    loadingOverlay.classList.add('flex');
}

//function to hide the Loading overlay
function hideLoading() {
    loadingOverlay.classList.remove('flex');
    loadingOverlay.classList.add('hidden');
}

//function to show successs message
function showsuccessMeassage(message) {
    const successPopup = document.createElement('div');
    successPopup.className = 'fixed inset-0 flex items-center justify-center z-50';
    successPopup.innerHTML = `
    <div class="bg-white rounded-lg p-8 shadow-2xl transform transition-all duration-300 scale-0">
        <div class="text-3xl font-bold mb-4 text-green-600">${message}</div>
        <div class="w-16 h-16 mx-auto mb-4">
            <svg class="w-full h-full text-green-600" fill="none" stroke = "currentColor" viewBox="0 0 24 24" xmlns = "http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
        </div>
    </div>`;
    document.body.appendChild(successPopup);

    setTimeout(() => {
        successPopup.querySelector('div').classList.remove('scale-0');
        successPopup.querySelector('div').classList.add('scale-100');
    }, 10);

    setTimeout(() => {
        successPopup.querySelector('div').classList.remove('scale-100');
        successPopup.querySelector('div').classList.add('scale-0');
        setTimeout(() => {
            document.body.removeChild(successPopup);
        }, 100);
    }, 2000);
}

//function to hide signinbtn after login successful
function hidesigninbtn() {
    signInbtn.classList.add('hidden');
    logInbtn.classList.add('hidden');
}



//Function to show employee login


//Event Listeners for Customer Signin&login
signInbtn.addEventListener('click', openModel);

authModel.addEventListener('click', (e) => {
    if (e.target === authModel) {
        closeModel();
    }
});

showregisterformlink.addEventListener('click', (e) => {
    e.preventDefault();
    showregisterform();
});

showSigninformlink.addEventListener('click', (e) => {
    e.preventDefault();
    showsigninform();
});

//form submission handlers
//customer sign in
signinform.addEventListener('submit', (e) => {
    e.preventDefault();
    showLoading();
    setTimeout(() => {
        hideLoading();
        showsuccessMeassage('Login Successful !');
        closeModel();
        hidesigninbtn();
    }, 2000);
});

//customer register
registerform.addEventListener('submit', (e) => {
    e.preventDefault();
    showLoading();
    setTimeout(() => {
        hideLoading();
        showsuccessMeassage('Sign up Successful!');
        closeModel();
        hidesigninbtn();
    }, 2000);
});


//Event Listeners for Employee login
logInbtn.addEventListener('click', openEModel);

authEModel.addEventListener('click', (e) => {
    if (e.target === authEModel) {
        closeEModel();
    }
});


employeeloginform.addEventListener('click', (e) => {
    e.preventDefault();
    employeeloginform();
})

//function to show successs message
function showSuccessMeassage(message) {
    const successPopup = document.createElement('div');
    successPopup.className = 'fixed inset-0 flex items-center justify-center z-50';
    successPopup.innerHTML = `
    <div class="bg-white rounded-lg p-8 shadow-2xl transform transition-all duration-300 scale-0">
        <div class="text-3xl font-bold mb-4 text-green-600">${message}</div>
        <div class="w-16 h-16 mx-auto mb-4">
            <svg class="w-full h-full text-green-600" fill="none" stroke = "currentColor" viewBox="0 0 24 24" xmlns = "http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
            </svg>
        </div>
    </div>`;
    document.body.appendChild(successPopup);

    setTimeout(() => {
        successPopup.querySelector('div').classList.remove('scale-0');
        successPopup.querySelector('div').classList.add('scale-100');
    }, 10);

    setTimeout(() => {
        successPopup.querySelector('div').classList.remove('scale-100');
        successPopup.querySelector('div').classList.add('scale-0');
        setTimeout(() => {
            document.body.removeChild(successPopup);
        }, 100);
    }, 2000);
}

//employee log in
employeeloginform.addEventListener('submit', (e) => {
    e.preventDefault();
    showLoading();
    setTimeout(() => {
        hideLoading();
        showSuccessMeassage('Login Successful !');
        closeEModel();
        hidesigninbtn();
    }, 2000);
});


// auth status
function checkAuthStatus() {
    const isLoggedIn = false;
    if (isLoggedIn) {

    } else {

    }
}

//call checkauth

window.addEventListener('load', checkAuthStatus);