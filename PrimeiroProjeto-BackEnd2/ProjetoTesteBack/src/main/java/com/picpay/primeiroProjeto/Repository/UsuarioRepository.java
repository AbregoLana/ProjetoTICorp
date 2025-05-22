package com.picpay.primeiroProjeto.Repository;

import com.picpay.primeiroProjeto.Model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    Optional<Usuario> findByEmailAndSenha(String email, String senha);

    Long findTopByOrderByIdDesc();

}// Pega o último usuário inserido}
