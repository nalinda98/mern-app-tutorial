export const BarcodeIdGenerate = () => {
    const generateUniqueId = () => {
        const now = new Date();
        const uniqueId = `${padDigits(now.getFullYear() % 100, 2)}${padDigits(now.getMonth() + 1, 2)}${padDigits(now.getDate(), 2)}${padDigits(now.getHours(), 2)}${padDigits(now.getMinutes(), 2)}${padDigits(now.getSeconds(), 2)}`;  
        return uniqueId;
    }
    
    const padDigits = (number, digits) => {
        return String(number).padStart(digits, '0');
    }

    return generateUniqueId();       
    
}
