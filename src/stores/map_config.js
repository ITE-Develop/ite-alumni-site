import useMapBoxZone from '@/composables/useMapBoxZone';
import { defineStore } from 'pinia';
import { reactive } from 'vue';

// export action name
export const useMapConfigStore = defineStore('map_config', () => {
  const { addZone, setZonesDisplay, clearZones } = useMapBoxZone();

  const marker_symbol = {
    water_level: {
      normal: 'sb-icon-water-level--normal',
      danger: 'sb-icon-water-level--danger',
      none: 'sb-icon-water-level--none',
    },
    dense_area: {
      normal: 'sb-icon-dense-level--usual',
      more_crowded: 'sb-icon-dense-level--more_crowded',
      vacant: 'sb-icon-dense-level--vacant',
      none: 'sb-icon-dense-levels--none',
      status: {
        normal: 'sb-icon-dense-level--usual--status',
        more_crowded: 'sb-icon-dense-level--more_crowded--status',
        vacant: 'sb-icon-dense-level--vacant--status',
        none: 'sb-icon-dense-levels--none--status',
      }
    },
    evacuation: {
      site: 'sb-icon-evacuation--site',
      refuge: 'sb-icon-evacuation--refuge',
      facility: 'sb-icon-evacuation--facility',
      tsunami: 'sb-icon-evacuation--tsunami',
    }
  }

  const water_level_marker = {

    [marker_symbol.water_level.normal]: new URL("@/assets/images/x3/water_level/water_level_normal.png", import.meta.url).href,
    [`${marker_symbol.water_level.normal}-focus`]: new URL("@/assets/images/x3/water_level/water_level_normal_focus.png", import.meta.url).href,

    [marker_symbol.water_level.danger]: new URL("@/assets/images/x3/water_level/water_level_danger.png", import.meta.url).href,
    [`${marker_symbol.water_level.danger}-focus`]: new URL("@/assets/images/x3/water_level/water_level_danger_focus.png", import.meta.url).href,

    [marker_symbol.water_level.none]: new URL("@/assets/images/x3/water_level/water_level_none.png", import.meta.url).href,
    [`${marker_symbol.water_level.none}-focus`]: new URL("@/assets/images/x3/water_level/water_level_none_focus.png", import.meta.url).href,
  }

  const dense_level_marker = {
    [marker_symbol.dense_area.vacant]: new URL("@/assets/images/x3/dense_level/dense_level_vacant_1.png", import.meta.url).href,
    [`${marker_symbol.dense_area.vacant}-focus`]: new URL("@/assets/images/x3/dense_level/dense_level_vacant_1.png", import.meta.url).href,
    [marker_symbol.dense_area.normal]: new URL("@/assets/images/x3/dense_level/dense_level_normal_1.png", import.meta.url).href,
    [`${marker_symbol.dense_area.normal}-focus`]: new URL("@/assets/images/x3/dense_level/dense_level_normal_1.png", import.meta.url).href,
    [marker_symbol.dense_area.more_crowded]: new URL("@/assets/images/x3/dense_level/dense_level_crowded_1.png", import.meta.url).href,
    [`${marker_symbol.dense_area.more_crowded}-focus`]: new URL("@/assets/images/x3/dense_level/dense_level_crowded_1.png", import.meta.url).href,
  }

  const dense_level_marker_animation = {
    [`${marker_symbol.dense_area.vacant}-1`]: new URL("@/assets/images/x3/dense_level/dense_level_vacant_1.png", import.meta.url).href,
    [`${marker_symbol.dense_area.vacant}-2`]: new URL("@/assets/images/x3/dense_level/dense_level_vacant_2.png", import.meta.url).href,
    [`${marker_symbol.dense_area.vacant}-3`]: new URL("@/assets/images/x3/dense_level/dense_level_vacant_3.png", import.meta.url).href,
    [`${marker_symbol.dense_area.vacant}-4`]: new URL("@/assets/images/x3/dense_level/dense_level_vacant_4.png", import.meta.url).href,

    [`${marker_symbol.dense_area.normal}-1`]: new URL("@/assets/images/x3/dense_level/dense_level_normal_1.png", import.meta.url).href,
    [`${marker_symbol.dense_area.normal}-2`]: new URL("@/assets/images/x3/dense_level/dense_level_normal_2.png", import.meta.url).href,
    [`${marker_symbol.dense_area.normal}-3`]: new URL("@/assets/images/x3/dense_level/dense_level_normal_3.png", import.meta.url).href,
    [`${marker_symbol.dense_area.normal}-4`]: new URL("@/assets/images/x3/dense_level/dense_level_normal_4.png", import.meta.url).href,

    [`${marker_symbol.dense_area.more_crowded}-1`]: new URL("@/assets/images/x3/dense_level/dense_level_crowded_1.png", import.meta.url).href,
    [`${marker_symbol.dense_area.more_crowded}-2`]: new URL("@/assets/images/x3/dense_level/dense_level_crowded_2.png", import.meta.url).href,
    [`${marker_symbol.dense_area.more_crowded}-3`]: new URL("@/assets/images/x3/dense_level/dense_level_crowded_3.png", import.meta.url).href,
    [`${marker_symbol.dense_area.more_crowded}-4`]: new URL("@/assets/images/x3/dense_level/dense_level_crowded_4.png", import.meta.url).href,
  }

  const evacuation_level_marker = {
    [marker_symbol.evacuation.site]: new URL("@/assets/images/x3/evacuation/site.png", import.meta.url).href,
    [`${marker_symbol.evacuation.site}-focus`]: new URL("@/assets/images/x3/evacuation/site_focus.png", import.meta.url).href,
    [marker_symbol.evacuation.refuge]: new URL("@/assets/images/x3/evacuation/refuge.png", import.meta.url).href,
    [`${marker_symbol.evacuation.refuge}-focus`]: new URL("@/assets/images/x3/evacuation/refuge_focus.png", import.meta.url).href,
    [marker_symbol.evacuation.facility]: new URL("@/assets/images/x3/evacuation/facility.png", import.meta.url).href,
    [`${marker_symbol.evacuation.facility}-focus`]: new URL("@/assets/images/x3/evacuation/facility_focus.png", import.meta.url).href,
    [marker_symbol.evacuation.tsunami]: new URL("@/assets/images/x3/evacuation/tsunami.png", import.meta.url).href,
    [`${marker_symbol.evacuation.tsunami}-focus`]: new URL("@/assets/images/x3/evacuation/tsunami_focus.png", import.meta.url).href,
  }

  const COLOR = {
    LIQUEFACTION: {
      HIGH_POSIBILITY: "#F39B99",
      LOW_POSIBILITY: "#FEEE96"
    },
    TSUNAMI: {
      LEVEL_4: "#6FACDD",
      LEVEL_3: "#99D1C6",
      LEVEL_2: "#ABD38A",
      LEVEL_1: "#FEEE96"
    }
  }

  const floodData = reactive({
    title: '洪水浸水想定リスク',
    water_level: 'sb-icon-flood-level',
    water_level_status: 'sb-icon-flood-level-status',
    tiles: ['https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_data/{z}/{x}/{y}.png'],
    source_text: '「ハザードマップポータルサイト」',
  });

  const stormData = reactive({
    title: "高潮浸水想定リスク",
    water_level: "sb-icon-storm-level",
    water_level_status: "sb-icon-storm-level-status",
    tiles: ['https://disaportaldata.gsi.go.jp/raster/03_hightide_l2_shinsuishin_data/{z}/{x}/{y}.png'],
    source_text: '「ハザードマップポータルサイト」',
  });

  const tsunamiData = reactive({
    zones: [
      {
        slug: "tsunami_high_1",
        color: COLOR.TSUNAMI.LEVEL_3,
        opacity: 0.55,
        coordinate: [
          [139.75648240076816, 35.653549509069926],
          [139.7569383762728, 35.65356258574432],
          [139.75738873342655, 35.65292163753834],
          [139.7565789602717, 35.652390035396245],
          [139.75610152710377, 35.652974133259136],
          [139.75648240076816, 35.653549509069926]
        ]
      },
      {
        slug: "tsunami_high_2",
        color: COLOR.TSUNAMI.LEVEL_3,
        opacity: 0.55,
        coordinate: [
          [139.76352562746038, 35.65635639746589],
          [139.7645770533299, 35.65572001908963],
          [139.76252784558147, 35.65184061657151],
          [139.7612833006747, 35.65243343634264],
          [139.7603498919946, 35.65259035848676],
          [139.76027479014678, 35.65290420185014],
          [139.76233472654422, 35.65223292426539],
          [139.762967727833, 35.65337496458303],
          [139.7641157134076, 35.65567643134408],
          [139.7635363562958, 35.65605128517856],
          [139.76352562746038, 35.65635639746589]
        ],
      },
      {
        slug: "tsunami_low_1",
        color: COLOR.TSUNAMI.LEVEL_2,
        opacity: 0.55,
        coordinate: [
          [139.75918070303229, 35.65915920586736],
          [139.75973860247325, 35.65909818564477],
          [139.76039306143286, 35.65759009961371],
          [139.7598888061689, 35.657624968976535],
          [139.75918070303229, 35.65915920586736]
        ]
      },
      {
        slug: "tsunami_low_2",
        color: COLOR.TSUNAMI.LEVEL_2,
        opacity: 0.55,
        type: "MultiPolygon",
        coordinate: [
          [
            [139.7602214000664, 35.656918861412166],
            [139.7603928074458, 35.6560600027085],
            [139.76106872407624, 35.655693866465015],
            [139.76262440528652, 35.6568271398512],
            [139.76352562746038, 35.65635639746589],
            [139.7635363562958, 35.65605128517856],
            [139.7641157134076, 35.65567643134408],
            [139.762967727833, 35.65337496458303],
            [139.76233472654422, 35.65223292426539],
            [139.76027479014678, 35.65290420185014],
            [139.7576469118469, 35.65253519042899],
            [139.75739173569895, 35.65191832881847],
            [139.75648776517076, 35.65190183092185],
            [139.7565789602717, 35.652390035396245],
            [139.75738873342655, 35.65292163753834],
            [139.7569383762728, 35.65356258574432],
            [139.75729242784112, 35.65438205306898],
            [139.75632683265482, 35.65451281835354],
            [139.7565950535399, 35.654817936518306],
            [139.7577108524724, 35.65493126585995],
            [139.7583438537612, 35.6556635436605],
            [139.75814000588852, 35.656265052545365],
            [139.7570671223482, 35.656413249691006],
            [139.7570993088544, 35.6566660559518],
            [139.75817219239474, 35.65645683703444],
            [139.75947038158816, 35.656221465097104]
          ],
          [
            [139.75817219239474, 35.65645683703444],
            [139.75947038158816, 35.656221465097104],
            [139.75908388944788, 35.6555631031084],
            [139.75991000977393, 35.65581591206028],
            [139.75994219628015, 35.65365393380425],
            [139.75954522937022, 35.65304368741572],
            [139.757560394793, 35.653095994391535],
            [139.75767841198243, 35.65361034489095],
            [139.7569383762728, 35.65356258574432],
            [139.75729242784112, 35.65438205306898],
            [139.75632683265482, 35.65451281835354],
            [139.7565950535399, 35.654817936518306],
            [139.7577108524724, 35.65493126585995],
            [139.7583438537612, 35.6556635436605],
            [139.75814000588852, 35.656265052545365],
            [139.75817219239474, 35.65645683703444]
          ],
          [
            [139.7635363562958, 35.65605128517856],
            [139.7641157134076, 35.65567643134408],
            [139.762967727833, 35.65337496458303],
            [139.7619806751623, 35.6537498292273],
            [139.76266732062814, 35.65524055258003],
            [139.7635363562958, 35.65605128517856]
          ]
        ]
      },
      {
        slug: "tsunami_lowest_1",
        color: COLOR.TSUNAMI.LEVEL_1,
        opacity: 0.55,
        coordinate: [
          [139.76037134977503, 35.655833347136664],
          [139.76170172536501, 35.65507491804582],
          [139.76109018174702, 35.65429032864874],
          [139.7603820786104, 35.65467390665027],
          [139.76037134977503, 35.655833347136664],
        ]
      },
      {
        slug: "tsunami_lowest_2",
        color: COLOR.TSUNAMI.LEVEL_1,
        opacity: 0.55,
        coordinate: [
          [139.7635363562958, 35.65605128517856],
          [139.7641157134076, 35.65567643134408],
          [139.762967727833, 35.65337496458303],
          [139.7619806751623, 35.6537498292273],
          [139.76266732062814, 35.65524055258003],
          [139.7635363562958, 35.65605128517856]
        ]
      },
      {
        slug: "tsunami_lowest_3",
        color: COLOR.TSUNAMI.LEVEL_1,
        opacity: 0.55,
        coordinate: [
          [139.75817219239474, 35.65645683703444],
          [139.75947038158816, 35.656221465097104],
          [139.75908388944788, 35.6555631031084],
          [139.75991000977393, 35.65581591206028],
          [139.75994219628015, 35.65365393380425],
          [139.75954522937022, 35.65304368741572],
          [139.757560394793, 35.653095994391535],
          [139.75767841198243, 35.65361034489095],
          [139.7569383762728, 35.65356258574432],
          [139.75729242784112, 35.65438205306898],
          [139.75632683265482, 35.65451281835354],
          [139.7565950535399, 35.654817936518306],
          [139.7577108524724, 35.65493126585995],
          [139.7583438537612, 35.6556635436605],
          [139.75814000588852, 35.656265052545365],
          [139.75817219239474, 35.65645683703444]
        ]
      },
    ]
  });

  const liquefactionData = reactive({
    zones: [
      {
        slug: "liquefaction_low",
        color: COLOR.LIQUEFACTION.LOW_POSIBILITY,
        opacity: 0.55,
        type: 'MultiPolygon',
        coordinate: [
          [
            [139.7637616, 35.6542639],
            [139.763173, 35.654238],
            [139.763173, 35.653741],
            [139.761982, 35.653741],
            [139.762014, 35.654508],
            [139.761338, 35.654526],
            [139.76136, 35.656226],
            [139.759364, 35.656217],
            [139.759343, 35.656557],
            [139.758109, 35.656566],
            [139.75812, 35.657603],
            [139.759858, 35.657594],
            [139.759879, 35.657987],
            [139.761263, 35.657987],
            [139.758109, 35.659704],
            [139.756328, 35.652852],
            [139.759107, 35.652643],
            [139.759783, 35.652869],
            [139.762476, 35.651867],
            [139.7637616, 35.6542639],
          ],
          [
            [139.75810906425855, 35.65656567446822],
            [139.7581197930935, 35.657603044807686],
            [139.75985786435726, 35.657594327466015],
            [139.7598793220272, 35.657986606899065],
            [139.76126334173722, 35.657986606899065],
            [139.76377388911823, 35.65667900129537],
            [139.76376316028328, 35.65426423333978],
            [139.76317307436037, 35.65423808021859],
            [139.76317307436037, 35.65374116928895],
            [139.76198217367963, 35.65374116928895],
            [139.7620143601845, 35.65450832872454],
            [139.76133844358193, 35.65452576408063],
            [139.7613599012519, 35.65622569302185],
            [139.75936433794902, 35.65621697552986],
            [139.75934288027912, 35.65655695701332],
            [139.75810906425855, 35.65656567446822],
          ],
          [
            [139.75801250475598, 35.655894427665956],
            [139.75879570970815, 35.655894427665956],
            [139.75879570970815, 35.655458550091666],
            [139.75801250475598, 35.655458550091666],
            [139.75801250475598, 35.655894427665956],
          ],
          [
            [139.75733658815338, 35.655458550091666],
            [139.75801250475598, 35.655458550091666],
            [139.75801250475598, 35.65499654737441],
            [139.75733658815338, 35.65499654737441],
            [139.75733658815338, 35.655458550091666],
          ],
          [
            [139.75801250475598, 35.65459550547647],
            [139.75879570970815, 35.65459550547647],
            [139.75879570970815, 35.65416833852981],
            [139.75801250475598, 35.65416833852981],
            [139.75801250475598, 35.65459550547647],
          ]
        ]
      },
      {
        slug: "liquefaction_low_2",
        color: COLOR.LIQUEFACTION.LOW_POSIBILITY,
        opacity: 0.55,
        type: 'Polygon',
        coordinate: [
          [139.76377388911823, 35.65667900129537],
          [139.76469656893698, 35.656007755445636],
          [139.76376316028328, 35.65426423333978],
          [139.76377388911823, 35.65667900129537],
        ]
      },
      {
        slug: "liquefaction_high_1",
        color: COLOR.LIQUEFACTION.HIGH_POSIBILITY,
        opacity: 0.55,
        coordinate: [
          [139.75810906425855, 35.65656567446822],
          [139.7581197930935, 35.657603044807686],
          [139.75985786435726, 35.657594327466015],
          [139.7598793220272, 35.657986606899065],
          [139.76126334173722, 35.657986606899065],
          [139.76377388911823, 35.65667900129537],
          [139.76376316028328, 35.65426423333978],
          [139.76317307436037, 35.65423808021859],
          [139.76317307436037, 35.65374116928895],
          [139.76198217367963, 35.65374116928895],
          [139.7620143601845, 35.65450832872454],
          [139.76133844358193, 35.65452576408063],
          [139.7613599012519, 35.65622569302185],
          [139.75936433794902, 35.65621697552986],
          [139.75934288027912, 35.65655695701332],
          [139.75810906425855, 35.65656567446822],
        ]
      },
      {
        slug: "liquefaction_high_2",
        color: COLOR.LIQUEFACTION.HIGH_POSIBILITY,
        opacity: 0.55,
        coordinate: [
          [139.75801250475598, 35.655894427665956],
          [139.75879570970815, 35.655894427665956],
          [139.75879570970815, 35.655458550091666],
          [139.75801250475598, 35.655458550091666],
          [139.75801250475598, 35.655894427665956],
        ]
      },
      {
        slug: "liquefaction_high_3",
        color: COLOR.LIQUEFACTION.HIGH_POSIBILITY,
        opacity: 0.55,
        coordinate: [
          [139.75733658815338, 35.655458550091666],
          [139.75801250475598, 35.655458550091666],
          [139.75801250475598, 35.65499654737441],
          [139.75733658815338, 35.65499654737441],
          [139.75733658815338, 35.655458550091666],
        ]
      },
      {
        slug: "liquefaction_high_4",
        color: COLOR.LIQUEFACTION.HIGH_POSIBILITY,
        opacity: 0.55,
        coordinate: [
          [139.75801250475598, 35.65459550547647],
          [139.75879570970815, 35.65459550547647],
          [139.75879570970815, 35.65416833852981],
          [139.75801250475598, 35.65416833852981],
          [139.75801250475598, 35.65459550547647],
        ]
      },
    ],
  });

  const clearDisasterSource = (mapRef) => {
    const existedSource = mapRef.value.getSource('disaster-source');
    if (!existedSource) {
      return;
    }
    mapRef.value.removeLayer("disaster-layer");
    mapRef.value.removeSource("disaster-source");
  }

  /**
   * sortTileLayer
   * @description Sort tile layer to bottom
   * 
   * @param {Proxy} mapRef
   */
  const sortTileLayer = (mapRef) => {
    const style = mapRef.value.getStyle();
    const disasterLayer = style.layers.find(layer => layer.id === "disaster-layer");
    if (!disasterLayer) {
      return;
    }
    const layersWithPrefix = style.layers.filter(layer => {
      return layer.id.startsWith("marker-");
    });

    if (!layersWithPrefix.length) {
      return;
    }
    mapRef.value.moveLayer(disasterLayer.id, layersWithPrefix[0].id);
  }

  /**
   * sortTileLayer
   * @description Sort tile layer to bottom
   * 
   * @param {Proxy} mapRef
   */
  const sortZoneLayer = (mapRef) => {
    const style = mapRef.value.getStyle();
    const zoneLayers = style.layers.filter(layer => layer.id.startsWith("zone-"));
    if (!zoneLayers.length) {
      return;
    }
    const layersWithPrefix = style.layers.filter(layer => {
      return layer.id.startsWith("marker-");
    });

    if (!layersWithPrefix.length) {
      return;
    }
    zoneLayers.forEach((zone) => {
      if (!zone) {
        return;
      }
      mapRef.value.moveLayer(zone.id, layersWithPrefix[0].id);
    })
  }

  const sortLineLayer = (mapRef) => {
    const style = mapRef.value.getStyle();
    const lineLayers = style.layers.filter(layer => layer.id.startsWith("route-"));
    if (!lineLayers.length) {
      return;
    }

    const layersWithPrefix = style.layers.filter(layer => {
      return layer.id.startsWith("marker-");
    });

    if (!layersWithPrefix.length) {
      return;
    }

    lineLayers.forEach((line) => {
      if (!line) {
        return;
      }
      mapRef.value.moveLayer(line.id, layersWithPrefix[0].id);
    })
  };

  const sortLayer = (mapRef) => {
    sortTileLayer(mapRef);
    sortZoneLayer(mapRef);
    sortLineLayer(mapRef);
  }

  const clearDisasterZone = (mapRef) => {
    clearZones();
  }

  const clearDisasterMapData = (mapRef) => {
    clearDisasterSource(mapRef);
    clearDisasterZone(mapRef);
  }

  const renderZone = (mapRef, config) => {
    clearDisasterMapData(mapRef);
    config.zones.forEach(zone => {
      addZone(zone.slug, zone.coordinate, zone.color, zone.opacity, zone.type);
    })
    setZonesDisplay();
  }

  const renderMapData = (mapRef, config) => {
    setZonesDisplay(false);
    if (config.zones) {
      renderZone(mapRef, config);
      sortLayer(mapRef);
      return;
    }
    const tiles = config.tiles;
    const existedSource = mapRef.value.getSource('disaster-source');
    if (existedSource) {
      existedSource.tiles = tiles;
      mapRef.value.style._sourceCaches['other:disaster-source'].clearTiles();
      mapRef.value.style._sourceCaches['other:disaster-source'].update(mapRef.value.transform)
      mapRef.value.triggerRepaint();
      // sortLayer(mapRef);
      return;
    }

    mapRef.value.addSource('disaster-source', {
      type: 'raster',
      tiles,
      tileSize: 256
    });

    mapRef.value.addLayer({
      id: 'disaster-layer',
      type: 'raster',
      source: 'disaster-source',
      layout: {},
      paint: {
        'raster-opacity': 0.7  // Set opacity to 40%
      }
    });

    sortLayer(mapRef);
  }

  return {
    mapData: {
      tsunami: tsunamiData,
      storm: stormData,
      flood: floodData,
      liquefaction: liquefactionData
    },
    marker_symbol,
    water_level_marker,
    dense_level_marker,
    dense_level_marker_animation,
    evacuation_level_marker,
    sortLineLayer,
    sortLayer,
    renderMapData,
    clearDisasterMapData
  }
});
