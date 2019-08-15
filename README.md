# App UFFS

Esse projeto tem como objetivo de se tornar um aplicativo para os estudantes da Universidade Federal da Fronteira Sul.

**Sumário**

 1. Dependências
 2. Instalação
 3. Como executar
 4. Possíveis erros
 5. Telas

# 1. Dependências
Como o projeto é feito em [React Native](https://facebook.github.io/react-native/) é necessário que estejam instalados algumas dependências essenciais antes da instalação.

[Node.js](https://nodejs.org/en/download/) (v11.15.0)
[Yarn](https://yarnpkg.com/pt-BR/docs/install#debian-stable) (1.16.0)
NPM (6.10.1)
[Expo](https://docs.expo.io/versions/latest/introduction/installation/) (2.18.7)

OBS: As versões especificadas são as que estão rodando atualmente na máquina de desenvolvimento.

# 2. Instalação

Após a instalação das dependências essenciais é necessário apenas executar o seguinte comando pelo terminal dentro da pasta do projeto  e todas as dependências especificadas dentro do arquivo 'package.json' serão instaladas.

    sudo yarn install
  
 No dispositivo de teste (celular ou tablet) instale o app Expo para visualizar o aplicativo da UFFS rodando.
 
 Download: [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR) , [Apple Store](https://apps.apple.com/us/app/expo-client/id982107779).
 
# 3. Como executar

Dentro da pasta do projeto

![enter image description here](https://lh3.googleusercontent.com/N4mlJ4yaBPU_wbDJXBIIzIezpNRnCv79p5ukZTU-h9qjYy_lwJuV95d7lMMn8GQ674Rl5_pWY6BJAA "Pasta do projeto")

Execute o comando abaixo pelo terminal:

    sudo yarn start
    
No terminal irá aparecer a imagem abaixo, indicando que o projeto pode ser executado no dispositivo de teste.

![enter image description here](https://lh3.googleusercontent.com/HzYwQHlgiy77TEsNsfmvN1TTQv3l03zpsyave0dbwQ0Ziw1hwPaSTZmgok-bDAAtiqM4DU6WAz6Xbg "QR Code")

É possível escanear o QR Code com a câmera (dispositivos Android) ou selecionar no aplicativo Expo a aplicação em execução.

OBS: O computador onde o terminal está rodando a aplicação e o dispositivo de teste devem estar conectados na mesma rede Wifi.

# 4. Possíveis erros

Caso apareça no terminal um erro relacionado ao número de conexões, é necessário parar a execução no terminal (CTRL + Z) e colar o seguinte código:

    echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p

