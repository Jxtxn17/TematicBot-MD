var handler = async (m, {command, conn, args, usedPrefix, text}) => {
  if (command == "y" || command == "y") {
    let mp4 = `*_descargando :_
_${usedPrefix}ytmp4_`.trim();

    m.reply(mp4);
  }
  if (command == "chambear1") {
    var play = `*CHAMBEANDO..*\n\n*Estuviste chambeando y llegaron 3 negros a violarte*..`.trim();
    m.reply(play);
}

  if (command == "chambear2") {
    var play = `*CHAMBEANDO..*\n\n*Estuviste chambeando y 5 negros se corrieron en tu boca€..`.trim();
    m.reply(play);
  }
};
handler.command = ["chambear1", "chambear2", ""];
handler.tags = ["internet"];
export default handler