import Mongoose from './../Mongoose';

const ClansShema = new Mongoose.Schema({
    highID:{
        type: Number,
        required: true
    },
    lowID:{
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    trophies:{
        type: Number,
        default: 0
    },
    requiredTrophies:{
        type: Number,
        default: 0
    },
    avatarID:{
        type: Number,
        default: 0
    },
    type:{
        type: Number,
        default: 0
    },
    members: {
        type: Array,
        default: []
    }
});

const Clan = Mongoose.model('clans', ClansShema);

export default Clan;
