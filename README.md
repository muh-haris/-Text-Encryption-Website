# -Text-Encryption-Website
1. Project Overview
The Web-Based Text Encryption Tool is a single-page web application developed using HTML, CSS and JavaScript. The application allows users to input plain text, select from a list of encryption algorithms and receive the corresponding cipher text. It also supports decryption (where applicable) and copying the output easily.
This tool provides users with a hands-on experience of multiple encryption methods and helps in understanding how data can be securely transformed.

2. Features
•	Input field for plain text
•	Dropdown to select an encryption algorithm
•	Key input field (only enabled when required)
•	Button to encrypt text
•	Button to decrypt (where applicable)
•	Copy-to-clipboard functionality with user feedback
•	Support for the following algorithms:
o	Caesar Cipher
o	Base64
o	AES
o	DES
o	RSA
o	SHA-256 (Hashing)

3. Technologies Used
•	Frontend: HTML, CSS, JavaScript
•	Encryption Library: CryptoJS
•	Icons: Lucide
•	Design: Responsive and modern interface with a logo and footer branding

4. Encryption Techniques Used

4.1 Caesar Cipher
•	Type: Symmetric key encryption
•	Description: A classical encryption method that shifts each letter in the plaintext by a fixed number of positions in the alphabet.
•	Example: A shift of 3 turns "HELLO" into "KHOOR".
•	Limitation: Very basic and easy to break by brute force.
•	Decryption: Done by shifting letters in the opposite direction.

4.2 Base64
•	Type: Encoding (not encryption)
•	Description: Converts binary data into ASCII string format using 64 characters (A-Z, a-z, 0-9, +, /).
•	Use Case: Often used in data transmission (e.g., embedding images in HTML/CSS).
•	Decryption: Decoding is easily reversible with Base64 decode functions.

4.3 AES (Advanced Encryption Standard)
•	Type: Symmetric key encryption
•	Description: A widely-used encryption standard adopted by the U.S. government. AES encrypts data in blocks of 128 bits using keys of 128, 192, or 256 bits.
•	Security: Very secure for modern applications.
•	Key: Required for both encryption and decryption.

4.4 DES (Data Encryption Standard)
•	Type: Symmetric key encryption
•	Description: Older standard than AES. It encrypts data in 64-bit blocks using a 56-bit key.
•	Security: Considered insecure today due to vulnerability to brute-force attacks.
•	Key: Required for both encryption and decryption.

4.5 RSA (Rivest–Shamir–Adleman)
•	Type: Asymmetric encryption
•	Description: Uses a public key for encryption and a private key for decryption. RSA is based on the difficulty of factoring large numbers.
•	Usage: Commonly used for secure data transmission, digital signatures, and key exchange.
•	Implementation in Project: A basic RSA demo using small keys to illustrate the concept.
•	Note: Real-world RSA uses large key sizes (2048+ bits) and secure libraries.
4.6 SHA-256 (Secure Hash Algorithm)
•	Type: Hashing algorithm (not encryption)
•	Description: Generates a 256-bit (32-byte) hash value. It is a one-way function and cannot be reversed.
•	Use Case: Often used for password storage, integrity checking, and digital signatures.
•	Decryption: Not possible, as hashing is irreversible.

5. Validation & UX Enhancements
•	Prevents empty input and alerts the user
•	Disables key input for algorithms that do not require a key
•	Copy-to-clipboard icon placed inside the output field
•	Visual popup confirmation for copy action
•	Dynamic UI behavior for better user experience

6. Conclusion
This project demonstrates the practical implementation of various encryption algorithms in a web environment. It provides a useful tool for learning and experimenting with encryption techniques. Future enhancements could include user authentication, message storage and integration with databases.

7. Links
•	Website: https://encryptionbyharis.netlify.app/
•	GitHub: https://github.com/muh-haris/Text-Encryption-Website
