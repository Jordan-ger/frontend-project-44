import readlineSync from 'readline-sync';

const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  
  let correctAnswersCount = 0;
  
  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    
    const isCorrectAnswer = (isEven(randomNumber) && userAnswer === 'yes') ||
                            (!isEven(randomNumber) && userAnswer === 'no');
    
    if (isCorrectAnswer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      const correctAnswer = isEven(randomNumber) ? 'no' : 'yes';
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  
  console.log(`Congratulations, ${name}!`);
};

export default playEvenGame;
