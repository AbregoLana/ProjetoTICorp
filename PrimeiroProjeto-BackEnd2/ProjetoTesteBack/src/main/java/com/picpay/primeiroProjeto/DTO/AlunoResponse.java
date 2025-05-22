package com.picpay.primeiroProjeto.DTO;

public class AlunoResponse {
    private String mensagem;
    private boolean sucesso;

    public AlunoResponse(String mensagem, boolean sucesso) {
        this.mensagem = mensagem;
        this.sucesso = sucesso;
    }

    public String getMensagem() {
        return mensagem;
    }

    public boolean isSucesso() {
        return sucesso;
    }
}
