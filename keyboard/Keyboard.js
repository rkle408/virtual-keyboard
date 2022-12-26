const Keyboard = {
    // Keep track of different elements
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },

    // The way code works and interacts relies on these two functions
    eventHandlers: {
        oninput: null,
        onclose: null
    },

    // Values of the current state
    properties: {
        value: "",
        capsLock: false
    },

    init() {
        // Create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // Set up main elements
        this.elements.main.classList.add("keyboard", "1keyboard-hidden");
        this.elements.keysContainer.classList.add("keyboard-keys");

        // Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);
    },

    _createKeys() {
        // This is a private method, creates all the HTML for each one of the keys
        // Will return a document fragment -- virtual elements that you can use to append to other elements then append those to another element
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "space"
        ];

        // Creates HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<i class="materials-icons">${icon_name}</i>`;
        };

        // Loop through the characters
        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

            // Add attributes and classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard-key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard-key-wide");
                    keyElement.innerHTML = createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
                        this._triggerEvent("oninput");
                    })

                    break;

                case "caps":
                    keyElement.classList.add("keyboard-key-wide keyboard-key-activable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");
    
                    keyElement.addEventListener("click", () => {
                        this._toggleCapsLock;
                        // Display green light, and toggle method will force class to be added to key element
                        keyElement.classList.toggle("keyboard-key-active", this.properties.capsLock);
                    })
    
                    break;

                case "enter":
                    keyElement.classList.add("keyboard-key-wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");
        
                    keyElement.addEventListener("click", () => {
                        this.properties.value =+ "\n";
                        keyElement._triggerEvent("oninput");
                    })
        
                    break;

                case "space":
                    keyElement.classList.add("keyboard-key-extrawide");
                    keyElement.innerHTML = createIconHTML("space_bar");
            
                    keyElement.addEventListener("click", () => {
                        this.properties.value =+ " ";
                        keyElement._triggerEvent("oninput");
                    })
            
                    break;

                
                case "space":
                    keyElement.classList.add("keyboard-key-extrawide");
                    keyElement.innerHTML = createIconHTML("space_bar");
                
                    keyElement.addEventListener("click", () => {
                        this.properties.value =+ " ";
                        keyElement._triggerEvent("oninput");
                    })
                
                    break;

                
                case "done":
                    keyElement.classList.add("keyboard-key-wide keyboard-key-dark");
                    keyElement.innerHTML = createIconHTML("check_circle");
                
                    keyElement.addEventListener("click", () => {
                        this.close();
                        keyElement._triggerEvent("oninput");
                    })
                
                    break;
            }
        })
    },

    _triggerEvent(handlerName) {
        console.log(`Event Triggered: Event name: ${handlerName}`);
    },

    _toggleCapsLock() {
        console.log(`Caps Lock Toggled!`);
    },

    open(initialValue, oninput, onclose) {
        
    },

    close() {

    }
};

window.addEventListener("DOMContentLoaded", function() {
    Keyboard.init();
})