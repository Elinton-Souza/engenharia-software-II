console.log ("Olá, Git!");
console.log ("Olá, GitHub!");
console.log ("Olá, GitHub Desktop!");
console.log ("Olá, GitHub Desktop! Estou editando o código!");
console.log ("Olá, GitHub Desktop! Estou editando o código novamente!");

// Fluxo do commit

// 1. Modificar o código
// 2. Salvar o código
// 3. Adicionar o código para o commit (git add .)
// 4. Fazer o commit (git commit -m "Mensagem do commit")
// 5. Enviar o código para o repositório remoto (git push)

//Teste de modificação

//amend
//git commit --amend -m "Mensagem do commit corrigida"

//reset
//git reset --soft HEAD~1 (mantém as alterações no código)
//git reset --hard HEAD~1 (descarta as alterações no código)

//checkout
//git checkout -- Main.js (descarta as alterações no arquivo Main.js)

//tag
//git tag -a v1.0 -m "Versão 1.0"
//git tag -d v1.0 (deleta a tag v1.0)

//branches
//git branch nova-branch (cria uma nova branch chamada nova-branch)
//git checkout nova-branch (muda para a branch nova-branch)
//git merge nova-branch (mescla a branch nova-branch com a branch atual)
//git branch -d nova-branch (deleta a branch nova-branch)

//git stash
//git stash (salva as alterações temporariamente)
//git stash apply (aplica as alterações salvas)
//git stash drop (descarta as alterações salvas)

function saudacao(){
 console.log("Olá, seja bem-vindo ao meu código!");
}

function soma(a, b){
 return a + b;
}
console.log(soma(5, 3));
