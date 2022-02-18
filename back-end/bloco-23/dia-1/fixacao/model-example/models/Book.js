const connection = require('./connection');

const serialize = (bookData) => ({
  title: bookData.title,
  authorID: bookData.author_id,
});

const getAll = async () => {
  const [books] = await connection.execute('SELECT title, author_id FROM model_example.books;');
  return books.map(serialize);
};

const findById = async (id) => {
  const [book] = await connection.execute('SELECT title, author_id FROM model_example.books WHERE author_id=?', [id]);

  if(book.length === 0) return null;

  return book.map(serialize)[0];
}

const isValid = async (title, author_id) => {
  console.log("isValid " + title, author_id);
  const book = await getAll();
  if (!title || title.length < 3) return false;
  if (book.map((b) => b.authorId === author_id) || !author_id) return false;

  return true;
};

const create = async (title, authorId) => {
  console.log(title, authorId);
  try {
    connection.execute('INSERT INTO model_example.books (title, author_id) VALUES (?,?)', [title, authorId]);
  } catch (e) {
    console.log('Error!!' + e.message);
  }
};

module.exports = {
  getAll,
  findById,
  isValid,
  create,
};
