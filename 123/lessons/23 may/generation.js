export default class generation {
    constructor(game) {
        this.game = game;
        this.counter = 0;
        this.generation = 0;
        this.userMsgChoices = ["Ваш номер ",
                            "Хорошо..Может это ",
                            "Как насчет "];
        this.botMsgChoices = ["Увы, мой номер ",
                            "Попробуй еще раз. Мой номер ",
                            "Хорошая попытка, мой номер "];

        this.screen = this.game.querySelector(".game__frame");
        this.sendBtn = this.game.querySelector(".game-controls__but");
        this.inputGuess = this.game.querySelector(".game-controls__input");

        this.sendBtn.addEventListener("click", ()=>{
            this.checkGuess();
        });
    }

    init() {
        this.setGenerationNumber(this.getRandomInt(10));
        this.say("Привет!", "bot");
        this.say("Я загадал число от 0 до 10", "bot");
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

    checkGuess() {
        const checkingNum = parseInt(this.inputGuess.value);
        console.log( checkingNum, this.getGeneration() )

        this.say(this.randomChoice(this.userMsgChoices)+checkingNum+'?', "player");

        if (checkingNum < parseInt(this.getGeneration())) {
        this.say(this.randomChoice(this.botMsgChoices) + "больше", "bot");
        }
        else if (checkingNum > parseInt(this.getGeneration())) {
        this.say(this.randomChoice(this.botMsgChoices) + "меньше", "bot");
        }
        else {
        this.say("Ура, ты выйграл!", "bot");
        }
    }

    createBubble(message, cls) {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.classList.add(cls)
        bubble.innerHTML = message;
        return bubble;
    }

}