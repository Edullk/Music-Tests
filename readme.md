![banenr](https://user-images.githubusercontent.com/67022479/156891123-d5afe5db-cd18-4ec3-af04-a272869430b6.png)
<br>
![Badge License](https://img.shields.io/github/license/Edullk/app_music_tests)
![Badge issues](https://img.shields.io/github/issues/Edullk/app_music_tests)

> :construction: Projeto em construção :construction:

## :iphone: Aplicativo de músicas em react-native CLI com stacks de testes E2E:



<div style="display: flex">
  <image style="width: 300px; heigth: 300px" src="https://user-images.githubusercontent.com/67022479/156898321-926b48af-7c10-4e8c-934a-21eb50cf5518.png"></image>
  <image style="width: 600px; heigth: 600" src="/assets/run_test.gif"></image>
<div/>




### ✔️ Técnicas e tecnologias utilizadas

- ``Detox``
- ``React-native CLI``
- ``TDD``
- ``BDD``

### :point_right: <a href="/BDD.md">Cenários de testes</a> :point_left:


### :hammer: Funcionalidades do projeto

- `PLAY`: Reproduz a música.
- `PAUSE`: Pausa a música.
- `PULAR`: Pula para próxima música da playlist.
- `VOLTAR`: Voltar para música anterior da playlist.
- `LOOP`: Repete a música que está tocando sempre
- `LOOP 1X`: Repete a música que está tocando 1x


### 🛠️ Preparando o ambiente e rodando o projeto

1. Para instalar o projeto, começe instalando em sua máquina o projeto com o git:

```sh
git clone https://github.com/Edullk/app_music_tests.git
```
2. Depois do projeto baixado, você pode abri-lo com o editor da sua preferência. Aconselho usar o VsCode ou o WebStorm.

3. rode o comando ```yarn install```, para instalar todas as dependências do projeto.

<hr>

## Rodando os testes E2E

1. Atualizando o arquivo .detoxrc.json com o nome do seu emulador

```json
{
  "testRunner": "jest",
  "runnerConfig": "e2e/config.json",
  "configurations": {
    "android.emu.debug": {
      "type": "android.emulator",
      "binaryPath": "android/app/build/outputs/apk/debug/app-debug.apk",
      "build": "cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug && cd ..",
      "device": {
        "avdName": "NOME DO SEU EMULADOR"
      }
    }
  }
}
```

2. rode o comando ```yarn detox_build``` para gerar o APK especifico para os testes
1. rode o comando ```yarn detox_test```, para testar todos os componentes ou ```yarn test [nome_test]``` para rodar um teste especifico.
* Todos os testes unitários estão localizados na pasta ```e2e```


