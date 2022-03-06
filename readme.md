![banenr](https://user-images.githubusercontent.com/67022479/156891123-d5afe5db-cd18-4ec3-af04-a272869430b6.png)
<br>
![Badge License](https://img.shields.io/github/license/Edullk/app_music_tests)
![Badge issues](https://img.shields.io/github/issues/Edullk/app_music_tests)
![Badge issues](https://img.shields.io/snyk/vulnerabilities/github/Edullk/app_music_tests)

> :construction: Projeto em construção :construction:

## :iphone: Aplicativo de músicas em react-native CLI com stacks de testes unitários e E2E:

<image style="width: 300px; heigth: 300px" src="https://user-images.githubusercontent.com/67022479/156898321-926b48af-7c10-4e8c-934a-21eb50cf5518.png"></image>

## Imagem aqui 
## Video aqui

### ✔️ Técnicas e tecnologias utilizadas

- ``Enzyme``
- ``Detox``
- ``React-native CLI``
- ``TDD``
- ``BDD``


### :hammer: Funcionalidades do projeto

- `Funcionalidade 1`: descrição da funcionalidade 1
- `Funcionalidade 2`: descrição da funcionalidade 2
- `Funcionalidade 2a`: descrição da funcionalidade 2a relacionada à funcionalidade 2
- `Funcionalidade 3`: descrição da funcionalidade 3


### 🛠️ Abrir e rodar o projeto

**Apresente as instruções necessárias para abrir e executar o projeto**



### Inicio do app

| QUANDO | App é aberto |
| --- | --- |
| DADO QUE  | Carregue com sucesso |
| ENTÃO | Primeira musica com nome, artista e banner deve aparecer |
| E | Contador esquerdo zerado |
| E | Contador direito com o valor > 0 |

### Inicio da musica

| QUANDO | Musica estiver visivel |
| --- | --- |
| DADO QUE  | Aperte o botão “PLAY” |
| ENTÃO | Musica deve começar a tocar |
| E | Slider deve se mover conforme a duração |
| E | Contador esquerdo deve iniciar a contagem progressiva |
| E | Contador  direito deve iniciar a contagem regressiva |

### Pular música

| QUANDO | Musica estiver tocando |
| --- | --- |
| DADO QUE  | Aperte o botão “PULAR” |
| ENTÃO | Musica deve pular para a próxima da playlist, mudando nome, artista e banner |
| E | Slider deve retomar |
| E | Contador esquerdo deve zerar |
| E | Contador  direito deve marcar o valor > 0 |

### Voltar música

| QUANDO | Musica estiver tocando |
| --- | --- |
| DADO QUE  | Aperte o botão “Retornar” |
| ENTÃO | Musica deve pular para a anterior da playlist, mudando nome, artista e banner |
| E | Slider deve retomar |
| E | Contador esquerdo deve zerar |
| E | Contador  direito deve marcar o valor > 0 |

### Pausar música

| QUANDO | Musica estiver tocando |
| --- | --- |
| DADO QUE  | Aperte o botão “PAUSAR” |
| ENTÃO | Musica deve parar de tocar |
| E | Slider deve ficar fixo |
| E | Contador esquerdo deve ficar fixo |
| E | Contador esquerdo deve ficar fixo |

### Pular partes da música

| QUANDO | Musica estiver tocando |
| --- | --- |
| DADO QUE  | Faça o gesto de slide na barra da musica |
| ENTÃO | Musica tocar a partir da duração que foi selecionada |
| E | Slider deve ficar fixo no local selecioado |
| E | Contador esquerdo deve ir para duração |
| E | Contador esquerdo deve ficar duração - duração selecionada |

### Repetição da música

### Caso repetição estiver desabilitada

- Seguir BDD pular música

### Caso repetição estiver habilitada 1x

| QUANDO | Musica estiver tocando |
| --- | --- |
| DADO QUE  | Música estiver no final |
| ENTÃO | A mesma musica deverá ser repetida |
| E | Slider deve ir para o inicio |
| E | Contador esquerdo deve ir para zero |
| E | Contador esquerdo deve ficar > 0  |
| SE | Já estiver sido repetida |
| ENTÃO | pular musica para a próxima da playlist |

### Caso repetição estiver habilitada forever

| QUANDO | Musica estiver tocando |
| --- | --- |
| DADO QUE  | Música estiver no final |
| ENTÃO | A mesma musica deverá ser repetida |
| E | Slider deve ir para o inicio |
| E | Contador esquerdo deve ir para zero |
| E | Contador esquerdo deve ficar > 0  |
