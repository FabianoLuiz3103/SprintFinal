package br.com.fiap.redeSocial;

import java.util.Date;

public class Post {

	private String idPost;
	private String mensagem;
	private String tipoESG;
	private String idCliente;
	private String idSelecao;
	private Date dataPostagem;
	private Date dataUpdate;
	

	public Post() {

	}


	public Post(String mensagem, String tipoESG, String idCliente, String idSelecao, Date dataPostagem) {
		this.mensagem = mensagem;
		this.tipoESG = tipoESG;
		this.idCliente = idCliente;
		this.idSelecao = idSelecao;
		this.dataPostagem = dataPostagem;
	}


	public String getIdPost() {
		return idPost;
	}


	public void setIdPost(String idPost) {
		this.idPost = idPost;
	}


	public String getMensagem() {
		return mensagem;
	}


	public void setMensagem(String mensagem) {
		this.mensagem = mensagem;
	}


	public String getTipoESG() {
		return tipoESG;
	}


	public void setTipoESG(String tipoESG) {
		this.tipoESG = tipoESG;
	}


	public String getIdCliente() {
		return idCliente;
	}


	public void setIdCliente(String idCliente) {
		this.idCliente = idCliente;
	}


	public String getIdSelecao() {
		return idSelecao;
	}


	public void setIdSelecao(String idSelecao) {
		this.idSelecao = idSelecao;
	}
	
	public Date getDataPostagem() {
		return dataPostagem;
	}


	public void setDataPostagem(Date dataPostagem) {
		this.dataPostagem = dataPostagem;
	}


	public Date getDataUpdate() {
		return dataUpdate;
	}


	public void setDataUpdate(Date dataUpdate) {
		this.dataUpdate = dataUpdate;
	}
	


}
