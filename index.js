const CryptoJS = require('crypto-js');

let result ;

const encrypt = (text) => {
  result = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
  return  result
};

console.log(encrypt('The obvious downside is that Base64'))

const decrypt = (data) => {
  return CryptoJS.enc.Base64.parse(data).toString(CryptoJS.enc.Utf8);
};

console.log(decrypt(result))
