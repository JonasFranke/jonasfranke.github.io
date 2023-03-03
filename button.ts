const button: HTMLButtonElement = document.querySelector('#dark-mode-toggle') as HTMLButtonElement;
const buttonMobile: HTMLButtonElement = document.querySelector('#dark-mode-toggle-mobile') as HTMLButtonElement;
let darkMode: boolean = true;

function toggleDarkMode(mobile: boolean) {
    darkMode = !darkMode;
    if (darkMode) {
        document.getElementById('html')?.classList.add('dark');
        if (mobile) {
            buttonMobile.innerHTML = '<svg class="m-1" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="nightModeIconTitle" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> <title id="nightModeIconTitle">Night Mode</title> <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/> <path d="M15.899 12.899a4 4 0 0 1-4.797-4.797A4.002 4.002 0 0 0 12 16c1.9 0 3.49-1.325 3.899-3.101z"/> <path d="M12 5V3M12 21v-2"/> <path d="M5 12H2h3zM22 12h-3 3zM16.95 7.05L19.07 4.93 16.95 7.05zM4.929 19.071L7.05 16.95 4.93 19.07zM16.95 16.95l2.121 2.121-2.121-2.121zM4.929 4.929L7.05 7.05 4.93 4.93z"/></svg> Light Mode';
        } else {
            button.innerHTML = '<svg class="m-1" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="nightModeIconTitle" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> <title id="nightModeIconTitle">Night Mode</title> <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/> <path d="M15.899 12.899a4 4 0 0 1-4.797-4.797A4.002 4.002 0 0 0 12 16c1.9 0 3.49-1.325 3.899-3.101z"/> <path d="M12 5V3M12 21v-2"/> <path d="M5 12H2h3zM22 12h-3 3zM16.95 7.05L19.07 4.93 16.95 7.05zM4.929 19.071L7.05 16.95 4.93 19.07zM16.95 16.95l2.121 2.121-2.121-2.121zM4.929 4.929L7.05 7.05 4.93 4.93z"/></svg> Light Mode';
        }

    } else {
        document.getElementById('html')?.classList.remove('dark');
        if (mobile) {
            buttonMobile.innerHTML = '<svg class="m-1" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="nightModeIconTitle" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> <title id="nightModeIconTitle">Night Mode</title> <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/> <path d="M15.899 12.899a4 4 0 0 1-4.797-4.797A4.002 4.002 0 0 0 12 16c1.9 0 3.49-1.325 3.899-3.101z"/> <path d="M12 5V3M12 21v-2"/> <path d="M5 12H2h3zM22 12h-3 3zM16.95 7.05L19.07 4.93 16.95 7.05zM4.929 19.071L7.05 16.95 4.93 19.07zM16.95 16.95l2.121 2.121-2.121-2.121zM4.929 4.929L7.05 7.05 4.93 4.93z"/></svg> Dark Mode';
        } else {
            button.innerHTML = '<svg class="m-1" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-labelledby="nightModeIconTitle" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> <title id="nightModeIconTitle">Night Mode</title> <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/> <path d="M15.899 12.899a4 4 0 0 1-4.797-4.797A4.002 4.002 0 0 0 12 16c1.9 0 3.49-1.325 3.899-3.101z"/> <path d="M12 5V3M12 21v-2"/> <path d="M5 12H2h3zM22 12h-3 3zM16.95 7.05L19.07 4.93 16.95 7.05zM4.929 19.071L7.05 16.95 4.93 19.07zM16.95 16.95l2.121 2.121-2.121-2.121zM4.929 4.929L7.05 7.05 4.93 4.93z"/></svg> Dark Mode';
        }
    }
    console.log("Dark mode: " + darkMode);
}

button?.addEventListener('click', () => toggleDarkMode(false));
buttonMobile?.addEventListener('click', () => toggleDarkMode(true));