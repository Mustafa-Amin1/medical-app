export default {
	name: 'App',
	data() {
		return {
			ID: null
		}
	},
	components: {
	}, 
	methods: {
	},
	created() {
		debugger
		this.ID = this.$store.getters.getUpdatedCPG.CPGId
	},
}