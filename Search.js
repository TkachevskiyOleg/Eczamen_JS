document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("search-form");
  
    const categories = [
      { query: "відеокарти", url: "Nvidia.html" },
      { query: "ноутбуки", url: "Laptops.html" },
      { query: "змійка", url: "snakeGame.html" },
      { query: "монітори", url: "Monitors.html" },
      { query: "переферія", url: "Periphery.html" },
      { query: "оперативна", url: "RAM1.html" },
      { query: "оперативна память", url: "RAM1.html" },
      { query: "комплектуючі", url: "Accessories.html" },
      { query: "материнські", url: "Motherboards_for_AMD.html" },
      { query: "материнські плати", url: "Motherboards_for_AMD.html" },
      { query: "акції", url: "New_Year_sale.html" },
    ];
  
    function navigateToCategory(category) {
      window.location.href = category.url;
    }
  
    searchForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const searchInput = document.getElementById("search-input");
      const searchQuery = searchInput.value.trim().toLowerCase();
  
      const foundCategory = categories.find(category => category.query === searchQuery);
  
      if (foundCategory) {
        navigateToCategory(foundCategory);
      } else {
        alert("Категорія не знайдена");
      }
    });
  });
  