// Listen for messages from the React frontend
// Example of a simple user data object
const user = {
    username: 'demo-user'
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // 2. A page requested user data, respond with a copy of `user`
    if (request.cmd === 'get-user-data') {
        console.log('hello from chrome');
        const txt = document.documentElement.innerHTML;
        sendResponse(txt);

    }

});