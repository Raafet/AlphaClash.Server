import {Cnsl, Types} from './Utils/Cnsl';
import {createServer, Server, Socket} from 'net';

class ARServer {
    public server: Server;

    constructor () {
        this.server = createServer(client => {
            Cnsl.print(
                'New Client connected to ' + this.server.connections + ' from ' + client.remoteAddress,
                Types.INFO
            );

            this.handleClients(client);
        }).on('listening', () => {
            Cnsl.print('Listening for clients globally at 9339', Types.INFO);
        }).listen(9339);
    }

    private handleClients (client: Socket) {
        
    }
}

new ARServer();
