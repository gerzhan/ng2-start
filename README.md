# Angular 2 start

 Разработка приложения на Angular 2 с нуля

## Создание проекта 

    $nmp init --yes
    $touch index.html
    $npm i -D lite-server

## Добавление TypeScript 

    $npm i -D typescript typings    

### Добавление конфигураций для TypeScript

    $touch tsconfig.json typings.json    
    $npm i -g typings 
    $typings install dt~core-js dt~jasmine dt~node --save --global  