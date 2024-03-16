> const namso = require('namso-cc-gen');

let res = namso.gen({
 ShowCCV: true,
 CCV: 'rnd',
 ShowExpDate: true,
 ShowBank: false,
 Month: "09",
 Year: "2026",
 Quantity: "10",
 Bin: "486742802285xxxx",
 Format: "PIPE"
})
m.return res