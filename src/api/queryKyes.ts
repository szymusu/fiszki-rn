export const queryKeys = {
  sets: () => ['flash-card-sets'],
  set: (id: string) => ['flash-card-set', id],
  setCounters: (id: string) => ['flash-card-set', id, 'counters'],
};
