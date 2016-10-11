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

### Установка пакета для паралельного запуска задач

    $npm i concurrently -D     

### Добавление команды запуска сервере 

    $npm run start    

### Установка зависимостей для Angular 2

    $npm i -S core-js rxjs@5.0.0-beta.6 reflect-metadata zone.js systemjs   

### Установка Angular 2 модулей-пакетов   

    $npm i -S @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic  

    $npm i -S @angular/http @angular/forms @angular/router @angular/upgrade