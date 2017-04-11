import {hashSync, compareSync} from "bcryptjs";

export default class PasswordProtected {
    protected pwd;
    constructor(hashedPwd: string) {
        this.pwd = hashedPwd;
    }

    set plaintextPwd(plaintext: string) {
        this.pwd = hashSync(plaintext, 10);
    }

    compare(plaintext: string): boolean {
        return compareSync(plaintext, this.pwd);
    }
}
