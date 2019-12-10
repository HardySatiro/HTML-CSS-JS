class Main {
    constructor() {
        this.initialize();
    }

    initialize() {
        document.getElementById('foneid').addEventListener('input', function (e) {
            const x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
            e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
        });
    }

    register(type) {
        
        if (type === 'google') {
            this.googleRegister();
        } else if (type === 'facebook') {
            this.facebookRegister();
        } else {
            this.validate();
            /*alert('Registro interno.')*/
        }
    }
    facebookRegister() {
        alert('Registro no Facebook')
    }
    googleRegister() {
        alert('Registro no Google')
    }
    validate() {

        const nome = document.getElementById("nomeid");
        const fone = document.getElementById("foneid");
        const email = document.getElementById("emailid");
        const pass = document.getElementById("passwordid");
        const rpass = document.getElementById("rpasswordid");

                
        if (nome.value != "" && fone.value != "" && email.value != "" && pass.value != "" && rpass.value != "") {

            if(pass.value != rpass.value){
                alert("Senhas diferentes");
            } else {
                alert('Obrigador sr(a) ' + nome.value + ' seus dados foram salvos:' + '\n'+ 'Telefone: '+ fone.value + '\nEmail: ' + email.value);
            }
            
        } else {
            alert('Os campos nao foram preenchidos');   
        }
        
    }
}

const main = new Main();
