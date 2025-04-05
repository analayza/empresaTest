# Plano de Teste

**Sistema de Cadastro de Funcionários**

*versão 1.0*

## Histórico das alterações

   Data    | Versão |    Descrição   | Autor(a)
-----------|--------|----------------|-----------------
05/04/2005 |  1.0   | Release incial | Ana Layza


## 1 - Introdução

Este documento descreve os requisitos a testar, os tipos de testes definidos para cada iteração, os recursos de hardware e software a serem empregados e o cronograma dos testes ao longo do projeto. As seções referentes aos requisitos, recursos e cronograma servem para permitir ao gerente do projeto acompanhar a evolução dos testes.

Com esse documento, deve-se:
- Identificar as funcionalidades e componentes de software que devem ser testados;
- Listar os requisitos funcionais e não-funcionais a testar;
- Descrever as estratégias de teste;
- Identificar recursos e estimar esforços;
- Listar os elementos resultantes do projeto de testes.

## 2 - Requisitos a Testar

Esta seção deve conter os casos de uso e requisitos não funcionais identificados como objetos dos testes ao longo do desenvolvimento do projeto.
Como, em geral, os requisitos a testar são obtidos diretamente dos requisitos do sistema, esta seção é concebida como opcional. Assim sendo, sempre que novos requisitos a testar, que não constem como requisitos do sistema, forem identificados ou, simplesmente, por questões de organização e clareza, esta seção deve ser preenchida.
Dependendo das informações disponíveis, essa seção pode começar a ser preenchida já nas primeiras iterações do ciclo de vida a partir do documento de requisitos.

Caso seja necessário, liste aqui os requisitos a testar subdivididos em casos de uso e requisitos não-funcionais.

### Casos de uso:

Identificador do caso de uso | Nome do caso de uso
-----------------------------|---------------------
id UC01                      |       Cadastro de funcionários
id UC02                      |       Validação de formulário
id UC03	                     |       Visualização de registros

### Requisitos não-funcionais:

Identificador do requisito   | Nome do requisito
-----------------------------|---------------------
RNF01	                     |Persistência de dados
RNF02	                     |Tempo de resposta aceitável


## 3 - Tipos de teste

Esta seção deve conter os tipos de testes escolhidos para cada iteração do projeto.
Pode-se definir inicialmente apenas os tipos de testes que serão usadas na próxima iteração, mas é possível também já registrar eventuais tipos de teste que se espera utilizar nas demais iterações. 
Com base no guia de testes, indique os tipos de testes que melhor se adéquam aos requisitos, tipo da aplicação e seus recursos disponíveis e, caso necessário complemente ou forneça mais detalhes da técnica e dos critérios de completude sugeridos no guia para cada tipo de teste indicado.

- Teste de interface de usuário;
- Teste de performance;
- Teste de carga;
- Teste de stress;
- Teste de segurança e controle de acesso;
- Teste de instalação;
- Entre outros.

### 3.1 - Métodos da Classe 

- Verificar se cada método de validação retorna os resultados esperados. Inclui os seguintes testes:
- Validação de nome (somente letras);
- Validação de CPF (formato válido);
- Validação de idade (ser maior de 18);
- Validação de e-mail (regex);
- Validação de campo obrigatório (não pode estar vazio);
- Teste de relação entre campos (ex: se cargo exige campo extra).

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4"> Este projeto tem como objetivo desenvolver um sistema web de cadastro de funcionários, com validações de dados em tempo real e um mini framework de testes customizado para garantir a consistência e integridade das informações inseridas.O sistema realiza validações específicas para cada campo do formulário, como verificação de CPF, idade mínima, e-mail, telefone, entre outros, garantindo que apenas dados válidos sejam aceitos. Além disso, foi implementado um mecanismo próprio de testes automatizados para validar o funcionamento das regras de negócio
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema ( )
        </th>
        <th>
            Unidade (x)
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca (x)
        </th>
        <th colspan="2">
            Caixa preta ( )
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Programador(es) ou equipe de testes
        </th>
    </tr>
</table>
<br/>

### 3.2 - Persistência de Dados

Verificar se os dados inseridos no sistema permanecem após encerramento ou falha. Inclui testes de escrita/leitura de banco de dados.

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            Verificar se dados são mantidos após súbito desligamento do programa.
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Equipe de Testes
        </th>
    </tr>
</table>
<br/>

### 3.3 - Integração dos Componentes

Verificar se as classes de entrada de dados, validador e repositório interagem corretamente.

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            é garantir a integridade e a confiabilidade dos dados inseridos no sistema de cadastro de funcionários, por meio de validações específicas para cada campo e testes automatizados personalizados.
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração (x)
        </th>
        <th>
            Sistema ( )
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca (x)
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Programador(es) 
        </th>
    </tr>
</table>
<br/>

### 3.4 - Tempo de Resposta

Verificar se as respostas do sistema ao usuário (validações, submissão, listagem) ocorrem em menos de 1 segundo.

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            assegurar que todas as validações de dados e interações com o sistema ocorram de forma rápida e eficiente, proporcionando uma boa experiência ao usuário.
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            ( ) manual
        </th>
        <th colspan="2">
            (x) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Equipe de testes
        </th>
    </tr>
</table>
<br/>

### 3.5 - Animação

Verificar se há animação na exibição dos erros ou carregamento dos dados.

<br/>
<table>
    <tr>
        <th>
            Objetivo
        </th>
        <th colspan="4">
            melhorar a experiência do usuário, proporcionando transições suaves e feedbacks visuais claros durante a interação com os componentes do sistema.
        </th>
    </tr>
    <tr>
        <th>
            Técnica:
        </th>
        <th colspan="2">
            (x) manual
        </th>
        <th colspan="2">
            ( ) automática
        </th>
    </tr>
    <tr>
        <th>
            Estágio do teste
        </th>
        <th>
            Integração ( )
        </th>
        <th>
            Sistema (x)
        </th>
        <th>
            Unidade ( )
        </th>
        <th>
            Aceitação ( )
        </th>
    </tr>
    <tr>
        <th>
            Abordagem do teste
        </th>
        <th colspan="2">
            Caixa branca ( )
        </th>
        <th colspan="2">
            Caixa preta (x)
        </th>
    </tr>
    <tr>
        <th>
            Responsável(is)
        </th>
        <th colspan="4">
            Equipe de testes
        </th>
    </tr>
</table>
<br/>

### 3.6 - Efeitos Sonoros


## 4 - Recursos

### 4.1 - Ambiente de teste - Software e Hardware

Sistema operacional: Windows 10 ou superior, Linux Ubuntu 22.04
Navegador: Chrome, Firefox
Framework: Node.js 20+, Express, MongoDB local
IDE: VS Code
Memória: mínimo 4 GB RAM
CPU: Dual Core 2.0GHz+

### 4.2 - Ferramenta de teste

CLI
Postman (testes manuais de requisições HTTP)
MongoDB Compass (inspeção de dados)

## 5 - Cronograma

Tipo de teste      | Duração | data de início | data de término
-------------------|---------|----------------|-----------------
Planejar teste	   |1 dia	 |04/04/2025	  |06/04/2025
Projetar teste	   |1 dia	 |04/04/2025	  |08/04/2025
Implementar teste  |1 dia	 |05/04/2025	  |10/04/2025
Executar teste	   |1 dia	 |05/04/2025	  |12/04/2025
Avaliar teste	   |1 dia	 |06/04/2025	  |13/04/2025
