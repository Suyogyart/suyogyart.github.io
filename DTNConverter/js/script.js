function myFunction() {
    var copyText = document.getElementById("deva-text");
    copyText.select();
    document.execCommand("copy");
}

function convert() {
    myFunction();
    var array_one = new Array("अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ऌ", "ए", "ऐ", "ओ", "औ", "क", "ख", "ग", "घ", "ङ", "ङ्ह", "च", "छ", "ज", "झ", "ञ", "ञ्ह", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "र्ह", "ल", "व", "श", "ष", "स", "ह", "ा", "ि", "ी", "ु", "ू", "ृ", "े", "ै", "ो", "ौ", "्", "ँ", "ं", "ः", "़", "ॐ", "।", "॥", "०", "१", "२", "३", "४", "५", "६", "७", "८", "९", "‍", "‌");
    var array_two = new Array("𑐀", "𑐁", "𑐂", "𑐃", "𑐄", "𑐅", "𑐆", "𑐈", "𑐊", "𑐋", "𑐌", "𑐍", "𑐎", "𑐏", "𑐐", "𑐑", "𑐒", "𑐓", "𑐔", "𑐕", "𑐖", "𑐗", "𑐘", "𑐙", "𑐚", "𑐛", "𑐜", "𑐝", "𑐞", "𑐟", "𑐠", "𑐡", "𑐢", "𑐣", "𑐥", "𑐦", "𑐧", "𑐨", "𑐩", "𑐫", "𑐬", "𑐭", "𑐮", "𑐰", "𑐱", "𑐲", "𑐳", "𑐴", "𑐵", "𑐶", "𑐷", "𑐸", "𑐹", "𑐺", "𑐾", "𑐿", "𑑀", "𑑁", "𑑂", "𑑃", "𑑄", "𑑅", "𑑆", "𑑉", "𑑋", "𑑌", "𑑐", "𑑑", "𑑒", "𑑓", "𑑔", "𑑕", "𑑖", "𑑗", "𑑘", "𑑙", "‍", "‌");
    var dev_text = document.getElementById("deva-text").value;
    var newa_text = "";
    for (i = 0; i < dev_text.length; i++) {
        newa_text += array_two[array_one.indexOf(dev_text.charAt(i))] || dev_text.charAt(i);
    }

    document.getElementById("newa-text").value = newa_text;

}