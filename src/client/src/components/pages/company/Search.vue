<template lang="pug">
  div.container
    div
      b-field
        b-input(type="text", v-model="filter.name", placeholder="Назва")
      b-field
        b-input(type="text", v-model="filter.area", placeholder="Область")
      b-field
        b-input(type="text", v-model="filter.city", placeholder="Місто")
    br
    div.box(v-for="(c,i) in companies",:key="c.id||c._id")
      router-link(:to="{name:'Company.view',params:{id:c._id||c.id}}")
        company-short(:id="c._id")
      br
    b-pagination(
    :total="total",
    :per-page="limit",
    :current.sync="filter.page",)
</template>
<script>
  import CompanyAPI from '#/CompanyAPI';
  import CompaniesList from '@elements/company/List';
  import CompanyShort from '@elements/company/CompanyShort'

  export default {
    data () {
      return {
        companies: [],
        filter: {},
        total: 0,
        limit:20
      }
    },
    components: {
      CompaniesList,
      CompanyShort
    },
    watch: {
      "filter.city" () {
        this.loadCompanies();
      },
      "filter.name" () {
        this.loadCompanies();
      },
      "filter.area" () {
        this.loadCompanies();
      },
      "filter.page"(){
        this.loadCompanies();
      }
    },
    methods: {
      handleURL (query) {
        let {sort, page, city, area, name} = query;
        this.filter = {
          area,
          city,
          sort,
          page,
          name,
          limit:this.limit
        };
        this.loadCompanies();
        console.log(this.filter);
      },
      async loadCompanies () {
        console.log('loaded')
        this.$bus.$emit('load-start')
        try {
          const result = await CompanyAPI.loadByQuery(this.filter);
          console.log(result.data);
          if (result.data.success) {
            this.companies = result.data.item;
            this.filter.page = result.data.page;
            this.total = result.data.total;
          } else {
            throw result;
          }
        } catch (err) {
          this.$messages.error(err, this);
        }
        this.$bus.$emit('load-end')
      }
    },
    computed: {},
    props: [],
    beforeRouteUpdate (to, from, next) {
      this.handleURL(to.query);
      next();
    },
    mounted () {
      this.handleURL(this.$route.query);
    }
  }
</script>
<style scoped lang="scss">
</style>
