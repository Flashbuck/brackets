module.exports = function check(str, bracketsConfig) {
  str = str.split('');
  let newstr = str.slice(),
      length = 0,
      Brack = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
      Brack.push(bracketsConfig[i].join(''));
  }
  while (newstr.length !== 0) {
      for (let i = 0; i < newstr.length; i++) {
          if (Brack.includes(newstr[i] + newstr[i + 1])) {
              newstr.splice(i, 2).join('');
          }
      }
      if(length > str.length){
        return false;
      }
      length+=1;
  }
  return true;
}
