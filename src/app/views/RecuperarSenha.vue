<template>
  <i-layout vertical>
    <i-layout-content
      class="_display:flex _align-items:center _justify-content:center logo"
      ><img src="/logo-light-mode.webp" alt=""
    /></i-layout-content>
    <i-layout-content
      class="_display:flex _align-items:center _justify-content:center"
      style="min-height: 100vh; background-color: var(--color--gray-10)"
      ><i-form style="min-width: 360px">
        <i-form><h2>Recupere sua senha</h2></i-form>
        <i-form-group>
          <i-form-label>Email:</i-form-label>
          <i-input name="email" placeholder="Digite o seu email aqui..." />
        </i-form-group>
        <i-form-group style="text-align: center">
          <i-button color="primary" class="e-button access" type="submit">
            Enviar email de recuperação
          </i-button>
        </i-form-group>
        <i-form-group style="text-align: center">
          <i-button to="/acessar" link color="dark"
            >Lembrou a senha? Acesse sua conta</i-button
          >
        </i-form-group>
      </i-form></i-layout-content
    >
  </i-layout>
</template>

<style scoped lang="scss">
h2 {
  text-align: center;
}
.e-button.access {
  margin: 0 auto;
}
</style>
