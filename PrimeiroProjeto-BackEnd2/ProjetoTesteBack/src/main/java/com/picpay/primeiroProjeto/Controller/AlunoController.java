package com.picpay.primeiroProjeto.Controller;

import com.picpay.primeiroProjeto.DTO.AlunoEUsuarioDTO;
import com.picpay.primeiroProjeto.DTO.AlunoRequest;
import com.picpay.primeiroProjeto.Repository.UsuarioRepository;
import com.picpay.primeiroProjeto.Service.AlunoService;
import jakarta.persistence.GeneratedValue;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class AlunoController {



    @Autowired
    private UsuarioRepository usuarioRepository;
    @Autowired
    private AlunoService alunoService;
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/cadastro-notas")
    @ResponseBody
    public String cadastrarUsuario(@RequestBody AlunoRequest alunoRequest) {
        System.out.println("Recebido: " + alunoRequest);
        if (alunoRequest == null) {
            return "Objeto alunoRequest veio null";
        }
        boolean cadastroValido = alunoService.inserirAluno(alunoRequest);
        return cadastroValido ? "Cadastro realizado com sucesso" : "Cadastro inválido";
    }

    @PostMapping("/cadastro2-notas")
    @ResponseBody
    public String cadastrarNota(@RequestBody AlunoRequest alunoRequest) {
        System.out.println("Recebido: " + alunoRequest);
        if (alunoRequest == null) {
            return "Objeto alunoRequest veio null";
        }
        boolean cadastroValido = alunoService.inserirNota(alunoRequest);
        return cadastroValido ? "Cadastro realizado com sucesso" : "Cadastro inválido";
    }

    @GetMapping("/notas")
    public List<AlunoEUsuarioDTO> listarAlunos() {
        // Implemente o método listarAlunosAgrupadosPorUsuario no AlunoService para retornar a lista de AlunoEUsuarioDTO
        return alunoService.visualizar_aluno();
    }

}
