import * as Mongoose from 'mongoose';

(<any>Mongoose).Promise = global.Promise;
Mongoose.connect('');

export default Mongoose;
