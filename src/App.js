import logo from './logo.svg';
import './App.css';
import { useMemoStore } from './store/MemoList';
import MemoBoard from './components/MemoBoard';
import MemoInput from './components/MemoInput';
import MemoElem from './components/MemoElem';
import { Card } from './components/Count';

function App() {
  const { memoList } = useMemoStore();
  return (
    <>
      <Card />
      <MemoBoard>
        {memoList.length ? (
          memoList.map((e) => {
            return (
              <MemoElem key={e.id} id={e.id}>
                {e.content}
              </MemoElem>
            );
          })
        ) : (
          <span> 메모 입력해주세요</span>
        )}
      </MemoBoard>
      <MemoInput />
    </>
  );
}

export default App;
