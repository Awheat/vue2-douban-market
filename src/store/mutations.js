import {
	IS_FIXED_HEADER,
	IS_SHOW_SEARCH_BAR,
	IS_SHOW_MASK,
	GET_SLIDERS,
	GET_HOT_PRODUCTS,
	GET_HOT_SHOPS,
	GET_PRODUCTS,
	IS_SHOW_LOADING_TIPS,
	IS_SHOW_LOADED_TIPS
} from './mutation-types.js'


export default {
	[IS_FIXED_HEADER](state,bool){
		state.isFixedHeader = bool;
	},
	[IS_SHOW_SEARCH_BAR](state,bool){
		state.isShowSearchBar = bool;
	},
	[IS_SHOW_MASK](state,bool){
		state.isShowMask = bool;
	},
	[GET_SLIDERS](state,list){
		state.sliders = list;
	},
	[GET_HOT_PRODUCTS](state,list){
		state.hotProducts = list;
	},
	[GET_HOT_SHOPS](state,list){
		state.hotShops = state.hotShops.concat(list);
	},
	[GET_PRODUCTS](state,list){
		state.products = state.products.concat(list);
	},
	[IS_SHOW_LOADING_TIPS](state,bool){
		state.isShowLoadingTips = bool;
	},
	[IS_SHOW_LOADED_TIPS](state,bool){
		state.isShowLoadedTips = bool;
	}
}