
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
            aux=object.a;
            aux++;
            object.a = aux;
        } else if (letra == "b") {
            aux=object.b;
            aux++;
            object.b = aux;
        } else if (letra == "c") {
            aux=object.c;
            aux++;
            object.c = aux;
        }else if (letra == "d") {
            aux=object.d;
            aux++;
            object.d = aux;
        }else if (letra == "e") {
            aux=object.e;
            aux++;
            object.e = aux;
        }else if (letra == "f") {
            aux=object.f;
            aux++;
            object.f = aux;
        }else if (letra == "g") {
            aux=object.g;
            aux++;
            object.g = aux;
        }else if (letra == "h") {
            aux=object.h;
            aux++;
            object.h = aux;
        }else if (letra == "i") {
            aux=object.i;
            aux++;
            object.i = aux;
        }else if (letra == "j") {
            aux=object.j;
            aux++;
            object.j = aux;
        }else if (letra == "k") {
            aux=object.k;
            aux++;
            object.k = aux;
        }else if (letra == 'l') {
            aux=object.l;
            aux++;
            object.l = aux;
        }else if (letra == "m") {
            aux=object.m;
            aux++;
            object.m = aux;
        }else if (letra == "n") {
            aux=object.n;
            aux++;
            object.n = aux;
        }else if (letra == "o") {
            aux=object.o;
            aux++;
            object.o = aux;
        }else if (letra == "p") {
            aux=object.p;
            aux++;
            object.p = aux;
        }else if (letra == "q") {
            aux=object.q;
            aux++;
            object.q = aux;
        }else if (letra == "r") {
            aux=object.r;
            aux++;
            object.r = aux;
        }else if (letra == "s") {
            aux=object.s;
            aux++;
            object.s = aux;
        }else if (letra == "t") {
            aux=object.t;
            aux++;
            object.t = aux;
        }else if (letra == "u") {
            aux=object.u;
            aux++;
            object.u = aux;
        }else if (letra == "v") {
            aux=object.v;
            aux++;
            object.v = aux;
        }else if (letra == "w") {
            aux=object.w;
            aux++;
            object.w = aux;
        }else if (letra == "x") {
            aux=object.x;
            aux++;
            object.x = aux;
        }else if (letra == "y") {
            aux=object.y;
            aux++;
            object.y = aux;
        }else if (letra == "z") {
            aux=object.z;
            aux++;
            object.z = aux;
        }
    }
    console.log(object);
}
let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";
constructor_obj_text(par);