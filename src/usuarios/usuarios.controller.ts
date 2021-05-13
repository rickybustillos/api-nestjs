import { Controller, Post } from '@nestjs/common';

@Controller('api/v1/usuarios')
export class UsuariosController {

  @Post()
  async criarAtualizarUsuario() {
    return JSON.stringify({
      "nome": "Ricky",
      "sobrenome": "Bustillos"
    })
  }
}
