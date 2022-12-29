/* 
Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.

Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher

Your task
Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.

Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.

Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!

Examples
A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.

A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.

*/

function encryptor (key, message) {
      if(key === 0) return message 
      if(message.length === 0) return message

    let result = ''

    for(let i = 0; i < message.length; i++){
        const code = message.charAt(i).charCodeAt() 
        console.log(code)
        if((code >= 65  && code <=90) || (code >=97 && code <= 122)){
            const newCode = code + key
            if((newCode >= 65  && newCode <=90) || (newCode >=97 && newCode <= 122)){
                result += String.fromCharCode(newCode)
            }else{
                if(key > 0 && newCode >= 97 ){
                    const calculateKey = newCode - 122
                    console.log(calculateKey)
                     result += String.fromCharCode(97 + calculateKey - 1)        
                }else if(key < 0 && newCode >= 97){
                    const calculateKey = 97- newCode 
                     result += String.fromCharCode(122 - calculateKey  + 1)   
                }else if(key > 0 && newCode < 97){
                    const calculateKey = newCode - 90
                    console.log(calculateKey)
                    
                     result += String.fromCharCode(65 + calculateKey - 1)
                }else if(key < 0 && newCode < 97){
                    const calculateKey = 65 - newCode
                     result += String.fromCharCode(97 - calculateKey + 1)
                }

            }

        }else{
            result += message.charAt(i)
        }


    }

	return result;
}