import PegasiServer from './server'

const PORT: number = 3000;
let server = new PegasiServer();
server.start(PORT);