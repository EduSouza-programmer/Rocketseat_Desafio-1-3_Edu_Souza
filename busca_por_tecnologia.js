const usuarios = [{
        nome: "Carlos",
        tecnologias: ["HTML", "CSS"]
    },
    {
        nome: "Jasmine",
        tecnologias: ["JavaScript", "CSS"]
    },
    {
        nome: "Tuane",
        tecnologias: ["HTML", "Node.js"]
    },
];

function checaSeUsuarioUsaCSS(usuario) {

    for (let tecnologia of usuario.tecnologias) {

        /* console.log(tecnologia) */
        if (tecnologia === "CSS") {
            return true;
        }

    }

    return false;

}

for (const usuario of usuarios) {
    if (checaSeUsuarioUsaCSS(usuario)) {
        console.log(`O usuário ${usuario.nome} trabalha com CSS`)
    }
    /* else {
           console.log(`O usuário ${usuario.nome} -NÃO- trabalha com CSS`)
       } */
}