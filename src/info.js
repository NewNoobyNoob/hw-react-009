// to learn and test how HTTP requests work we can use third party website of crudapi.co.uk where we can free of charge generate 500 key allowances.

// after logging to https://crudapi.co.uk/app/keys# with your gmail/google account go to API keys at API key management to generate key
// generating keys allow us to protect our server from unwanted HTTP requests by demandind authorization from senders

// after pushing <+ Create new key> we get alert window with notification: New API key, New API key created. This is the only time it will be displayed so please store it somewhere safe. For security, when you close this dialog we will not be able to retrieve this generated key.

//! COPY AND KEEP SECURLY THE KEY FROM THAT NOTIFICATION. In my first case key was: Pcw6bTrJHYckOIXdTHyXcYFZYJa0-0w6bDMMAs5ohx_F9KGMWQ Rg5jRo78yraMK9HxTDJ8qkVYQagVH8O4ZBL49uOhi-ZML5Fcsg

// after copying and saving you can close the alert window

// you can see alowances remaining to generate keys decrease and from initial 500 options now only 499 is left. The ones created will be listed down in the same window and first few symbols of the generated key will be under "Key Prefix". NOTE: only prefix will be given and full copy of the generated key will be lost if you do not save it as already mentioned above.

//! once key was generated and successfully saved we need to log out and go to Documentation menu on the top right side as this is the only way to do so. NOTE: there is no chance to go to Documentation while logged in as loggin is used solely for key generation purposes!

//! here in documentation we can get info how crudapi.co.uk works and how should we use it including key generation as done above while logged in. NOTE: within Authentication submenu on the left-hand side it is written that we have to utilize above generated key togetrher with <Bearer YOUR_API_KEY> authorization header, unless our key will not work. So without providing <Bearer YOUR_API_KEY> authorization header our http request will not work.

//!besides #1: we need to add proxy within our package.json file and it should be: "proxy": "https://crudapi.co.uk",. to be sure that after this amendments within json file our application still works, we can log out from react in terminal and later run again npm start

// დავალება
// crudapi.co.uk-ს გამოყენებით დაწერე მარტივი TODO აპლიკაცია, რომელშიც შეძლებ დაამატო შენს მიერ შეყვანილი თასქები
// ● ყოველ თასქს აუცილებლად უნდა ჰქონდეს name და isCompleted ფილდები
// ● გაითვალისწინე, რომ სამომავლოდ ამ თასქებს isCompleted სტატუსი შეიძლება შეეცვალოს
// ● ასევე, სამომავლოდ უნდა იყოს შესაძლებელი თასქების რედაქტირებაც
