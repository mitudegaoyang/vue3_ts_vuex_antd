
import { ComponentCustomProperties } from 'vue'
import { Store, createStore } from 'vuex'

declare module '@vue/runtime-core' {
    // declare your own store states
    interface State {
        isLogin: boolean,
        count: number,
        list: string[]
    }

    // provide typings for `this.$store`
    interface ComponentCustomProperties {
        $store: Store<State>
    }
}

const store = createStore({
    state() {
        // 数据
        return {
            isLogin: false,
            count: 1,
            list: []
        }
    },
    mutations: {
        // 方法
        incCount(state: any) {
            state.count++;
        },
        getList(state: any) {
            state.list = [];
            for (let i = 0; i < 10; i++) {
                state.list.push(`我是第${i}项`);
            }
        },
        login(state: any) {
            state.isLogin = true;
        },
        logout(state: any) {
            state.isLogin = false;
        }
    },
    getters: {
        num(state: any) {
            return state.count + 10
        }
    }
})

export default store