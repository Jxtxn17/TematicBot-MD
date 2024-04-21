var handler = async (m, {command, conn, args, usedPrefix, text}) => {
  if (command == "y" || command == "y") {
    let mp4 = `*_descargando :_
_${usedPrefix}ytmp4_`.trim();

    m.reply(mp4);
  }

  if (command == "chamba") {
    var play = `${pickRandom(global.piropo)}*..`.trim();
    m.reply(play);
  }
};
handler.command = ["chamba"];
handler.tags = ["internet"];
export default handler
global.piropo = ["CHAMBEANDO..\n\n

Estuviste chambeando y 5 negros se corrieron en tu boca..,
CHAMBEANDO..\n\n

Estuviste chambeando y llegaron 3 negros a violarte..,"
