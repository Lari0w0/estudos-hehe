window.onload = function() {
    const dadosSite = new URLSearchParams(window.location.search);
    const nome = dadosSite.get('nome');
    const cpf = dadosSite.get('cpf');
    const email = dadosSite.get('email');
    const telefone = dadosSite.get('telefone');
    const disciplina =  dadosSite.get('mainSelect')
    const dtNascimento = dadosSite.get('data');
    const turno = dadosSite.get('mainSelect1')
    var matricula 
}
document.getElementById('result').innerHTML = 
`<h1>Comprovante de Matrícula</h1>
<br>
<p>A Tech Hub atesta que o aluno(a) ${nome}, com matrícula: ${matricula}, cpf ${cpf}, email ${email}, do curso ${disciplina} está matriculado </p> `