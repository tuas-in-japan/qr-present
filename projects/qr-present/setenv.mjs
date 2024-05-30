import { writeFileSync } from 'fs';
import { config } from 'dotenv';

// if .env file is not in the root directory the path should be determined
config({ path: './projects/qr-present/.env' });

const firebaseConfig = process.env['FIREBASE_CONFIG'];

const environment = `export const environment = {
  production: false,
  ngrokUrl: '${process.env['NGROK_URL']}',
  firebase: ${firebaseConfig}
};
`;

writeFileSync('./projects/qr-present/src/environments/environment.ts', environment);
