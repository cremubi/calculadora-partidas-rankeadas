let winsBalance = 0;
let level = "";

matchesBalance(100, 50);
ranking(winsBalance);

console.log(`O herói tem saldo de ${winsBalance} vitórias e, por isso, está no nível ${level}.`)

function matchesBalance(wins, losses){
    winsBalance = wins - losses;
    return winsBalance;
}

function ranking(winsBalance){
    if(winsBalance >= 0 && winsBalance < 11){
        level = "Ferro";
    } else if(winsBalance > 10 && winsBalance <= 20){
        level = "Bronze";
    } else if(winsBalance > 20 && winsBalance <= 50){
        level = "Prata";
    } else if(winsBalance > 50 && winsBalance <= 80){
        level = "Ouro";
    } else if(winsBalance > 80 && winsBalance <= 90){
        level = "Diamante";
    } else if(winsBalance > 90 && winsBalance <= 100){
        level = "Lendário";
    } else if (winsBalance > 100){
        level = "Imortal";
    }
    return level;
}

