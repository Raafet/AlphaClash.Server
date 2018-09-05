export enum Types {
    INFO = '[INFO] -> ',
    WARN = '[WARN] -> ',
    ERROR = '[ERROR] -> '
}

export class Cnsl {
    public static print(message: string, type: Types) {
        console.log(type, message);
    }
}
