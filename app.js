const replies = {
    first: ['Your horoscope is: ', 'Today\'s a doozy! Your horoscope is: ', 'Not much happening today. Your horoscope is: '],
    second: ['There\'s a bear right behind you! Watch out!', 'You\'re going to lay on the couch all day like the lazy bum your are.', 'Today you will begin your journey on your path to enlightment'],
    third: ['Thanks for choosing us for your daily horoscope', 'Have fun with that...', 'Be careful out there!']
};

let randNum = () => Math.floor(Math.random() * 3);
