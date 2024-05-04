const LoginComponent = {
    template: `
    <div class="comp1">
        <h2>Login</h2>
        <input type="text" placeholder="Email">
        <input type="password" placeholder="Senha">
        <button @click="$emit('change-page', 'signin')">Sign In</button>
        <button>Esqueci a minha senha</button>
        <button>Confirmar</button>
    </div>
    `
};

const SigninComponent = {
    template: `
    <div class="comp2">
        <h2>Sign In</h2>
        <input type="text" placeholder="Nome">
        <input type="text" placeholder="Email">
        <input type="password" placeholder="Senha">
        <button @click="$emit('change-page', 'login')">Login</button>
        <button>Confirmar</button>
    </div>
    `
};

const app = Vue.createApp({
    data() {
        return {
            currentPage: 'login'
        };
    },
    methods: {
        changePage(page) {
            this.currentPage = page;
        }
    }
});

app.component('login-component', LoginComponent);
app.component('signin-component', SigninComponent);

app.mount('#app');
