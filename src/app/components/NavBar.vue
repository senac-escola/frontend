<template>
  <i-layout class="nav-bar">
    <i-layout-header class="nav-header">
      <img class="logo" src="/logo-light-mode.webp" alt="" />
    </i-layout-header>

    <i-layout-content
      class="_height:100% _display:flex _flex-direction:column _justify-content:space-between"
    >
      <i-layout>
        <i-layout-header
          class="_display:flex _flex-direction:column _justify-content:space-between user"
        >
          <img
            class="userThumb _border-radius:circle"
            src="/assets/users/maria.png"
            alt=""
          />
          <span class="cargo">Gerente</span>
          <h1 class="greeting">Olá Maria,</h1>
        </i-layout-header>

        <i-layout-content class="nav-content">
          <i-button
            to="/consultar-usuarios"
            class="action-button e-button e-fx"
            :class="{ 'e-active': $route.path == '/consultar-usuarios' }"
          >
            <span>Consultar usuários</span>
            <img src="/assets/icons/users-icon.svg" alt="" />
          </i-button>
          <i-button
            to="/cadastrar-usuario"
            class="action-button e-button e-fx"
            :class="{ 'e-active': $route.path == '/cadastrar-usuario' }"
          >
            <span>Cadastrar usuário</span>
          </i-button>
          <i-button
            to="/alterar-usuarios"
            class="action-button e-button e-fx"
            :class="{ 'e-active': $route.path == '/alterar-usuarios' }"
          >
            <span>Alterar usuários</span>
          </i-button>
          <i-button
            to="/excluir-usuarios"
            class="action-button e-button e-fx"
            :class="{ 'e-active': $route.path == '/excluir-usuarios' }"
          >
            <span>Excluir usuários</span>
          </i-button>
        </i-layout-content>
      </i-layout>
    </i-layout-content>

    <i-layout-footer class="_display:flex _justify-content:start nav-footer">
      <i-button
        to="/acessar"
        class="_border-radius _display:flex _justify-content:space-between logout-button e-button e-danger"
      >
        <span>Sair</span>
        <img src="/assets/icons/logout-icon.png" alt="" />
      </i-button>
      <i-button
        to="/minha-conta"
        class="_border-radius:circle account-config e-button e-neutral"
      >
        <img src="/assets/icons/account-config-icon.svg" alt="" />
      </i-button>
    </i-layout-footer>
  </i-layout>
</template>

<script lang="ts">
export default {
  computed: {
    currentRouteName() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped lang="scss">
@import "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap";
.nav-bar {
  padding: 40px;
  padding-right: 70px;
  width: 400px;
  height: 100vh;
  font-family: "Noto Sans", sans-serif;
  background-color: #f9f9f9;

  .nav-header {
    .logo {
      width: 114px;
    }
  }
  .user {
    .userThumb {
      width: 100px;
      margin-top: 65px;
    }

    .cargo {
      margin-top: 30px;
      font-size: 16px;
      font-weight: bold;
      color: #6b6b6b;
    }

    .greeting {
      margin-top: 8px;
      font-size: 24px;
      font-weight: bold;
    }
  }

  .nav-content {
    display: flex;
    flex-direction: column;
    gap: 15px;
    .action-button {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }

  .nav-footer {
    gap: 20px;
    .logout-button {
      width: 120px;
      border-radius: 50px !important;
      padding-left: 28px;
      padding-right: 24px;
      font-weight: bold;
    }

    .account-config {
      width: 50px;
    }
  }
}
</style>
