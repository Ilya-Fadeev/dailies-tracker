import React from 'react';
import MyInput from '../UI/inputs/MyInput';
import MySelector from '../UI/selectors/MySelector';
import './postfilter.css';

const PostFilter = ({filter, setFilter}) => {
    return (
    <div className={'postfilter'}>
      <MyInput 
          placeholder="Поиск..."
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}     
      />
      <MySelector 
          value={filter.sort}
          onChange={selectedSort => setFilter(({...filter, sort: selectedSort}))}
          defaultValue={'Cортировка по'}
          options={[
            {value: 'title', name: 'названию'},
            {value: 'body', name: 'описанию'}
          ]}
      />
    </div>
    );
};

export default PostFilter;