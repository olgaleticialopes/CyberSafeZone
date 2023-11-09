# 🔏 CYBERSAFEZONE 💾

## HomePage
<img src="../CyberSafeZone/public/assets/img/readme/homepage preview.jpeg" alt="exemplo imagem">

## Tecnologias utilizadas: 

- *HTML* :
- *CSS* :
- *JS* :
- *VERCEL* :
- *FIGMA* :
- *BD4FREE* :

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



## Paleta de cores
<img src="https://media.discordapp.net/attachments/1020872567738863716/1166513369063358634/Group_3.png?ex=654ac33b&is=65384e3b&hm=f5915d0938f8c60a366caba506c63160eb73cfb2f7629d5db84d21e21ccade56&=&width=1009&height=580" alt="paleta">

<div align="center">
    <div>
      <h1>Figma</h1>
      <sub> Para ver o nosso design completo acesse: <a href="https://github.com/iuricode"></a>
    </div>
    <br/>
    💖
</div>

## 📫 Contribuindo para CyberSafeZone
Para contribuir com CyberSafeZone, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: `git checkout -b <nome_branch>`.
3. Faça suas alterações e confirme-as: `git commit -m '<mensagem_commit>'`
4. Envie para o branch original: `git push origin CyberSafeZone/ <local>`
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

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
