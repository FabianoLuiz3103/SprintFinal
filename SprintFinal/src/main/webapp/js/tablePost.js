document.addEventListener("DOMContentLoaded", function () {
    const tableBody = document.querySelector("tbody");

    $.ajax({
        url: "tablePost", 
        method: "GET",
        dataType: "json",
        success: function (data) {
            tableBody.innerHTML = "";

            data.forEach(function (post) {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <th scope="row">${post.idPost}</th>
                    <td>${post.mensagem}</td>
                    <td>${post.tipoESG}</td>
                `;
                tableBody.appendChild(row);

               
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
            console.error("Erro ao buscar dados: " + error);
        }
    });
});


