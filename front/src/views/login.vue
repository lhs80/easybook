<template>
  <div class="sign">
    <div class="logo"><img src="../assets/logo.png" alt=""></div>
    <div class="main">
      <h4 class="title">
        <div class="normal-title">
          <router-link class="active" to="/sign_in">登录</router-link>
          <b>·</b>
          <router-link to="/sign_up">注册</router-link>
        </div>
      </h4>
      <div class="js-sign-up-container">
        <form action="">
          <b-input-group>
            <b-input-group-addon><i class="jian_iconfont jian-wodezhuye"></i></b-input-group-addon>
            <b-form-input type="text" placeholder="手机号或邮箱" class="font12"></b-form-input>
          </b-input-group>
          <b-input-group class="mt-3">
            <b-input-group-addon><i class="jian_iconfont jian-1"></i></b-input-group-addon>
            <b-form-input type="password" placeholder="密码" class="font12"></b-form-input>
          </b-input-group>
          <div class="row mt-3">
            <span class="col-6 text-left">
              <b-form-checkbox id="checkbox1" v-model="selected" value="accepted" unchecked-value="not_accepted" checked>
                记住我
              </b-form-checkbox>
            </span>
            <span class="col-6 text-right">
              登录遇到问题
            </span>
          </div>

          <b-button variant="info" size="lg" class="mt-4 btn-block" type="button">登陆</b-button>
          <div class="c99 font12 mt-2">点击 “注册” 即表示您同意并愿意遵守简书</div>
          <div class="c99 font12">用户协议 和 隐私政策 。</div>
        </form>
      </div>
      <div class="more-sign">
        <div class="m-3 c99 font12">社交帐号直接注册</div>
        <div>
          <router-link to=""><i style="color:#e05244" class="jian_iconfont jian-weibo2 display-4 mr-3"></i></router-link>
          <router-link to=""><i style="color:#00bb29" class="jian_iconfont jian-weixin1 display-4 mr-3"></i></router-link>
          <router-link to=""><i style="color:#498ad5" class="jian_iconfont jian-qq display-4"></i></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
