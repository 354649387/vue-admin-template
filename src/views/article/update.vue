<template>
  <div class="app-container">
    <el-card class="box-card">
      <el-form ref="form" :model="form" label-width="80px" size="small">
        <el-form-item label="文章标题">
          <el-input v-model="form.title" style="width: 25%;"></el-input>
        </el-form-item>
        <el-form-item label="所属栏目">
          <el-select v-model="form.category" placeholder="请选择所属栏目">
            <el-option v-for="item in categorys" :key="item.cid" :label="item.name" :value="item.cid">
            </el-option>
            <!-- <el-option label="游戏" value="1" ></el-option>
            <el-option label="新闻" value="2"></el-option> -->
          </el-select>
        </el-form-item>
        <el-form-item label="文章简介">
          <el-input type="textarea" v-model="form.desc" style="width: 35%;"></el-input>
        </el-form-item>
        <el-form-item label="缩略图">
          <el-upload class="upload-demo" action="/api/upload" :on-success="litimgSuccess" drag :show-file-list="false"
            :multiple="false">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <div class="block" style="position: absolute;top: 3px;left: 400px;width: 260px;">
            <!-- <span class="demonstration">自定义</span> -->
            <el-image :src="form.litimgSrc" fit="scale-down" v-show="litimgShow">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
          </div>
        </el-form-item>
        <el-form-item label="文章内容">
          <quill-editor style="height: 400px;width: 70%;" ref="myQuillEditor" v-model="form.content"
            :options="editorOption" />
        </el-form-item>
        <!-- 编辑器里图片上传 action对应的api地址  http://note.youdao.com/noteshare?id=113d0d7beaab673bc3a5ddd9b9d3561d&sub=FEB1B1A147C148C7A6BA9A4DA6502A01 -->
        <el-upload class="upload-demo" action="/api/upload" multiple :on-success="onSuccess" ref="upload"
          style="display: none;">
          <el-button size="small" type="primary" class="hiddenUpload">点击上传</el-button>
        </el-upload>


        <div style="width: auto;height: 150px;"></div>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import {
    quillEditor
  } from 'vue-quill-editor';
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import axios from 'axios'
  export default {
    data() {
      return {
        form: {
          title: '标题',
          //对应categorys里的cid
          category: '1',
          desc: '描述',
          content: "<h1>buasd</h1>",
          litimgSrc: 'https://www.522gg.com/pc/images/logo.png',
        },
        categorys: [{
          cid: '1',
          name: '游戏1'
        }, {
          cid: '2',
          name: '游戏2'
        },
        {
          cid: '3',
          name: '游戏3'
        },],
        litimgShow: true,
        editorOption: {
          theme: 'snow',
          modules: {
            toolbar: {
              container: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{
                  'header': 1
                }, {
                  'header': 2
                }],
                [{
                  'list': 'ordered'
                }, {
                  'list': 'bullet'
                }],
                [{
                  'script': 'sub'
                }, {
                  'script': 'super'
                }],
                [{
                  'indent': '-1'
                }, {
                  'indent': '+1'
                }],
                [{
                  'direction': 'rtl'
                }],
                [{
                  'size': ['small', false, 'large', 'huge']
                }],
                [{
                  'header': [1, 2, 3, 4, 5, 6, false]
                }],
                [{
                  'font': []
                }],
                [{
                  'color': []
                }, {
                  'background': []
                }],
                [{
                  'align': []
                }],
                ['clean'],
                ['link', 'image', 'video']
              ],
              handlers: {
                'image': function(value) {
                  if (value) {
                    // 调用隐藏的图片上传覆盖原本编辑器的图片上传
                    document.querySelector('.hiddenUpload').click()
                  } else {
                    this.quill.format('image', false);
                  }
                }
              },
            }

          },
          placeholder: 'Insert text here ...'
        }
      }
    },
    components: {
      quillEditor
    },
    methods: {
      onSubmit() {

        // this.$refs.upload.submit();

        console.log(this.form)

      },
      onSuccess(response, file, fileList) {
        //response是api返回的结果，这里只是返回了个图片名称
        let quill = this.$refs.myQuillEditor.quill;
        quill.insertEmbed(10, 'image', '/api/uploads/' + response);

      },
      litimgSuccess(response, file, fileList) {
        //response是api返回的结果，这里只是返回了个图片名称

        this.litimgShow = true;

        this.form.litimgSrc = '/api/uploads/' + response;

      }

    },
  }
</script>
