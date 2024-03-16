import namso = from 'namso-cc-gen;

const handler = async (m, {conn, text,command, usedPrefix}) => {
let res = namso.gen({
 ShowCCV: true,
 CCV: 'rnd',
 ShowExpDate: true,
 ShowBank: false,
 Month: "09",
 Year: "2026",
 Quantity: "10",
 Bin: "{txt}",
 Format: "PIPE"
})
return res;
  }
};

handler.command = /^(bin|cc)$/i;
export default handler;