<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6">
          <CCard class="mx-4 mb-0">
            <CCardBody class="p-4">
              <CForm  @submit.prevent="submit" >
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <CInput
                  placeholder="Name"
                  autocomplete="Name"
                   v-model="form.Name"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="LastName"
                  autocomplete="LastName"
                   v-model="form.LastName"
                >
                  <template #prepend-content><CIcon name="cil-user"/></template>
                </CInput>
                <CInput
                  placeholder="Email"
                  autocomplete="email"
                  prepend="@"
                  v-model="form.Email"
                />
                <CInput
                  placeholder="Password"
                  type="password"
                  autocomplete="new-password"
                  v-model="form.Password"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CInput
                  placeholder="Repeat password"
                  type="password"
                  autocomplete="new-password"
                  v-model="form.RepeatPassword"
                  class="mb-4"
                >
                  <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                </CInput>
                <CButton color="success"  type="submit" block>Create Account</CButton>
              </CForm>
            </CCardBody>
            <CCardFooter class="p-4">
              <CRow>
                <CCol col="6">
                  <CButton block color="facebook">
                    Facebook
                  </CButton>
                </CCol>
                <CCol col="6">
                  <CButton block color="twitter">
                    Twitter
                  </CButton>
                </CCol>
              </CRow>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: 'Register',
  data: () => ({
    form: {
      UserName:"",
      Name: "",
      LastName: "",
      Email: "",
      password: "",
      RepeatPassword:""
    },
    showError: false
  }),
  methods: {
    ...mapActions(["Register"]),
    async submit() {
      try {
        this.Register(this.form).then(r=>{
          console.log(r);
          this.$router.push("/Login");
          this.showError = false;
        });
      } catch (error) {
        this.showError = true
      }
    },
  },
}
</script>
