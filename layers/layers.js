var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_journey_route_1 = new ol.format.GeoJSON();
var features_journey_route_1 = format_journey_route_1.readFeatures(json_journey_route_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_journey_route_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_journey_route_1.addFeatures(features_journey_route_1);
var lyr_journey_route_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_journey_route_1, 
                style: style_journey_route_1,
                popuplayertitle: 'journey_route',
                interactive: true,
                title: '<img src="styles/legend/journey_route_1.png" /> journey_route'
            });
var format_pauls_first_journeyjourney_stops_2 = new ol.format.GeoJSON();
var features_pauls_first_journeyjourney_stops_2 = format_pauls_first_journeyjourney_stops_2.readFeatures(json_pauls_first_journeyjourney_stops_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pauls_first_journeyjourney_stops_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pauls_first_journeyjourney_stops_2.addFeatures(features_pauls_first_journeyjourney_stops_2);
var lyr_pauls_first_journeyjourney_stops_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pauls_first_journeyjourney_stops_2, 
                style: style_pauls_first_journeyjourney_stops_2,
                popuplayertitle: 'pauls_first_journey — journey_stops',
                interactive: true,
                title: '<img src="styles/legend/pauls_first_journeyjourney_stops_2.png" /> pauls_first_journey — journey_stops'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_journey_route_1.setVisible(true);lyr_pauls_first_journeyjourney_stops_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_journey_route_1,lyr_pauls_first_journeyjourney_stops_2];
lyr_journey_route_1.set('fieldAliases', {'fid': 'fid', 'route_name': 'route_name', });
lyr_pauls_first_journeyjourney_stops_2.set('fieldAliases', {'fid': 'fid', 'stop_id': 'stop_id', 'location_name': 'Location', 'modern_name': 'modern locatfion', 'country': 'Region', 'latitude': 'latitude', 'longitude': 'longitude', 'route_order': 'route_order', 'passage': 'passage', 'key_verse': 'key verse', 'event': 'What happened', 'reflection': 'reflection', 'image_file': 'image', 'social_caption': 'caption', 'data_confidence': 'how sure?', });
lyr_journey_route_1.set('fieldImages', {'fid': 'TextEdit', 'route_name': 'TextEdit', });
lyr_pauls_first_journeyjourney_stops_2.set('fieldImages', {'fid': 'Hidden', 'stop_id': 'Hidden', 'location_name': 'TextEdit', 'modern_name': 'TextEdit', 'country': 'TextEdit', 'latitude': 'Hidden', 'longitude': 'Hidden', 'route_order': 'Hidden', 'passage': 'TextEdit', 'key_verse': 'TextEdit', 'event': 'TextEdit', 'reflection': 'TextEdit', 'image_file': 'Hidden', 'social_caption': 'TextEdit', 'data_confidence': 'TextEdit', });
lyr_journey_route_1.set('fieldLabels', {'fid': 'no label', 'route_name': 'no label', });
lyr_pauls_first_journeyjourney_stops_2.set('fieldLabels', {'location_name': 'no label', 'modern_name': 'no label', 'country': 'no label', 'passage': 'no label', 'key_verse': 'no label', 'event': 'no label', 'reflection': 'no label', 'social_caption': 'no label', 'data_confidence': 'no label', });
lyr_pauls_first_journeyjourney_stops_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});