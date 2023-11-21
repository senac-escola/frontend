import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/acessar",
  },
  {
    path: "/acessar",
    name: "Acessar conta",
    component: () => import("../views/AcessarConta.vue"),
  },
  {
    path: "/recuperar-senha",
    name: "Recuperar minha senha",
    component: () => import("../views/RecuperarSenha.vue"),
  },
  /* Adicione rotas */
  {
    path: "/consultar-usuarios",
    name: "Consultar usuários",
    component: () => import("../views/manager/ConsultarUsuarios.vue"),
  },
  {
    path: "/cadastrar-usuario",
    name: "Cadastrar usuário",
    component: () => import("../views/manager/CadastrarUsuario.vue"),
  },
  {
    path: "/alterar-usuarios",
    name: "Alterar usuários",
    component: () => import("../views/manager/AlterarUsuarios.vue"),
  },
  {
    path: "/excluir-usuarios",
    name: "Excluir usuários",
    component: () => import("../views/manager/ExcluirUsuarios.vue"),
  },
  {
    path: "/minha-conta",
    name: "Minha conta",
    component: () => import("../views/MinhaConta.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Não encontrado",
    component: () => import("../views/NaoEncontrado.vue"),
  },
];

export default routes;
