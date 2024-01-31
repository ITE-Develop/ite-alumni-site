const vScroll = {
    mounted(el, binding) {
        el.addEventListener("scroll", () => {
            binding.value(el);
        });
    },
};

export default vScroll;
