class LibraryCollection{
    constructor(capacity){
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor){
        if(this.capacity == this.books.length){
            throw new Error("Not enough space in the collection.");
        }

        this.books.push({bookName,
            bookAuthor,
            payed: false
        });

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    };

    payBook(bookName){
        if(!this.books.some(x => x.bookName == bookName)){
            throw new Error(`${bookName} is not in the collection.`);
        }

        let book = this.books.find(x => x.bookName == bookName);

        if(book.payed){
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;

        return `${bookName} has been successfully paid.`;
    };

    removeBook(bookName){
        if(!this.books.some(x => x.bookName == bookName)){
            throw new Error("The book, you're looking for, is not found.");
        }

        let book = this.books.find(x => x.bookName == bookName);

        if(!book.payed){
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        let index = this.books.indexOf(x => x.bookName == bookName);

        this.books.splice(index, 1);


        return `${bookName} remove from the collection.`;
    };

    getStatistics(bookAuthor){
        let result = [];

        if(bookAuthor == undefined){
            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
            
            result = [`The book collection has ${this.capacity - this.books.length} empty spots left.`];

            this.books.forEach(x => {
                result.push([`${x.bookName} == ${x.bookAuthor} - ${x.payed ? 'Has Paid' : `Not Paid`}.`])
            });
        }
        else{
            if(!this.books.some(x => x.bookAuthor == bookAuthor)){
                throw new Error(`${bookAuthor} is not in the collection.`);
            }
            else{
                let booksOfAuthor = [];

                for (const book of this.books) {
                    if(book.bookAuthor == bookAuthor){
                        booksOfAuthor.push(book);
                    }
                }

                booksOfAuthor.forEach(x => {
                    result.push([`${x.bookName} == ${bookAuthor} - ${x.payed ? 'Has Paid' : 'Not Paid'}.`]);
                });
            }
        }

        return result.join('\n');
    };
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());