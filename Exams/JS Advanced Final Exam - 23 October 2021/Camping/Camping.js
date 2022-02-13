class SummerCamp{
    constructor(organaizer, location){
        this.organaizer = organaizer;
        this.location = location;
        this.listOfParticipants = [];
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
    }

    registerParticipant(name, condition, money){
        if(!this.priceForTheCamp.hasOwnProperty(condition)){
            throw new Error("Unsuccessful registration at the camp.");
        }
        if(this.listOfParticipants.includes(name)){
            return `The ${name} is already registered at the camp.`;
        }
        if(money < this.priceForTheCamp[condition]){
            return `The money is not enough to pay the stay at the camp.`;
        }

        let participant = {
            name, 
            condition,
            power: 100,
            wins: 0
        };

        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name){
        let participant = this.listOfParticipants.find(x => x.name == name);

        if(participant == undefined){
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        let index = this.listOfParticipants.findIndex(participant);
        this.listOfParticipants.slice(index, 1);

        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, nameOfPlayer1, nameOfPlayer2){
        let participant1 = this.listOfParticipants.find(x => x.name == nameOfPlayer1);

        if(participant1 === undefined){
            throw new Error(`Invalid entered name/s.`);
        }

        
    }
}