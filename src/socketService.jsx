import { io } from 'socket.io-client';

// adjust URL if your server is hosted elsewhere
const socket = io('http://localhost:5000');
export default socket;
