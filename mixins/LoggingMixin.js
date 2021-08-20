export default {
  // Based on:
  // https://www.damirscorner.com/blog/posts/20200904-ErrorHandlingInNuxtjs.html
  // https://github.com/nuxt/docs/issues/1748
  errorCaptured(error, vm, info) {
    console.log("error intercepted via logging mixin");
    console.log(error, vm, info);
    return false; // prevent Nuxt from handling the error
  }
  //   beforeCreate() {
  //     console.log("beforeCreate...");
  //   },
  //   mounted() {
  //     console.log("mm" + this.data);
  //   },
  //   renderTracked({ key, target, type }) {
  //     // debugger;
  //     console.log({ key, target, type });
  //     /* This will be logged when component is rendered for the first time:
  //     {
  //       key: "cart",
  //       target: {
  //         cart: 0
  //       },
  //       type: "get"
  //     }
  //     */
  //   },
  //   renderTriggered({ key, target, type }) {
  //     // debugger;
  //     console.log({ key, target, type });
  //   }
};

// // https://www.reactjunkie.com/vue-mixin-args
// const CodeUrlAssist = callerFileName => ({
//     // methods: {
//     //   init: function() {
//     //     someLibrary.initialize(clientId)
//     //   },
//     // },
//     computed: {
//         // showSourceUrl() {
//         //     // TODO - decide on logic for this
//         //     return false;
//         // },
//         currComponentName() {
//             debugger;
//             return callerFileName;
//             // let relFileName = callerFileName.split("app/javascript")[1];
//             // // let relFileName = __filename.split("app/javascript")[1]
//             // return INMOAPP.env.source_base_url + relFileName; // + "/forms/EditPageSectionForm.vue"
//         }
//     }
// });

// export default CodeUrlAssist;
