<template>
  <div style="width: 100%; height: 100vh;  overflow: hidden">
    <div style="width: 400px; margin: 150px auto;">

      <div style="font-size: 30px; text-align: center; padding: 30px 0">欢迎登录</div>
      <el-form ref="form" :model="form"  size="default" :rules="rules">
        <el-form-item prop="username">
          <el-input v-model="form.username" >
            <template #prefix>
              <el-icon class="el-input__icon" style="color: black"><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" show-password>
            <template #prefix>
              <el-icon class="el-input__icon" style="color: black"><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item >
          <el-button style="width: 100%" @click="login">登录</el-button>
        </el-form-item>

      </el-form>
    </div>
  </div>
</template>

<script>
import {User,Search,Lock} from "@element-plus/icons";
import request from "@/utils/request";
export default {
  name: "Login",
  components: {
    User,
    Search,
    Lock

  },
  data() {
    return {
      form: {},
      rules: {
        username: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    login() {
      this.$refs['form'].validate((valid) => {
        if(valid){
          request.post("login", this.form).then( res => {
            if(res.success === true){
              this.$message ({
                type: 'success',
                message: '登录成功！'
              })
              sessionStorage.setItem("user",JSON.stringify(res.data))
              console.log(sessionStorage.getItem('user'))
              this.$router.push('/user')
            }else
              this.$message ({
                type: 'error',
                message: res.msg
              })
          })
        }else {
          this.$message("error", "请输入用户名和密码")
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
