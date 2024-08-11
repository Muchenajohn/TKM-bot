const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1AvWlNxSHhwc0xFM3BpdGt6eXplMHVGZUdWM2dYbEk0LzdGSjNFbWExWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUlzVHQ4NERhUlJ6MS9UMWhuR1I3bWxCNFUwa3RYY00zOEJEaDlIQzB4TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSHhkOWY4T1lPVThMajZHT2E1MjhSZGtBZGZMMENuR2hoNmhMNzhYVlU4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXdlJJTmhleW05NFFYNVV6bzlYWUJDR1Q0NEpBREp2YUtsQUxjSTljMEdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9DeW1yK28zQjdZSHZkd3BuNGd2VG9iWjJpaERQUWJEVTJUV1hHYUNRWDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRiemtoSFlMZXF0K3RVOWdLSktFODkxcGJTN2ZZRFZUV2hJVjJ5M2F5VjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0RGcGFLa3dNTWx0eC9zYWxzTG9HZUNmNm9CV2xRcC95TjJWNFlYK1Ntcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDdXeFdORFZsWHdGS1ZURUQra1RtQnNRT0pyUk9tL3NCallWQU9pSjRIcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRudktFMDU4REJ4WU9Ga3FZWC9GVDZTUkNFTTRTRGVoN3JNdElhMHpqQ2ZFOWNqeTg0MkxGQ0xseUJORkNQbjBPaFRSTlhTakdKQXl3T3pQM1IycmlnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY0LCJhZHZTZWNyZXRLZXkiOiJ3R0hrYnYxYUtHWWF1NHVhT1h2WkRqNFRvS1NtdUZWcVBzYVlzNWpkNTZzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NjgyNjkwNTc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjY1MzlDQ0Y3OEVFMjMwRTYzRDEwRDhDN0MwNjEwNUZFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMzNTYyODh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjgyNjkwNTc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkIxQTkyOEYzOUY3RUIwNjlGRDg1RkVEQ0M4NTM0MjYxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMzNTYyOTh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjgyNjkwNTc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkVFRkREMkJCQjI5MjM4NDBFOUFCQzhCMzkyNEUzNDM3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMzNTYzMjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjgyNjkwNTc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjNGNjNDNEFCMTg3Nzc3QTU2MzZCQkYzRUM2QzJBNDgyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMzNTYzNDJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjgyNjkwNTc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkIyMkQ1M0FDNDAwMzBFRTg2MkI3MzQyODMzMjI4RTZBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMzNTYzNTl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjgyNjkwNTc4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjYxMjc2MEE0NTZGODhDQUFCNUQyRjhDMTIwNTdCQjkyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjMzNTYzODF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imo2MmVlTXlYU1FLaEFkZ0ZsOEdFSkEiLCJwaG9uZUlkIjoiZmZmMjZlNDMtNGUxOS00M2QyLWFiMzktNmM1OTcxOTFhZjBjIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBlV3VNSmY0M0FOZUtxM2VOVk9kY0xoRWJDQT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0ODdiR0FmUGJRT093Z1owNU5TZi9ONS9zeW89In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNDhYSkRWNlYiLCJtZSI6eyJpZCI6IjI3NjgyNjkwNTc4OjI1QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkbHwnZG88J2RsPCdkarwnZGsIPCdkb5A8J2RufCdkbPwnZGr4piG8J+ngyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXpEdlJFUTY2amh0UVlZRXlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiakVRYzRUVGhybzdQcTRhTjdkcmJEVG5MaFppS0xpSlVWVTZudjRuQXJtND0iLCJhY2NvdW50U2lnbmF0dXJlIjoicEQ0STBWdzlVT0o0Zk03VERROWQxa1NFd2Z3OUVYUzQxZ2RTNVp1NWRjOFk1RUU3bXJQZ0I0RHkvKzJBdmR5M3hoUFFUVFdpQmNJdndKVDY1SkwwQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6IndLNFdjNU1ZaTEydk4wUVVNRm5pN1ZLQ2ZVbjhVcEZDUnZNTFZRZHZETHRud2VGVitOWlZSQnFqejkyVzNrNVpVZnJPRnlTalFHd1N5TzVYU0VnZ2dBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2ODI2OTA1Nzg6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXhFSE9FMDRhNk96NnVHamUzYTJ3MDV5NFdZaWk0aVZGVk9wNytKd0s1dSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMzM1NjQ3MSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMUk0ifQ==
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝑱𝒖𝒊𝒄𝒆 𝑾@𝒓𝒍𝒅",
    NUMERO_OWNER : process.env.OWNER_NUM || "254728842688",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'TKM bot',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/e07a3d933fb4cad0b3791.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    //GPT : process.env.OPENAI_API_KEY || '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',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    TZ : process.env.TIME_ZONE || 'Etc/GMT',
    ADM : process.env.ANTI_DELETE_MESSAGE || 'no',
    BOOM_MESSAGE_LIMIT : process.env.BOOM_MESSAGE_LIMIT || 100,
    PORT : process.env.PORT || 8000,
    LINK : process.env.LINK || '',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa" : "postgresql://tkm:Aqi6tqwyv5IwDHncTtVi5XtMGZvfndDJ@dpg-cqahogtds78s739sl81g-a.oregon-postgres.render.com/takudzwa",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`update ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
