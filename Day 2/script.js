const codeInput = document.getElementById('codeInput');
const convertBtn = document.getElementById('convertBtn');
const outputDiv = document.getElementById('output');

convertBtn.addEventListener('click', async () => {
    const code = codeInput.value;

    // Call your backend API here to integrate with OpenAI for code analysis
    const response = await fetch('/analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code }),
    });

    const result = await response.json();
    outputDiv.innerText = result.analysis; // Display the analysis result
});

convertBtn.addEventListener('click', async () => {
    const inputLanguage = document.getElementById('inputLanguage').value;
    const outputLanguage = document.getElementById('outputLanguage').value;
    const inputCode = document.getElementById('inputCode').value;

    // Call your backend API here to convert code and analyze with OpenAI
    const response = await fetch('/convert-and-analyze', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputLanguage, outputLanguage, inputCode }),
    });

    const result = await response.json();
    document.getElementById('outputCode').innerText = result.convertedCode; // Display the converted code
    outputDiv.innerText = result.analysis; // Display the analysis result
});
