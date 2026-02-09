import * as fs from 'fs' ;
import * as path from 'path'

export class FileWriter {

    static writeBookDetails(bookDetails: {title:string; author: string, publisher: string}) {
        //We save it in the root folder ti be safe

        const filePath = path.join(process.cwd(), 'book-details.txt');

        const content = `
                        Book Details:
                        =============
                        Title: ${bookDetails.title}
                        Author: ${bookDetails.author}
                        Publisher: ${bookDetails.publisher}
                            `.trim();

                        fs.writeFileSync(filePath, content, 'utf-8');
                        console.log(`Book details written to: ${filePath}`);
  }

        
    }