var me = { name: "Guedes", age: 30, getAge: function () {
    return this.age;    // ok
    return age;         // exception
}
};

console.log(me);
//console.log(me.getAge());

//var cena = {age: 1, x: me.getAge};
//console.log( cena.x() );

//var f = me.getAge;
//console.log(f()); // BUG (runtime)!!!
//
//
