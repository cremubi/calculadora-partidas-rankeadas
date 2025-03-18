let matchesWon = 0;
let level = "";

matchesBalance(100, 35);
ranking(matchesWon);

console.log(`O herói tem saldo de ${matchesWon} vitórias e, por isso, está no nível ${level}.`)

function matchesBalance(wins, losses){
    matchesWon = wins - losses;
    return matchesWon;
}

function ranking(matchesWon){
    if(matchesWon >= 0 && matchesWon < 11){
        level = "Ferro";
    } else if(matchesWon > 10 && matchesWon <= 20){
        level = "Bronze";
    } else if(matchesWon > 20 && matchesWon <= 50){
        level = "Prata";
    } else if(matchesWon > 50 && matchesWon <= 80){
        level = "Ouro";
    } else if(matchesWon > 80 && matchesWon <= 90){
        level = "Diamante";
    } else if(matchesWon > 90 && matchesWon <= 100){
        level = "Lendário";
    } else if (matchesWon > 100){
        level = "Imortal";
    }
    return level;
}

