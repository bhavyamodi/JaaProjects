let x = "()";
console.log(ispar(x));

function ispar(x) {
  this.stack = [];
  const isOpening = (char) => {
    return char == "(" || char == "[" || char == "{";
  };

  const isMatching = (char, peek) => {
    return (
      (peek == "(" && char == ")") ||
      (peek == "[" && char == "]") ||
      (peek == "{" && char == "}")
    );
  };

  for (var i = 0; i < x.length; i++) {
    let paranthesis = x.charAt(i);
    // console.log(this.stack[this.stack.length - 1])
    console.log(paranthesis);
    if (isOpening(paranthesis)) {
      this.stack.push(paranthesis);
    } else {
      if (this.stack.length == 0) {
        return false;
      } else if (isMatching(paranthesis, this.stack[this.stack.length - 1])) {
        this.stack.pop();
      } else {
        return false;
      }
    }
  }
  return this.stack.length > 0 ? false : true;
}
