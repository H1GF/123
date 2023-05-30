//Добавляем переменную из 23may.js
export default class generation {
    constructor(game) {
        // Ключевые переменные и их значения
        this.game = game;
        this.counter = 0;
        this.generation = 0;
        // Шаблоны моих сообщений с угадыванием номера
        this.userMsgChoices = ["Ваш номер ",
                            "Хорошо..Может это ",
                            "Как насчет "];
        // Шаблоны бота на мои сообщения
        this.botMsgChoices = ["Увы, мой номер ",
                            "Попробуй еще раз. Мой номер ",
                            "Хорошая попытка, мой номер "];
        //Вводим классы из html
        this.screen = this.game.querySelector(".game__frame");
        this.sendBtn = this.game.querySelector(".game-controls__but");
        this.inputGuess = this.game.querySelector(".game-controls__input");
        //По клику на кнопку активирует функцию checkGuess
        this.sendBtn.addEventListener("click", ()=>{
            this.checkGuess();
        });
    }

    init() {
        this.setGenerationNumber(this.getRandomInt(50)); //Генерация числа
        //Слова бота в начале игры
        this.say("Привет!", "bot");
        this.say("Я загадал число от 0 до 50", "bot");
        this.say("Сможешь угадать?", "bot");
    }

    setGenerationNumber(num) {
        this.generation = num;
    }

    getGeneration() {
        return this.generation;
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    say(message, cls) {
        const msgBubble = this.createBubble(message, cls);
        this.screen.append(msgBubble)
    }

    randomChoice(choices) {
      return choices[ Math.floor(Math.random() * choices.length) ];
    }
    //Функция для определения угадали ли число
    checkGuess() {
        const checkingNum = parseInt(this.inputGuess.value);
        console.log( checkingNum, this.getGeneration() )
        //Отправка сообщения игрока в формате: (шаблонный текст)(запрос)? 
        this.say(this.randomChoice(this.userMsgChoices)+checkingNum+'?', "player");
        //Если число бота больше/меньше моего, то выводим сообщение в формате: (шаблонный текст) больше/меньше
        if (checkingNum < parseInt(this.getGeneration())) {
        this.say(this.randomChoice(this.botMsgChoices) + "больше", "bot");
        }
        else if (checkingNum > parseInt(this.getGeneration())) {
        this.say(this.randomChoice(this.botMsgChoices) + "меньше", "bot");
        }
        else {
        //Угадано число
        this.say("Ура, ты выйграл! Повторим?", "bot");
        }
    }
    //Отображение запросов в виде сообщений и его появление
    createBubble(message, cls) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.classList.add(cls)
        bubble.innerHTML = message;
        return bubble;
    }
}