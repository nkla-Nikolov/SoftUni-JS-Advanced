class Story{
    
    #comments = [];
    #likes = [];

    constructor(title, creator){
        this.title = title;
        this.creator = creator;
    }

    get likes(){
        if(this.#likes.length == 0){
            return `${this.title} has 0 likes`;
        }
        else if(this.#likes.length == 1){
            return `${this.#likes[0]} likes this story!`;
        }

        return `${this.#likes[0]} and ${this.#likes.length - 1} others like this story!`;
    };

    like(username){
        if(this.#likes.includes(username)){
            throw new Error("You can't like the same story twice!");
        }
        if(this.creator == username){
            throw new Error("You can't like your own story!");
        }

        this.#likes.push(username);

        return `${username} liked ${this.title}!`;
    };

    dislike(username){
        if(!this.#likes.includes(username)){
            throw new Error("You can't dislike this story!");
        }

        let index = this.#likes.indexOf(username);
        this.#likes.splice(index, 1);

        return `${username} disliked ${this.title}`;
    };

    comment(username, content, id){
        
        if(id == undefined || !this.#comments.some(x => x.id == id)){
            this.#comments.push({
                id: this.#comments.length + 1,
                username,
                content,
                replies: []
            });

            return `${username} commented on ${this.title}`;
        }

        if(this.#comments.some(x => x.id == id)){
            let comment = this.#comments.find(x => x.id == id);

            comment.replies.push({
                id: Number(comment.id + '.' + (comment.replies.length + 1)),
                username,
                content
            });

            return "You replied successfully";
        }

    }
    
    toString(sortType){
        if(sortType == 'asc'){
            this.#comments.sort((a, b) => a.id - b.id)
            .forEach(r => r.replies.sort((a, b) => a.id - b.id));
        }
        else if(sortType == 'desc'){
            this.#comments.sort((a, b) => b.id - a.id)
            .forEach(r => r.replies.sort((a, b) => b.id - a.id));
        }
        else if(sortType == 'username'){
            this.#comments.sort((a, b) => a.username.localeCompare(b.username))
            .forEach(r => r.replies.sort((a, b) => a.username.localeCompare(b.username)));
        }
        
        let result =[];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this.#likes.length}`);
        result.push(`Comments:`);
        this.#comments.forEach(x => {

            result.push(`-- ${x.id}. ${x.username}: ${x.content}`);
             
            x.replies.forEach(r => {
                result.push(`--- ${r.id}. ${r.username}: ${r.content}`);
            });
        });

        return result.join('\n');
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
