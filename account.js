const moment = require('moment');

class Account {
    #amount;
    #account_id;

    constructor(name, amount, account_id) {
        this.name = name;
        this.#amount = amount;
        this.#account_id = account_id;
    }

    tellMeBalance() {
        console.log(`Sizning hisobingizdagi qoldiq: `, this.#amount),'$';
        return this.#amount;
    }

    withdrawMoney(amount) {
        if(this.#amount > amount) {
            this.#amount -= amount;
            console.log(`Hiosbdan ${amount}$ yechildi va qoldiq ${this.#amount}$`);
        } else {
            console.log(`Sizning balansingiz pul yetarli emas: ${this.#amount}$`);
        }
    }

    makeDeposit(amount) {
        this.#amount += amount;
        console.log(`Hizobingiz toldirildi, hisobingiz ${this.#amount}$ tashkil etdi.`);
    }

    giveMeDetails() {
        console.log(`Salom hurmatli ${this.name}, sinzning hisobingiz ${this.#amount}$ ga teng.`);
        console.log('Hisob raqamingiz: ', this.#account_id);
    }

    static tellMeAboutClass() {
        console.log('Bu class accountlarni yasash uchun xizmat qiladi!')
    }

    static tellMeTime() {
        const time = moment().format('YYYY-MM-DD hh-mm-ss a');
        console.log(`Hozir soat: ${time}`);
    }
}

module.exports = Account