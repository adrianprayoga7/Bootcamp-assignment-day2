
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const fs = require('fs');

  readLine.question(`Siapa Nama Kamu?`, name => {
    readLine.question(`Berapa Nomor Telepon?`, tlp => {
        readLine.question(`Tuliskan email kamu?`, email => {
            if (!fs.existsSync('data')) {
                fs.mkdirSync('data');
              }
            
            if (!fs.existsSync('data/contacts.json')) {
                fs.writeFileSync ('data/contacts.json', '[]','utf-8');
              }

            const contacts = JSON.parse(fs.readFileSync('data/contacts.json', 'utf-8'));
            const kontak = {
                name,
                tlp,
                email
            };
            contacts.push(kontak);
            const json = JSON.stringify(contacts);
            fs.writeFileSync('data/contacts.json',json);
            readLine.close;
        });
    });
});