<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html lang="PT-BR">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tabela clientes</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <link rel="icon" href="./imagens/vaiii.png" type="image/x-icon">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        /* Estilos para dispositivos m�veis */
        @media (max-width: 768px) {
            .btn-group {
                flex-direction: column;
            }
            .btn {
                width: 100%;
                margin: 5px 0;
            }
            .mt-5 {
                margin-top: 1rem;
            }
            .mb-5 {
                margin-bottom: 1rem;
            }
            .img-top {
                max-width: 100%;
                height: auto;
            }
        }
    </style>
</head>
<body>

    <%@ include file="header.jsp" %>
    
    <div class="container">
        <div class="row w-100">
            <div class="col-md-10">
                <h3 class="mt-5">TABELA DE CLIENTES</h3>
            </div>
            <div class="col-md-2 mt-5">
                <a href="/SprintFinal/menuPrincipal" class="btn btn-outline-white btn-primary btn-hover mb-1 mx-3" style="width: 20vh; font-size:10px;"><i class="fa fa-home"></i></a>
            </div>
        </div>
    </div>

    <main class="container mt-5">
        <div class="row">
            <div class="col-md-12 col-lg-6">
                <div id="customerInfoCard" class="card bg-secondary-subtle">
                    <div class="text-center mt-3">
                        <p class="fw-bold blinking-text">Clique em uma linha da tabela para ver os detalhes do cliente.</p>
                    </div>
                </div>
                <div id="clienteDetailsCard" class="card hidden">
                    <div class="text-center mt-3">
                        <img id="customerImage" src="./imagens/userSemFoto.png" alt="Usu�rio sem foto" class="w-50 h-auto rounded-circle m-auto" style="display: none;">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title ms-3">Informa��es do Cliente</h5>
                        <p id="customerId" class="card-text"></p>
                        <p id="customerNome" class="card-text"></p>
                        <p id="customerIdade" class="card-text"></p>
                        <p id="customerEmail" class="card-text"></p>
                        <p id="customerTelefone" class="card-text"></p>
                        <p id="custumerDataCadastro" class="card-text"></p>
                    </div>
                </div>
            </div>
            <div class="col-md-12 col-lg-6">
                <h3 class="mb-4 mt-5">TABELA DE CLIENTES</h3>
                <div class="table-container">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Id Cliente</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Idade</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </main>
    
    <%@ include file="footer.jsp" %>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous">
    </script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="./js/table.js"></script>
</body>
</html>
