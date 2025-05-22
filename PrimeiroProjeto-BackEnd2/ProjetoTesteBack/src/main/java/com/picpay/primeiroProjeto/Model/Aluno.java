package com.picpay.primeiroProjeto.Model;
import jakarta.persistence.*;

@Entity
@Table(name = "aluno")
public class Aluno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_aluno;
    private Double nota;
    private String disciplina;
    private char serie;
    private int ano;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "usuario_id", referencedColumnName = "id") // Nome da coluna de junção
    private Usuario usuario;

    public Long getId_aluno() {
        return id_aluno;
    }

    public void setId_aluno(Long id_aluno) {
        this.id_aluno = id_aluno;
    }

    public Double getNota() {
        return nota;
    }

    public void setNota(Double nota) {
        this.nota = nota;
    }

    public String getDisciplina() {
        return disciplina;
    }

    public void setDisciplina(String disciplina) {
        this.disciplina = disciplina;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public void setNome(String nome) {
        this.usuario.setNome_completo(nome);
    }

    public void setEmail(String email) {
        this.usuario.setEmail(email);
    }

    public Aluno(Double nota, String disciplina, Usuario usuario) {
        this.nota = nota;
        this.disciplina = disciplina;
        this.usuario = usuario;
    }

    public char getSerie() {
        return serie;
    }

    public void setSerie(char serie) {
        this.serie = serie;
    }

    public int getAno() {
        return ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public Aluno(Long id_aluno, Double nota, String disciplina, Usuario usuario) {
        this.id_aluno = id_aluno;
        this.nota = nota;
        this.disciplina = disciplina;
        this.usuario = usuario;
    }

    public Aluno() {

    }

    @Override
    public String toString() {
        return "Aluno{" +
                "id_aluno=" + id_aluno +
                ", nota=" + nota +
                ", disciplina='" + disciplina + '\'' +
                ", serie=" + serie +
                ", ano=" + ano +
                ", usuario=" + usuario +
                '}';
    }
}
