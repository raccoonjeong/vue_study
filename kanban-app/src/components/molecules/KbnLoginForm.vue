<template>
    <form novalidate>>
        <div class = "form-item">
            <label for="email">이메일 주소</label>
            <input id="email"
            v-model="email"
            type="text"
            autocomplete="off"
            placeholder="예: kanban@domain.com" 
            @focus = "resetError">
            <ul class = "validation-errors">
                <li v-if="!validation.email.format">이메일 주소 형식에 어긋납니다.</li>
                <li v-if="!validation.email.required">이메일 주소가 입력되지 않았습니다.</li>
            </ul>
        </div>
        <div class="form-item">
            <label for="password">패스워드</label>
            <input 
            id="password"
            v-model="password"
            type="password"
            autocomplete="off"
            placeholder="예: xxxxxxxx"
            @focus="resetError">
            <ul class = "validation-errors">
                <li v-if="!validation.password.required">패스워드가 입력되지 않았습니다.</li>
            </ul>
        </div>
        <div class="form-actions">
            <KanButton
                :disabled="disabledLoginAction"
                @click="handleClick"
                >
                로그인
            </KanButton>
            <p
            v-if="progress"
            class="login-progress"
            >
            로그인 중...
            </p>
            <p 
            v-if="error"
            class="login-error">
            {{ error }}
            </p>
        </div>
    </form>
</template>

<script>
// KbnButton 임포트
import KbnButton from '@/components/atoms/KbnButton'

</script>