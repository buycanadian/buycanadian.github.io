// Global current page and items per page for pagination.
    let currentPage = 1;
    const itemsPerPage = 24;

    // Product database (100 goods)
    // Category A (IDs 1–34): Made in Canada but with some components sourced internationally.
    // Category B (IDs 35–67): Manufactured internationally using Canadian materials.
    // Category C (IDs 68–100): Entirely made in Canada with Canadian materials.
    const products = [
      // --- Category A: (madeInCanada: true, canadianMaterials: false) ---
      { id: 1,  name: "Canada Goose Expedition Parka", description: "Iconic heavy-duty parka made in Canada with internationally sourced down and fabrics.", madeInCanada: true, canadianMaterials: false, url: "https://www.canadagoose.com/en/expedition-parka-2020.html" },
      { id: 2,  name: "Canada Goose Langford Parka", description: "A stylish parka crafted in Canada with high-quality imported materials.", madeInCanada: true, canadianMaterials: false, url: "https://www.canadagoose.com/en/langford-parka.html" },
      { id: 3,  name: "Canada Goose Trillium Parka", description: "A versatile parka made in Canada with components sourced from global suppliers.", madeInCanada: true, canadianMaterials: false, url: "https://www.canadagoose.com/en/trillium-parka.html" },
      { id: 4,  name: "Arc'teryx Beta AR Jacket", description: "High-performance technical jacket made in Canada with premium imported fabrics.", madeInCanada: true, canadianMaterials: false, url: "https://arcteryx.com/us/en/shop/mens/beta-ar-jacket" },
      { id: 5,  name: "Arc'teryx Alpha SV Jacket", description: "A durable, weather-resistant jacket made in Canada with internationally sourced materials.", madeInCanada: true, canadianMaterials: false, url: "https://arcteryx.com/us/en/shop/mens/alpha-sv-jacket" },
      { id: 6,  name: "Arc'teryx Atom LT Hoody", description: "Lightweight insulated hoody made in Canada with quality imported down.", madeInCanada: true, canadianMaterials: false, url: "https://arcteryx.com/us/en/shop/mens/atom-lt-hoody" },
      { id: 7,  name: "Sorel Caribou Boot", description: "Robust winter boot made in Canada with components sourced from international suppliers.", madeInCanada: true, canadianMaterials: false, url: "https://www.sorelfootwear.com/en/caribou-boot" },
      { id: 8,  name: "Moose Knuckles Maverick Parka", description: "A bold parka made in Canada that combines local craftsmanship with globally sourced materials.", madeInCanada: true, canadianMaterials: false, url: "https://www.mooseknucklescanada.com/collections/maverick" },
      { id: 9,  name: "Moose Knuckles Crossover Jacket", description: "Modern jacket made in Canada using a mix of international fabrics.", madeInCanada: true, canadianMaterials: false, url: "https://www.mooseknucklescanada.com/collections/crossover-jacket" },
      { id: 10, name: "Nobis Hudson Parka", description: "Sleek parka made in Canada with quality imported materials for enhanced performance.", madeInCanada: true, canadianMaterials: false, url: "https://www.nobisclothing.com/products/hudson-parka" },
      { id: 11, name: "Nobis Birdy Parka", description: "A refined parka made in Canada using components sourced from global suppliers.", madeInCanada: true, canadianMaterials: false, url: "https://www.nobisclothing.com/products/birdy-parka" },
      { id: 12, name: "Mackage Edward Coat", description: "Elegant coat made in Canada with premium fabrics imported from abroad.", madeInCanada: true, canadianMaterials: false, url: "https://www.mackage.com/en/edward-coat" },
      { id: 13, name: "Mackage St. Jerome Coat", description: "A sophisticated coat made in Canada with high-quality imported textiles.", madeInCanada: true, canadianMaterials: false, url: "https://www.mackage.com/en/st-jerome-coat" },
      { id: 14, name: "Baffin Outdoor Extreme Parka", description: "Engineered for harsh climates, this parka is made in Canada with internationally sourced technical materials.", madeInCanada: true, canadianMaterials: false, url: "https://www.baffin.com/en/extreme-parka" },
      { id: 15, name: "MEC Explorer Backpack", description: "Versatile backpack made in Canada with components sourced from global manufacturers.", madeInCanada: true, canadianMaterials: false, url: "https://www.mec.ca/en/product/503361/Explorer-Backpack" },
      { id: 16, name: "MEC Expedition Tent", description: "A reliable tent made in Canada with high-quality materials from international suppliers.", madeInCanada: true, canadianMaterials: false, url: "https://www.mec.ca/en/product/473246/Expedition-Tent" },
      { id: 17, name: "WestJet Flight Jacket", description: "A stylish flight jacket made in Canada featuring fabrics and trims sourced globally.", madeInCanada: true, canadianMaterials: false, url: "https://www.westjet.com/en-ca/shop/flight-jacket" },
      { id: 18, name: "Bombardier Challenger Business Jet", description: "A state-of-the-art business jet manufactured in Canada with internationally sourced components.", madeInCanada: true, canadianMaterials: false, url: "https://businessaircraft.bombardier.com/en/challenger" },
      { id: 19, name: "Magna International Brake Pads", description: "High-performance brake pads made in Canada with materials sourced from around the world.", madeInCanada: true, canadianMaterials: false, url: "https://www.magna.com/products/brake-pads" },
      { id: 20, name: "Canada Goose Pouch Parka", description: "An innovative parka made in Canada, blending local expertise with imported materials.", madeInCanada: true, canadianMaterials: false, url: "https://www.canadagoose.com/en/pouch-parka" },
      { id: 21, name: "Canada Goose Sherpa Parka", description: "A stylish sherpa-lined parka made in Canada with globally sourced insulation.", madeInCanada: true, canadianMaterials: false, url: "https://www.canadagoose.com/en/sherpa-parka" },
      { id: 22, name: "Arc'teryx Cerium LT Hoody", description: "Insulated hoody made in Canada with high-quality imported down.", madeInCanada: true, canadianMaterials: false, url: "https://arcteryx.com/us/en/shop/mens/cerium-lt-hoody" },
      { id: 23, name: "Sorel Joan of Arc Boot", description: "A robust boot made in Canada combining local craftsmanship with international materials.", madeInCanada: true, canadianMaterials: false, url: "https://www.sorelfootwear.com/en/joan-of-arc-boot" },
      { id: 24, name: "Nobis Perch Parka", description: "A sleek parka made in Canada with components sourced from global suppliers.", madeInCanada: true, canadianMaterials: false, url: "https://www.nobisclothing.com/products/perch-parka" },
      { id: 25, name: "Mackage Paige Coat", description: "A contemporary coat made in Canada using high-quality imported textiles.", madeInCanada: true, canadianMaterials: false, url: "https://www.mackage.com/en/paige-coat" },
      { id: 26, name: "Baffin Arctic Parka", description: "Designed for extreme conditions, this parka is made in Canada with imported technical materials.", madeInCanada: true, canadianMaterials: false, url: "https://www.baffin.com/en/arctic-parka" },
      { id: 27, name: "MEC Ascent Climbing Harness", description: "A durable climbing harness made in Canada with components sourced internationally.", madeInCanada: true, canadianMaterials: false, url: "https://www.mec.ca/en/product/503367/Ascent-Climbing-Harness" },
      { id: 28, name: "True North Insulated Gloves", description: "High-performance gloves made in Canada with imported insulating materials.", madeInCanada: true, canadianMaterials: false, url: "https://truenorthclothing.com/products/insulated-gloves" },
      { id: 29, name: "Polar Trek Winter Cap", description: "A warm winter cap made in Canada using internationally sourced fabrics.", madeInCanada: true, canadianMaterials: false, url: "https://polartrek.com/products/winter-cap" },
      { id: 30, name: "Maple Ridge Beanie", description: "A stylish beanie made in Canada with a blend of local design and imported materials.", madeInCanada: true, canadianMaterials: false, url: "https://mapleridge.com/products/beanie" },
      { id: 31, name: "Aurora Thermal Socks", description: "Thermal socks made in Canada with high-quality imported fibers.", madeInCanada: true, canadianMaterials: false, url: "https://aurorafootwear.com/products/thermal-socks" },
      { id: 32, name: "Rocky Summit Down Vest", description: "A lightweight down vest made in Canada with premium imported insulation.", madeInCanada: true, canadianMaterials: false, url: "https://rockysummit.com/products/down-vest" },
      { id: 33, name: "Cascadia Waterproof Jacket", description: "A versatile waterproof jacket made in Canada with advanced materials from global suppliers.", madeInCanada: true, canadianMaterials: false, url: "https://cascadiaoutdoor.com/products/waterproof-jacket" },
      { id: 34, name: "Northern Peak Fleece Jacket", description: "A cozy fleece jacket made in Canada with internationally sourced fabric.", madeInCanada: true, canadianMaterials: false, url: "https://northernpeak.com/products/fleece-jacket" },

      // --- Category B: (madeInCanada: false, canadianMaterials: true) ---
      { id: 35, name: "Roots Signature Hoodie", description: "A premium hoodie manufactured internationally using Canadian-sourced fabrics.", madeInCanada: false, canadianMaterials: true, url: "https://www.roots.com/shop/men/signature-hoodie" },
      { id: 36, name: "Roots Beanie", description: "A classic beanie produced overseas with materials sourced from Canada.", madeInCanada: false, canadianMaterials: true, url: "https://www.roots.com/shop/men/beanie" },
      { id: 37, name: "Roots Track Pants", description: "Comfortable track pants manufactured internationally with textiles from Canada.", madeInCanada: false, canadianMaterials: true, url: "https://www.roots.com/shop/men/track-pants" },
      { id: 38, name: "Maple Leaf Ceramic Plate", description: "A beautifully crafted ceramic plate produced overseas using Canadian-sourced clay.", madeInCanada: false, canadianMaterials: true, url: "https://www.royalceramics.com/products/maple-leaf-plate" },
      { id: 39, name: "True North Insulated Water Bottle", description: "A durable water bottle manufactured internationally with Canadian-sourced stainless steel.", madeInCanada: false, canadianMaterials: true, url: "https://truenorthbottles.com/products/insulated-water-bottle" },
      { id: 40, name: "Maple Crafted Cutting Board", description: "A cutting board produced overseas using premium Canadian maple wood.", madeInCanada: false, canadianMaterials: true, url: "https://www.maplecraft.com/products/cutting-board" },
      { id: 41, name: "Canadian Heritage Serving Bowl", description: "A serving bowl manufactured overseas with Canadian birch wood.", madeInCanada: false, canadianMaterials: true, url: "https://www.canadianheritagewood.com/products/serving-bowl" },
      { id: 42, name: "Maple Essence Salt & Pepper Shakers", description: "Elegant salt & pepper shakers produced overseas with Canadian maple accents.", madeInCanada: false, canadianMaterials: true, url: "https://www.mapleessence.com/products/salt-pepper-shakers" },
      { id: 43, name: "Northern Maple Coaster Set", description: "A set of coasters manufactured overseas using Canadian maple wood.", madeInCanada: false, canadianMaterials: true, url: "https://northernmaple.com/products/coaster-set" },
      { id: 44, name: "Maple Legacy Salad Bowl", description: "A salad bowl produced overseas with Canadian maple wood.", madeInCanada: false, canadianMaterials: true, url: "https://maplelegacy.com/products/salad-bowl" },
      { id: 45, name: "Maple Fusion Utensil Set", description: "A utensil set crafted internationally with elegant Canadian maple accents.", madeInCanada: false, canadianMaterials: true, url: "https://maplefusion.com/products/utensil-set" },
      { id: 46, name: "Maple Artisan Cookie Jar", description: "A charming cookie jar produced overseas with detailed Canadian maple design.", madeInCanada: false, canadianMaterials: true, url: "https://mapleartisan.com/products/cookie-jar" },
      { id: 47, name: "Maple Leaf Wine Rack", description: "A stylish wine rack manufactured overseas with Canadian maple accents.", madeInCanada: false, canadianMaterials: true, url: "https://mapleleafwinerack.com" },
      { id: 48, name: "Maple Edge Chopping Board", description: "A chopping board produced overseas using Canadian-sourced maple wood.", madeInCanada: false, canadianMaterials: true, url: "https://mapleedge.com/products/chopping-board" },
      { id: 49, name: "Maple Signature Knife Block", description: "A knife block crafted internationally with refined accents of Canadian maple.", madeInCanada: false, canadianMaterials: true, url: "https://maplesignature.com/products/knife-block" },
      { id: 50, name: "Maple Classic Serving Tray", description: "A serving tray produced overseas featuring elegant Canadian maple detailing.", madeInCanada: false, canadianMaterials: true, url: "https://mapleclassic.com/products/serving-tray" },
      { id: 51, name: "Maple Leaf Serving Platter", description: "A serving platter manufactured overseas using authentic Canadian maple.", madeInCanada: false, canadianMaterials: true, url: "https://mapleleafplatter.com/products/serving-platter" },
      { id: 52, name: "Maple Luxe Carafe", description: "A refined carafe produced overseas with Canadian-sourced materials.", madeInCanada: false, canadianMaterials: true, url: "https://mapleluxecarafe.com/products/carafe" },
      { id: 53, name: "Maple Spark Spice Rack", description: "A decorative spice rack manufactured overseas with subtle Canadian maple accents.", madeInCanada: false, canadianMaterials: true, url: "https://maplespark.com/products/spice-rack" },
      { id: 54, name: "Maple Artisan Salt Grinder", description: "A salt grinder produced overseas with refined Canadian-sourced materials.", madeInCanada: false, canadianMaterials: true, url: "https://mapleartisan.com/products/salt-grinder" },
      { id: 55, name: "Maple Valley Pepper Mill", description: "A pepper mill crafted internationally with elegant Canadian maple detailing.", madeInCanada: false, canadianMaterials: true, url: "https://maplevalley.com/products/pepper-mill" },
      { id: 56, name: "Maple Design Salad Tongs", description: "Salad tongs produced overseas with accents of Canadian maple.", madeInCanada: false, canadianMaterials: true, url: "https://mapledesign.com/products/salad-tongs" },
      { id: 57, name: "Maple Heart Pasta Bowl", description: "A pasta bowl manufactured overseas with tasteful Canadian maple elements.", madeInCanada: false, canadianMaterials: true, url: "https://mapleheart.com/products/pasta-bowl" },
      { id: 58, name: "Maple Prime Casserole Dish", description: "A casserole dish produced overseas with premium Canadian-sourced materials.", madeInCanada: false, canadianMaterials: true, url: "https://mapleprime.com/products/casserole-dish" },
      { id: 59, name: "Maple Crest Mixing Bowl", description: "A mixing bowl crafted internationally with refined Canadian maple details.", madeInCanada: false, canadianMaterials: true, url: "https://maplecrest.com/products/mixing-bowl" },
      { id: 60, name: "Maple Orchard Juice Pitcher", description: "A juice pitcher produced overseas with elegant Canadian maple accents.", madeInCanada: false, canadianMaterials: true, url: "https://mapleorchard.com/products/juice-pitcher" },
      { id: 61, name: "Maple Aura Butter Dish", description: "A butter dish crafted internationally with a touch of Canadian maple.", madeInCanada: false, canadianMaterials: true, url: "https://mapleaura.com/products/butter-dish" },
      { id: 62, name: "Maple Legacy Cheese Board", description: "A cheese board produced overseas with refined Canadian maple detailing.", madeInCanada: false, canadianMaterials: true, url: "https://maplelegacy.com/products/cheese-board" },
      { id: 63, name: "Maple Essence Mug Set", description: "A set of mugs manufactured overseas with elegant Canadian maple accents.", madeInCanada: false, canadianMaterials: true, url: "https://mapleessence.com/products/mug-set" },
      { id: 64, name: "Maple Heritage Coasters", description: "A set of coasters produced overseas featuring authentic Canadian maple.", madeInCanada: false, canadianMaterials: true, url: "https://mapleheritage.com/products/coasters" },
      { id: 65, name: "Maple Glow Teapot", description: "A teapot crafted internationally with accents of Canadian-sourced materials.", madeInCanada: false, canadianMaterials: true, url: "https://mapleglow.com/products/teapot" },
      { id: 66, name: "Maple Harvest Salad Fork", description: "A salad fork produced overseas with delicate Canadian maple detailing.", madeInCanada: false, canadianMaterials: true, url: "https://mapleharvest.com/products/salad-fork" },
      { id: 67, name: "Maple Dream Bread Basket", description: "A bread basket manufactured overseas with refined Canadian maple accents.", madeInCanada: false, canadianMaterials: true, url: "https://mapledream.com/products/bread-basket" },

      // --- Category C: (madeInCanada: true, canadianMaterials: true) ---
      { id: 68, name: "True Canadian Maple Syrup", description: "Authentic maple syrup produced in Canada using 100% Canadian maple sap.", madeInCanada: true, canadianMaterials: true, url: "https://canadianmaplesyrup.ca/products/true-maple-syrup" },
      { id: 69, name: "Canadian Heritage Lumber Chair", description: "A sturdy chair crafted in Canada from locally sourced Canadian lumber.", madeInCanada: true, canadianMaterials: true, url: "https://canadianheritagefurniture.com/products/lumber-chair" },
      { id: 70, name: "Maple Crafted Dining Table", description: "A beautifully designed dining table made in Canada with premium Canadian maple.", madeInCanada: true, canadianMaterials: true, url: "https://maplecraftedfurniture.ca/products/dining-table" },
      { id: 71, name: "Northern Maple Coffee Table", description: "A stylish coffee table made entirely in Canada from Canadian maple wood.", madeInCanada: true, canadianMaterials: true, url: "https://northernmaplefurniture.ca/products/coffee-table" },
      { id: 72, name: "Canadian Maple Wood Picture Frame", description: "A handcrafted picture frame made in Canada using authentic Canadian maple.", madeInCanada: true, canadianMaterials: true, url: "https://canadianmapleframes.ca/products/picture-frame" },
      { id: 73, name: "True North Wool Blanket", description: "A cozy wool blanket produced in Canada with locally sourced wool.", madeInCanada: true, canadianMaterials: true, url: "https://truenorthblankets.ca/products/wool-blanket" },
      { id: 74, name: "Maple Leaf Quilt", description: "A beautifully quilted blanket made in Canada featuring genuine Canadian maple motifs.", madeInCanada: true, canadianMaterials: true, url: "https://mapleleafquilts.ca/products/quilt" },
      { id: 75, name: "Maple Ridge Dining Chair", description: "A comfortable dining chair crafted in Canada with authentic Canadian maple accents.", madeInCanada: true, canadianMaterials: true, url: "https://mapleridgedesign.ca/products/dining-chair" },
      { id: 76, name: "Canadian Maple Bed Frame", description: "A robust bed frame made entirely in Canada from solid Canadian maple.", madeInCanada: true, canadianMaterials: true, url: "https://canadianmaplefurniture.ca/products/bed-frame" },
      { id: 77, name: "Maple Heritage Dresser", description: "A stylish dresser crafted in Canada using premium Canadian maple.", madeInCanada: true, canadianMaterials: true, url: "https://mapleheritagedresser.ca/products/dresser" },
      { id: 78, name: "True Maple Cabinet", description: "A finely crafted cabinet made in Canada with 100% Canadian maple.", madeInCanada: true, canadianMaterials: true, url: "https://truemaplecabinet.ca/products/cabinet" },
      { id: 79, name: "Canadian Maple Kitchen Island", description: "A functional kitchen island made in Canada using authentic Canadian maple wood.", madeInCanada: true, canadianMaterials: true, url: "https://canadianmaplekitchen.ca/products/kitchen-island" },
      { id: 80, name: "Maple Ridge Rocking Chair", description: "A classic rocking chair handcrafted in Canada from solid Canadian maple.", madeInCanada: true, canadianMaterials: true, url: "https://mapleridgedesign.ca/products/rocking-chair" },
      { id: 81, name: "True North Wool Rug", description: "A luxurious hand-woven rug made in Canada with 100% Canadian wool.", madeInCanada: true, canadianMaterials: true, url: "https://truenorthrugs.ca/products/wool-rug" },
      { id: 82, name: "Canadian Maple Desk", description: "A sturdy desk made in Canada from premium Canadian maple.", madeInCanada: true, canadianMaterials: true, url: "https://canadianmaplefurniture.ca/products/desk" },
      { id: 83, name: "Maple Heritage Bookcase", description: "A spacious bookcase crafted in Canada using authentic Canadian maple.", madeInCanada: true, canadianMaterials: true, url: "https://mapleheritagebookcase.ca/products/bookcase" },
      { id: 84, name: "True Maple Wardrobe", description: "A beautifully designed wardrobe made in Canada with 100% Canadian maple.", madeInCanada: true, canadianMaterials: true, url: "https://truemaplewardrobe.ca/products/wardrobe" },
      { id: 85, name: "Canadian Maple Coffee Cup", description: "A handcrafted coffee cup made in Canada using locally sourced materials.", madeInCanada: true, canadianMaterials: true, url: "https://canadianmaplecups.ca/products/coffee-cup" },
      { id: 86, name: "Maple Heritage Apron", description: "A durable apron made in Canada with fabrics and materials sourced from Canada.", madeInCanada: true, canadianMaterials: true, url: "https://mapleheritageaprons.ca/products/apron" },
      { id: 87, name: "Canadian Maple T-shirt", description: "A comfortable T-shirt produced in Canada using 100% Canadian materials.", madeInCanada: true, canadianMaterials: true, url: "https://canadianmapleclothing.ca/products/t-shirt" },
      { id: 88, name: "Maple Crafted Jeans", description: "Premium denim jeans made in Canada with authentic Canadian denim.", madeInCanada: true, canadianMaterials: true, url: "https://maplecrafteddenim.ca/products/jeans" },
      { id: 89, name: "True North Sweatshirt", description: "A cozy sweatshirt made in Canada with locally sourced Canadian fabrics.", madeInCanada: true, canadianMaterials: true, url: "https://truenorthclothing.ca/products/sweatshirt" },
      { id: 90, name: "Canadian Maple Scarf", description: "A warm scarf handcrafted in Canada using genuine Canadian fibers.", madeInCanada: true, canadianMaterials: true, url: "https://canadianmaplescarf.ca/products/scarf" },
      { id: 91, name: "Maple Leaf Beanie", description: "A classic beanie made in Canada from 100% Canadian materials.", madeInCanada: true, canadianMaterials: true, url: "https://mapleleafcaps.ca/products/beanie" },
      { id: 92, name: "True Maple Gloves", description: "Durable gloves made in Canada with authentic Canadian materials.", madeInCanada: true, canadianMaterials: true, url: "https://truemaplegloves.ca/products/gloves" },
      { id: 93, name: "Canadian Maple Socks", description: "Comfortable socks made in Canada with 100% Canadian fibers.", madeInCanada: true, canadianMaterials: true, url: "https://canadianmaplesocks.ca/products/socks" },
      { id: 94, name: "Maple Heritage Jacket", description: "A premium jacket made in Canada using authentic Canadian materials.", madeInCanada: true, canadianMaterials: true, url: "https://mapleheritagejacket.ca/products/jacket" },
      { id: 95, name: "True North Winter Coat", description: "A robust winter coat crafted in Canada with locally sourced materials.", madeInCanada: true, canadianMaterials: true, url: "https://truenorthcoats.ca/products/winter-coat" },
      { id: 96, name: "Canadian Maple Boots", description: "Durable boots made in Canada from genuine Canadian leather and materials.", madeInCanada: true, canadianMaterials: true, url: "https://canadianmapleboots.ca/products/boots" },
      { id: 97, name: "Maple Ridge Skirt", description: "A fashionable skirt made in Canada with premium Canadian fabrics.", madeInCanada: true, canadianMaterials: true, url: "https://mapleridgedesign.ca/products/skirt" },
      { id: 98, name: "True Maple Dress", description: "An elegant dress made in Canada using high-quality Canadian materials.", madeInCanada: true, canadianMaterials: true, url: "https://truemapledress.ca/products/dress" },
      { id: 99, name: "Canadian Maple Handbag", description: "A stylish handbag crafted in Canada from authentic Canadian leather.", madeInCanada: true, canadianMaterials: true, url: "https://canadianmaplehandbags.ca/products/handbag" },
      { id: 100, name: "Maple Heritage Backpack", description: "A versatile backpack made in Canada using 100% Canadian materials.", madeInCanada: true, canadianMaterials: true, url: "https://mapleheritagebackpack.ca/products/backpack" }
    ];
    
    function filterAndSortProducts() {
      const searchTerm = document.getElementById("searchInput").value.toLowerCase();
      const madeInCanadaChecked = document.getElementById("filterMadeInCanada").checked;
      const canadianMaterialsChecked = document.getElementById("filterCanadianMaterials").checked;
      
      let filtered = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm);
        let matchesFilters = true;
        if (madeInCanadaChecked && !product.madeInCanada) matchesFilters = false;
        if (canadianMaterialsChecked && !product.canadianMaterials) matchesFilters = false;
        return matchesSearch && matchesFilters;
      });
      
      const sortValue = document.getElementById("sortSelect").value;
      if (sortValue === "name-asc") {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortValue === "name-desc") {
        filtered.sort((a, b) => b.name.localeCompare(a.name));
      } else if (sortValue === "newest") {
        filtered.sort((a, b) => b.id - a.id);
      } else if (sortValue === "oldest") {
        filtered.sort((a, b) => a.id - b.id);
      }
      return filtered;
    }
    
    function renderProducts(pageProducts) {
      const grid = document.getElementById("productGrid");
      grid.innerHTML = "";
      if (pageProducts.length === 0) {
        grid.innerHTML = '<p class="text-gray-500 col-span-full text-center">No products found.</p>';
        return;
      }
      pageProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "bg-white shadow rounded overflow-hidden p-4 flex flex-col hover:shadow-lg transition-shadow";
        
        let tagHTML = "";
        if (product.madeInCanada && product.canadianMaterials) {
          tagHTML = `<span title="Made in Canada with Canadian materials" class="inline-block bg-red-100 text-red-700 border border-red-700 px-2 py-1 text-xs rounded">
                      Made in Canada &amp; Canadian Materials
                     </span>`;
        } else if (product.madeInCanada) {
          tagHTML = `<span title="Made in Canada" class="inline-block bg-white text-red-600 border border-red-600 px-2 py-1 text-xs rounded">
                      Made in Canada
                     </span>`;
        } else if (product.canadianMaterials) {
          tagHTML = `<span title="Uses Canadian-sourced materials" class="inline-block bg-red-50 text-red-600 border border-red-600 px-2 py-1 text-xs rounded">
                      Canadian Materials
                     </span>`;
        }
        
        card.innerHTML = `
          <h2 class="text-xl font-bold mb-2">${product.name}</h2>
          <div class="mb-2">${tagHTML}</div>
          <p class="text-gray-700 text-base mb-4">${product.description}</p>
          <a href="${product.url}" target="_blank" class="mt-auto inline-block bg-red-600 text-white text-center px-3 py-2 rounded hover:bg-red-700 transition-colors">
            View Product
          </a>
        `;
        grid.appendChild(card);
      });
    }
    
    function renderPagination(totalPages) {
      const paginationContainer = document.getElementById("pagination");
      paginationContainer.innerHTML = "";
      if (totalPages <= 1) return;
      
      if (currentPage > 1) {
        const prevButton = document.createElement("button");
        prevButton.textContent = "Previous";
        prevButton.className = "px-3 py-1 bg-gray-300 rounded hover:bg-gray-400";
        prevButton.addEventListener("click", () => {
          currentPage--;
          updateDisplay();
        });
        paginationContainer.appendChild(prevButton);
      }
      
      for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.className = "px-3 py-1 rounded border " + (i === currentPage ? "bg-red-600 text-white" : "bg-white text-gray-700 hover:bg-gray-200");
        pageButton.addEventListener("click", () => {
          currentPage = i;
          updateDisplay();
        });
        paginationContainer.appendChild(pageButton);
      }
      
      if (currentPage < totalPages) {
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.className = "px-3 py-1 bg-gray-300 rounded hover:bg-gray-400";
        nextButton.addEventListener("click", () => {
          currentPage++;
          updateDisplay();
        });
        paginationContainer.appendChild(nextButton);
      }
    }
    
    function updateDisplay() {
      const filteredSorted = filterAndSortProducts();
      const totalPages = Math.ceil(filteredSorted.length / itemsPerPage) || 1;
      if (currentPage > totalPages) currentPage = totalPages;
      const startIndex = (currentPage - 1) * itemsPerPage;
      const pageProducts = filteredSorted.slice(startIndex, startIndex + itemsPerPage);
      renderProducts(pageProducts);
      renderPagination(totalPages);
    }
    
    document.getElementById("searchInput").addEventListener("input", () => { currentPage = 1; updateDisplay(); });
    document.getElementById("filterMadeInCanada").addEventListener("change", () => { currentPage = 1; updateDisplay(); });
    document.getElementById("filterCanadianMaterials").addEventListener("change", () => { currentPage = 1; updateDisplay(); });
    document.getElementById("sortSelect").addEventListener("change", () => { currentPage = 1; updateDisplay(); });
    
    updateDisplay();