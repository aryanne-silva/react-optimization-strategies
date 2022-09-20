import { useCallback} from 'react';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

import { useApp } from './useApp';

export function App() {
 const {
    genres,
    movies,
    selectedGenre,
    selectedGenreId,
    setSelectedGenreId
  } = useApp()

  const handleClickButton = useCallback((id: number) => {
    setSelectedGenreId(id);
  }, []);   

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar
        genres={genres}
        selectedGenreId={selectedGenreId}
        buttonClickCallback={handleClickButton}
      />

      <Content
        selectedGenre={selectedGenre}
        movies={movies}
      />
    </div>
  )
}