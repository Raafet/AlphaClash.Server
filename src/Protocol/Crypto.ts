//@ts-ignore: Can be fixed by declaring module, but I'm lazy.
import * as RC4 from 'simple-rc4';

class Crypto {
    private rc4: boolean;
    private clientStream;
    private serverStream;

    constructor () {
        const key = Buffer.from('fhsd6f86f67rt8fw78fw789we78r9789wer6re' + 'nonce', 'utf8');
        
        this.clientStream = new RC4(key);
        this.clientStream.update(Buffer.from(key));

        this.serverStream = new RC4(key);
        this.serverStream.update(Buffer.from(key));

        this.rc4 = true;
    }

    public decrypt(id, payload) {
        switch(id) {
            case 10100:
                this.rc4 = false;
                return payload;
            default:
                this.clientStream.update(payload);
        }
    }

    public encrypt(id, payload) {
        if (id === 20103 && this.rc4 === false) {
            return payload;
        }

        return this.serverStream.update(payload)
    }
}

export default Crypto;
