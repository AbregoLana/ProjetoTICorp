package com.picpay.primeiroProjeto.Controller;

import com.picpay.primeiroProjeto.DTO.LoginRequest;
import com.picpay.primeiroProjeto.DTO.LoginResponse;
import com.picpay.primeiroProjeto.Service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")  // Atualizado para ter o caminho correto para a API
public class LoginController {

    @Autowired
    private UsuarioService usuarioService;

    @CrossOrigin(origins = "http://localhost:4200")  // Permite acesso do frontend Angular
    @PostMapping("/")  // Mapeia corretamente a URL para o login
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        // Valida o login com os dados recebidos
        boolean isValid = usuarioService.validarLogin(loginRequest);

        // Retorna a resposta baseada na validação
        if (isValid) {
            return new LoginResponse("Login bem-sucedido", true);
        } else {
            return new LoginResponse("Email ou senha inválidos", false);
        }
    }
}
