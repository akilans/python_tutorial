$(function () {
    if (document.getElementById('galler') != null)
        $(".gallery a[rel^='prettyPhoto']").prettyPhoto();
    var currSiteUrl = $('#currentSiteUrl').val();   
    if (document.getElementById('inner-page-slider') != null) {
        $('#inner-page-slider').after('<div id="inner-page-slider-pager">').cycle({
            fx: 'scrollHorz',
            speed: 400,
            pause: 1,
            timeout: 4500,
            next: '#inner-page-slider-next',
            prev: '#inner-page-slider-prev',
            pager: '#inner-page-slider-pager',
            pagerAnchorBuilder: function (idx, slide) { return '<a href="#">&nbsp;</a>'; }
        });
    }
});
function vplayercall(istreamfile, preimage, wid, hei, contid, startmode) {    
    jwplayer(contid).setup({
        'autostart': startmode,
        'flashplayer': '/richmedia/players/vplayer.swf',
        'playlistfile': '/Videos/vplayer/' + istreamfile + '.xml',
        'backcolor': '000000',
        'frontcolor': 'EEEEEE',
        'lightcolor': '66FFFF',
        'width': '100%',
        'height': hei - 10,
        'logo.file': '/SiteCollectionImages/infosys-logo.png',
        'logo.position': 'top-left',
        'author': 'Infosys Limited',
        'abouttext': 'Infosys Limited',
        'aboutlink': 'http://www.infosys.com',
        'skin': '/richmedia/players/vskin/infosys.zip',
        'controlbar.position': 'over',
        'plugins': { '/richmedia/players/viral-2h.swf': { onpause: 'false', oncomplete: 'false', allowmenu: 'false', functions: 'embed'} }
    });
}
function vplayercallFill(istreamfile, preimage, wid, hei, contid, startmode) {    
    jwplayer(contid).setup({
        'autostart': startmode,
        'flashplayer': '/richmedia/players/vplayer.swf',
        'playlistfile': '/Videos/vplayer/' + istreamfile + '.xml',
        'backcolor': '000000',
        'frontcolor': 'EEEEEE',
        'lightcolor': '66FFFF',
        'width': '100%',
        'height': hei - 10,
        'logo.file': '/SiteCollectionImages/infosys-logo.png',
        'logo.position': 'top-left',
        'author': 'Infosys Limited',
        'abouttext': 'Infosys Limited',
        'aboutlink': 'http://www.infosys.com',
        'skin': '/richmedia/players/vskin/infosys.zip',
        'stretching': 'fill',
        'controlbar.position': 'over',
        'plugins': { '/richmedia/players/viral-2h.swf': { onpause: 'false', oncomplete: 'false', allowmenu: 'false', functions: 'embed'} }
    });
}
function vplayercallhei(istreamfile, preimage, wid, hei, contid, startmode) {    
    jwplayer(contid).setup({
        'autostart': startmode,
        'flashplayer': '/richmedia/players/vplayer.swf',
        'playlistfile': '/Videos/vplayer/' + istreamfile + '.xml',
        'backcolor': '000000',
        'frontcolor': 'EEEEEE',
        'lightcolor': '66FFFF',
        'width': '100%',
        'logo.file': '/SiteCollectionImages/infosys-logo.png',
        'logo.position': 'top-left',
        'author': 'Infosys Limited',
        'abouttext': 'Infosys Limited',
        'aboutlink': 'http://www.infosys.com',
        'skin': '/richmedia/players/vskin/infosys.zip',
        'stretching': 'fill',
        'controlbar.position': 'over',
        'plugins': { '/richmedia/players/viral-2h.swf': { onpause: 'false', oncomplete: 'false', allowmenu: 'false', functions: 'embed'} }
    });
}
function vplayercAudio(istreamfile, preimage, wid, hei, contid, startmode) {
    jwplayer(contid).setup({
        'autostart': startmode,
        'flashplayer': '/richmedia/players/vplayer.swf',
        'playlistfile': '/Audio/vplayer/' + istreamfile + '.xml',
        'backcolor': '000000',
        'frontcolor': 'EEEEEE',
        'lightcolor': '66FFFF',
        'controlbar': 'bottom',
        'width': wid,
        'height': '22',
        'author': 'Infosys Limited',
        'abouttext': 'Infosys Limited',
        'aboutlink': 'http://www.infosys.com',
        'plugins': {
            '/richmedia/players/viral-2h.swf': { onpause: 'false', oncomplete: 'false', allowmenu: 'false', functions: 'embed' }
        }
    });
}