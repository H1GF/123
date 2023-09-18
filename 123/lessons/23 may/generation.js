//Добавляем переменную из 23may.js
export default class generation {
    constructor(game) {
        // Ключевые переменные и их значения
        this.time = Date.now();
        this.game = game;
        this.counter = 0;
        this.number = 0;
        // Шаблоны моих сообщений с угадыванием номера
        this.userMsgChoices = ["Ваш номер ",
                            "Хорошо..Может это ",
                            "Как насчет "];
        // Шаблоны бота на мои сообщения
        this.botMsgChoices = ["Увы, мой номер ",
                            "Попробуй еще раз. Мой номер ",
                            "Хорошая попытка, мой номер "];
        //Вводим классы из html
        this.frame = this.game.querySelector(".game__frame");
        this.sendBtn = this.game.querySelector(".game-controls__but");
        this.inputGuess = this.game.querySelector(".game-controls__input");
        //По клику на кнопку активирует функцию checkGuess
        this.sendBtn.addEventListener("click", ()=>{
            this.checkGuess();
        });
    }
    init() {
        this.saveNumber(this.getRandomInt(50)); //Вводимое число записывается в генератор
        //Слова бота в начале игры
        this.say("Привет! Это игра 'Угадай число'!", "bot");
        this.say("Я загадал число от 0 до 50", "bot");
        this.say("Сможешь угадать?", "bot");
    }
    //Функция чтобы сохранить вносимое число
    saveNumber(num) {
        this.number = num;
    }
    //Функция для возврата числа пользователя
    getNumber() {
        return this.number;
    }
    //Функция генерирует число бота
    getRandomInt() {
        return Math.floor(Math.random() * 50);
    }
    //Функция для всплывающих сообщений 
    say(message, cls) {
        const msgBubble = this.createBubble(message, cls);
        this.frame.append(msgBubble);
    }

    randomChoice(choices) {
        return choices[ Math.floor(Math.random() * choices.length) ];
    }
    
    //Функция для определения угадали ли число
    checkGuess() {
        const checkingNum = parseInt(this.inputGuess.value);
        console.log( checkingNum, this.getNumber() );
        //Отправка сообщения игрока в формате: (шаблонный текст)(запрос)? 
        this.say(this.randomChoice(this.userMsgChoices)+checkingNum+'?', "player");
        //Если число бота больше/меньше моего, то выводим сообщение в формате: (шаблонный текст) больше/меньше
        if (checkingNum < parseInt(this.getNumber())) {
        this.say(this.randomChoice(this.botMsgChoices) + "больше", "bot");
        }
        else if (checkingNum > parseInt(this.getNumber())) {
        this.say(this.randomChoice(this.botMsgChoices) + "меньше", "bot");
        }
        else {
        this.say("Ура, ты выйграл!", "bot");
        }
    }

    MessageTime(seconds){  
        var today = new Date();
        var seconds = today.getUTCSeconds();
        console.log(seconds);

    //     console.log(this.time);
    //     this.time = this.time / 1000;
    //     let t = this.time % 60; // секунды
    //     if(t > 10) {
    //         if(Number(String(this.time)[String(this.time).length-1]) < 5 && Number(String(this.time)[String(this.time).length-1]) > 1) {
    //             return this.say('Потропись', "bot");
    //         }
    //     }
    // }
    }
    //Создание диалога в виде сообщений 
    createBubble(message, cls) {
        const bubble = document.createElement("div");
        
        bubble.classList.add("bubble");
        bubble.classList.add(cls);
        bubble.innerHTML = message;
        
        return bubble;
    }
}
    


//Нужно добавить функцию, в которой если игрок 10с бездействует - выводить сообщение
//this.say('Потропись', "bot");