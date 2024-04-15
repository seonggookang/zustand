import { useButtonStore } from './../store/MemoList';

export const Card = () => {
  const { count } = useButtonStore();
  return (
    <div>
      <p>카드 {count}</p>
      <button
        onClick={() => {
          useButtonStore.setState({ count: count + 1 });
        }}
      >
        버튼
      </button>
    </div>
  );
};
