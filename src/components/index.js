import gradeFilter from './gradeFilter.vue';

const gradeFilterInstaller = {
  install (Vue) {
    Vue.component(gradeFilter.name, gradeFilter);
  }
}

if (typeof window !== undefined && window.Vue) {
  window.Vue.use(gradeFilterInstaller);
}

export default gradeFilterInstaller