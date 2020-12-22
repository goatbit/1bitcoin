const Mnemonic = require('bitcore-mnemonic')

const argv = process.argv;

let wordlist = Mnemonic.Words.ENGLISH;

if (argv.length > 2) {
    if (argv[2] == 'cn') {
        wordlist = Mnemonic.Words.CHINESE;
    }
}

let mnemonic = new Mnemonic(wordlist)

console.log(mnemonic.toString());

module.exports = Mnemonic