import { SMTPClient } from 'emailjs';

const client = new SMTPClient({
	user: 'jns',
	password: 'Egzul@22corP',
	host: 'smtp.ister.pl',
	ssl: true,
});

// send the message and get a callback with an error or details of the message that was sent
client.send(
	{
		text: 'just do what we do!',
		from: 'you <m.jakobszy@ister.pl>',
		to: 'someone <maciejjakobszy@me.com>',
		cc: 'else <jdsk88@gmail.com>',
		subject: 'testing emailjs',
	},
	(err, message) => {
		console.log(err || message);
	}
);