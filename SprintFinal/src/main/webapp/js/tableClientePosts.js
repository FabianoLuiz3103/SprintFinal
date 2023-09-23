document.addEventListener("DOMContentLoaded", function () {
    const customerTable = document.querySelector("#customerTable tbody");
    const postTable = document.querySelector("#postTable tbody");
    let selectedCustomerId = null;

    function loadCustomers() {
        $.ajax({
            url: "tableClientePosts",
            method: "GET",
            dataType: "json",
            success: function (data) {
                customerTable.innerHTML = "";
                postTable.innerHTML = "";

                data.forEach(function (cliente) {
                    const row = document.createElement("tr");
                    row.dataset.customerId = cliente.idCliente;
                    row.innerHTML = `
                        <th scope="row">${cliente.idCliente}</th>
                        <td>${cliente.nome}</td>
                        <td>${cliente.idade}</td>
                    `;
                    customerTable.appendChild(row);
                    row.addEventListener("click", () => {
     
                    const rowData = row.children;
                    const idCliente = rowData[0].innerHTML;
                    selectedCustomerId = idCliente;
                    const nomeCliente = rowData[1].innerHTML;
                    const idadeCliente = rowData[2].innerHTML;
                    const emailCliente = cliente.email;
                    const telefoneCliente = cliente.telefone;
                    const dataCadastro = cliente.dataCadastro;

                    customerId.innerHTML = `<strong>Id:</strong> ${idCliente}`;
                    customerNome.innerHTML = `<strong>Nome:</strong> ${nomeCliente}`;
                    customerIdade.innerHTML = `<strong>Idade:</strong> ${idadeCliente}`;
                    customerEmail.innerHTML = `<strong>Email:</strong> ${emailCliente}`;
                    customerTelefone.innerHTML = `<strong>Telefone:</strong> ${telefoneCliente}`;
                   custumerDataCadastro.innerHTML = `<strong>Data de cadastro:</strong> ${dataCadastro}`;
                    
                     document.getElementById("customerInfoCard").classList.add("hidden");
                    document.getElementById("customerImage").style.display = "block";
                    document.getElementById("clienteDetailsCard").classList.remove("hidden");
                });
                });
                document.getElementById("postTableContainer").classList.remove("hidden");
            },
            
            error: function (error) {
                console.error("Erro ao buscar dados dos clientes: " + error);
            }
        });
    }


    function loadPosts(selectedCustomerId) {
        $.ajax({
            url: `retornaPosts?idCliente=${selectedCustomerId}`, //id do cliente
            method: "GET",
            dataType: "json",
            success: function (data) {
                postTable.innerHTML = "";

                data.forEach(function (post) {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <th scope="row">${post.idPost}</th>
                        <td>${post.mensagem}</td>
                        <td>${post.tipoESG}</td>
                    `;
                    postTable.appendChild(row);
                    
                     row.addEventListener("click", () => {
                    const rowData = row.children;
                    const idPost = rowData[0].textContent;
                    const mensagem = rowData[1].textContent;
                    const tipoESG = rowData[2].textContent;
                    const data = post.dataPostagem;
                    const responsavel = post.idCliente;
                    const selecao = post.idSelecao;

                    customerIdPost.innerHTML = `<strong>Id:</strong> ${idPost}`;
                    customerMensagem.innerHTML = `<strong>Mensagem:</strong> ${mensagem}`;
                    customerTipo.innerHTML = `<strong>Tipo ESG:</strong> ${tipoESG}`;
                    customerData.innerHTML = `<strong>Data de postagem:</strong> ${data}`;
                    customerResponsavel.innerHTML = `<strong>Id do responsavel pela postagem:</strong> ${responsavel}`;
                    customerSelecao.innerHTML = `<strong>Selecao em que foi salvo no banco:</strong> ${selecao}`;


                   
                    document.getElementById("customerInfoCard").classList.add("hidden");
                    document.getElementById("postDetailsCard").classList.remove("hidden");
                });
                    
                    
                });
            },
            error: function (error) {
                console.error("Erro ao buscar dados dos posts: " + error);
            }
        });
    }

customerTable.addEventListener("click", function (event) {
    const row = event.target.closest("tr");
    if (!row) return;

    const customerId = row.dataset.customerId;
    if (!customerId) return;

    document.getElementById("customerInfoCard").classList.add("hidden");
    document.getElementById("customerImage").style.display = "block";
    document.getElementById("clienteDetailsCard").classList.remove("hidden");

    loadPosts(customerId);
});


loadCustomers();

});
