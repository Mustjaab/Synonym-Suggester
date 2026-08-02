const synonyms_bank = {
    "detail": ["thorough","meticulous","attentively"],
    "collaboration": ["liaison","coordinated with", "collaborated with"],
    "reviewed": ["audited", "reevaluated","examined"]
};

function synonyms(value) {
	var selectedText = '';
	
    if (window.getSelection) {
        selectedText = window.getSelection().toString();
    }
    else if (document.getSelection) {
        selectedText = document.getSelection().toString();
    }
    else if (document.selection) {
        selectedText = document.selection.createRange().text;
    } else return;
    
    document.getElementById('keyword-input').innerHTML = selectedText;
        
    let resultElement = document.getElementById('keyword-result');
    
    if (selectedText.includes('detailed')) {
        resultElement.textContent = synonyms_bank.detail[2];
        resultElement.style.display = 'block'; 
    }
    else if (selectedText.includes('worked with')) {
        resultElement.innerHTML = synonyms_bank.collaboration[2];
        resultElement.style.display = 'block'; 
    }
	else if (selectedText.includes('reviewed')) {
		resultElement.innerHTML = synonyms_bank.reviewed[2];
		resultElement.style.display = 'block';
	}
    else {
        resultElement.style.display = 'none'; 
        resultElement.innerHTML = ''; 
    }
}
