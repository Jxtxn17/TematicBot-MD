var handler = async (m, {command, conn, args, usedPrefix, text}) => {
  if (command == "y" || command == "y") {
    let mp4 = `*_descargando :_
_${usedPrefix}ytmp4_`.trim();

    m.reply(mp4);
  }

  if (command == "chambear") {
    var play = `*CHAMBEANDO..*\n\n*Estuviste Chambeando y 3 negros te llegaron y fuiste violado..`.trim();
    m.reply(play);
  }
};
handler.command = ["chamba", "chambear", ""];
handler.tags = ["internet"];
export default handler