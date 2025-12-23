const { createApp, ref, computed, onMounted, watch, nextTick } = Vue;

createApp({
  setup() {
    // 响应式数据
    const searchKeyword = ref('');
    const allData = data; // 从 data.js 导入的数据
    const filteredData = ref([...allData]);
    const tagsList = ref([]);
    const searchInputRef = ref(null);

    // 颜色数组
    const colors = [
      "hsla(233, 100%, 90%, 1)",
      "hsla(234, 80%, 88%, 1)",
      "hsl(150deg 46% 71%)",
      "hsla(259, 84%, 78%, 1)",
      "hsla(311, 74%, 87%, 1)",
      "hsla(221, 59%, 75%, 1)",
      "hsla(312, 77%, 86%, 1)",
      "hsla(242, 58%, 73%, 1)",
      "hsla(311, 74%, 87%, 1)",
    ];

    // 为每个数据项分配颜色（使用计算属性，基于 URL 生成稳定颜色）
    const dataWithColors = computed(() => {
      return filteredData.value.map(item => {
        // 为每个项目生成稳定的颜色（基于 URL 的哈希）
        const hash = item.url.split('').reduce((acc, char) => {
          return ((acc << 5) - acc) + char.charCodeAt(0);
        }, 0);
        const colorIndex = Math.abs(hash) % colors.length;
        return {
          ...item,
          color: colors[colorIndex]
        };
      });
    });

    // 防抖函数
    const debounce = (func, wait) => {
      let timeout;
      return function executedFunction(...args) {
        const later = () => {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    };

    // 搜索功能
    const searchByKeywords = (keywords) => {
      if (!keywords || keywords.trim() === '') {
        filteredData.value = [...allData];
        return;
      }

      const keywordList = keywords.split(" ").filter(k => k.trim() !== '');
      const filtered = allData.filter((item) => {
        for (let i = 0; i < keywordList.length; i++) {
          if (
            !item.name.toLowerCase().includes(keywordList[i].toLowerCase()) &&
            !item.tag.toLowerCase().includes(keywordList[i].toLowerCase())
          ) {
            return false;
          }
        }
        return true;
      });
      filteredData.value = filtered;
    };

    // 防抖搜索
    const debouncedSearch = debounce((value) => {
      searchByKeywords(value);
    }, 500);

    // 监听搜索关键词变化
    const handleSearch = (event) => {
      const value = event.target.value;
      searchKeyword.value = value;
      debouncedSearch(value);
    };

    // 标签点击处理
    const handleTagClick = (tag) => {
      if (tag === "All") {
        searchKeyword.value = '';
        searchByKeywords("");
      } else {
        searchKeyword.value = tag;
        searchByKeywords(tag);
      }
      if (searchInputRef.value) {
        searchInputRef.value.focus();
      }
    };

    // 初始化标签列表
    const initTags = () => {
      const tags = new Set();
      allData.forEach((item) => {
        item.tag.split(" ").forEach((tag) => {
          if (tag.trim()) {
            tags.add(tag);
          }
        });
      });
      tagsList.value = ['All', ...Array.from(tags)];
    };

    // 键盘快捷键
    const handleKeydown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "f") {
        event.preventDefault();
        if (searchInputRef.value) {
          searchInputRef.value.focus();
        }
      }
    };

    // 图片懒加载
    let imageObserver = null;
    const initLazyLoad = () => {
      if (imageObserver) {
        imageObserver.disconnect();
      }
      nextTick(() => {
        const images = document.querySelectorAll("img[data-src]");
        const options = {
          rootMargin: "0px 0px 50px 0px",
          threshold: 0,
        };
        imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              const src = img.getAttribute("data-src");
              if (src) {
                img.setAttribute("src", src);
                img.removeAttribute("data-src");
              }
              observer.unobserve(img);
            }
          });
        }, options);
        images.forEach((image) => {
          imageObserver.observe(image);
        });
      });
    };

    // 监听数据变化，自动触发懒加载
    watch(() => filteredData.value.length, () => {
      initLazyLoad();
    });

    // 图片加载错误处理
    const handleImageError = (event) => {
      event.target.src = './src/images/icon/logo.png';
      event.target.onerror = null;
    };

    // 获取标签按钮的颜色（基于标签名称生成稳定颜色）
    const tagColors = ref(new Map());
    const getTagColor = (tag) => {
      if (!tagColors.value.has(tag)) {
        const hash = tag.split('').reduce((acc, char) => {
          return ((acc << 5) - acc) + char.charCodeAt(0);
        }, 0);
        const colorIndex = Math.abs(hash) % colors.length;
        tagColors.value.set(tag, colors[colorIndex]);
      }
      return tagColors.value.get(tag);
    };

    // 组件挂载后的初始化
    onMounted(() => {
      initTags();
      initLazyLoad();
      document.addEventListener("keydown", handleKeydown);
    });

    // 为每个卡片添加索引（用于动画延迟）
    const getCardStyle = (item, index) => {
      return {
        backgroundColor: item.color,
        '--index': index % 50, // 限制索引以避免过长延迟
      };
    };

    return {
      searchKeyword,
      filteredData,
      tagsList,
      searchInputRef,
      dataWithColors,
      handleSearch,
      handleTagClick,
      handleImageError,
      getTagColor,
      getCardStyle,
    };
  },
}).mount('#app');

