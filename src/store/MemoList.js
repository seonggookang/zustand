import { create } from 'zustand';

export const useMemoStore = create((set) => ({
  memoList: [],
  addMemo: (val) =>
    set((prev) => ({
      memoList: [
        ...prev.memoList,
        { content: val, id: new Date().getMilliseconds() + val },
      ],
    })),
  removeMemo: (id) =>
    set((prev) => ({ memoList: prev.memoList.filter((e) => e.id !== id) })),
}));

export const useButtonStore = create((set) => ({
  count: 0,
  increase() {
    set((state) => ({ count: state.count + 1 }));
  },
}));
