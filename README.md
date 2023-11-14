# 🔏 CYBERSAFEZONE 💾

## Preview Desktop
<img src="./public/assets/img/readme/homepage preview.jpeg" alt="exemplo imagem">

## Tecnologias e Ferramentas utilizadas: 

![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![ChatGPT](https://img.shields.io/badge/chatGPT-74aa9c?style=for-the-badge&logo=openai&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Detalhes sobre nosas funcionalidades, em forma de diagrama de classes: 

### Gerador de Senhas: 
~~~~mermaid
classDiagram
  class Slider {
    fill: string
    background: string
    applyFill(slider): void
  }

  class RandomFunc {
    getRandomLower(): string
    getRandomUpper(): string
    getRandomNumber(): string
    getRandomSymbol(): string
  }

  class PasswordGenerator {
    - slider: Slider
    - randomFunc: RandomFunc
    - generatedPassword: boolean
    - resultContainerBound: object
    applyFill(slider): void
    secureMathRandom(): number
    getRandomLower(): string
    getRandomUpper(): string
    getRandomNumber(): string
    getRandomSymbol(): string
    generatePassword(length, lower, upper, number, symbol): string
    disableOnlyCheckbox(): void
  }

  class ResultContainer {
    resultEl: HTMLElement
    lengthEl: HTMLElement
    uppercaseEl: HTMLElement
    lowercaseEl: HTMLElement
    numberEl: HTMLElement
    symbolEl: HTMLElement
    generateBtn: HTMLElement
    copyBtn: HTMLElement
    resultContainer: HTMLElement
    copyInfo: HTMLElement
    copiedInfo: HTMLElement
    copyBtnClickHandler(): void
    generateBtnClickHandler(): void
  }

  PasswordGenerator --|> Slider
  PasswordGenerator --|> RandomFunc
  PasswordGenerator --|> ResultContainer

~~~~

### Verificador de senhas: 

~~~mermaid
classDiagram
  class VerificadorDeForca {
    - senha: string
    - resultado: HTMLElement
    verificarForca(): void
    calcularForca(senha): number
    getForcaTexto(forca): string
    estimarTempoQuebra(senha, forca): string
    calcularEntropia(senha): number
    formatarTempoEstimado(tempoEstimadoSegundos): string
    getElement(id): HTMLElement
    getInputValue(id): string
    setResult(element, resultadoHtml): void
    getColorForForca(forca): string
  }

  VerificadorDeForca --> getElement
  VerificadorDeForca --> getInputValue
  VerificadorDeForca --> setResult
  VerificadorDeForca --> calcularForca
  VerificadorDeForca --> getForcaTexto
  VerificadorDeForca --> estimarTempoQuebra
  VerificadorDeForca --> calcularEntropia
  VerificadorDeForca --> formatarTempoEstimado
  VerificadorDeForca --> getColorForForca

~~~~


<div align="center">
    <div>
      <h1>Figma</h1>
      <sub> Para ver o nosso design completo acesse: <a href="https://github.com/iuricode"></a>
    </div>
    <br/>
    💖
</div>

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/110142708?s=400&u=71a4f8db0ef4037c2635f6d72955ce7d6ed50bef&v=4" width="100px;" alt="icon leti"/><br>
        <sub>
          <b>Olga Leticia Lopes</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/82236608?v=4" width="100px;" alt="João"/><br>
        <sub>
          <b>João Pedro Alves</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/89092519?v=4" width="100px;" alt="Campi"/><br>
        <sub>
          <b>Gustavo Campi</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📫 Contribuindo para CyberSafeZone
Para contribuir com CyberSafeZone, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin CyberSafeZone/ <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).



## 😄 Seja um dos contribuidores<br>

Quer fazer parte desse projeto? Clique [AQUI](CONTRIBUTING.md) e leia como contribuir.

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE) para mais detalhes.

## 🖌️ Design

O design deste projeto foi inspirado no site [InfinityBank](infinitybank.vercel.app) de Larisn. Veja o arquivo Oficial do site em: [Infinitybank](https://github.com/larisn/infinitybank) para mais detalhes.

<div align="center">
  <br/>
  <br/>
  <br/>
    <div>
      <h1>Open Source</h1>
      <sub>Copyright © 2023 - <a href="https://github.com/iuricode">cybersafezone</sub></a>
    </div>
    <br/>
    💖
</div>
