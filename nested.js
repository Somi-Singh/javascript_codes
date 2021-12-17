function fun1() {
    function fun2(a) {
        return a+9;
    }
    return fun2(9);
}
console.log(fun1());
// nested function