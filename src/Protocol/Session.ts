import Crypto from './Crypto';

class Session {
    public client;
    public crypto;
    public player;
    public mongoose;
    public userObject;
    public cardsOutOfDeck;
    public battleOpponent;
    public searchingBattle;

    constructor (client, mongoose) {
        this.client = client;
        this.crypto = new Crypto();
        this.mongoose = mongoose;
        
        this.searchingBattle = false;

        this.player = null;
        this.userObject = null;
        this.cardsOutOfDeck = null;
        this.battleOpponent = null;
    }
}

export default Session;
