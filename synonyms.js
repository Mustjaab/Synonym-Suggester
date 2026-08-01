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
    
    let detail_synonyms = ["thorough","meticulous","attentively"];
    let collaboration_synonyms = ["liaison","coordinated with", "collaborated with"];
	let reviewed_synonyms = ["audited", "reevaluated","examined"];
    
    let random1 = detail_synonyms[Math.floor(Math.random() * detail_synonyms.length)];
    let random2 = collaboration_synonyms[Math.floor(Math.random() * collaboration_synonyms.length)];
	let random3 = reviewed_synonyms[Math.floor(Math.random() * reviewed_synonyms.length)];
    
    let resultElement = document.getElementById('keyword-result');
    
    if (selectedText.includes('detailed')) {
        resultElement.innerHTML = random1;
        resultElement.style.display = 'block'; 
    }
    else if (selectedText.includes('worked with')) {
        resultElement.innerHTML = random2;
        resultElement.style.display = 'block'; 
    }
	else if (selectedText.includes('reviewed')) {
		resultElement.innerHTML = random3;
		resultElement.style.display = 'block';
	}
    else {
        resultElement.style.display = 'none'; 
        resultElement.innerHTML = ''; 
    }
}