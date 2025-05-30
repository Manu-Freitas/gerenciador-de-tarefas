let tarefas = ['Estudar JavaScript', 'Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia', 'Ler um livro', 'Fazer revisão para o teste', 'Limpar o quarto', 'Estudar para concurso', 'Organizar o computador'];

console.log("tarefas");
console.table(tarefas);

// Adicionando uma nova tarefa
tarefas.push("varrer a casa", "estender roupa");

console.log("depois do push");
console.table(tarefas);

// Removendo a última tarefa
let tarefaRemovida = tarefas.pop();

console.log("Depois do pop:");
console.table(tarefas);

console.log("Tarefa removida:", tarefaRemovida);


// Adicionando nova tarefa no início 
tarefas.unshift("lavar o carro");

console.log("Depois do unshift");
console.table(tarefas);


// Removendo a primeira tarefa
let tarefasRemovida = tarefas.shift();

console.log("Depois do shift");
console.table(tarefas);

console.log("Tarefa removida:", tarefasRemovida);

// Verificando se a tarefa "ir a academia" existe
if (tarefas.includes("Ir à academia")) {
    console.log(`A tarefa já existe na lista`);
} else {
    tarefas.push("Ir à acamdemia");
    console.table(tarefas);
}

// Transformando a lista em uma string
console.log("Lista de tarefas como String: ", tarefas.join(", "));


// Extraindo uma parte da lista do 2 ao 4
console.log("Parte da tarefa (índices 2 a 5):", tarefas.slice(2, 5)); // ['Fazer exercícios de matemática', 'Lavar a louça', 'Comprar mercado', 'Ir à academia']



