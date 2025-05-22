package com.picpay.primeiroProjeto.Repository;

import com.picpay.primeiroProjeto.Model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
}
