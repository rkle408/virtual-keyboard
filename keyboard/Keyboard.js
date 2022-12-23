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

    },

    _createKeys() {
        // This is a private method, creates all the HTML for each one of the keys
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

