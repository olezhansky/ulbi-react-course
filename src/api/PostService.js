import axios from "axios";

export default class PostsService {
  static async getAll() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
  }
}

// const PostsService = async () => {
//   try {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/posts"
//     );
//     return response.data;
//   } catch (e) {
//     console.log(e);
//   }
// };

// export default PostsService;
