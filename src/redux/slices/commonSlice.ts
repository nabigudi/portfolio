import { createSlice } from '@reduxjs/toolkit';
import { AllParticles } from "../../helpers/ParticlesOptions";
import { helper } from '../seasonHelper'
import type { ISourceOptions } from "tsparticles-engine";
import moment from 'moment';

// Define a type for the slice state
interface CommonState {
  currentSeason: string;
  currentSeasonParticles: ISourceOptions
}

// Define the initial state using that type
const initialState: CommonState = {
  currentSeason: 'default',
  currentSeasonParticles: {}
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    getCurrentSeason: (state) => {
      state.currentSeason = calcCurrentSeason()+'';
    }, 
    getCurrentSeasonParticles: (state) => {
      state.currentSeasonParticles = calcCurrentSeasonParticles(state.currentSeason);
    }
  },
  extraReducers: (builder) => {
  }
});

const calcCurrentSeason = () => {
  const currentYear = moment().get('year');
  const checkToday = helper.map(function (season) { 
    //1. add current year
    const from = moment(season.start+"/"+currentYear, "DD/MM/YYYY");
    const to = moment(season.end+"/"+currentYear, "DD/MM/YYYY");
    //2. check if today is in any Season -> true: season name, false: false
    return moment().isBetween(from, to, 'day', '[)') && season.name;
  });
  //3. if all false -> no season for today -> show default animation, else: show season animation
  return checkToday.every(e => e === false) ? 'default' : checkToday.filter(x => x!==false)[0];
}

const calcCurrentSeasonParticles = (currentSeason: string) => {
  return Object.assign({}, AllParticles[currentSeason.concat('Particles')]) ;
}

export const { getCurrentSeason, getCurrentSeasonParticles } = commonSlice.actions;

export default commonSlice.reducer;
