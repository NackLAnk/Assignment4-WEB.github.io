function searchPage() {
    var searchInput = document.getElementById('searchInput');
    var searchTerm = searchInput.value.toLowerCase();

    if (searchTerm.trim() === "") {
        return false;
    }

    var pageText = document.body.innerText.toLowerCase();
    var searchIndex = pageText.indexOf(searchTerm);

    if (searchIndex !== -1) {
        window.scrollTo(0, getOffsetTop(pageText, searchIndex));
        
        highlightText(searchTerm);
    } else {
        alert("No matching results found.");
    }

    return false;
}

function highlightText(searchTerm) {
    var pageText = document.body.innerHTML;
    var highlightedText = '<span style="background-color: yellow;">' + searchTerm + '</span>';
    var regex = new RegExp(searchTerm, 'gi');
    var highlightedPageText = pageText.replace(regex, highlightedText);
    document.body.innerHTML = highlightedPageText;
}


function getOffsetTop(text, index) {
    var linesBefore = text.substr(0, index).split('\n');
    var lineCount = linesBefore.length - 1; 
    var lineHeight = parseFloat(getComputedStyle(document.body).lineHeight);
    return lineCount * lineHeight;
}

document.getElementById('searchInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchPage();
    }
});

var searchInput = document.getElementById('searchInput');
var tooltip = document.getElementById('searchTooltip');

searchInput.addEventListener('mouseenter', function() {
    tooltip.style.visibility = 'visible';
    tooltip.style.opacity = '1';
});

searchInput.addEventListener('mouseleave', function() {
    tooltip.style.visibility = 'hidden';
    tooltip.style.opacity = '0';
});