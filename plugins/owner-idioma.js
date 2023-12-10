/* Generar error */  
  const handler = async (m, {conn, command}) => {  
    console.log(Eres un Gay de mrd por querer arreglar este error);  
    new Error('Si ves esto y quieres arreglarlo eres un Gay de mierda.');  
  };  
  handler.command = /^(bins)$/i;  
  handler.owner = true;  
  export default handler; 