package br.com.fiap.redeSocial;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Cliente {
	
	private String idCliente;
	private String nome;
	private int idade;
	private String email;
	private String telefone;
	private Date dataCadastro;
	private Date dataUpdate;
	private List<Post> posts = new ArrayList<Post>();
	
	public Cliente() {
		
	}

	public Cliente(String nome, int idade, String email, String telefone, Date dataCadastro) {
		this.nome = nome;
		this.idade = idade;
		this.email = email;
		this.telefone = telefone;
		this.dataCadastro = dataCadastro;
	}

	public String getIdCliente() {
		return idCliente;
	}

	public void setIdCliente(String idCliente) {
		this.idCliente = idCliente;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getIdade() {
		return idade;
	}

	public void setIdade(int idade) {
		this.idade = idade;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTelefone() {
		return telefone;
	}

	public void setTelefone(String telefone) {
		this.telefone = telefone;
	}
	

	public Date getDataCadastro() {
		return dataCadastro;
	}

	public void setDataCadastro(Date dataCadastro) {
		this.dataCadastro = dataCadastro;
	}

	public Date getDataUpdate() {
		return dataUpdate;
	}

	public void setDataUpdate(Date dataUpdate) {
		this.dataUpdate = dataUpdate;
	}

	public List<Post> getPosts() {
		return posts;
	}

	public void setPosts(Post posts) {
		this.posts.add(posts);
	}
	
	
}
