<template>

    <transition-group name='fade'>
        <!-- 蒙版 -->
        <div class="mask" key="1" @click="show = false" v-if="show" @touchmove.prevent></div>

        <div class="pop" v-show="show" key="2">

            <div class="content">
                <!--<div style="height: 30px;">-->
                    <img @click="show = false" class="close" src="../../assets/1110z1/images/teaser_popup-close.png" alt="">
                <!--</div>-->
               <video  poster="../../assets/1110z1/images/teaser_popup-video-bg.png"
                      controls='controls' style="width: 100%;height: 100%;object-fit: cover">
                   <source :src="video" type="video/mp4"/>
               </video>
            </div>
        </div>

    </transition-group>

</template>
<script>
    export default {
        name: 'Popup',
        data() {
            return {
                show: false,
                video: '',
            }
        },
        methods: {
            btnClick() {
                this.click()
                this.show = false
            },
        },
    }
</script>
<style lang="scss" scoped>
    // 渐变过渡
    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.35s;
    }
    // 全局弹窗
    .mask {
        background: rgba(0, 0, 0, 0.9);
        position: fixed;
        top: 0;
        z-index: 10;
        width: 100%;
        height: 100%;
    }

    .pop {
        height: 70%;
        width: 70%;
       // margin-top: 10px;
        //padding:20px;
        background: url(../../assets/1110z1/images/teaser_popup-bg.png) no-repeat;
        //border-radius: 8px;
        position: fixed;
       top: 10%;
        //left: 50%;
        margin-left: 13%;
        z-index: 20;
        text-align: center;
        .content {
            width:100%;height:100%;position: absolute;top:0;left: 0;bottom:0;
            background:url(../../assets/1110z1/images/teaser_popup-bg.png) no-repeat
        }
        .close {
            top: -65px;
            right: 0%;
            position: absolute;
            display: block;
            width: 30px;
            height: 30px;
            margin-top: 30px;
            z-index: 1;
        }
    }

</style>