const MOBILE = 480;

const ViewPort = {
  name: 'ViewPort',

  computed: {
    isMobile() {
      return this.width <= MOBILE;
    },
  },

  data() {
    return {
      width: 0,
    };
  },

  created() {
    const handleResize = () => {
      this.width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;
    };

    window.addEventListener('resize', handleResize);

    this.$on('hook:beforeDestroy', () => {
      window.removeEventListener('resize', handleResize);
    });

    handleResize();
  },

  render() {
    return this.$scopedSlots.default({
      isMobile: this.isMobile,
    });
  },
};

export default ViewPort;
