const COOKIE_NAMES = {
  GameStateData: 'gameStateData',
};

export default {
  // persist game data across refreshes
  setGameState(gameState: any) {
    const stringified = JSON.stringify(gameState);
    return localStorage.setItem(COOKIE_NAMES.GameStateData, stringified);
  },
  getGameState() {
    const value = localStorage.getItem(COOKIE_NAMES.GameStateData);
    if (!value) {
      return undefined;
    }
    try {
      return JSON.parse(value);
    } catch (e) {
      return undefined;
    }
  },
};
