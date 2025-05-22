package com.picpay.primeiroProjeto.Service;

import com.picpay.primeiroProjeto.DTO.AlunoEUsuarioDTO;
import com.picpay.primeiroProjeto.Model.Aluno;
import com.picpay.primeiroProjeto.DTO.AlunoRequest;
import com.picpay.primeiroProjeto.Model.Usuario;
import com.picpay.primeiroProjeto.Repository.AlunoRepository;
import com.picpay.primeiroProjeto.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class AlunoService {
    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private UsuarioRepository usuarioRepository;

    public boolean inserirAluno(AlunoRequest alunoRequest) {
            String regex = "^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$";
            Pattern pattern = Pattern.compile(regex);
            Matcher matcher = pattern.matcher(alunoRequest.getEmail());
            if (!matcher.matches()) {
                return false;
            }

            Usuario usuario = new Usuario();
            usuario.setEmail(alunoRequest.getEmail());
            usuario.setNome_completo(alunoRequest.getNome_completo());
            usuario.setGenero(alunoRequest.getGenero());
            usuario.setData_nascimento(alunoRequest.getData_nascimento());
            usuario.setTipo_alimentacao(alunoRequest.getTipo_alimentacao());
            usuario.setEscolaridade_pais(alunoRequest.getEscolaridade_paises());

            Usuario usuarioSaved = usuarioRepository.save(usuario);
            return true;
    }

    public boolean inserirNota(AlunoRequest alunoRequest) {
        Long user_id = usuarioRepository.findTopByOrderByIdDesc();
        Aluno aluno = new Aluno();
        aluno.setId_aluno(user_id);

        String disciplina = alunoRequest.getDisciplina();
        Double notas = alunoRequest.getNota();

        if (disciplina != null && !disciplina.isEmpty() && notas != null) {
            aluno.setDisciplina(disciplina);
            aluno.setNota(notas);
        } else {
            return false;
        }

        return true;
    }

    public boolean atualizar_aluno(Long id, Usuario user) {
        return usuarioRepository.findById(id).map(usuario -> {
            usuario.setEmail(user.getEmail());
            usuario.setNome_completo(user.getNome_completo());
            usuario.setGenero(user.getGenero());
            usuario.setData_nascimento(user.getData_nascimento());
            usuario.setTipo_alimentacao(user.getTipo_alimentacao());
            usuario.setEscolaridade_pais(user.getEscolaridade_pais());
            usuarioRepository.save(usuario);
            return true;
        }).orElse(false);
    }

    public boolean atualizar_aluno(Long id, Aluno aluno) {
        return alunoRepository.findById(id).map(alunoRep -> {
            alunoRep.setAno(aluno.getAno());
            alunoRep.setDisciplina(aluno.getDisciplina());
            // Atualiza cada nota individualmente, se existirem
            Double[] notas = new Double[]{aluno.getNota()};

            alunoRep.setSerie(aluno.getSerie());
            alunoRepository.save(alunoRep);
            return true;
        }).orElse(false);
    }
    public boolean remover_aluno(Long id) {
        usuarioRepository.deleteById(id);
        if (alunoRepository.findById(id).isPresent()) {
            alunoRepository.deleteById(id);
        } else {
            return false;
        }
            return true;
        }

    public List<Aluno> visualizar_aluno() {
        return alunoRepository.findAll();
    }
}