require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict prison sugar spot tower ring remember come grace force fortune stuff'; 
let testAccounts = [
"0x42f940ed20d484ea43616353a0640c94a57d382706bfc7bfe8cee80cd8eb2b83",
"0xb9ab79ab1baf83d18bb0dba6057913e5da8ea60d3f5e0f39f31cc1369767ba08",
"0x957d4b031f6eda8c7969f6dd991128932bc7f09e21c8d8f8f1856be7a25fa107",
"0x9609ae834e11e6616c3efdfb5c74750df05766c0d7bf048ba0c67e9a5f715190",
"0x36420802e3312421e3c4f9ba80a272b6171fe9f57833e2ed2a8a5d3bcc403297",
"0x0308f61aca47272c45aba4228758e1002e769d666ef53adfa88c3f5f1a1626bd",
"0x84e7340631e54a25dbf73aaf1d38fa6bbdc1b67625efb2ec170c70d0c562f3d9",
"0x215494f5fc40142aa7c8732ecc85190f9ecac876a91b6032e94b5c9b566d8daa",
"0x700a7f46cc9c94579e2cb43fe26d3f4ff85b8d4688b8eaa7b6342c6e64893e2c",
"0x4ca4754b9431ad90b353414502fa92410e3a48aec4fa778fcd778fa164dd0d97"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

