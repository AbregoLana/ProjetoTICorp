package com.picpay.primeiroProjeto.DTO;

import java.time.LocalDate;
import java.util.Date;


public class UsuarioRequest {
    private String email;
    private String senha;
    private String nome_completo;
    private String genero;
    private LocalDate data_nascimento;
    private String tipo_alimentacao;

    public String getEmail() {
        return email;
    }

    public String getSenha() {
        return senha;
    }

    public String getNome_completo() {
        return nome_completo;
    }

    public String getGenero() {
        return genero;
    }

    public LocalDate getData_nascimento() {
        return data_nascimento;
    }

    public String getTipo_alimentacao() {
        return tipo_alimentacao;
    }
}
