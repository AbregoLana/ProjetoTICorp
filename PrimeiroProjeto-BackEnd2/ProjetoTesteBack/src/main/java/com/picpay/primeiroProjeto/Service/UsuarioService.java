package com.picpay.primeiroProjeto.Service;

import com.picpay.primeiroProjeto.DTO.LoginRequest;
import com.picpay.primeiroProjeto.DTO.UsuarioRequest;
import com.picpay.primeiroProjeto.Model.Usuario;
import com.picpay.primeiroProjeto.Repository.AlunoRepository;
import com.picpay.primeiroProjeto.Repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Service
public class UsuarioService {
    private static final Map<Long, Usuario> tarefas = new HashMap<>();
    @Autowired
    UsuarioRepository usuarioRepository;
    @Autowired
    private AlunoRepository alunoRepository;

    public List<Usuario> visualizarUsuarios() {
        return usuarioRepository.findAll();
    }
   



    public boolean inserirUsuario(UsuarioRequest cadastroRequest) {
        String regex = "^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$";
        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(cadastroRequest.getEmail());
        if (!matcher.matches()) {
            return false;
        }

        Usuario usuario = new Usuario();
        usuario.setEmail(cadastroRequest.getEmail());
        usuario.setSenha(cadastroRequest.getSenha());
        usuario.setNome_completo(cadastroRequest.getNome_completo());
        usuario.setGenero(cadastroRequest.getGenero());
        usuario.setData_nascimento(cadastroRequest.getData_nascimento());
        usuario.setTipo_alimentacao(cadastroRequest.getTipo_alimentacao());

        // Salvando o usuario no banco de dados
        Usuario usuarioSaved = usuarioRepository.save(usuario);


        return true; // Cadastro válido
    }

    public boolean remover_usuario(Long id) {
        if (usuarioRepository.findById(id).isPresent()) {
            usuarioRepository.deleteById(id);
            if(alunoRepository.findById(id).isPresent()){
                alunoRepository.deleteById(id);
            }
            return true;
        }
        return false;
    }


    public boolean validarLogin(LoginRequest loginRequest) {
        String email = loginRequest.getEmail();
        String senha = loginRequest.getSenha();
        return usuarioRepository.findByEmailAndSenha(email,senha).isPresent();
    }
}

