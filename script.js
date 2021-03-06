console.log('JS OK!')

const contacts = [
    {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: '_4',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: '_5',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: '_6',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novit???',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: '_7',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che ?? il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: '_8',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho gi?? mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
            }
        ],
    }
]

/*
Milestone 1
Replica della grafica con la possibilit?? di avere messaggi scritti dall???utente (verdi) e dall???interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
*/
/*
Milestone 2
??? Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i
messaggi relativi al contatto attivo all???interno del pannello della conversazione
??? Click sul contatto mostra la conversazione del contatto cliccato
*/
/*
Milestone 3
??? Aggiunta di un messaggio: l???utente scrive un testo nella parte bassa e digitando
???enter??? il testo viene aggiunto al thread sopra, come messaggio verde
??? Risposta dall???interlocutore: ad ogni inserimento di un messaggio, l???utente ricever??
un ???ok??? come risposta, che apparir?? dopo 1 secondo.
*/
/*
Milestone 4
??? Ricerca utenti: scrivendo qualcosa nell???input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
???mar??? rimangono solo Marco e Martina
*/
const app = new Vue({

    el: '#app',

    data: {
        search: '',
        chatContatti: contacts,
        counter: 0,
        newMessage: ''
    },
    methods: {

        // visualizzo le foto degli utenti 
        imgURLContatti: function (a, b) {
            return `img/${a}${b}.jpg`;
        },
        //visualizzo l'ultimo messaggio 
        getLastMessage: function (item) {
            //console.log(item.name),item ;
            const messages = item.messages;

            const lastMessage = messages.length > 0 ? messages[messages.length - 1].message : '';
            return lastMessage;
        },
        getLastDateMessage: function (element) {
            
            const dateProva = element.messages;

            const lastMessageDate = dateProva.length > 0 ? dateProva[dateProva.length - 1].date : '';
            return lastMessageDate;
        },
        // visualizzo tramite click i messaggi
        contact(index) {
            this.counter = index;
            console.log(this.counter);
        },
        // ricerco i contatti nell'input 
        searchContact() {
            //uso forEach per ciclare
            this.chatContatti.forEach((user) => {
                //se il mio input includer?? caratteri del mio user.name allora ritorner?? true e mi cercher?? l'utente, altrimenti ritorner?? false e non apparir?? nulla 
                if (user.name.toLowerCase().includes(this.search.toLowerCase())) {
                    user.visible = true;
                } else {
                    user.visible = false;
                }
            });
        },
        dynamicMessages() {

            const personalProfileMessage = {
             date: dayjs().format("HH:mm:ss"),
                message: this.newMessage,
                status: 'sent'
            }
            this.chatContatti[this.counter].messages.push(personalProfileMessage)
            

            this.newMessage = ""

            // console.log(nuovoMessaggio);
            // console.log(this.newMessage)

            setTimeout(() => {
                const newAnswer = {
                    date: dayjs().format("HH:mm:ss"),
                    message: "Ok",
                    status: 'received'
                }
                this.chatContatti[this.counter].messages.push(newAnswer)
            }, 1000);
        }

    }
})


