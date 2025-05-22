package com.picpay.primeiroProjeto.DTO;

import com.fasterxml.jackson.databind.ser.std.UUIDSerializer;
import com.picpay.primeiroProjeto.Model.Aluno;
import com.picpay.primeiroProjeto.Model.Usuario;

import java.time.LocalDate;

public class AlunoEUsuarioDTO {
    private String email;
    private String genero;
    private LocalDate nascimento;
    private String alimentacao;
    private String escolaridadePais;
    private String disciplina;
    private Double nota;
    private Double media;
    private String status;


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public LocalDate getNascimento() {
        return nascimento;
    }

    public void setNascimento(LocalDate nascimento) {
        this.nascimento = nascimento;
    }

    public String getAlimentacao() {
        return alimentacao;
    }

    public void setAlimentacao(String alimentacao) {
        this.alimentacao = alimentacao;
    }

    public String getEscolaridadePais() {
        return escolaridadePais;
    }

    public void setEscolaridadePais(String escolaridadePais) {
        this.escolaridadePais = escolaridadePais;
    }

    public String getDisciplina() {
        return disciplina;
    }

    public void setDisciplina(String disciplina) {
        this.disciplina = disciplina;
    }

    public Double getNota() {
        return nota;
    }

    public void setNota(Double nota) {
        this.nota = nota;
    }

    public Double getMedia() {
        return media;
    }

    public void setMedia(Double media) {
        this.media = media;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public AlunoEUsuarioDTO(String email, String genero, LocalDate nascimento, String alimentacao, String escolaridadePais, String disciplina, Double nota, Double media, String status) {
        this.email = email;
        this.genero = genero;
        this.nascimento = nascimento;
        this.alimentacao = alimentacao;
        this.escolaridadePais = escolaridadePais;
        this.disciplina = disciplina;
        this.nota = nota;
        this.media = media;
        this.status = status;
    }
}
