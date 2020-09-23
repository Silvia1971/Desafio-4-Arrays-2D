var nome  = [];

function adiciona() 
{
    var tela = document.getElementById("tela");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var endereco = document.getElementById("endereco");
    
    var nomes = [];
    nomes.push(tela.value);
    nomes.push(email.value);
    nomes.push(telefone.value);
    nomes.push(endereco.value);

    nome.push(nomes);
    
    mostrar();
    limparTxt();
}

function mostrar()
{
    var lista = document.getElementById("lista");
    var tamanho = nome.length;
    var text = "";

    text = "<ul>";
    for (i = 0; i < tamanho; i++) {
        //text += "<li>" + "Nome: " + nome[i][0] + " - email:" + nome[i][1] + " - Telefone:" + nome[i][2] + " - Endereço:" + nome[i][3] + "</li>";
        text += `<li>Nome:${nome[i][0]} - email:${nome[i][1]} - Telefone: ${nome[i][2]} - Endereço:${nome[i][3]}</li>`;
    }
    text += "</ul>";

    lista.innerHTML = text;
}

function mostrarTabela()
{
    var lista = document.getElementById("lista");
    var tamanho = nome.length;
    var text = "";

    text = "<table>";
    
    for (i = 0; i < tamanho; i++) {
        text += "<tr>";
        text += "<td>" + nome[i][0] + " - " + nome[i][1] + " - " + nome[i][2] + " - " + nome[i][3] + "</td>";
        text += "</tr>";
    }    
    text += "</table>";

    lista.innerHTML = text;
}

function apagar()
{
    nome.pop();
    mostrar();
    limparTxt();
}

function limpar()
{
    nome = [];
    mostrar();
    limparTxt();
}

function limparTxt()
{
    var tela = document.getElementById("tela");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var endereco = document.getElementById("endereco");

    tela.value = "";
    email.value = "";
    telefone.value = "";
    endereco.value = "";
}