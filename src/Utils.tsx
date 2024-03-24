export function checkTextVsRegEx(userText : string, userRegExp : string): boolean {

    let result = false;
  
    if(userRegExp !== undefined && userText !== undefined){
  
      const regExpPattern = new RegExp(userRegExp);
      result = regExpPattern.test(userText);
    }
  
    if (result) {
      console.log("valid");
    } else {
        console.log("invalid");
    }
  
    return result;
  }