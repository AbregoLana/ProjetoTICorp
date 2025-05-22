package com.picpay.primeiroProjeto.Model;

import jakarta.persistence.*;

import java.time.LocalDate;
import java.util.Date;
@Table(name = "usuario")
@Entity(name = "usuario")
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String senha;
    private String nome_completo;
    private String genero;
    private LocalDate data_nascimento;
    private String tipo_alimentacao;
    private String escolaridade_pais;

    public Usuario() {}

    public Usuario(Long id, String email,String nome_completo, String genero, LocalDate data_nascimento, String tipo_alimentacao) {
        this.id = id;
        this.email = email;
        this.nome_completo = nome_completo;
        this.genero = genero;
        this.data_nascimento = data_nascimento;
        this.tipo_alimentacao = tipo_alimentacao;
    }

    public Usuario(Long id, String email,  String senha, String nome_completo, String genero, LocalDate data_nascimento, String tipo_alimentacao, String escolaridade_pais) {
        this.id = id;
        this.email = email;
        this.senha = senha;
        this.nome_completo = nome_completo;
        this.genero = genero;
        this.data_nascimento = data_nascimento;
        this.tipo_alimentacao = tipo_alimentacao;
        this.escolaridade_pais = escolaridade_pais;
    }
    public Usuario(Long id, String email,  String nome_completo, String genero, LocalDate data_nascimento, String tipo_alimentacao, String escolaridade_pais) {
        this.id = id;
        this.email = email;
        this.nome_completo = nome_completo;
        this.genero = genero;
        this.data_nascimento = data_nascimento;
        this.tipo_alimentacao = tipo_alimentacao;
        this.escolaridade_pais = escolaridade_pais;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getNome_completo() {
        return nome_completo;
    }

    public void setNome_completo(String nome_completo) {
        this.nome_completo = nome_completo;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public LocalDate getData_nascimento() {
        return data_nascimento;
    }

    public void setData_nascimento(LocalDate data_nascimento) {
        this.data_nascimento = data_nascimento;
    }

    public String getTipo_alimentacao() {
        return tipo_alimentacao;
    }

    public void setTipo_alimentacao(String tipo_alimentacao) {
        this.tipo_alimentacao = tipo_alimentacao;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEscolaridade_pais() {
        return escolaridade_pais;
    }

    public void setEscolaridade_pais(String escolaridade_pais) {
        this.escolaridade_pais = escolaridade_pais;
    }

    @Override
    public String toString() {
        return "Usuario{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", senha='" + senha + '\'' +
                ", nome_completo='" + nome_completo + '\'' +
                ", genero='" + genero + '\'' +
                ", data_nascimento=" + data_nascimento +
                ", tipo_alimentacao='" + tipo_alimentacao + '\'' +
                '}';
    }

}
