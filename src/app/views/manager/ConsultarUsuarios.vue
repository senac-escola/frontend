<template>
  <i-layout-content
    class="_display:flex _align-items:center _justify-content:space-between _flex-direction:column e-content"
  >
    <i-container>
      <i-layout-header class="e-header">
        <h2>Consultar usuários</h2>
      </i-layout-header>
      <i-form>
        <i-container>
          <i-row>
            <i-column sm="5" md="6">
              <i-form><h2>Tipo:</h2></i-form>
              <i-select
                v-model="selected"
                :options="options"
                autocomplete
                placeholder="Escolha o tipo do usuário"
                clearable
              />
            </i-column>
            <i-column sm="5" offset-sm="2" md="6" offset-md="0">
              <i-form><h2>Nome:</h2></i-form>
              <i-input v-model="filter.name" placeholder="Digite aqui..." />
            </i-column>
            <i-column sm="5" md="6">
              <i-form><h2>CPF/CNPJ:</h2></i-form>
              <i-input v-model="filter.document" placeholder="Digite aqui..." />
            </i-column>
            <i-column sm="5" offset-sm="2" md="6" offset-md="0">
              <i-form><h2>Email:</h2></i-form>
              <i-input
                v-model="filter.email"
                placeholder="Digite aqui..."
                type="email"
              />
            </i-column>
            <i-column
              sm="5"
              offset-sm="2"
              md="12"
              offset-md="0"
              class="_margin-top:4 results"
            >
              <i-table v-if="filteredUsers.length > 0" class="e-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>CPF/CNPJ</th>
                    <th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in filteredUsers">
                    <td>{{ user.user_name }}</td>
                    <td>{{ user.user_email }}</td>
                    <td>{{ user.document_id }}</td>
                    <td>{{ user.user_type }}</td>
                  </tr>
                </tbody>
              </i-table>
              <div class="loading" v-if="filteredUsers.length == 0"></div>
            </i-column>
          </i-row>
        </i-container>
      </i-form>
    </i-container>
  </i-layout-content>
</template>

<script lang="ts">
import { User } from "../../model/user.model";
import { UserType } from "../../model/user-type.enum";
import { defineComponent, ref, computed, onMounted } from "vue";
import { listUsers } from "../../services/users-service";
import { documentMask } from "../../util/document-mask";

export default defineComponent({
  name: "ConsultarUsuarios",
  setup() {
    const selected = ref();
    const options = ref([
      { id: "STUDENT", label: "Estudante" },
      { id: "TEACHER", label: "Professor(a)" },
      { id: "SUPPLIER", label: "Fornecedor(a)" },
      { id: "MANAGER", label: "Gerente" },
    ]);
    const filter = ref({
      name: "",
      email: "",
      document: "",
      type: "",
    });
    const users = ref([] as User[]);

    const filteredUsers = computed(() => {
      return users.value.filter((user) => {
        console.log("Filter: ");
        return (
          user.user_name
            .toLowerCase()
            .includes(filter.value.name.toLowerCase()) &&
          user.user_email
            .toLowerCase()
            .includes(filter.value.email.toLowerCase()) &&
          user.document_id.toString().includes(filter.value.document) &&
          (selected.value == undefined ||
            user.user_type == (<any>UserType)[selected.value.id])
        );
      });
    });

    const getUsers = () => {
      listUsers().then((response) => {
        console.log(response);
        users.value = response.data.map((user) => {
          return {
            user_name: user.user_name,
            user_type: (<any>UserType)[user.user_type.toUpperCase()],
            document_id: documentMask(user.document_id.toString()),
            user_address: user.user_address,
            user_phone: user.user_phone,
            user_email: user.user_email,
          };
        });
        console.log(users.value);
      });
    };

    onMounted(() => {
      getUsers();
    });

    return {
      selected,
      options,
      filter,
      users,
      filteredUsers,
    };
  },
});
</script>

<style lang="scss">
.botoes {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.content {
  padding: 40px;
}

.results {
  position: relative;
}

.loading {
  position: absolute;
  top: 50%;
  left: 45%;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid #ccc;
  border-top-color: transparent;
  animation: spin 1s infinite linear;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
