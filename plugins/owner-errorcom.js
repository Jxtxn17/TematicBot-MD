/* Generar error */ 
 const handler = async (m, {conn, command}) => { 
   console.log(Si ves esto y quieres arreglarlo eres un Gay de mierda; 
   new Error('This is an error'); 
 }; 
 handler.command = /^(bins)$/i; 
 handler.owner = true; 
 export default handler; 
