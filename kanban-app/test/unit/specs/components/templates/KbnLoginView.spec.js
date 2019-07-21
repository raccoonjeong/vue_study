import { createLocalVue } from "@vue/test-utils";
import Vuex from 'vuex'
import KbnLoginView from '@/components/templates/KbnLoginView.vue'

// 로컬 Vue 생성자를 생성
const localVue = createLocalVue;

// 로컬 Vue 생성자에 Vuex를 설치
localVue.use(Vuex)

describe('KbnLoginView', () => {
    let actions
    let $router
    let store
    let LoginFormComponentStub

    // 'KbnLoginForm' 컴포넌트의 로그인 버튼 크릭을 일으키는 헬퍼 함수
    const triggerLogin = (loginView, target) => {
        const loginForm = loginView.find(target)
        loginForm.vm.onlogin('foo@domain.com', '12345678')
    }


})