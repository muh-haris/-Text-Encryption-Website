lucide.createIcons();

// RSA fixed demo keys (small primes for demo)
const rsaPublicKey = { e: 17, n: 3233 }; // public key
const rsaPrivateKey = { d: 2753, n: 3233 }; // private key

function encryptText() {
    const plaintext = document.getElementById("plaintext").value;
    const algorithm = document.getElementById("algorithm").value;
    const key = document.getElementById("key").value;
    const output = document.getElementById("ciphertext");

    if (!plaintext) return alert("Please enter some text.");
    if (!algorithm) return alert("Please select an encryption algorithm.");

    let result = "";

    switch (algorithm) {
        case "caesar":
            const shift = parseInt(key);
            if (isNaN(shift))
              return alert(
                "Please enter a valid number as key for Caesar Cipher."
              );
            result = caesarEncrypt(plaintext, shift);
            break;
        case "base64":
            result = btoa(plaintext);
            break;
        case "aes":
            if (!key) return alert("Key is required for AES encryption.");
            result = CryptoJS.AES.encrypt(plaintext, key).toString();
            break;
        case "des":
            if (!key) return alert("Key is required for DES encryption.");
            result = CryptoJS.DES.encrypt(plaintext, key).toString();
            break;
        case "rsa":
            result = rsaEncrypt(plaintext, rsaPublicKey.e, rsaPublicKey.n);
            break;
        case "sha256":
            result = CryptoJS.SHA256(plaintext).toString();
            break;
        default:
            alert("Unsupported algorithm selected.");
        }

    output.value = result;
}

function decryptText() {
    const ciphertext = document.getElementById("ciphertext").value;
    const algorithm = document.getElementById("algorithm").value;
    const key = document.getElementById("key").value;
    const output = document.getElementById("decryptedtext");

    if (!ciphertext) return alert("Please enter ciphertext.");
    if (!algorithm) return alert("Please select an encryption algorithm.");

    let result = "";

    switch (algorithm) {
        case "aes":
            if (!key) return alert("Key is required for AES decryption.");
            result = CryptoJS.AES.decrypt(ciphertext, key).toString(
              CryptoJS.enc.Utf8
            );
            break;
        case "des":
            if (!key) return alert("Key is required for DES decryption.");
            result = CryptoJS.DES.decrypt(ciphertext, key).toString(
              CryptoJS.enc.Utf8
            );
            break;
        case "base64":
            result = atob(ciphertext);
            break;
        case "rsa":
            result = rsaDecrypt(ciphertext, rsaPrivateKey.d, rsaPrivateKey.n);
            break;
        case "caesar":
            const shift = parseInt(key);
            if (isNaN(shift)) return alert("Please enter a valid number as key for Caesar Cipher.");
            result = caesarDecrypt(ciphertext, shift);
            break;
        case "sha256":
            alert("SHA-256 is a one-way hash and cannot be decrypted.");
            return;
        default:
            alert("Unsupported algorithm selected.");
        }

    output.value = result;
}

function caesarEncrypt(str, shift) {
    shift = ((shift % 26) + 26) % 26; // Normalize to positive shift [0,25]
    return str.replace(/[a-zA-Z]/g, (char) => {
        const base = char <= "Z" ? 65 : 97;
        return String.fromCharCode(
            ((char.charCodeAt(0) - base + shift) % 26) + base
        );
    });
}

function caesarDecrypt(str, shift) {
    shift = ((shift % 26) + 26) % 26; // Normalize shift
    return str.replace(/[a-zA-Z]/g, (char) => {
        const base = char <= "Z" ? 65 : 97;
        return String.fromCharCode(
            ((char.charCodeAt(0) - base - shift + 26) % 26) + base
        );
    });
}

function rsaEncrypt(text, e, n) {
    return text
        .split("")
        .map((char) => modPow(char.charCodeAt(0), e, n))
        .join(",");
}

function rsaDecrypt(cipher, d, n) {
    return cipher
        .split(",")
        .map((num) => String.fromCharCode(modPow(parseInt(num), d, n)))
        .join("");
}

function modPow(base, exp, mod) {
    let result = 1;
    base = base % mod;
    while (exp > 0) {
        if (exp % 2 === 1) result = (result * base) % mod;
        exp = Math.floor(exp / 2);
        base = (base * base) % mod;
    }
    return result;
}

function copyToClipboard() {
    const ciphertext = document.getElementById("ciphertext");
    ciphertext.select();
    document.execCommand("copy");

    const popup = document.getElementById("copyPopup");
    popup.style.display = "block";

    setTimeout(() => {
        popup.style.display = "none";
    }, 5000);
}

document.getElementById("algorithm").addEventListener("change", function () {
    const keyField = document.getElementById("key");
    const selected = this.value;
    const needsKey = ["aes", "des", "caesar"];
    const required = needsKey.includes(selected);

    keyField.disabled = !required;
    keyField.placeholder = required
    ? "Enter key (for Caesar, AES, DES)"
    : "Key not required for this algorithm";
    if (!required) keyField.value = "";

    document.getElementById("ciphertext").value = "";
    document.getElementById("decryptedtext").value = "";
});
