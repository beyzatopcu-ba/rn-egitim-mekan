/// GENERATOR FUNCTIONS

export default () => {
    console.clear();

    // simpleExample();

    // withReturns();

    // iterability();

    // nestedGenerator();

    // generatorsWithParams();

    passingValueWithYield();
};

const simpleExample = () => {
    // En basit generator function
    function* generatorFunction() {
        console.log('inside generator 1')
        yield 5;
        console.log('inside generator 2')
        yield 10;
        console.log('inside generator 3')
        yield 20;
    };

    let generator = generatorFunction();
    console.log(generator);

    let first = generator.next();
    console.log('first', first);

    let second = generator.next();
    console.log('second', second);

    let third = generator.next();
    console.log('third', third);

    let fourth = generator.next();
    console.log('fourth', fourth);
}

const withReturns = () => {
    
    function* generatorFunction() {
        console.log('inside generator 1')
        yield 5;
        console.log('inside generator 2')
        return 10;
        console.log('inside generator 3')
        yield 20;
    };

    const generatorObject = generatorFunction();
    console.log('BİRİNCİ ---', generatorObject.next());
    console.log('İKİNCİ ---', generatorObject.next());
    console.log('ÜÇÜNCÜ ---', generatorObject.next());
    console.log('DÖRDÜNCÜ ---', generatorObject.next());
}

const iterability = () => {
    // En basit generator function
    function* generatorFunction() {
        console.log('inside generator 1')
        yield 5;
        console.log('inside generator 2')
        yield 10;
        console.log('inside generator 3')
        yield 20;
    };

    let generator = generatorFunction();
    /*
    const arr = [...generator];
    console.log(arr);
    */

    /*
    for (let yieldedObj of generator) {
        console.log(yieldedObj);
    }
    */

    for (;;) {
        let yieldedObj = generator.next();
        if (yieldedObj.done === true) {
            break;
        }
        console.log(yieldedObj.value);
    }
}

const nestedGenerator = () => {
    function* generatorFuncOne() {
        console.log('inside generatorOne 1')
        yield 5;
        console.log('inside generatorOne 2')
        yield 10;
        console.log('inside generatorOne 3')
        yield 20;
    };

    function* generatorFuncTwo() {
        console.log('inside generatorTwo 1');
        yield 'a';
        console.log('inside generatorTwo 2');
        yield* generatorFuncOne();
        console.log('inside generatorTwo 3');
    };

    const generatorObjTwo = generatorFuncTwo();

    for (let i = 1; i < 6; i++) {
        let result = generatorObjTwo.next();
        console.log('Result of iteration ' + i)
        console.log(result);
    }
}

const generatorsWithParams = () => {

    function* arithmeticGeneratorFunction(a,b) {
        yield a + b;
        yield a - b;
        yield a * b;
        yield a / b;
    };

    const arithmeticGenerator = arithmeticGeneratorFunction(4, 8);

    for (let i = 1; i < 5; i++) {
        let result = arithmeticGenerator.next();
        console.log('Result of iteration ' + i)
        console.log(result);
    }

}

const passingValueWithYield = () => {
    function* personInfoGenFunc() {
        let name = yield "Adın ne?"; // 1. next'e return edilen değer: 'Adın ne?'
        console.log(name);
        let age = yield "Yaşın kaç?";
        console.log(age);
    }

    const personInfoGen = personInfoGenFunc();
    let qAdinNe = personInfoGen.next().value;
    console.log(qAdinNe);
    let qYasinKac = personInfoGen.next('Beyza').value;
    console.log(qYasinKac);
    personInfoGen.next(30);
}