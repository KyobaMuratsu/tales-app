import React, { useState, useEffect } from 'react';
import axios from '../../../api/axios';

const Feed = () => {
  const Token = JSON.stringify(sessionStorage.getItem('Token'));
  const [userTags, setUserTags] = useState([]);
  const [feedPosts, setFeedPosts] = useState([]);

  useEffect(() => {
    // Função para obter as tags do usuário
    const getUserTags = async () => {
      try {
        const response = await axios.get(`usertags`, {
          headers: {'Authorization': `${Token}` },});

        setUserTags(response.data.tags);
      } catch (error) {
        console.error('Erro ao obter as tags do usuário:', error);
      }
    };

    // Função para obter as postagens com base nas tags do usuário
    const getFeedPosts = async () => {
      try {
        const response = await axios.get(`usertags`, {
          headers: {'Authorization': `${Token}` },
          params: { tags: userTags.join(',') }, // Envie as tags como parâmetros
        });
        setFeedPosts(response.data.posts);
      } catch (error) {
        console.error('Erro ao obter as postagens do feed:', error);
      }
    };

    // Chame as funções para obter as tags e postagens quando o componente montar
    getUserTags();
    getFeedPosts();
  }, [Token, userTags]); // Execute novamente quando o userId ou userTags mudar

  return (
    <div>
      <h1>Feed do Usuário</h1>
      <ul>
        {feedPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p>Tags: {post.tags.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;