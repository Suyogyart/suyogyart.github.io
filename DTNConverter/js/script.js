// Define the mapping arrays globally
const array_one = new Array("अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ऌ", "ए", "ऐ", "ओ", "औ", "क", "ख", "ग", "घ", "ङ", "ङ्ह", "च", "छ", "ज", "झ", "ञ", "ञ्ह", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "र्ह", "ल", "व", "श", "ष", "स", "ह", "ा", "ि", "ी", "ु", "ू", "ृ", "े", "ै", "ो", "ौ", "्", "ँ", "ं", "ः", "़", "ॐ", "।", "॥", "०", "१", "२", "३", "४", "५", "६", "७", "८", "९", "‍", "‌");
const array_two = new Array("𑐀", "𑐁", "𑐂", "𑐃", "𑐄", "𑐅", "𑐆", "𑐈", "𑐊", "𑐋", "𑐌", "𑐍", "𑐎", "𑐏", "𑐐", "𑐑", "𑐒", "𑐓", "𑐔", "𑐕", "𑐖", "𑐗", "𑐘", "𑐙", "𑐚", "𑐛", "𑐜", "𑐝", "𑐞", "𑐟", "𑐠", "𑐡", "𑐢", "𑐣", "𑐥", "𑐦", "𑐧", "𑐨", "𑐩", "𑐫", "𑐬", "𑐭", "𑐮", "𑐰", "𑐱", "𑐲", "𑐳", "𑐴", "𑐵", "𑐶", "𑐷", "𑐸", "𑐹", "𑐺", "𑐾", "𑐿", "𑑀", "𑑁", "𑑂", "𑑃", "𑑄", "𑑅", "𑑆", "𑑉", "𑑋", "𑑌", "𑑐", "𑑑", "𑑒", "𑑓", "𑑔", "𑑕", "𑑖", "𑑗", "𑑘", "𑑙", "‍", "‌");

// Initialize real-time listeners when the page loads
window.onload = function() {
    const devaText = document.getElementById("deva-text");
    const newaText = document.getElementById("newa-text");

    if (devaText) {
        devaText.addEventListener('input', runDevaToNewaConversion);
    }

    if (newaText) {
        newaText.addEventListener('input', runNewaToDevaConversion);
    }

    // Check initially in case browser cached text
    toggleButtons();
};

// --- Helper to Toggle Button Visibility ---
function toggleButtons() {
    const devaText = document.getElementById("deva-text").value;
    const newaText = document.getElementById("newa-text").value;
    const btnDeva = document.getElementById("btn-copy-deva");
    const btnNewa = document.getElementById("btn-copy-newa");

    // Show button if text length > 0, otherwise hide
    if (btnDeva) {
        btnDeva.style.display = devaText.length > 0 ? "block" : "none";
    }
    if (btnNewa) {
        btnNewa.style.display = newaText.length > 0 ? "block" : "none";
    }
}

// --- Core Conversion Logic ---

function runDevaToNewaConversion() {
    var dev_text = document.getElementById("deva-text").value;
    var newa_text = "";

    // UPDATED: Use 'for...of' loop to handle Unicode characters properly
    for (const char of dev_text) {
        newa_text += array_two[array_one.indexOf(char)] || char;
    }
    document.getElementById("newa-text").value = newa_text;

    // Update button visibility after conversion
    toggleButtons();
}

function runNewaToDevaConversion() {
    var newa_text = document.getElementById("newa-text").value;
    var dev_text = "";

    // UPDATED: Use 'for...of' loop. This ensures Newa characters (which are 2 units long)
    // are treated as a single character, fixing the index lookup issue.
    for (const char of newa_text) {
        dev_text += array_one[array_two.indexOf(char)] || char;
    }
    document.getElementById("deva-text").value = dev_text;

    // Update button visibility after conversion
    toggleButtons();
}

// --- Copy Button Functions ---

function copyDevanagari() {
    var copyText = document.getElementById("deva-text");
    var btn = document.getElementById("btn-copy-deva");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    // UI Feedback Logic
    if (btn) {
        var originalText = "Copy Devanagari Text";
        btn.innerText = "Copied !";
        btn.disabled = true;

        setTimeout(function() {
            btn.innerText = originalText;
            btn.disabled = false;
        }, 1500);
    }
}

function copyNewa() {
    var copyText = document.getElementById("newa-text");
    var btn = document.getElementById("btn-copy-newa");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    // UI Feedback Logic
    if (btn) {
        var originalText = "Copy Newa Text";
        btn.innerText = "Copied !";
        btn.disabled = true;

        setTimeout(function() {
            btn.innerText = originalText;
            btn.disabled = false;
        }, 1500);
    }
}