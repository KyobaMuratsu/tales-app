import React, { useState, useEffect } from 'react';
import Post from '../../Components/Post';
import axios from '../../../api/axios';
import './Feed.css';

const Feed = () => {
  const Token = JSON.parse(sessionStorage.getItem('Token'));
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // Função para obter as tags do usuário
    const getUserPosts = async () => {
      try {
        const response = await axios.get('userPosts', {
            headers: {
              'Authorization': `${Token}`,
            },
        }
      );

    setUserPosts(response.data);
    console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

    // Chame as funções para obter as tags e postagens quando o componente montar
    if(Token){
      getUserPosts();
    }
  }, []); // Execute novamente quando o userId ou userTags mudar

  return (
    <main className='main'>
      <div >
        {userPosts.map((post, index) => (
          <Post content={post} key={index}>
            {post.textoPostagem}
            {post.imagemUrlPostagem}
          </Post>
        ))}
      </div>
    </main>
  );
};

export default Feed;