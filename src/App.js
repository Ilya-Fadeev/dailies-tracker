import './styles/style.css';

import { useState, useEffect } from 'react';
import { usePosts } from './hooks/usePosts';
import { useFetching } from './hooks/useFetching';
import postService from './API/postService';
import CardList from './components/CardList/CardList';
import PostForm from './components/PostForm/PostForm';
import PostFilter from './components/PostFilter/PostFilter';
import MyModal from './components/MyModal/MyModal';
import MyBtn from './components/UI/buttons/MyBtn';
import Loader from './components/Loader/Loader';
import { getPagesCount } from './utils/pages';
import Pagination from './components/UI/pagination/Pagination';




function App() {

  const [posts, setPosts] = useState([]);  
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postError] = useFetching( async (limit, page) => {
    const response = await postService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  }

  useEffect(() => {
    fetchPosts(limit, page);
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };  

  

  return (
    <div className="App">
      <header className="App-header">
      </header>

    <div className="center">

    <div style={{display: 'flex', gap: '20px'}}>
      <MyBtn onClick={fetchPosts}>get posts</MyBtn>

      <MyBtn 
        onClick={() => setModal(true)}>
        Создать пост
      </MyBtn>
    </div>

    <MyModal visible={modal} setVisible={setModal}>
      
      <MyBtn 
        onClick={() => setModal(false)}>
          X
      </MyBtn>
      
      <PostForm  create={createPost}/>
    </MyModal>
    
    <hr></hr>
    <PostFilter
        filter={filter}
        setFilter={setFilter}
    />
    <hr></hr>
    {postError &&
        <h1>Произошла ошибка ${postError}</h1>
    }

    {isPostsLoading 
      ?  <Loader/>
      : <CardList remove={removePost} posts={sortedAndSearchedPosts} title={'JS items'} /> 
    }   
   
    <Pagination page={page} changePage={changePage} totalPages={totalPages} />

    </div>

    </div>
  );
}

export default App;
