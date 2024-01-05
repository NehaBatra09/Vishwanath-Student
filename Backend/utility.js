function generateID() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    const idLength = 8; // Minimum length of the ID

    let id = '';

    while (id.length < idLength) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        id += characters.charAt(randomIndex);
    }

    return id;
}

// Example usage:
const generatedID = generateID();
console.log('Generated ID:', generatedID);
module.exports = generateID
