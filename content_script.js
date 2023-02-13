const copyButtonLabel = "Copy";

// use a class selector if available
let blocks = document.querySelectorAll("pre");

const addCopyButton = (pre) => {
    // Right Click 
    pre.addEventListener("contextmenu", (event) => {
        event.preventDefault();
        pre.style.opacity = 0.5;
        setTimeout(() => {
            pre.style.opacity = 1;
        }, 500);
        copyCode(pre);
    });

    const copyButton = document.createElement("button");
    copyButton.innerHTML = "Copy";
    copyButton.style.float = "right";
    copyButton.style.margin = "0.5em";
    copyButton.classList.add("copy-button");

    copyButton.addEventListener("click", () => {
        copyCode(pre, copyButton);
    });
    pre.insertBefore(copyButton, pre.firstChild);
};

const pres = document.querySelectorAll("pre");
pres.forEach((pre) => addCopyButton(pre));


function copyCode(block, button) {
    let code = block.querySelector("code");
    let text = code.innerText;

    navigator.clipboard.writeText(text);

    if (button) {
        button.innerText = "Copied!";
    }
    setTimeout(() => {
        if (button) {
            button.innerText = copyButtonLabel;
        }
    }, 500);
}