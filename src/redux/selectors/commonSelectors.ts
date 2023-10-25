import type { RootState } from '../store'

export const selectCurrentSeason = (state: RootState) => state.common.currentSeason || '';

export const selectCurrentSeasonParticles = (state: RootState) => state.common.currentSeasonParticles || '';