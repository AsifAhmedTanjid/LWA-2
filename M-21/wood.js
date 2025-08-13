/**
 * 
 * chair --- 3 cft
 * 
 * table --- 10cft
 * 
 * bed --- 50cft
 * 
 */

function woodQuantity(chairQuantity,tableQuantity,bedQuantity){
    const perChairWood=3;
    const perTableWood=10;
    const perBedWood=50;

    const chairTotalWood = chairQuantity*perChairWood;
    const tableTotalWood = tableQuantity*perTableWood;
    const bedTotalWood = bedQuantity*perBedWood;

    const TotalWood = chairTotalWood+tableTotalWood+bedTotalWood;
    return TotalWood;
}

const wood = woodQuantity(0,0,1);
console.log('wood needed',wood ,'cft');
