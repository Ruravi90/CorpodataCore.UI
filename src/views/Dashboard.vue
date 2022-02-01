<template>
  <div>
    <DataTable :value="this.$store.getters.stateClients"
     :expandedRows.sync="expandedRows" 
     :filters="filters" :loading="loading"
     dataKey="id" :paginator="true" :rows="15"
     :rowsPerPageOptions="[15,25,55]">
      <template #header>
        <div class="table-header">
          <Button icon="pi pi-plus" class="p-button-sm p-mr-2" label="Agregar" @click="addItem"/>
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText v-model="filters['global']" placeholder="Busqueda global" />
          </span>
        </div>
      </template>
      <template #empty>
        Sin resultados.
      </template>
      <template #loading>
        Obteniendo datos.
      </template>
      <Column :expander="true" headerStyle="width: 3rem" />
      <Column field="nomenclature" header="Nomenclatura" filterField="nomenclature" filterMatchMode="contains" sortable></Column>
      <Column field="corporateName" header="Cliente" filterField="corporateName" filterMatchMode="contains" sortable></Column>
      <Column>
        <template #body="slotProps">
            <Button icon="pi pi-pencil" class="p-button-rounded p-button-success p-mr-2" @click="editItem(slotProps.data)"/>
            <Button icon="pi pi-trash" class="p-button-rounded p-button-warning"  @click="removeItem(slotProps.data)"/>
        </template>
      </Column>
      <template #expansion="companies">
          <div class="orders-subtable">
              <DataTable :value="companies.$values">
                  <Column field="nomenclature" header="nomenclature" sortable></Column>
                  <Column field="corporateName" header="corporateName" sortable></Column>
              </DataTable>
          </div>
      </template>
    </DataTable>

    <Dialog :visible.sync="clientDialog" 
    :style="{width: '450px'}" 
    :position="'center'"
    :header="(isEdit ? 'Editar':'Nuevo') + ' cliente'" 
    :modal="true" 
    :baseZIndex="1999"
    class="p-fluid"
    id="dialogClient">
        <span class="p-field">
          <CSwitch class="switch-client" v-model="client.isCompany" labelOn="Fisica" labelOff="Moral" @update:checked="switchSocialType"/>
        </span>
        <div class="p-fluid">
          <span class="p-field p-grid">
            <label for="shortName" class="p-col-4" :class="getValidationClass('shortName')">Nombre corto *</label>
            <div class="p-col-8">
              <InputText id="shortName" name="shortName" v-model="client.shortName" type="text" :class="getValidationClass('shortName')"/>
            </div>
          </span>
          <span class="p-field p-grid">
            <label for="name" class="p-col-4" :class="getValidationClass('name')">Nombre *</label>
            <div class="p-col-8">
              <InputText id="name" name="name" type="text" v-model="client.name" :class="getValidationClass('name')"/>
            </div>
          </span>
          <span class="p-field p-grid" v-if="!client.isCompany">
            <label for="lastName" class="p-col-4" :class="getValidationClass('lastName')">Paterno *</label>
            <div class="p-col-8">
              <InputText id="lastName"  name="lastName" type="text" v-model="client.lastName" :class="getValidationClass('lastName')"/>
            </div>
          </span>
          <span class="p-field p-grid " v-if="!client.isCompany">
              <label for="lastMotherName" class="p-col-4">Materno</label>
              <div class="p-col-8">
                <InputText id="lastMotherName" v-model="client.lastMotherName" type="text"/>
              </div>
          </span>
          <span class="p-field p-grid" v-if="client.isCompany">
            <label for="socialTypeId" class="p-col-4" :class="getValidationClass('socialTypeId')">Tipo Social *</label>
            <div class="p-col-8">
              <Dropdown id="socialTypeId" 
              name="socialTypeId" 
              :options="this.$store.getters.stateSocialTypes" 
              v-model="client.socialTypeId" 
              :class="getValidationClass('socialTypeId')"
              optionLabel="name" 
              optionValue="id"
              dataKey="id"
              appendTo="dialog"
              placeholder="Selecciona" />
            </div>
          </span>
          <span class="p-field p-grid">
            <label for="finder" class="p-col-4" :class="getValidationClass('finder')">Finder *</label>
            <div class="p-col-8">
              <Dropdown id="finder" 
              name="finder" 
              :options="this.$store.getters.stateUsers" 
              v-model="client.finder" 
              :class="getValidationClass('finder')" 
              optionLabel="name" 
              optionValue="id"
              dataKey="id"
              appendTo="dialog"
              placeholder="Selecciona" />
            </div>
          </span>
        </div>
        <template #footer>
          <Button label="Cancel" icon="pi pi-times" class="p-button-text"/>
          <Button label="Save" icon="pi pi-check" class="p-button-text" @click="saveItem"/>
        </template>
    </Dialog>

    
  </div>
</template>

<style lang="scss">
html:not([dir="rtl"]){
  .switch-client {
    .c-switch-slider::after {
      right: 5px;
    }
  }
} 


.switch-client{
  &.c-switch-label{
    width: 98px;
    height: 36px;
    .c-switch-slider{
      &::before {
        width: 30px;
        height: 30px;
      }
      &::after {
        color: #c4c9d0!important;
      }
    }
    .c-switch-input:checked ~ .c-switch-slider{
      &::before {
        -webkit-transform: translateX(62px)!important;
        transform: translateX(62px)!important;
      }
      &::after {
        color: #c4c9d0!important;
      }
    }
  }
}
  
</style>

<script>
import { required} from "vuelidate/lib/validators";
import { mapActions } from "vuex";
import { EventBus } from '../utils/EventBus';


export default {
  name: 'Dashboard',
  components: {
  },
  data: () => ({
    columns: null,
    expandedRows:null,
    filters: {},
    loading: true,
    clientDialog:false,
    isEdit:false,
    client:{
      id:0,
      shortName: "",
      name: "",
      lastName: "",
      lastMotherName: "",
      socialTypeId: 0,
      finder: 0,
      isCompany:false
    }
  }),
  validations: {
    client:{
      shortName: {
        required,
      },
      name: {
        required,
      },
      lastName: {
        required,
      },
      lastMotherName: {},
      socialTypeId: {
        required,
      },
      finder: {
        required,
      },
      isCompany:{}
    }
  },
  created() {
    
    //this.$notificacionHub.Opened();

    this.columns = [
      {field: 'nomenclature', header: 'nomenclature'},
      {field: 'corporateName', header: 'corporateName'},
    ];

    this._getSocialTypes();
    this._getUsers();
    this._getClients();
    
    this.loading = false;
  },
  methods: {
    ...mapActions(["_getClients","_postClients","_putClients","_getSocialTypes","_getUsers"]),
    async selectedClient(client){
      this.$store.commit("setSingleClient",client);
      this.$router.push("/audits");
      EventBus.$emit('selectedClient', client)
    },
    expandAll() {
      this.expandedRows = this.products.filter(p => p.id);
    },
    collapseAll() {
      this.expandedRows = null;
    },
    getValidationClass(fieldName) {
      const field = this.$v.client[fieldName];
      if (field) {
        return {
          "p-invalid": field.$invalid || field.$dirty,
        };
      }
    },
    addItem() {
      this.clientDialog = true;
      this.isEdit = false;
    },
    editItem(data) {
      debugger;
      this.clientDialog = true;
      this.isEdit = true;
      this.client.id = data.id;
      this.client.shortName = data.shortName;
      this.client.name = data.name;
      this.client.lastName = data.lastName;
      this.client.lastMotherName = data.lastMotherName;
      this.client.socialTypeId = data.socialTypeId;
      this.client.finder = data.finder;
      this.client.isCompany = data.isCompany;
      console.log("EditClient",this.client);
    },
    saveItem() {
      debugger;
      this.$v.$touch();
      // stop here if form is invalid
      if (this.$v.$invalid) return;

      

      if(this.isEdit){
        this._putClients(this.client).then(r=>{

        });
      }
      else{
        this._postClients(this.client).then(r=>{
          
        });
      }

      this.clientDialog = false;
    },
    removeItem(data) {
      this.$confirm.require({
          key: 'positionDialog',
          message: 'Do you want to delete this record?',
          header: 'Delete Confirmation',
          icon: 'pi pi-info-circle',
          accept: () => {
              this.$toast.add({severity:'success', summary:'Confirmed', detail:'Record deleted', life: 3000});
          },
          reject: () => {
              this.$toast.add({severity:'info', summary:'Rejected', detail:'You have rejected', life: 3000});
          }
      });
      console.log("Delete",data);
    },
    switchSocialType(e){
      this.client.isCompany = e;
    }
  }
}
</script>
