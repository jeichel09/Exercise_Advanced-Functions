function solution() {
    let inStock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const commands = {
        restock,
        prepare,
        report
    };
    
    let meals = {
        apple: { protein: 0, carbohydrate: 1, fat: 0, flavour: 2 },
        lemonade: { protein: 0, carbohydrate: 10, fat: 0, flavour: 20 },
        burger: { protein: 0, carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, carbohydrate: 0, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    //console.log(inStock);
    return manager;

    function manager(line) {
        let [command, param, quan] = line.split(' ');
        return commands[command](param, quan);
    }

    function restock(me, quan) {
        inStock[me] += Number(quan);
        return "Success";
    }

    function prepare(meal, servs) {
        let canBeDone = true;
        for (let m in meals[meal]) {
            if (meals[meal][m] * servs > inStock[m]) {
                canBeDone = false;
                return `Error: not enough ${m} in stock`;
            }
        }
        if (canBeDone) {
            for (let me in meals[meal]) {
                inStock[me] -= meals[meal][me] * servs;
            }
            return "Success";
        }
    }

    function report() {
        return `protein=${inStock.protein} carbohydrate=${inStock.carbohydrate} fat=${inStock.fat} flavour=${inStock.flavour}`;
    }
}
let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));