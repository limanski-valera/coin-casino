// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

function initDoubleMenu() {
    const menuItems = document.querySelectorAll("[data-double-menu]");
    const activeClass = "_opened";

    function closeMenus() {
        menuItems.forEach((menu) => {
            if (menu.classList.contains(activeClass)) {
                menu.classList.remove(activeClass);
            }
        });
    }

    document.addEventListener("click", (e) => {
        if (e.target.closest(".item-menu__link") && e.target.closest("[data-double-menu]")) {
            e.preventDefault();
            !document.documentElement.classList.contains("menu-open")
                ? document.documentElement.classList.add("menu-open")
                : null;
            if (e.target.classList.contains(activeClass)) {
                menu.classList.remove(activeClass);
            } else {
                closeMenus();
                e.target.closest("[data-double-menu]").classList.add(activeClass);
            }
        }
    });
}
function initChat() {
    const activeClass = "chat-open";
    document.addEventListener("click", (e) => {
        if (e.target.closest(".chat-button")) {
            e.preventDefault();
            document.documentElement.classList.toggle(activeClass);
        } else if (e.target.closest(".chat-window__close-btn")) {
            document.documentElement.classList.remove(activeClass);
        } else if (
            document.documentElement.classList.contains(activeClass) &&
            !e.target.closest(".chat-window")
        ) {
            document.documentElement.classList.remove(activeClass);
        }
    });
}
function windowLoad() {
    if (document.querySelector("[data-double-menu]")) {
        initDoubleMenu();
    }
    if (document.querySelector(".chat-button")) {
        initChat();
    }
}

document.addEventListener("DOMContentLoaded", windowLoad);
