export class Book {
    constructor(title,author,description,pages,currentPage,read){
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = read;
    }
    readBook(page){
        console.log(this.currentPage);
        if (page > this.pages || page < 1) {
            this.currentPage == 0 ;
        }if(page >= 1 && page < this.pages) {
            this.currentPage == page;
            console.log(1);
        }if(page == this.pages){
            this.currentPage == page;
            this.read == true;
            console.log(1);
        }
    }

}

export let books = [new Book("russie","Renaud","parlle russe",100,50,false),
                    new Book("russie","Renaud","parlle russe",90,40,false),
                    new Book("russie","Renaud","parlle russe",460,450,false)
                    
                ];
                