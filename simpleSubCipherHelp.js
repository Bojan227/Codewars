/* 
A simple substitution cipher replaces one character from an alphabet with a character from an alternate alphabet, where each character's position in an alphabet is mapped to the alternate alphabet for encoding or decoding.

E.g.

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";
   
var sub = new SubstitutionCipher(abc1, abc2);
sub.encode("abc") // => "eta"
sub.encode("xyz") // => "qxz"
sub.encode("aeiou") // => "eirfg"
   
sub.decode("eta") // => "abc"
sub.decode("qxz") // => "xyz"
sub.decode("eirfg") // => "aeiou"
If a character provided is not in the opposing alphabet, simply leave it as be.
*/



function SubstitutionCipher(abc1, abc2) {
    const first = [...abc1]
    const second = [...abc2]



    this.encode = function (str) {
      //...
        let splited = str.split('')
        let encoded = ''

        splited.forEach(char=>{
            if(second.includes(char)){
                const idx = first.indexOf(char)

                encoded += second[idx]
            }else{
                encoded += char
            }


        })

        return encoded

    }
    this.decode = function (str) {
      //...
      let splited = str.split('')
      let decoded = ''

      splited.forEach(char=>{
          if(first.includes(char)){
              const idx = second.indexOf(char)

              decoded += first[idx]
          }else{
              decoded += char
          }


      })

      return decoded

    }
  }