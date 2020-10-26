function login() {
    localStorage.setItem("loged", true)

}

function checkLogin() {
    const loged = localStorage.getItem("loged")

    return loged;
}


// function login() {
//     return true;
// }


function showContent() {
    const check = checkLogin();
    //console.log(check);

    const headerSection = document.getElementsByTagName("header")[0];
    const loginSection = document.getElementById("login");

    if (check) {
        headerSection.style.display = "flex";
        loginSection.style.display = "none";
    } else {
        console.log("faz outra coisa");
        headerSection.style.display = "none";
        loginSection.style.display = "flex";
    }
}

function logout() {
    localStorage.removeItem("loged")
    showContent()
}

showContent()


// ao clicar em logar ele executa a função login
// ele salva no localstorage o valor como true (verdadeiro) na chave loged
// depois ele chama a função showcontent que a mesma salva na constante check 
// o valor verdadeiro de loged
// após isso a constante headersection = é referenciada pela tag headerSection
// que é um array e a constante loginsection faz o mesmo pelo id 
// a constante check é verificada pelo if, ela sendo verdadeira ele pega o estilo
// do display e altera o header para flex (ele aparece) e o login para none (desaparece)

// ao clicar em Sair no html ele chama a função logout e remove o valor verdadeiro da loged e chama a função showcontent
// e constante check, roda a função checklogin e a mesma verifica no localstorage que o valor é false após isso a constante headersection = é referenciada pela tag headerSection
// que é um array e a constante loginsection faz o mesmo pelo id 
// a constante check é verificada pelo if, e é false, sendo assim ele vai pro else e o headersection dinsplay vai para none que (desaparece)
// e o loginsection vai para flex ( que reaparece)