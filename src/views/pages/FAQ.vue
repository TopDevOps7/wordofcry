<template>
  <div>
    <div id="contents" class="Breeding-box page">
      <Header />
      <div class="bg-faq container">
        <div class="page-header header">
          <h1 class="page-title">
            HOW CAN<br />
            WE HELP?
          </h1>
          <h2 class="page-subtitle">
            Explore in FAQs or <br />
            Contact us on <a href="https://bit.ly/3IGaMWG">Discord!</a>
          </h2>
        </div>

        <div class="body">
          <div class="search_field">
            <b-input-group>
              <b-form-input></b-form-input>
              <b-input-group-append>
                <b-input-group-text>
                  <b-icon icon="search"></b-icon>
                </b-input-group-text>
              </b-input-group-append>
            </b-input-group>
          </div>
          <div v-for="(catalog, index) in catalogs" class="list_data">
            <div class="module-title" v-bind:class="{ second: index > 0 }">
              {{ catalog.catalogName }}
            </div>

            <div
              v-for="faq in catalog.faqs"
              class="module-body"
              v-bind:class="{
                active:
                  activeFaq === faq.faqId &&
                  activeCatalog === catalog.catalogId,
              }"
              @click="handleClick(catalog.catalogId, faq.faqId)"
            >
              <div class="module-name">{{ faq.question }}</div>
              <div
                class="module-content"
                v-if="
                  activeFaq === faq.faqId && activeCatalog === catalog.catalogId
                "
              >
                {{ faq.answer }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Bottom />
  </div>
</template>
<script>
import "./style.scss";
import Header from "@/components/header.vue";
import Bottom from "@/components/bottom.vue";
import envConfig from "@/envConfig";
import Vue from "vue";

import { BInputGroupAppend } from "bootstrap-vue";
import { BInputGroupText } from "bootstrap-vue";
import { BFormInput } from "bootstrap-vue";
import {
  BootstrapVue,
  BIcon,
  BIconArrowUp,
  BIconSearch,
  BIconArrowDown,
} from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.component("BIcon", BIcon);
Vue.component("BIconArrowUp", BIconArrowUp);
Vue.component("BIconSearch", BIconSearch);
Vue.component("BIconArrowDown", BIconArrowDown);

Vue.component("b-input-group-append", BInputGroupAppend);
Vue.component("b-input-group-text", BInputGroupText);
Vue.component("b-form-input", BFormInput);
export default {
  name: "FAQ",
  components: {
    Header,
    Bottom,
  },
  data() {
    return {
      curIndex: 0,
      activeFaq: 0,
      activeCatalog: 0,
      catalogs: [],
    };
  },
  mounted: function () {
    this.fetchCatalogs();
  },
  methods: {
    handleClick(catalogId, faqId) {
      if (this.activeFaq === faqId && this.activeCatalog === catalogId) {
        this.activeFaq = 0;
        this.activeCatalog = 0;
      } else {
        this.activeFaq = faqId;
        this.activeCatalog = catalogId;
      }
    },
    fetchCatalogs() {
      var that = this;
      // fetch(import.meta.env.VITE_API_ENDPOINT + "/listCatalog")
      fetch(envConfig.apiURL + "/listCatalog")
        .then(function (response) {
          return response.json();
        })
        .then(function (catalogs) {
          console.log(catalogs.data);
          that.catalogs.forEach(function (catalog) {
            catalog.faqs = [];
          });
          that.catalogs = catalogs.data;
        })
        .then(function () {
          that.fetchFaqs(0);
        });
    },
    fetchFaqs(index) {
      var that = this;
      if (!that.catalogs[index]) {
        return;
      }
      // fetch(import.meta.env.VITE_API_ENDPOINT + "/listCatalogFaq?catalogId=" + that.catalogs[index].catalogId)
      fetch(
        envConfig.apiURL +
          "/listCatalogFaq?catalogId=" +
          that.catalogs[index].catalogId
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (faqs) {
          that.catalogs = that.catalogs.map(function (catalog) {
            if (catalog.catalogId === that.catalogs[index].catalogId) {
              catalog.faqs = faqs.data;
            }
            return catalog;
          });
        })
        .then(function () {
          requestAnimationFrame(function () {
            that.fetchFaqs(index + 1);
          });
        });
    },
  },
};
</script>
<style scoped>
.container {
  overflow: auto !important;
}
.header {
  width: 100%;
  display: block;
  position: sticky;
  top: 0;
  z-index: 1;
}

.body {
  padding: 4.49vh 5.93vw;
}

.module-title {
  font-size: 4.07vw;
}

.module-title.second {
  margin-top: 6.5vw;
}
.module-body {
  border-radius: 2.22vw;
  background-color: #ebebeb;
  padding: 2.86vh 2.5vw;
  margin-top: 3.7vw;
}
.module-name {
  font-size: 5.18vw;
  font-weight: 600;
  position: relative;
  padding-right: 4vw;
}
.module-name:after {
  width: 2.12vw;
  height: 1.48vw;
  content: "";
  background-image: url(../../img/down.png);
  background-size: 100%;
  background-repeat: no-repeat;
  display: inline-block;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -0.74vw;
}

.module-body.active .module-name:after {
  background-image: url(../../img/up.png);
}
.module-content {
  font-size: 3.7vw;
  padding-top: 4.6vw;
}
</style>
