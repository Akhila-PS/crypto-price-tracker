import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [],
  sortKey: 'marketCap',
  sortOrder: 'desc',
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setAssets(state, action) {
      state.assets = action.payload;
    },
    updateAssets(state, action) {
      const updates = action.payload;
      state.assets = state.assets.map(asset => {
        const update = updates.find(u => u.id === asset.id);
        if (update) {
          return { ...asset, ...update };
        }
        return asset;
      });
    },
    setSort(state, action) {
      const { key, order } = action.payload;
      state.sortKey = key;
      state.sortOrder = order;
    },
  },
});

export const { setAssets, updateAssets, setSort } = cryptoSlice.actions;
export default cryptoSlice.reducer;

// Selector for sorted assets
export const selectAssets = state => {
  const assets = [...state.crypto.assets];
  const { sortKey, sortOrder } = state.crypto;
  return assets.sort((a, b) => {
    const valA = a[sortKey] || 0;
    const valB = b[sortKey] || 0;
    return sortOrder === 'desc' ? valB - valA : valA - valB;
  });
};