package com.picpay.primeiroProjeto.DTO;

import java.time.LocalDate;

public class AlunoRequest {
    private String email;
    private String nome_completo;
    private String genero;
    private LocalDate data_nascimento;
    private String tipo_alimentacao;
    private String escolaridade_paises;
    private Double nota;
    private String disciplina;


    public String getEmail() {
        return email;
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

    public String getEscolaridade_paises() {
        return escolaridade_paises;
    }

    public String getTipo_alimentacao() {
        return tipo_alimentacao;
    }


    public Double getNota() {
        return nota;
    }

    public String getDisciplina() {
        return disciplina;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setNome_completo(String nome_completo) {
        this.nome_completo = nome_completo;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public void setData_nascimento(LocalDate data_nascimento) {
        this.data_nascimento = data_nascimento;
    }

    public void setTipo_alimentacao(String tipo_alimentacao) {
        this.tipo_alimentacao = tipo_alimentacao;
    }

    public void setEscolaridade_paises(String escolaridade_paises) {
        this.escolaridade_paises = escolaridade_paises;
    }

    public void setNota(Double nota) {
        this.nota = nota;
    }

    public void setDisciplina(String disciplina) {
        this.disciplina = disciplina;
    }


    public AlunoRequest(String email, String nome_completo, String genero, LocalDate data_nascimento,
                        String tipo_alimentacao, String escolaridade_paises,
                        Double nota, String disciplina) {
        this.email = email;
        this.nome_completo = nome_completo;
        this.genero = genero;
        this.data_nascimento = data_nascimento;
        this.tipo_alimentacao = tipo_alimentacao;
        this.escolaridade_paises = escolaridade_paises;
        this.nota = nota;
        this.disciplina = disciplina;
    }

    public AlunoRequest() {
    }
}
