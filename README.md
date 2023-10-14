# Instructions
```bash
anvil --port 9545 --chain-id 31337
npm run deploy:anvil
```

forge script contracts/script/Invoice.s.sol:InvoiceScript --fork-url http://127.0.0.1:9545 --broadcast --private-key 0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80



forge test -vv
```