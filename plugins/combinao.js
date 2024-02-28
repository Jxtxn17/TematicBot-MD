var handler = async (m, {command, conn, args, usedPrefix, text}) => {
  if (command == "y" || command == "y") {
    let mp4 = `*_descargando :_
_${usedPrefix}ytmp4_`.trim();

    m.reply(mp4);
  }

  if (command == "chambear") {
    var play = `*CHAMBEANDO..*\n\n*Estuviste chambeando y 5 negros se corrieron en tu boca..`.trim();
    m.reply(play);
  }
};
handler.command = ["chambear", "chambear", ""];
handler.tags = ["internet"];
export default handler