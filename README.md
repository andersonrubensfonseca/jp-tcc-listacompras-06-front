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
           <link href="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
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
                   <ul id="listaProdutos" class="list-group mt-3">
                       <!-- Itens da lista serão adicionados aqui -->
                   </ul>
               </div>
           </div>
       
           <!-- Bootstrap JS and dependencies -->
           <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
           <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"></script>
           <script src="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.min.js"></script>
       
           <script>
               document.getElementById('produtoForm').addEventListener('submit', function(e) {
                   e.preventDefault();
       
                   var nome = document.getElementById('produtoNome').value.trim();
                   var quantidade = document.getElementById('produtoQuantidade').value.trim();
       
                   if (nome && quantidade) {
                       var lista = document.getElementById('listaProdutos');
                       var item = document.createElement('li');
                       item.className = 'list-group-item';
                       item.textContent = `${nome} - Quantidade: ${quantidade}`;
                       lista.appendChild(item);
       
                       // Limpar campos de entrada
                       document.getElementById('produtoNome').value = '';
                       document.getElementById('produtoQuantidade').value = '';
                       document.getElementById('produtoNome').focus();
                   } else {
                       alert('Por favor, preencha todos os campos!');
                   }
               });
           </script>
       
       </body>
       </html>
              







