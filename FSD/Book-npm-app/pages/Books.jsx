const books = [
    "The Great Gatsby",
    "To Kill a Mockingbird",
    "1984",
    "Pride and Prejudice",
    "The Catcher in the Rye",
];

function Books() {
    return (
        <div>
            <h1>Book List</h1>
            <ul>
                {books.map((book) => (
                    <li key={book}>{book}</li>
                ))}
            </ul>
        </div>
    );
}
export default Books;