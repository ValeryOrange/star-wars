# Описание проекта
В далекой звездной системе встретились две флотилии космических кораблей. Корабли могут передвигаться по всему пространству звездной системы по прямой, поворачиваться против и по часовой стрелке, стрелять фотонными торпедами. Попадание фотонной торпеды в корабль выводит его из строя.

От каждой флотилии в сражении принимают участие по три космических корабля. 

Победу в битве одерживает та флотилия, которая  первой выведет из строя все корабли соперника.

Управление флотилиями осуществляется игрокам компьютерными программами (то есть не с клавиатуры).

Концептуально игра состоит из трех подсистем:

1. Игровой сервер, где реализуется вся игровая логика.

2. Player - консольное приложение, на котором отображается конкретная битва.

3. Агент - приложение, которое запускает программу управления танками от имени игрока и отправляет управляющие команды на игровой сервер. 

# Требования до установки
1. [node 16](https://nodejs.org/en/download/)

# Сборка проекта
1. npm install - установка зависимостей
2. npm run compile - компиляция typescript в javascript в watch-режиме
3. npm run server - запуск игрового сервера
4. npm run agent - запуск агента
5. npm run player - запуск игрока
6. npm run test - запуск тестов