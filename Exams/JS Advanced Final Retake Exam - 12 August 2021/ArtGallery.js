class ArtGallery{
    constructor(creator){
        this.creator = creator;
        this.possibleArticles = { "picture":200,"photo":50,"item":250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity){
        let currentArticle = {
            model: articleModel.toLowerCase(),
            name: articleName,
            quantity
        }

        if(!this.possibleArticles[articleModel.toLowerCase()]){
            throw new Error("This article model is not included in this gallery!");
        }

        if(this.listOfArticles.some(x => x.name == articleName && x.model == articleModel)){
            currentArticle = this.listOfArticles.find(x => x.name == articleName && x.model == articleModel);

            currentArticle.quantity++;
        }
        else{
            this.listOfArticles.push(currentArticle);
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    };

    inviteGuest(guestName, personality){
        
        let currentGuest = {
            name: guestName,
            points: 0,
            purchaseArticle: 0
        };

        if(this.guests.some(x => x.name == currentGuest.name)){
            throw new Error(`${guestName} has already been invited.`)
        }

        if(personality == 'Vip'){
            currentGuest.points = 500;
        }
        else if(personality == 'Middle'){
            currentGuest.points = 250;
        }
        else{
            currentGuest.points = 50;
        }

        this.guests.push(currentGuest);

        return `You have successfully invited ${guestName}!`;
    };

    buyArticle(articleModel, articleName, guestName){
        let article = this.listOfArticles.find(x => x.name == articleName && x.model == articleModel);

        let guest = this.guests.find(x => x.name == guestName);

        if(article == undefined){
            throw new Error("This article is not found.");
        }

        if(article.quantity == 0){
            return `The ${articleName} is not available.`;
        }

        if(guest == undefined){
            return `This guest is not invited.`;
        }

        if(guest.points < this.possibleArticles[articleModel]){
            return "You need to more points to purchase the article.";
        }

        guest.points -= Number(this.possibleArticles[articleModel]);
        article.quantity--;
        guest.purchaseArticle++;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    };

    showGalleryInfo(criteria){
        if(criteria == 'article'){
            let result = ["Articles information:"];

            this.listOfArticles.forEach(x => {
                result.push(`${x.model} - ${x.name} - ${x.quantity}`);
            });

            return result.join('\n');
        }
        else{
            let result = ["Guests information:"];

            this.guests.forEach(x => {
                result.push(`${x.name} - ${x.purchaseArticle}`);
            });

            return result.join('\n');
        }
    };
}

const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));