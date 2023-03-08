export default function IsEmpty(obj) {
    for (let key in obj) {
      if (!obj[key] || obj[key].trim() === '') {
        return false; // Property is empty, return false
      }
    }
    return true; // No empty properties found, return true
  }