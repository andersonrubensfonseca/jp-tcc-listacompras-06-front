<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Produtos</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="mb-4">Cadastro de Produtos</h1>
        <div class="row mb-4">
            <div class="col-md-6">
                <div class="input-group">
                    <input type="text" id="produto" class="form-control" placeholder="Digite o nome do produto">
                    <button id="bnt" class="btn btn-primary">Cadastrar Produto</button>
                </div>
            </div>
        </div>
        <ul id="lista-produtos" class="list-group">
            <li class="list-group-item">Arroz</li>
            <li class="list-group-item">Feijão</li>
            <li class="list-group-item">Macarrão</li>
            <li class="list-group-item">Açúcar</li>
        </ul>
    </div>

    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.min.js"></script>

    <script>
        var $lista = document.querySelector('#lista-produtos');
        var $produto = document.querySelector('#produto');
        var $botao = document.querySelector('#bnt');

        $botao.addEventListener('click', addProduto);

        function addProduto() {
            if ($produto.value.trim() === '') return; // Não adicionar itens vazios

            var item = '<li class="list-group-item">' + $produto.value + '</li>';
            $lista.innerHTML += item;
            $produto.value = '';
            $produto.focus();
        }

        $produto.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                addProduto();
            }
        });
    </script>
</body>
</html>

-----site------

              <!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>Checklist de compras</title>
           <!-- Bootstrap CSS -->
           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
           <style>
               body {
                   padding-top: 50px;
                   background-color: #374f66;
               }
               .form-container {
                   background-color: #eee6e6;
                   padding: 20px;
                   border-radius: 8px;
                   box-shadow: 0 4px 8px rgba(243, 237, 237, 0.1);
               }
           </style>
       </head>
       <body>
       
           <div class="container">
               <div class="form-container mx-auto mt-5">
                   <h1 class="text-center mb-4">Lista de compras</h1>
       
                   <h3>Informações do Produto</h3>
                   <form id="produtoForm">
                       <div class="mb-3">
                           <label for="produtoNome" class="form-label">Nome do Produto:</label>
                           <input type="text" class="form-control" id="produtoNome" required>
                       </div>
                       <div class="mb-3">
                           <label for="produtoQuantidade" class="form-label">Quantidade:</label>
                           <input type="number" class="form-control" id="produtoQuantidade" required>
                       </div>
                       <button type="submit" class="btn btn-primary">Adicionar Produto</button>
                   </form>
       
                   <h3 class="mt-4">Lista de Produtos</h3>
                   <div id="listaProdutos" class="list-group mt-3">
                       <!-- Itens da lista serão adicionados aqui -->
                   </div>
               </div>
           </div>
       
           <!-- Bootstrap JS and dependencies -->
           <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
                
            <script>
                var lista = document.getElementById('listaProdutos');
                let produtosStore = JSON.parse(localStorage.getItem('produtos'))
                if(produtosStore){
                    produtosStore.forEach(produto=>{
                        var item = document.createElement('div');
                       item.className = 'form-check';
                       item.innerHTML = produto;
                       lista.appendChild(item);
                    })
                }
               document.getElementById('produtoForm').addEventListener('submit', function(e) {
                   e.preventDefault();
                   var nome = document.getElementById('produtoNome').value.trim();
                   var quantidade = document.getElementById('produtoQuantidade').value.trim();
       
                   if (nome && quantidade) {
                        let produtosStore = JSON.parse(localStorage.getItem('produtos'))
                        if(!produtosStore){
                            produtosStore = [];
                        }
                        let formcheck = `<input class="form-check-input" type="checkbox" value="" id="flexCheck${produtosStore.length}">
                            <label class="form-check-label" for="flexCheckDefault">
                                ${nome} - Quantidade: ${quantidade}
                            </label>`

                       var item = document.createElement('div');
                       item.className = 'form-check';
                       item.innerHTML = formcheck;
                       lista.appendChild(item);
                      
                       produtosStore.push(item.innerHTML)
                       localStorage.setItem('produtos',JSON.stringify(produtosStore))
                       // Limpar campos de entrada
                       document.getElementById('produtoNome').value = '';
                       document.getElementById('produtoQuantidade').value = '';
                       document.getElementById('produtoNome').focus();
                   } else {
                       alert('Por favor, preencha todos os campos!');
                   }
               });
           </script>
            <script>
                // Função para salvar o estado dos checkboxes no localStorage
                function saveCheckboxStates() {
                    const checkboxes = document.querySelectorAll('.form-check-input');
                    const states = {};
                    checkboxes.forEach(checkbox => {
                        states[checkbox.id] = checkbox.checked;
                    });
                    localStorage.setItem('checkboxStates', JSON.stringify(states));
                }

                // Função para carregar o estado dos checkboxes do localStorage
                function loadCheckboxStates() {
                    const states = JSON.parse(localStorage.getItem('checkboxStates'));
                    if (states) {
                        Object.keys(states).forEach(id => {
                            const checkbox = document.getElementById(id);
                            if (checkbox) {
                                checkbox.checked = states[id];
                            }
                        });
                    }
                }

                // Adiciona event listeners a todos os checkboxes para salvar seu estado quando alterado
                document.querySelectorAll('.form-check-input').forEach(checkbox => {
                    checkbox.addEventListener('change', saveCheckboxStates);
                });

                // Carrega o estado dos checkboxes quando a página é carregada
                document.addEventListener('DOMContentLoaded', loadCheckboxStates);
            </script>
       </body>
       </html>
              
              







