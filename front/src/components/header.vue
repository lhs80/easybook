<template>
  <b-navbar toggleable="lg" type="light" variant="white" style="border-bottom:solid 1px #f0f0f0;padding:0">
    <div class="nav-wrapper">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-navbar-brand class="float-left" href="#" style="padding:9px 25px 15px 12px"><img src="../assets/logo.png" alt="logo" width="55px">
      </b-navbar-brand>
      <router-link to='/write'>
        <b-button variant="customer" class="mt-2 write-btn" type="button"><i class="jian_iconfont jian-shiliangzhinengduixiang9"></i> 写文章</b-button>
      </router-link>
      <router-link to='/sign_up'>
        <b-button variant="outline-customer" class="mt-2 sign-up" type="button">注册</b-button>
      </router-link>
      <div class="main-nav">
        <b-collapse is-nav id="nav_collapse">
          <b-nav is-nav-bar class="col-lg-10">
            <b-nav-item href="#" class="ml-2 mr-lg-4 active">
              <i class="jian_iconfont jian-zhinanzhen font-weight-bold h5" style="vertical-align:middle"></i> 首页
            </b-nav-item>
            <b-nav-item href="#" class="mr-lg-4"><i class="jian_iconfont jian-shouji font-weight-bold h5" style="vertical-align:middle"></i> 下载App
            </b-nav-item>
            <b-nav-form>
              <b-form-input size="sm" type="text" placeholder="Search"/>
              <b-button size="sm" class="my-sm-0" type="submit">搜索</b-button>
            </b-nav-form>
          </b-nav>
          <b-nav is-nav-bar class="mt-1">
            <!--字体、夜间白天模式切换-->
            <b-nav-item id="exPopoverReactive1" class="ml-5"><i class="jian_iconfont jian-method-draw-image h4 c99"></i></b-nav-item>
            <b-popover target="exPopoverReactive1" triggers="click" placement="auto" container="myContainer"
                       ref="popover"
                       @show="onShow"
                       @shown="onShown"
                       @hidden="onHidden">
              <template slot="title">
                <b-btn @click="onClose" class="close" aria-label="Close">
                  <span class="d-inline-block" aria-hidden="true">&times;</span>
                </b-btn>
                Interactive Content
              </template>
              <div>
                <b-form-group label="Name" horizontal class="mb-1" description="Enter your name">
                  <b-form-input ref="input1" size="sm" v-model="input1"></b-form-input>
                </b-form-group>
                <b-form-group label="Color" horizontal class="mb-1" description="Pick a color">
                  <b-form-select size="sm" v-model="input2" :options="options"></b-form-select>
                </b-form-group>
                <b-alert show class="small">
                  <strong>Current Values:</strong><br>
                  Name: <strong>{{ input1 }}</strong><br>
                  Color: <strong>{{ input2 }}</strong>
                </b-alert>
                <b-btn @click="onCancel" size="sm" variant="danger">Cancel</b-btn>
                <b-btn @click="onOk" size="sm" variant="primary">Ok</b-btn>
              </div>
            </b-popover>
            <router-link to='/sign_in'>
              <span class="c99 mt-2 float-right ml-3">登陆</span>
            </router-link>
          </b-nav>
        </b-collapse>
      </div>
    </div>
  </b-navbar>
</template>