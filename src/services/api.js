import axios from 'axios';

/**
 * iOS with Emulator: localhost
 * iOS with phone: IP of my machine 
 * Android with emulator: localhost (adb reverse tcp:xxxx (port of my machine) tcp:xxxx (emulator port))
 * Android with emulator: 10.0.2.2 (Android Studio) 
 * Android with emulator: 10.0.3.2 (Genymotion) 
 * Android with phone: IP of my machine
 */

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333'
});

export default api;