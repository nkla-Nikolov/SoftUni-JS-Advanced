function encodeAndDecodeMessages() {
    let inputElement = document.querySelector('textarea[placeholder="Write your message here..."]');
    let outputElement = document.querySelector('textarea[placeholder="No messages..."]');
    
    let encodeButton = document.getElementsByTagName('button')[0];
    encodeButton.addEventListener('click', () => {
        let textToEncode = inputElement.value;
        let encodedText = '';

        for (let i = 0; i < textToEncode.length; i++) {
            let char = String.fromCharCode(textToEncode.charCodeAt(i) + 1)
            encodedText += char;
        }

        inputElement.value = '';

        outputElement.value = encodedText;
    });

    let decodeButton = document.getElementsByTagName('button')[1];
    decodeButton.addEventListener('click', () => {
        let textToDecode = outputElement.value;
        let decodedText = '';

        for (let i = 0; i < textToDecode.length; i++) {
            let char = String.fromCharCode(textToDecode.charCodeAt(i) - 1);
            decodedText += char;
        }

        outputElement.value = decodedText;
    });
}