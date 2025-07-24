export function saveContent(element, index, prefix) {
    const savedContent = sessionStorage.getItem(prefix + index);

    if (savedContent) {
        element.innerHTML = savedContent;
    }
    element.addEventListener('input', () => {
        sessionStorage.setItem(prefix + index, element.innerHTML);
    });
};

