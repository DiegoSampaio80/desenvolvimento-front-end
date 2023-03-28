const buttonMenu: HTMLElement | null = document.querySelector('#buttonMenu');

buttonMenu.addEventListener("click", () => {
    const areaLinks: HTMLElement | null = document.querySelector('#areaLinks');
    const dropdown: HTMLElement | null = document.querySelector('#dropdown');

    if (dropdown) {
        dropdown.style.height = dropdown.style.height === '0px' ? '205px' : '0px';
    }
});

const sizeWindow: MediaQueryList = window.matchMedia('(max-width: 993px)');
function screenTest(e: MediaQueryListEvent) {
    if (e.matches) {
        const dropdown: HTMLElement | null = document.querySelector('#dropdown');
        if (dropdown) {
            dropdown.style.height = '0px';
        }
    } else {
        const dropdown: HTMLElement | null = document.querySelector('#dropdown');
        if (dropdown) {
            dropdown.style.height = '30px';
        }
    }
}

sizeWindow.addListener(screenTest);
screenTest(sizeWindow);