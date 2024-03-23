
function constructor_obj_text(text) {
    let object = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 0,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 0,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 0,
        q: 0,
        r: 0,
        s: 0,
        t: 0,
        u: 0,
        v: 0,
        w: 0,
        x: 0,
        y: 0,
        z: 0
    };
    for (let i = 0; i < text.length; i++) {
        let letra = text[i].toLowerCase();
        if (letra == "a") {
            object.a = object.a++;
        } else if (letra == "b") {
            object.b = object.b++;
        } else if (letra == "c") {
            object.c = object.c++;
        }else if (letra == "d") {
            object.d = object.d++;
        }else if (letra == "e") {
            object.e = object.e++;
        }else if (letra == "f") {
            object.f = object.f++;
        }else if (letra == "g") {
            object.g = object.g++;
        }else if (letra == "h") {
            object.h = object.h++;
        }else if (letra == "i") {
            object.i = object.i++;
        }else if (letra == "j") {
            object.j = object.j++;
        }else if (letra == "k") {
            object.k = object.k++;
        }else if (letra == 'l') {
            object.a = object.a++;
        }else if (letra == "m") {
            object.m = object.m++;
        }else if (letra == "n") {
            object.n = object.n++;
        }else if (letra == "o") {
            object.o = object.o++;
        }else if (letra == "p") {
            object.p = object.p++;
        }else if (letra == "q") {
            object.q = object.q++;
        }else if (letra == "r") {
            object.r = object.r++;
        }else if (letra == "s") {
            object.s = object.s++;
        }else if (letra == "t") {
            object.t = object.t++;
        }else if (letra == "u") {
            object.u = object.u++;
        }else if (letra == "v") {
            object.v = object.v++;
        }else if (letra == "w") {
            object.x = object.x++;
        }else if (letra == "x") {
            object.x = object.x++;
        }else if (letra == "y") {
            object.y = object.y++;
        }else if (letra == "z") {
            object.z = object.z++;
        }
    }
    console.log(object);
}
let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";
constructor_obj_text(par);