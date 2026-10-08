// --- Global Mapping Arrays ---
const devanagari_chars = [
    // Multi-character combinations first for accurate replacing
    "ङ्ह", "ञ्ह", "र्ह",
    "अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ऌ", "ए", "ऐ", "ओ", "औ",
    "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ",
    "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न",
    "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह",
    "ा", "ि", "ी", "ु", "ू", "ृ", "े", "ै", "ो", "ौ", "्", "ँ", "ं", "ः", "़",
    "ॐ", "।", "॥",
    "०", "१", "२", "३", "४", "५", "६", "७", "८", "९",
    "‍", "‌"
];

const newa_chars = [
    "𑐓", "𑐙", "𑐭",
    "𑐀", "𑐁", "𑐂", "𑐃", "𑐄", "𑐅", "𑐆", "𑐈", "𑐊", "𑐋", "𑐌", "𑐍",
    "𑐎", "𑐏", "𑐐", "𑐑", "𑐒", "𑐔", "𑐕", "𑐖", "𑐗", "𑐘",
    "𑐚", "𑐛", "𑐜", "𑐝", "𑐞", "𑐟", "𑐠", "𑐡", "𑐢", "𑐣",
    "𑐥", "𑐦", "𑐧", "𑐨", "𑐩", "𑐫", "𑐬", "𑐮", "𑐰", "𑐱", "𑐲", "𑐳", "𑐴",
    "𑐵", "𑐶", "𑐷", "𑐸", "𑐹", "𑐺", "𑐾", "𑐿", "𑑀", "𑑁", "𑑂", "𑑃", "𑑄", "𑑅", "𑑆",
    "𑑉", "𑑋", "𑑌",
    "𑑐", "𑑑", "𑑒", "𑑓", "𑑔", "𑑕", "𑑖", "𑑗", "𑑘", "𑑙",
    "‍", "‌"
];

// Reference Data for Interactive Alphabet Chart
const reference_data = {
    vowels: [
        { deva: "अ", newa: "𑐀", name: "A" },
        { deva: "आ", newa: "𑐁", name: "Aa" },
        { deva: "इ", newa: "𑐂", name: "I" },
        { deva: "ई", newa: "𑐃", name: "Ee" },
        { deva: "उ", newa: "𑐄", name: "U" },
        { deva: "ऊ", newa: "𑐅", name: "Oo" },
        { deva: "ऋ", newa: "𑐆", name: "Rri" },
        { deva: "ए", newa: "𑐊", name: "E" },
        { deva: "ऐ", newa: "𑐋", name: "Ai" },
        { deva: "ओ", newa: "𑐌", name: "O" },
        { deva: "औ", newa: "𑐍", name: "Au" }
    ],
    consonants: [
        { deva: "क", newa: "𑐎", name: "Ka" }, { deva: "ख", newa: "𑐏", name: "Kha" },
        { deva: "ग", newa: "𑐐", name: "Ga" }, { deva: "घ", newa: "𑐑", name: "Gha" },
        { deva: "ङ", newa: "𑐒", name: "Nga" }, { deva: "ङ्ह", newa: "𑐓", name: "Ngaha" },
        { deva: "च", newa: "𑐔", name: "Cha" }, { deva: "छ", newa: "𑐕", name: "Chha" },
        { deva: "ज", newa: "𑐖", name: "Ja" }, { deva: "झ", newa: "𑐗", name: "Jha" },
        { deva: "ञ", newa: "𑐘", name: "Nya" }, { deva: "ञ्ह", newa: "𑐙", name: "Nyaha" },
        { deva: "ट", newa: "𑐚", name: "Ta" }, { deva: "ठ", newa: "𑐛", name: "Tha" },
        { deva: "ड", newa: "𑐜", name: "Da" }, { deva: "ढ", newa: "𑐝", name: "Dha" },
        { deva: "ण", newa: "𑐞", name: "Nna" }, { deva: "त", newa: "𑐟", name: "Ta" },
        { deva: "थ", newa: "𑐠", name: "Tha" }, { deva: "द", newa: "𑐡", name: "Da" },
        { deva: "ध", newa: "𑐢", name: "Dha" }, { deva: "न", newa: "𑐣", name: "Na" },
        { deva: "प", newa: "𑐥", name: "Pa" }, { deva: "फ", newa: "𑐦", name: "Pha" },
        { deva: "ब", newa: "𑐧", name: "Ba" }, { deva: "भ", newa: "𑐨", name: "Bha" },
        { deva: "म", newa: "𑐩", name: "Ma" }, { deva: "य", newa: "𑐫", name: "Ya" },
        { deva: "र", newa: "𑐬", name: "Ra" }, { deva: "र्ह", newa: "𑐭", name: "Raha" },
        { deva: "ल", newa: "𑐮", name: "La" }, { deva: "व", newa: "𑐰", name: "Va" },
        { deva: "श", newa: "𑐱", name: "Sha" }, { deva: "ष", newa: "𑐲", name: "Ssha" },
        { deva: "स", newa: "𑐳", name: "Sa" }, { deva: "ह", newa: "𑐴", name: "Ha" }
    ],
    matras: [
        { deva: "ा", newa: "𑐵", name: "aa matra" }, { deva: "ि", newa: "𑐶", name: "i matra" },
        { deva: "ी", newa: "𑐷", name: "ee matra" }, { deva: "ु", newa: "𑐸", name: "u matra" },
        { deva: "ू", newa: "𑐹", name: "oo matra" }, { deva: "ृ", newa: "𑐺", name: "ri matra" },
        { deva: "े", newa: "𑐾", name: "e matra" }, { deva: "ै", newa: "𑐿", name: "ai matra" },
        { deva: "ो", newa: "𑑀", name: "o matra" }, { deva: "ौ", newa: "𑑁", name: "au matra" },
        { deva: "्", newa: "𑑂", name: "halant" }, { deva: "ँ", newa: "𑑃", name: "chandrabindu" },
        { deva: "ं", newa: "𑑄", name: "anusvara" }, { deva: "ः", newa: "𑑅", name: "visarga" }
    ],
    numerals: [
        { deva: "०", newa: "𑑐", name: "0" }, { deva: "१", newa: "𑑑", name: "1" },
        { deva: "२", newa: "𑑒", name: "2" }, { deva: "३", newa: "𑑓", name: "3" },
        { deva: "४", newa: "𑑔", name: "4" }, { deva: "५", newa: "𑑕", name: "5" },
        { deva: "६", newa: "𑑖", name: "6" }, { deva: "७", newa: "𑑗", name: "7" },
        { deva: "८", newa: "𑑘", name: "8" }, { deva: "९", newa: "𑑙", name: "9" }
    ]
};

// Theme initialization on script load
(function initTheme() {
    if (typeof window === 'undefined' || typeof localStorage === 'undefined' || typeof document === 'undefined') return;
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})();

// Pure Transliteration Utility Functions
function convertDevaToNewa(text) {
    if (!text) return "";
    let textToProcess = text.replace(/ङ्ह/g, "𑐓")
                               .replace(/ञ्ह/g, "𑐙")
                               .replace(/र्ह/g, "𑐭");

    let newaResult = "";
    for (const char of textToProcess) {
        const idx = devanagari_chars.indexOf(char);
        newaResult += (idx !== -1) ? newa_chars[idx] : char;
    }
    return newaResult;
}

function convertNewaToDeva(text) {
    if (!text) return "";
    let devResult = "";
    for (const char of text) {
        const idx = newa_chars.indexOf(char);
        devResult += (idx !== -1) ? devanagari_chars[idx] : char;
    }
    return devResult;
}

// Page Load Handler
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        const devaText = document.getElementById("deva-text");
        const newaText = document.getElementById("newa-text");

        if (devaText) {
            devaText.addEventListener('input', runDevaToNewaConversion);
        }

        if (newaText) {
            newaText.addEventListener('input', runNewaToDevaConversion);
        }

        renderReferenceGrid('consonants');
        updateStats();
        toggleActionButtons();
    });
}

// --- Core Real-Time Conversion Handlers ---
function runDevaToNewaConversion() {
    const devText = document.getElementById("deva-text")?.value || "";
    const newaElem = document.getElementById("newa-text");

    if (newaElem) {
        newaElem.value = convertDevaToNewa(devText);
    }

    updateStats();
    toggleActionButtons();
}

function runNewaToDevaConversion() {
    const newaText = document.getElementById("newa-text")?.value || "";
    const devaElem = document.getElementById("deva-text");

    if (devaElem) {
        devaElem.value = convertNewaToDeva(newaText);
    }

    updateStats();
    toggleActionButtons();
}

// --- Interactive Utilities ---

function swapContent() {
    const devaElem = document.getElementById("deva-text");
    const newaElem = document.getElementById("newa-text");

    if (!devaElem || !newaElem) return;

    const valDev = devaElem.value;
    const valNewa = newaElem.value;

    if (!valDev && !valNewa) return;

    const convertedNewa = convertDevaToNewa(valDev);
    const convertedDev = convertNewaToDeva(valNewa);

    if (valDev && !valNewa) {
        // Text in Devanagari box only -> Move converted representation to Newa box & clear Devanagari
        newaElem.value = convertedNewa;
        devaElem.value = "";
    } else if (valNewa && !valDev) {
        // Text in Newa box only -> Move converted representation to Devanagari box & clear Newa
        devaElem.value = convertedDev;
        newaElem.value = "";
    } else if (valNewa === convertedNewa) {
        // Newa box has auto-converted text from Devanagari -> Swap active focus to Newa box
        newaElem.value = valNewa;
        devaElem.value = "";
    } else if (valDev === convertedDev) {
        // Devanagari box has auto-converted text from Newa -> Swap active focus to Devanagari box
        devaElem.value = valDev;
        newaElem.value = "";
    } else {
        // Distinct texts in both boxes -> Swap converted values
        devaElem.value = convertedDev;
        newaElem.value = convertedNewa;
    }

    updateStats();
    toggleActionButtons();
    showToast("Content swapped!");
}

function clearAll() {
    const devaElem = document.getElementById("deva-text");
    const newaElem = document.getElementById("newa-text");
    if (devaElem) devaElem.value = "";
    if (newaElem) newaElem.value = "";
    updateStats();
    toggleActionButtons();
    showToast("Cleared text areas");
}

function clearField(fieldId) {
    const elem = document.getElementById(fieldId);
    if (elem) {
        elem.value = "";
        if (fieldId === 'deva-text') {
            runDevaToNewaConversion();
        } else {
            runNewaToDevaConversion();
        }
    }
}

function loadPreset(text) {
    const devaElem = document.getElementById("deva-text");
    if (devaElem) {
        devaElem.value = text;
        runDevaToNewaConversion();
        devaElem.focus();
        showToast(`Loaded sample: "${text}"`);
    }
}

function insertCharacter(char) {
    const devaElem = document.getElementById("deva-text");
    if (devaElem) {
        const start = devaElem.selectionStart || devaElem.value.length;
        const end = devaElem.selectionEnd || devaElem.value.length;
        const val = devaElem.value;
        devaElem.value = val.substring(0, start) + char + val.substring(end);
        devaElem.selectionStart = devaElem.selectionEnd = start + char.length;
        devaElem.focus();
        runDevaToNewaConversion();
        showToast(`Inserted '${char}'`);
    }
}

function updateStats() {
    const devaVal = document.getElementById("deva-text")?.value || "";
    const newaVal = document.getElementById("newa-text")?.value || "";

    const devaCharCount = devaVal.length;
    const devaWordCount = devaVal.trim() === "" ? 0 : devaVal.trim().split(/\s+/).length;

    const newaCharCount = Array.from(newaVal).length; // Proper Unicode character count
    const newaWordCount = newaVal.trim() === "" ? 0 : newaVal.trim().split(/\s+/).length;

    const devaStats = document.getElementById("deva-stats");
    const newaStats = document.getElementById("newa-stats");

    if (devaStats) devaStats.innerText = `${devaCharCount} chars • ${devaWordCount} words`;
    if (newaStats) newaStats.innerText = `${newaCharCount} chars • ${newaWordCount} words`;
}

function toggleActionButtons() {
    const devVal = document.getElementById("deva-text")?.value || "";
    const newaVal = document.getElementById("newa-text")?.value || "";

    const btnDevaCopy = document.getElementById("btn-copy-deva");
    const btnNewaCopy = document.getElementById("btn-copy-newa");
    const btnNewaDownload = document.getElementById("btn-download-newa");

    if (btnDevaCopy) btnDevaCopy.disabled = devVal.length === 0;
    if (btnNewaCopy) btnNewaCopy.disabled = newaVal.length === 0;
    if (btnNewaDownload) btnNewaDownload.disabled = newaVal.length === 0;
}

function copyText(fieldId, btnId) {
    const elem = document.getElementById(fieldId);
    const btn = document.getElementById(btnId);
    if (!elem || !elem.value) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(elem.value).then(() => {
            if (btn) {
                const originalHTML = btn.innerHTML;
                btn.innerHTML = `<svg class="w-4 h-4 text-green-500 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Copied!`;
                setTimeout(() => {
                    btn.innerHTML = originalHTML;
                }, 1800);
            }
            showToast("Copied to clipboard!");
        }).catch(() => {
            elem.select();
            document.execCommand("copy");
            showToast("Copied to clipboard!");
        });
    } else {
        elem.select();
        document.execCommand("copy");
        showToast("Copied to clipboard!");
    }
}

function downloadNewaText() {
    const content = document.getElementById("newa-text")?.value;
    if (!content) return;

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "nepal-lipi-converted.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast("Downloaded converted file!");
}

function setFontSize(size) {
    const devaText = document.getElementById("deva-text");
    const newaText = document.getElementById("newa-text");
    
    const sizeMap = {
        'sm': '16px',
        'md': '20px',
        'lg': '26px',
        'xl': '32px'
    };

    const targetSize = sizeMap[size] || '20px';
    if (devaText) devaText.style.fontSize = targetSize;
    if (newaText) newaText.style.fontSize = targetSize;

    // Update button active state UI
    document.querySelectorAll('.font-size-btn').forEach(btn => {
        btn.classList.remove('bg-brand', 'text-white');
        btn.classList.add('bg-gray-100', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');
    });

    const activeBtn = document.getElementById(`btn-size-${size}`);
    if (activeBtn) {
        activeBtn.classList.remove('bg-gray-100', 'dark:bg-gray-800', 'text-gray-700', 'dark:text-gray-300');
        activeBtn.classList.add('bg-brand', 'text-white');
    }
}

// --- Interactive Reference Grid Rendering ---
function renderReferenceGrid(category) {
    const container = document.getElementById("reference-grid-container");
    if (!container) return;

    // Highlight active tab
    document.querySelectorAll('.ref-tab-btn').forEach(btn => {
        btn.classList.remove('border-brand', 'text-brand', 'dark:text-brand-light', 'font-semibold');
        btn.classList.add('border-transparent', 'text-gray-500', 'dark:text-gray-400');
    });
    const activeTab = document.getElementById(`ref-tab-${category}`);
    if (activeTab) {
        activeTab.classList.remove('border-transparent', 'text-gray-500', 'dark:text-gray-400');
        activeTab.classList.add('border-brand', 'text-brand', 'dark:text-brand-light', 'font-semibold');
    }

    const items = reference_data[category] || [];
    container.innerHTML = items.map(item => `
        <div onclick="insertCharacter('${item.deva}')" 
             title="Click to insert ${item.deva} into converter"
             class="group cursor-pointer bg-white dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700/80 rounded-xl p-2.5 flex flex-col items-center justify-center hover:border-brand dark:hover:border-brand-light hover:shadow-md hover:-translate-y-0.5 transition-all">
            <span class="text-xs font-medium text-gray-400 dark:text-gray-500 mb-1 group-hover:text-brand transition-colors">${item.deva}</span>
            <span class="text-2xl font-newa text-gray-900 dark:text-white font-bold group-hover:text-brand dark:group-hover:text-brand-light transition-colors">${item.newa}</span>
            <span class="text-[10px] text-gray-400 dark:text-gray-500 mt-1 uppercase tracking-wider">${item.name}</span>
        </div>
    `).join('');
}

// --- Dark Mode Theme Toggle ---
function toggleTheme() {
    const htmlElem = document.documentElement;
    const isDark = htmlElem.classList.contains('dark');
    
    if (isDark) {
        htmlElem.classList.remove('dark');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElem.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
}

// --- Floating Toast Notifications ---
function showToast(msg) {
    if (typeof document === 'undefined') return;

    let toast = document.getElementById("toast-notification");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast-notification";
        toast.className = "fixed bottom-5 right-5 z-50 px-4 py-2.5 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-xs font-medium shadow-xl border border-gray-700 dark:border-gray-200 flex items-center gap-2 transition-all opacity-0 translate-y-3 pointer-events-none";
        document.body.appendChild(toast);
    }

    toast.innerHTML = `<svg class="w-4 h-4 text-brand dark:text-brand-light" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> ${msg}`;
    
    toast.classList.remove('opacity-0', 'translate-y-3', 'pointer-events-none');
    toast.classList.add('opacity-100', 'translate-y-0');

    clearTimeout(window.toastTimer);
    window.toastTimer = setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'translate-y-3', 'pointer-events-none');
    }, 2200);
}