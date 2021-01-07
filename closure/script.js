debugger;

function main() {
  var a = 100;

  function foo() {
    var b = a + 50;

    return b;
  }

  function bar() {
    var a = 40;

    return foo();
  }

  function baz() {
    return foo() + bar();
  }

  return baz();
}

main();