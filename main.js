var userName = 'Lex'

userName ? console.log(`Hello, ${userName}!`): console.log('Hello!');


var userQuestion = 'Are you having fun?';

console.log(`Lex asked : ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber){
    case 0 :
        eightBall = 'Guaranteed' ;
        break;
        case 1 :
            eightBall = 'Automatic' ;
            break;
            case 2 :
                eightBall = 'You know that' ;
                break;
                case 3 :
                    eightBall = 'Yessah' ;
                    break;
                    case 4 :
                        eightBall = 'All Day';
                        break;
                        case 5 :
                            eightBall = 'Bet';
                            break;
                            case 6 :
                                eightBall = 'Nonstop' ;
                                break;
                                case 7 :
                                    eightBall = 'Yup'
                                    break ; 
}

console.log(eightBall);

