import axios from 'axios'
import * as types from './mutation-types.js'

/* 异步操作 */
export default {
	handlerScroll({commit,state}){
		let _top_ = document.body.scrollTop;
			if(_top_>50){
				commit(types.IS_FIXED_HEADER, true);
			}else{
				commit(types.IS_FIXED_HEADER, false);
			}
	},
	getSliders({commit,state}) {
		axios.get('/mock/home/sliders.json').then((response)=>{
			if(response.data.list){
				commit(types.GET_SLIDERS,response.data.list);
			}
		});
	},
	getHotProducts({commit,state}){
		axios.get('/mock/products/products.json').then((response)=>{
			let result = response.data.list;
			if(result){
				commit(types.GET_HOT_PRODUCTS,result.slice(0,6));
			}
		});
	},
	getHotShops({commit,state}){
		state.busy = true;
		commit(types.IS_SHOW_LOADING_TIPS,true);
		axios.get('/mock/home/hot_shop.json').then((response)=>{
			commit(types.IS_SHOW_LOADING_TIPS,false);
			let result = response.data.list.slice(state.num-5,state.num);
			if(result.length !== 0){
				commit(types.GET_HOT_SHOPS,result);
				state.busy = false;
				state.num+=5;
			}else{
				commit(types.IS_SHOW_LOADED_TIPS,true);
			}
		})
	},
	getProducts({commit,state}){
		state.busy = true;
		commit(types.IS_SHOW_LOADING_TIPS,true);
		axios.get('/mock/products/products.json').then((response)=>{
			commit(types.IS_SHOW_LOADING_TIPS,false);
			let result = response.data.list.slice(state.num-5,state.num);
			if(result.length !== 0){
				commit(types.GET_PRODUCTS,result);
				state.busy = false;
				state.num+=5;
			}else{
				commit(types.IS_SHOW_LOADED_TIPS,true);
			}
		})
	}
}

