var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_MUNDO_0 = new ol.format.GeoJSON();
var features_MUNDO_0 = format_MUNDO_0.readFeatures(json_MUNDO_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNDO_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_MUNDO_0.addFeatures(features_MUNDO_0);var lyr_MUNDO_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MUNDO_0, 
                style: style_MUNDO_0,
                title: '<img src="styles/legend/MUNDO_0.png" /> MUNDO'
            });var format_PaisesDestinoCantidadExportadaKg_1 = new ol.format.GeoJSON();
var features_PaisesDestinoCantidadExportadaKg_1 = format_PaisesDestinoCantidadExportadaKg_1.readFeatures(json_PaisesDestinoCantidadExportadaKg_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PaisesDestinoCantidadExportadaKg_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PaisesDestinoCantidadExportadaKg_1.addFeatures(features_PaisesDestinoCantidadExportadaKg_1);var lyr_PaisesDestinoCantidadExportadaKg_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PaisesDestinoCantidadExportadaKg_1, 
                style: style_PaisesDestinoCantidadExportadaKg_1,
    title: 'Paises Destino- Cantidad Exportada (Kg)<br />\
    <img src="styles/legend/PaisesDestinoCantidadExportadaKg_1_0.png" />  0 - 15000 <br />\
    <img src="styles/legend/PaisesDestinoCantidadExportadaKg_1_1.png" />  15000 - 81010 <br />\
    <img src="styles/legend/PaisesDestinoCantidadExportadaKg_1_2.png" />  81010 - 188490 <br />\
    <img src="styles/legend/PaisesDestinoCantidadExportadaKg_1_3.png" />  188490 - 2085420 <br />\
    <img src="styles/legend/PaisesDestinoCantidadExportadaKg_1_4.png" />  2085420 - 3026940 <br />'
        });

lyr_MUNDO_0.setVisible(false);lyr_PaisesDestinoCantidadExportadaKg_1.setVisible(true);
var layersList = [baseLayer,lyr_MUNDO_0,lyr_PaisesDestinoCantidadExportadaKg_1];
lyr_MUNDO_0.set('fieldAliases', {'PAIS': 'PAIS', });
lyr_PaisesDestinoCantidadExportadaKg_1.set('fieldAliases', {'Pais.Desti': 'Pais.Desti', 'Cant.(Kg)': 'Cant.(Kg)', });
lyr_MUNDO_0.set('fieldImages', {'PAIS': 'TextEdit', });
lyr_PaisesDestinoCantidadExportadaKg_1.set('fieldImages', {'Pais.Desti': 'TextEdit', 'Cant.(Kg)': 'TextEdit', });
lyr_MUNDO_0.set('fieldLabels', {'PAIS': 'inline label', });
lyr_PaisesDestinoCantidadExportadaKg_1.set('fieldLabels', {'Pais.Desti': 'inline label', 'Cant.(Kg)': 'inline label', });
lyr_PaisesDestinoCantidadExportadaKg_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});