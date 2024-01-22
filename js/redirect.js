// se o html estiver dentro da pasta "html" então vai ser com ponto simples senão é com dois pontos
let caminhoHtml = ['./html/register.html', './html/login.html','../html/register.html', '../html/login.html'];
function redirecionar(n){
    window.location.href = caminhoHtml[n];
}