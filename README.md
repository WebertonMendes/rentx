# Cadastro de Carro

**RF (Requisitos funcionais)**<br>
[X] Deve ser possível cadastrar um novo carro.<br>

**RN (Regra de Negócio)**<br>
[X] Não deve ser possível cadastrar um carro com uma placa já existente.<br>
[X] O carro deve ser cadastrado por padrão, com disponibilidade.<br>
[X] O usuário reponsável pelo cadastrado deve ser um usuário administrador.<br>


# Listagem de Carros

**RF (Requisitos funcionais)**<br>
[X] Deve ser possível listar todos os carros disponíveis.<br>
[X] Deve ser possível listar todos os carros disponíveis pelo nome da categoria.<br>
[X] Deve ser possível listar todos os carros disponíveis pelo nome da marca.<br>
[X] Deve ser possível listar todos os carros disponíveis pelo nome do carro.<br>

**RN (Regra de Negócio)**<br>
[X] O usuário não precisa estar logado no sistema.<br>


# Cadastro de Especificação no carro

**RF (Requisitos funcionais)**<br>
[X] Deve ser possível cadastrar uma especificação para um carro.<br>

**RN (Regra de Negócio)**<br>
[] Não deve ser possível cadastrar uma especificação para um carro não cadastrado.<br>
[X] Não deve ser possível cadastrar uma especificação já existente pra o mesmo carro.<br>
[X] O usuário reponsável pelo cadastrado deve ser um usuário administrador.<br>


# Cadastro de imagens do carro

**RF (Requisitos funcionais)**<br>
[X] Deve ser possível cadastrar a imagem do carro.<br>

**RNF (Requisitos não funcionais)**<br>
[X] Utilizar o multer para upload dos arquivos.<br>

**RN (Regra de Negócio)**<br>
[X] O usuário deve ter permissão para cadastrar mais de uma imagem para o mesmo carro.<br>
[X] O usuário reponsável pelo cadastrado deve ser um usuário administrador.<br>


# Aluguel de carro

**RF (Requisitos funcionais)**<br>
[X] Deve ser possível cadastrar um aluguel.<br>

**RN (Regra de Negócio)**<br>
[X] O aluguel deve ter duração mínima de 24 horas.<br>
[X] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário.<br>
[X] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro.<br>
[X] O usuário precisa estar logado no sistema.<br>
[X] Ao realizar um aluguel, o status do carro deve ser alterado para indisponível.<br>


# Devolução de carro

**RF (Requisitos funcionais)**<br>
[X] Deve ser possível realizar a devolução de um carro.<br>

**RN (Regra de Negócio)**<br>
[X] Se o carro for devolvido com menos de 24 horas, deve ser cobrado a diária completa.<br>
[X] Ao realizar a devolução, o carro deve ser liberado para outro aluguel.<br>
[X] Ao realizar a devolução, o usuário deverá ser liberado para outro alugel.<br>
[X] Ao realizar a devolução, deverá ser calculado o total do aluguel.<br>
[X] Caso o horário de devolução seja superior ao horário previsto de entrega, deverá ser cobrado uma multa proporcional aos dias em atraso.<br>
[X] Caso haja multa, deverá ser somado ao total do aluguel.<br>
[X] O usuário precisa estar logado no sistema.<br>


# Listagem de Aluguéis para o usuário

**RF (Requisitos funcionais)**<br>
[X] Deve ser possível realizar a busca de todos os aluguéis para o usuário.<br>

**RN (Regra de Negócio)**<br>
[X] O usuário precisa estar logado no sistema.<br>


# Recuperação de Senha

**RF (Requisitos funcionais)**<br>
[] Deve ser possível que o usuário recupere a senha informando o e-mail.<br>
[] O usuário deve receber um e-mail com o passo a passo para a recuperação da senha.<br>
[] O usuário deve conseguir inserir uma nova senha.<br>

**RN (Regra de Negócio)**<br>
[] O usuário precisa informar uma nova senha.<br>
[] O link enviado para recuperação deve expirar em 3 horas.<br>