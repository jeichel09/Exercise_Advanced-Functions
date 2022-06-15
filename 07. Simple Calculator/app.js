function calculator() {
    let field1 = null;
    let field2 = null;
    let result = null;

    return {
        init,
        add,
        subtract
    }

    function init(s1, s2, res) {
       field1 = document.querySelector(s1);
       field2 = document.querySelector(s2);
       result = document.querySelector(res);
    }

    function add() {
        result.value = Number(field1.value) + Number(field2.value);
    }

    function subtract() {
        result.value = Number(field1.value) - Number(field2.value);
    }
}




