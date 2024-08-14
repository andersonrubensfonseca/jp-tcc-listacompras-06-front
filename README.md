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
