import { createSlice } from 'redux-starter-kit';

// Simplified mechanism for creating a Reducer and its
// associated Actions.
// @see https://redux-starter-kit.js.org/usage/usage-guide#creating-slices-of-state
const PreferencesSlice = createSlice({
  initialState: {
    initialized: false,
    preferences: {}
  },
  reducers: {
    getPreferencesSuccess(draftState, action) {
      // Under the hood, this uses the Immer library, allowing you
      // to mutate the state directly because we are receiving a
      // draft version of the state here. You MUST mutate the `draftState`
      // given to you; you CANNOT return a new state object.
      draftState.preferences = action.payload.preferences;
      draftState.initialized = true;
    },
  }
});

// Extract the action creators object and the reducer
const { actions, reducer } = PreferencesSlice;

// Extract and export each action creator by name
export const { getPreferencesSuccess } = actions;

// Export the reducer
export default reducer;

export const selectInitialized = state => state.initialized;
export const selectPreferences = state => state.preferences;
export const selectPreferenceByName = (state, name) => selectPreferences(state)[name];
