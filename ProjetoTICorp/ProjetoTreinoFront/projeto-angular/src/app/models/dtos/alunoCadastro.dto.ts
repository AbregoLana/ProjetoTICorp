import { Injectable } from "@angular/core";

// src/app/models/dtos/alunoCadastro.dto.ts
export interface AlunoCadastro {
    nome_completo: string;
    email: string;
    genero: string;
    data_nascimento: Date;
    tipo_alimentacao: string;
    escolaridade_pais: string;
    
    // As notas agora estarão no array 'nota'
    nota: number; // Array de notas digitadas pelo usuário (se for o caso)
    disciplina: string; // Disciplinas correspondentes, se houver

    serie: string;
    ano: number;

    // Propriedades calculadas/atribuídas
    id: number; // Assumindo que o ID é um número
    media: number; // Média das notas no array 'nota'
    aprovado: boolean; // Baseado na média
}