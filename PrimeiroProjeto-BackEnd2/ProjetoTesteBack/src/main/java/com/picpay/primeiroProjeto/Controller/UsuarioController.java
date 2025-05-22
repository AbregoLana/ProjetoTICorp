package com.picpay.primeiroProjeto.Controller;

import com.picpay.primeiroProjeto.DTO.UsuarioRequest;
import com.picpay.primeiroProjeto.DTO.UsuarioResponse;
import com.picpay.primeiroProjeto.Model.Usuario;
import com.picpay.primeiroProjeto.Service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/cadastro")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("/cadastrar-usuario")
    @ResponseBody
    public UsuarioResponse cadastrarUsuario(@RequestBody UsuarioRequest cadastroRequest) {
        boolean cadastro_valido = usuarioService.inserirUsuario(cadastroRequest);
        if (cadastro_valido) {

            return new UsuarioResponse("Cadastro realizado com sucesso", true);
        }else{
            return new UsuarioResponse("Cadastro inválido", false);
        }
    }

    @GetMapping("/listar")
    public List<Usuario> visualizarUsuarios() {
        return usuarioService.visualizarUsuarios();
    }

}
