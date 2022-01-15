require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace hero fortune skull trap birth remain protect heavy prison outer soda'; 
let testAccounts = [
"0xa4f70c047f2806b171ba527d256ff77f56321941069606073dfa54ab13f39ace",
"0x41ba5ae98cd6c272878b04ff89ebc73c752fcfdba2133b1dadc68664be9cc767",
"0x61911174e9544f8b8a3c14a9868e3b6ac3da1db898a4e4dccddb055b368ab5dd",
"0xb4c3276d3c0f95f5226e5931cff4b1629a63e5cd0c0a4fd060360d1c33abbb38",
"0xedc49c3e097eccb0f89523eb548988ee71fb7d38c425f95097785c2e1a1d6a9b",
"0x3ad4b6a50aabdfe532776d04848879ce6b6522d3021c1bd071de9b5281f71994",
"0xaf5185eb66c534cdc257ef72b8265e43cd285d682f8be8095db29e4aa7878051",
"0xac18ba740650c90515bb221ddb098f8371d2d6cd0bc531687b94e2d82218ec2f",
"0xc6b05a4bb8beda411f3c396f28d51ad51f785688c47ff24ee617648c54402031",
"0xce824e6ca991ee1896e7678d08111c5681e51194d9bf8d0885b7ba76fb7af34d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


