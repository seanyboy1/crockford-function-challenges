function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function mul(x, y) {
  return x * y;
}

function identity(x) {
  return x;
}

function identityf(x) {
  return function () {
    return x;
  };
}

function addf(x) {
  return function (y) {
    return x + y;
  };
}

function liftf(a) {
  return function (x) {
    return function (y) {
      return a(x, y);
    };
  };
}

function curry(fun, x) {
  return function (y) {
    return fun(x, y);
  };
}

function twice(fn) {
  return function (x) {
    return fn(x, x);
  };
}

function reverse(fn) {
  return function (x, y) {
    return fn(y, x);
  };
}

function composeu(fn1, fn2) {
  return function (x) {
    return fn2(fn1(x));
  };
}

function composeb(fn1, fn2) {
  return function (x, y, z) {
    return fn2(fn1(x, y), z);
  };
}

function limit(fn, n) {
  let amount = 0;
  return function (x, y) {
    if (amount < n) {
      amount++;
      return fn(x, y);
    }
    return undefined;
  };
}

function from(x) {
  return function () {
    return x++;
  };
}

const to = (gen, end) => () => {
  const x = gen();
  if (x < end) {
    return x;
  }
  return undefined;
};

const fromTo = (start, end) => to(from(start), end);

function element(array, optional) {
  optional = optional || from(0);

  return function () {
    return array[optional()];
  };
}

function collect(gen, list) {
  return function () {
    let value = gen();
    if (value !== undefined) {
      list.push(value);
    }

    return value;
  };
}

function filter(gen, pred) {
  return function () {
    while (true) {
      val = gen();
      if (pred(val)) {
        return val;
      } else if (val === undefined) {
        return undefined;
      }
    }
  };
}

function concat(gen1, gen2) {
  return function () {
    const value = gen1()

    if (value !== undefined){
        return value
    }else {
        return gen2()
    }
    
  };
}

function repeat(gen){
    do {
        var value = gen()
    } while (value !== undefined)
}

function gensymf() {
  return function (){
    
  }
}