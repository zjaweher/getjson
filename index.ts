import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
axios.get(url).then(response => {
    const post = response.data as Post;

    const userId = post.userId;
    const id = post.id;
    const title = post.title;
    const body = post.body;

    logPost(userId, id, title, body)
});

const logPost = (userId: number, id: number, title: string, body: string) => {
    console.log(`
      The Post posted by user: ${userId}
      and with ID: ${id}
      Has a title of: ${title}
      and a body of ${body}
    `);
};
