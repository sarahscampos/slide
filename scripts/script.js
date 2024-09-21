import {SlideNav} from './slide.js';

const slide = new SlideNav('.slide', '.slider-wrapper');
slide.init();
slide.addArrow('.prev', '.next');