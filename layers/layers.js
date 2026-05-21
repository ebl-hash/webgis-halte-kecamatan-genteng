var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_kecamatan_genteng_ar_1 = new ol.format.GeoJSON();
var features_kecamatan_genteng_ar_1 = format_kecamatan_genteng_ar_1.readFeatures(json_kecamatan_genteng_ar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_genteng_ar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kecamatan_genteng_ar_1.addFeatures(features_kecamatan_genteng_ar_1);
var lyr_kecamatan_genteng_ar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kecamatan_genteng_ar_1, 
                style: style_kecamatan_genteng_ar_1,
                popuplayertitle: 'kecamatan_genteng_ar',
                interactive: true,
                title: '<img src="styles/legend/kecamatan_genteng_ar_1.png" /> kecamatan_genteng_ar'
            });
var format_jalan_clean_2 = new ol.format.GeoJSON();
var features_jalan_clean_2 = format_jalan_clean_2.readFeatures(json_jalan_clean_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_clean_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_clean_2.addFeatures(features_jalan_clean_2);
var lyr_jalan_clean_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_clean_2, 
                style: style_jalan_clean_2,
                popuplayertitle: 'jalan_clean',
                interactive: true,
                title: '<img src="styles/legend/jalan_clean_2.png" /> jalan_clean'
            });
var format_Intersection_3 = new ol.format.GeoJSON();
var features_Intersection_3 = format_Intersection_3.readFeatures(json_Intersection_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Intersection_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Intersection_3.addFeatures(features_Intersection_3);
var lyr_Intersection_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Intersection_3, 
                style: style_Intersection_3,
                popuplayertitle: 'Intersection',
                interactive: true,
                title: '<img src="styles/legend/Intersection_3.png" /> Intersection'
            });
var format_halte_pt_4 = new ol.format.GeoJSON();
var features_halte_pt_4 = format_halte_pt_4.readFeatures(json_halte_pt_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_halte_pt_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_halte_pt_4.addFeatures(features_halte_pt_4);
var lyr_halte_pt_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_halte_pt_4, 
                style: style_halte_pt_4,
                popuplayertitle: 'halte_pt',
                interactive: true,
                title: '<img src="styles/legend/halte_pt_4.png" /> halte_pt'
            });

lyr_Positron_0.setVisible(true);lyr_kecamatan_genteng_ar_1.setVisible(true);lyr_jalan_clean_2.setVisible(true);lyr_Intersection_3.setVisible(true);lyr_halte_pt_4.setVisible(true);
var layersList = [lyr_Positron_0,lyr_kecamatan_genteng_ar_1,lyr_jalan_clean_2,lyr_Intersection_3,lyr_halte_pt_4];
lyr_kecamatan_genteng_ar_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas Total': 'Luas Total', });
lyr_jalan_clean_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_Intersection_3.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', 'Luas Total': 'Luas Total', 'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'type': 'type', 'start': 'start', 'Luas Terj': 'Luas Terj', });
lyr_halte_pt_4.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', });
lyr_kecamatan_genteng_ar_1.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Luas Total': '', });
lyr_jalan_clean_2.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'width': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'railway': 'TextEdit', 'layer': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'smoothness': 'TextEdit', });
lyr_Intersection_3.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', 'Luas Total': 'TextEdit', 'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', 'Luas Terj': 'TextEdit', });
lyr_halte_pt_4.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', });
lyr_kecamatan_genteng_ar_1.set('fieldLabels', {'full_id': 'hidden field', 'Kecamatan': 'hidden field', 'Kelurahan': 'hidden field', 'Luas Total': 'hidden field', });
lyr_jalan_clean_2.set('fieldLabels', {'fid': 'hidden field', 'osm_id': 'hidden field', 'bridge': 'hidden field', 'tunnel': 'hidden field', 'width': 'hidden field', 'highway': 'hidden field', 'surface': 'hidden field', 'railway': 'hidden field', 'layer': 'hidden field', 'oneway': 'hidden field', 'name': 'hidden field', 'smoothness': 'hidden field', });
lyr_Intersection_3.set('fieldLabels', {'full_id': 'hidden field', 'Kecamatan': 'hidden field', 'Kelurahan': 'hidden field', 'Luas Total': 'hidden field', 'Nama_Halte': 'inline label - visible with data', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'Luas Terj': 'hidden field', });
lyr_halte_pt_4.set('fieldLabels', {'Nama_Halte': 'inline label - visible with data', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', });
lyr_halte_pt_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});